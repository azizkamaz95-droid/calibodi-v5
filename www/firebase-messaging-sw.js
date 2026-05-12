// CaliBodi — Firebase Messaging Service Worker
// Ce fichier gère les notifications push même app fermée

importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js');

// ⚠️ REMPLACE CES VALEURS par ta config Firebase Console
// Firebase Console → Paramètres projet → Apps → Config
firebase.initializeApp({
  apiKey: "VOTRE_API_KEY",
  authDomain: "VOTRE_PROJECT.firebaseapp.com",
  projectId: "VOTRE_PROJECT_ID",
  storageBucket: "VOTRE_PROJECT.appspot.com",
  messagingSenderId: "VOTRE_SENDER_ID",
  appId: "VOTRE_APP_ID"
});

const messaging = firebase.messaging();

// Notification reçue en background (app fermée)
messaging.onBackgroundMessage(function(payload) {
  console.log('[CaliBodi SW] Notification reçue en background:', payload);

  const notifTitle = payload.notification?.title || '🔥 CaliBodi';
  const notifOptions = {
    body: payload.notification?.body || 'Ton coach Calix t\'attend !',
    icon: '/assets/icon-192.png',
    badge: '/assets/icon-192.png',
    vibrate: [200, 100, 200],
    data: payload.data,
    actions: [
      { action: 'open', title: '▶ Ouvrir CaliBodi' },
      { action: 'dismiss', title: 'Plus tard' }
    ]
  };

  return self.registration.showNotification(notifTitle, notifOptions);
});

// Clic sur notification → ouvrir l'app
self.addEventListener('notificationclick', function(event) {
  event.notification.close();
  if (event.action === 'dismiss') return;

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then(function(clientList) {
      for (var client of clientList) {
        if (client.url.includes('calibodi') && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow('/');
      }
    })
  );
});

// Cache pour fonctionnement offline
const CACHE_NAME = 'calibodi-v7';
const CACHE_URLS = ['/', '/index.html', '/manifest.json'];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(CACHE_URLS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});
