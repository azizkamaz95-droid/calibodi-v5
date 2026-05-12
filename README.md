# 🔥 CaliBodi v7

> **Ton corps change chaque jour. Ton coaching aussi.**
> Coach IA · Entraînement corps · Nutrition CIQUAL · Hydratation · Progression

---

## 📱 Télécharger l'APK

👉 **[Releases](../../releases)** → `app-debug.apk` → Installer

**Installation Android :**
1. Télécharge l'APK
2. Paramètres → Sécurité → **Autoriser les sources inconnues**
3. Ouvre le fichier → Installer

---

## 🤖 Build APK automatique

L'APK se build **automatiquement** à chaque push sur `main` (~8 min).
**Zéro installation** sur ta machine.

**Modifier l'app sans rien installer :**
1. Clique sur `www/index.html` sur GitHub
2. Icône ✏️ → modifier
3. **Commit changes** → build automatique → APK dans Releases ✅

---

## 🌐 Déploiement Netlify (version web)

1. Va sur [netlify.com](https://netlify.com)
2. **New site → Import from Git → GitHub**
3. Sélectionne ce repo
4. Netlify détecte `netlify.toml` → déploie automatiquement

---

## 🔔 Configurer Firebase (notifications)

### 1. Créer un projet Firebase
- [console.firebase.google.com](https://console.firebase.google.com)
- Nouveau projet → Ajouter une app Web

### 2. Activer Cloud Messaging
- Firebase Console → Cloud Messaging → Activer

### 3. Copier la config
Dans `www/index.html`, remplace dans la section Firebase :
```javascript
const firebaseConfig = {
  apiKey: "TA_API_KEY",
  authDomain: "TON_PROJECT.firebaseapp.com",
  projectId: "TON_PROJECT_ID",
  ...
};
```

Dans `www/firebase-messaging-sw.js`, même chose.

### 4. Types de notifications configurables
- 💧 Rappels eau (toutes les 2h)
- 💪 Rappel séance (heure choisie)
- 🔥 Streak en danger (23h si pas fait)
- 🌙 Routine soir (21h30)
- 🎁 Coffre mystère disponible (J7)

---

## 🎬 Ajouter les vidéos exercices

Place tes 27 fichiers MP4 dans `www/assets/videos/` :

```
www/assets/videos/
├── squat.mp4
├── pushup.mp4
├── plank.mp4
└── ... (voir www/assets/videos/README.md)
```

**Format recommandé :** MP4 carré 360×360px, muet, < 5 MB/vidéo
**Si absent :** fallback automatique sur l'emoji de l'exercice ✅

---

## ✨ Fonctionnalités v7

### 🧠 Moteur d'intelligence
- **Score Momentum 0-100** — sommeil (30%) · nutrition (30%) · séance (25%) · eau (15%)
- **8 modes journée auto** — Performance 🔥 · Équilibre ⚡ · Récupération 🌱 · Recharge 💤 · Focus 🧠 · Voyage ✈️ · Fatigue 😴 · Express ⚡
- Tous les modules interconnectés en temps réel

### 🏠 Dashboard
- Anneau de complétion journalier (4 quartiers animés)
- Action du moment contextuelle (change selon l'heure)
- Calix coach IA avec explications intelligentes
- Score momentum avec mode journée
- Streak + barre J1→J7 rétention
- Coffre mystère J7 · Check-in soir

### 💪 Fitness
- **27 exercices poids du corps** avec vidéos MP4
- Moteur de génération séances — jamais 2 identiques
- Adaptation automatique selon score, blessures, fatigue
- Courbe d'intensité visuelle
- Défi hebdomadaire Calix
- **3 modes voyage** : Business · Vacances sport · Détente

### ⚡ Séance
- Lecteur vidéo 360×360 avec fallback emoji
- Timer intelligent avec repos adaptatif
- Feedback difficulté → ajustement reps suivant
- Personal Record détection automatique
- Guidage vocal Calix (Web Speech API)
- Jackpot XP aléatoire (1 séance/5)

### 🥗 Nutrition
- **2 861 aliments CIQUAL** réels
- **100 recettes** avec macros calculées
- Plan repas IA généré par Calix
- Jauges macro gamifiées avec animations
- Analyse Calix par aliment
- Liste de courses auto
- Recette de la semaine avec badge

### 💧 Hydratation
- **Aquarium animé** (poissons qui apparaissent avec l'eau bue)
- Objectif dynamique : poids + météo + séance + sommeil
- Streak hydratation · Badge Sirène 30j
- Analyse couleur urine → ajustement objectif
- Mode canicule · Conseil électrolytes

### 📊 Progrès
- Courbe poids + prédiction date objectif
- Mensurations · Photos avant/après comparaison
- Heatmap activité annuelle
- 18 badges · Classement anonyme
- Récap hebdomadaire · Lettre J30

### 💎 Premium
- 9,99€/mois · 4,99€/mois (annuel) · **49,99€/an** (recommandé)
- 7 jours d'essai gratuit

---

## 📁 Structure projet

```
calibodi-v4/
├── .github/
│   └── workflows/
│       └── build-apk.yml       ← APK auto sur GitHub
├── www/
│   ├── index.html              ← App complète (493 KB)
│   ├── manifest.json           ← PWA config
│   ├── firebase-messaging-sw.js← Notifications FCM
│   └── assets/
│       └── videos/             ← Tes 27 MP4 ici
│           └── README.md
├── android-stubs/              ← Thème Android sombre
├── capacitor.config.json
├── package.json
├── netlify.toml
└── README.md
```

---

## 🆘 Dépannage

| Problème | Solution |
|----------|----------|
| Build GitHub échoue | Onglet Actions → logs rouges |
| APK ne s'installe pas | Paramètres → Sécurité → Sources inconnues |
| Vidéos ne s'affichent pas | Vérifie les noms de fichiers (voir README vidéos) |
| Notifications ne marchent pas | Configure Firebase (voir section ci-dessus) |
| Pas de Release | Vérifie que la branche s'appelle `main` |

---

## 🇫🇷 CaliBodi — Application 100% française
