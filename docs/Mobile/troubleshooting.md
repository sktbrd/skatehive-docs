---
sidebar_position: 4
---

# Troubleshooting

Diagnose and fix the most common issues with the Skatehive mobile app.

---

## How to tell where the problem is

Before diving into specific fixes, identify the source:

| Symptom | Likely cause |
|---|---|
| App crashes or freezes | App bug or device issue |
| Feed loads but actions fail (vote, comment) | Authentication or blockchain issue |
| Everything broken for everyone | HIVE node outage |
| Video stuck in processing | Transcoding server issue |
| Works on WiFi, fails on mobile data | Connection / file size issue |

Check the [Skatehive status page](https://api.skatehive.app/api/status) to see if backend services are healthy before troubleshooting your device.

---

## Login problems

### "Invalid posting key" error

- You're likely entering the **wrong key type**. The app only accepts the **Posting Key** — not the master password, active key, or owner key.
- Go to [wallet.hive.io](https://wallet.hive.io) → Permissions → Posting → copy the private key starting with `5`.

### Login succeeds but I'm immediately logged out

- Your posting key may have been rotated on another device or via the web app.
- Log out fully, then log back in with the current posting key from [wallet.hive.io](https://wallet.hive.io).

### Face ID / Touch ID stopped working

- Check your device settings: iOS → Face ID & Passcode / Android → Security → Fingerprint.
- If biometrics are enabled on the device but not working in the app, go to **Profile → Settings → Security**, disable biometric login, then re-enable it.
- As a fallback, use your 4-digit PIN.

### Biometric prompt never appears

- The app only prompts for biometrics after the first successful manual login. Log in once with your posting key — biometrics will be offered after that.

---

## Feed and content issues

### Feed not loading

1. Pull down to refresh
2. Check your internet connection
3. The active HIVE node may be overloaded — the app retries automatically, but it can take 1–2 minutes
4. Force-close the app and reopen

### Feed loads but some posts are missing

- Posts take 30–60 seconds to propagate across HIVE nodes after publishing
- Make sure posts include the `#skatehive` tag — posts without it don't appear in the community feed

### Comments or votes not going through

This usually means a **Resource Credits (RC)** issue. RC is a HIVE mechanism that limits how many actions you can perform per day. New accounts have very low RC.

**How to check:** Go to [hivebuzz.me](https://hivebuzz.me) and search your username — it shows your current RC level.

**How to fix:**
- Wait — RC regenerates automatically (~20% per day)
- Ask someone with high HP to delegate RC to your account via the web app
- Power up HIVE to increase your RC cap permanently

### My post isn't appearing in my own profile

- Wait 30–60 seconds and refresh your profile
- If it still doesn't appear after 5 minutes, the blockchain transaction may have failed — try posting again

---

## Video upload issues

### Video stuck on "uploading" or "processing"

The transcoding pipeline has three servers in failover order. If the primary server is down or overloaded, the system switches to a backup — this can add several minutes.

**Steps:**
1. Wait at least 15 minutes before assuming it's stuck
2. Keep the app in the foreground — backgrounding the app can interrupt the upload
3. Check your connection — large files need a stable WiFi connection
4. If still stuck after 30 minutes: force-close the app, reopen, and try uploading again

### Upload fails immediately

- File may exceed practical limits — try trimming the clip under 500MB
- Check your internet connection
- Switch from mobile data to WiFi

### Video uploaded but looks bad quality

The transcoder uses H.264 with adaptive quality settings. Very long videos (over 2 min) are encoded at a lower bitrate to keep file sizes manageable. For better quality:
- Keep clips short and focused
- Upload at 1080p — the transcoder will not upscale, so higher source quality always helps

### Video plays fine for me but others say it won't load

IPFS propagation can take a few minutes. The video is pinned via Pinata but may not be cached on all gateways immediately. Ask them to try again after 5–10 minutes.

---

## App crashes and freezes

### App crashes on startup

1. Force-close and reopen
2. Check for an update in the App Store
3. Restart your device
4. Uninstall and reinstall — your keys are stored in the device keychain and survive reinstallation on most devices
5. If it still crashes, report in [Discord #bugs](https://discord.gg/skatehive) with your device model and iOS/Android version

### App freezes while scrolling the feed

- This usually happens with large video files loading on a slow connection
- Switch to WiFi
- Force-close and reopen

### App freezes during video upload

- The upload process is memory-intensive for large files
- Close all other apps to free memory
- If frozen for over 5 minutes, force-close and try again on WiFi

---

## Notification issues

### I'm not receiving notifications

Push notifications are not yet implemented in the native app — check the **Notifications tab** manually to see upvotes, comments, and mentions.

### Notification tab shows nothing

- Pull down to refresh the tab
- Log out and log back in to re-sync your notification feed

---

## Account and security issues

### I lost access to my posting key

1. Go to [wallet.hive.io](https://wallet.hive.io) on another device
2. Log in with your **master password**
3. Go to Permissions → Posting → Show private key

If you also lost your master password, recovery requires the [HIVE account recovery process](https://wallet.hive.io/recover_account_step_1) — this only works if you set up a recovery account in advance.

### I think my account was compromised

Act immediately:

1. Go to [wallet.hive.io](https://wallet.hive.io) from a trusted device
2. Change your **posting key** under Permissions → Posting
3. If funds are at risk, change your **active key** as well
4. Enable 2FA on any email accounts linked to your HIVE identity
5. Report in [Discord #help](https://discord.gg/skatehive)

### I lost my device

Your keys are encrypted in the device keychain — they can't be extracted without your PIN or biometrics. As a precaution:

1. Change your posting key immediately via [wallet.hive.io](https://wallet.hive.io)
2. The old key stored on the lost device becomes invalid

---

## Still stuck?

- **Discord:** [#help channel](https://discord.gg/skatehive) — fastest response
- **GitHub:** [Open an issue](https://github.com/SkateHive/mobileapp/issues) — for reproducible bugs
- Include: device model, OS version, app version, and what you were doing when the issue occurred
