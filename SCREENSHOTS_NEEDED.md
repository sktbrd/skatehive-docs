# Screenshots Needed for Documentation

This document lists all screenshots that need to be captured and uploaded to complete the new user guides.

---

## 📸 Screenshot List

### 1. Create Account Flow (`create-account.md`)

**Line 20:** Homepage with Sign Up button highlighted
```
<!-- TODO: Add screenshot of homepage with Sign Up button highlighted -->
```
**Capture:** skatehive.app homepage, highlight "Sign Up" button

**Line 35:** Sign-up form
```
<!-- TODO: Add screenshot of sign-up form -->
```
**Capture:** Sign-up modal/page showing email, display name, and username fields

**Line 43:** Magic link email
```
<!-- TODO: Add screenshot of magic link email -->
```
**Capture:** Email inbox showing "Your Skatehive login link" email

**Line 75:** Connect Hive flow
```
<!-- TODO: Add screenshot of Connect Hive flow -->
```
**Capture:** Settings → Account → "Connect Hive" button and flow

**Line 84:** Connect ETH flow
```
<!-- TODO: Add screenshot of Connect ETH flow -->
```
**Capture:** Settings → Account → "Connect Wallet" button and MetaMask popup

---

### 2. How to Login (`how-to-login.md`)

**Line 16:** Homepage with Log In button
```
<!-- TODO: Add screenshot of homepage with Log In button -->
```
**Capture:** skatehive.app homepage, highlight "Log In" button

**Line 21:** Email login form
```
<!-- TODO: Add screenshot of email login form -->
```
**Capture:** Login modal showing email input field

**Line 27:** Magic link email
```
<!-- TODO: Add screenshot of magic link email -->
```
**Capture:** Same as create-account.md line 43

**Line 80:** Wallet selection
```
<!-- TODO: Add screenshot of wallet selection -->
```
**Capture:** Wallet selection screen (MetaMask, Rainbow, WalletConnect options)

**Line 104:** Signature request
```
<!-- TODO: Add screenshot of signature request -->
```
**Capture:** MetaMask signature request popup

**Line 119:** Farcaster QR code
```
<!-- TODO: Add screenshot of Farcaster QR code -->
```
**Capture:** Farcaster login QR code screen

---

### 3. Sponsorship (`sponsorship.md`)

**Line 80:** Request Sponsorship button
```
<!-- TODO: Add screenshot of Request Sponsorship button -->
```
**Capture:** Settings → Account → "Upgrade to Hive Account" → "Request Sponsorship"

**Line 147:** Sponsorship review page
```
<!-- TODO: Add screenshot of sponsorship review page -->
```
**Capture:** Sponsorship request details page (requestor info, cost display)

**Line 166:** Payment options
```
<!-- TODO: Add screenshot of payment options -->
```
**Capture:** Sponsorship payment options (3 HIVE transfer vs RC delegation)

---

### 4. Invite Friends (`invite-friends.md`)

**Line 51:** Invite page with QR code
```
<!-- TODO: Add screenshot of invite page with QR code -->
```
**Capture:** Settings → Invite showing referral link and QR code

**Line 69:** Email invite form
```
<!-- TODO: Add screenshot of email invite form -->
```
**Capture:** Settings → Invite → "Invite by Email" form

**Line 142:** QR code on board/sticker example
```
<!-- TODO: Add example of QR code on board/sticker -->
```
**Capture:** Mock-up or real photo of QR code sticker on skateboard

---

## 🛠️ How to Capture & Upload

### Option 1: Manual Screenshots

1. Open skatehive.app in browser
2. Navigate to each screen
3. Take screenshot (Cmd+Shift+4 on Mac)
4. Upload to IPFS using skill:

```bash
cd ~/.openclaw/workspace-skate-dev
node skills/ipfs-upload/upload.js /path/to/screenshot.png skate-dev
```

5. Replace `<!-- TODO: ... -->` with:
```markdown
![Description](https://ipfs.skatehive.app/ipfs/HASH?filename=image.png)
```

### Option 2: Playwright Script (when browser tool working)

```bash
cd /tmp
node capture-skatehive-screenshots.js
# Uploads automatically to IPFS
# Updates docs with URLs
```

---

## 📋 Progress Tracker

- [ ] create-account.md (5 screenshots needed)
- [ ] how-to-login.md (6 screenshots needed)
- [ ] sponsorship.md (3 screenshots needed)
- [ ] invite-friends.md (3 screenshots needed)

**Total:** 17 screenshots needed

---

## 🎨 Screenshot Guidelines

**Resolution:** 1920x1080 @ 2x (Retina)
**Format:** PNG (lossless)
**Compression:** Optimize with ImageOptim before upload
**Highlights:** Use red circles/arrows to highlight important UI elements
**Privacy:** Blur any personal info (emails, usernames if not example data)

---

Last updated: 2026-02-22
