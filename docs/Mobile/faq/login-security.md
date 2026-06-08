---
sidebar_position: 2
---

# Login & Security

### What is a Posting Key and where do I find it?

Your **Posting Key** is a HIVE private key that allows you to post, vote, and comment — but not move funds. It's the only key you need to log in to the Skatehive app.

To find it:
1. Go to [wallet.hive.io](https://wallet.hive.io)
2. Log in with your username and master password
3. Go to **Permissions → Posting**
4. Copy your private posting key

Never use your **Master Password** or **Owner Key** in any app.

---

### Is my private key stored safely?

Yes. The app uses **Expo SecureStore**, which encrypts your keys in the device's hardware-backed keychain (iOS Keychain / Android Keystore). Your keys are:
- Encrypted at rest
- Never sent to any server
- Never synced to the cloud
- Only accessible through biometric or PIN authentication

---

### How do I enable Face ID / Touch ID?

During login, the app will prompt you to enable biometrics after your first successful login with your posting key. If you skipped it, go to **Profile → Settings → Security** and toggle biometric login on.

Make sure biometrics are enabled in your device settings first (iOS: Settings → Face ID & Passcode / Android: Settings → Security → Fingerprint).

---

### Why is the app asking for a PIN?

If biometric authentication fails (e.g., wet fingers, face obscured), the app falls back to a 4-digit PIN you set during account setup. Enter your PIN to unlock.

---

### I forgot my posting key. What do I do?

Your posting key can be recovered or reset from your master password:

1. Go to [wallet.hive.io](https://wallet.hive.io)
2. Log in with your master password
3. Go to **Permissions → Posting → Show private key**

If you also lost your master password, account recovery is only possible through the [HIVE account recovery process](https://wallet.hive.io/recover_account_step_1) — this requires a trusted recovery account set up in advance.

---

### What should I do if I lose my device?

Your keys stay encrypted on the device and cannot be extracted without the PIN or biometrics. Still, take these precautions immediately:

1. Go to [wallet.hive.io](https://wallet.hive.io) from another device
2. Change your posting key under **Permissions → Posting**
3. This invalidates the old key stored on the lost device

---

### Can I log in to multiple accounts?

Yes. The app supports multiple saved accounts:

1. Tap your profile avatar → **Logout**
2. On the login screen, tap **Add Account**
3. Log in with a different username and posting key

To switch between accounts, go to **Profile → Switch Account** and tap the account you want — biometric confirmation is required.
