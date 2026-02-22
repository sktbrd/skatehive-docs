---
sidebar_position: 2
description: "Install Skatehive mobile app as Progressive Web App (PWA) on iOS and Android. Step-by-step guide for adding to home screen and accessing mobile features including Farcaster miniapp integration."
---
---

# Mobile App

The Skatehive mobile app brings the community to your pocket. Built with Expo and React Native, it's available for iOS and Android.

***

## 📱 Download

* **iOS**: [App Store](https://apps.apple.com/app/skatehive/id6738086962)
* **Android**: [Google Play](../Get%20Started/\[https:/google]\(https:/play.google.com/store/games) (soon)

***

## 🔐 Authentication

The mobile app uses secure key storage with multiple authentication options:

### Login Methods

1. **Existing Account**: Enter your Hive username and posting key
2. **Biometric/PIN**: After first login, use Face ID, Touch ID, or a PIN
3. **Stored Users**: Switch between previously logged-in accounts
4. **Spectator Mode**: Browse content without logging in

### Security Features

| Feature            | Description                           |
| ------------------ | ------------------------------------- |
| **Secure Storage** | Keys stored in `expo-secure-store`    |
| **Biometric Auth** | Face ID / Touch ID support            |
| **PIN Fallback**   | 4-digit PIN if biometrics unavailable |
| **Key Encryption** | Private keys never exposed            |

### First Login

1. Open the app and tap **Login**
2. Enter your Hive username
3. Enter your **posting key** (not your master password!)
4. Choose to enable biometric/PIN for future logins
5. Your key is securely stored

### Switching Accounts

The app remembers previously logged-in accounts:

1. Tap your profile or logout
2. See list of stored users
3. Tap to switch (biometric/PIN required)
4. Or add a new account

***

## 🎨 Features

### Currently Available

| Feature          | Description                      |
| ---------------- | -------------------------------- |
| **Feed**         | View Skatehive community posts   |
| **Snaps**        | Quick photo posts (like stories) |
| **Video Upload** | Record and upload skate clips    |
| **Profile**      | View your posts and stats        |
| **Voting**       | Upvote content you like          |
| **Comments**     | Reply to posts                   |

### Spectator Mode

Not ready to login? Use Spectator Mode to:

* Browse the feed
* Watch videos
* View profiles
* See the community

You'll need to login to post, vote, or comment.

***

## 🎬 Video Upload

The mobile app connects to Skatehive's transcoding servers:

1. Record or select a video
2. App checks server status via API
3. Video uploaded to active transcoding server
4. Transcoded video stored on IPFS
5. Ready to post!

Videos are automatically compressed and optimized for web playback.

***

## 🔗 Shared Infrastructure

The mobile app uses the same backend as the webapp:

| Service   | Endpoint                      |
| --------- | ----------------------------- |
| **API**   | `api.skatehive.app/api/v1`    |
| **Video** | Dynamic (Oracle/Mac Mini/RPi) |
| **IPFS**  | `ipfs.skatehive.app`          |
| **Hive**  | Multiple RPC nodes            |

Your content appears on both mobile and web!

***

## 📊 Feature Comparison with Webapp

| Feature       | Mobile | Webapp |
| ------------- | ------ | ------ |
| Feed Browsing | ✅      | ✅      |
| Video Upload  | ✅      | ✅      |
| Snaps         | ✅      | ✅      |
| Wallet        | ❌      | ✅      |
| Airdrop       | ❌      | ✅      |
| Leaderboard   | ❌      | ✅      |
| Bounties      | ❌      | ✅      |
| DAO Page      | ❌      | ✅      |
| Spot Map      | ❌      | ✅      |

***

## 🛠️ Tech Stack

* **Framework**: Expo / React Native
* **Navigation**: Expo Router
* **Storage**: expo-secure-store
* **Auth**: Biometric + PIN
* **Video**: Native video recording

***

## 💡 Tips

1. **Use posting key** - Never enter your master password
2. **Enable biometrics** - Faster and more secure logins
3. **Keep app updated** - New features added regularly
4. **Check permissions** - Camera/microphone needed for video
5. **Good connection** - WiFi recommended for video uploads

***

## ❓ FAQ

### Is my key safe?

Yes, keys are stored in the device's secure enclave using `expo-secure-store`. They're encrypted and never leave your device.

### Can I use multiple accounts?

Yes, the app stores multiple accounts. Switch between them from the login screen.

### Why can't I find \[feature]?

Some features are webapp-only for now. Full feature parity is coming!

### Video upload failed?

Check your connection and try again. The app auto-selects the best available server.

### How do I logout?

Go to your profile and tap the logout button. Your account data can be removed or kept for easy re-login.

***

**Get the app and skate with Skatehive anywhere! 📱🛹**
