---
sidebar_position: 2
---

# Mobile App vs Web App

The Skatehive mobile app and the [web app](https://skatehive.app) share the same HIVE blockchain backend, but serve different use cases. The mobile app is built for quick, on-the-go interaction — posting clips, browsing the feed, checking notifications. The web app is the full platform with every feature.

---

## Feature Comparison

| Feature | Mobile App | Web App |
|---|:---:|:---:|
| **Content** | | |
| Feed (infinite scroll) | ✅ | ✅ |
| Following / Trending tabs | ✅ | ✅ |
| Video feed | ✅ | ✅ |
| Create posts (articles & snaps) | ✅ | ✅ |
| Basic Markdown editor | ✅ | ✅ |
| Full Markdown editor + thumbnail picker | ❌ | ✅ |
| Beneficiaries on posts | ❌ | ✅ |
| Comments & replies | ✅ | ✅ |
| **Social** | | |
| User profiles | ✅ | ✅ |
| Follow / unfollow | ✅ | ✅ |
| Notifications | ✅ | ✅ |
| Push notifications | ❌ (coming soon) | ✅ |
| Chat / direct messages | ❌ | ✅ |
| Edit profile | ❌ | ✅ |
| Video parts / portfolio | ❌ | ✅ |
| Merge accounts | ❌ | ✅ |
| **Wallet & Crypto** | | |
| View HIVE balance & rewards | ✅ | ✅ |
| Send / receive HIVE & HBD | ❌ | ✅ |
| Swap tokens | ❌ | ✅ |
| Stake / Power Up | ❌ | ✅ |
| SkateBank | ❌ | ✅ |
| Portfolio charts | ❌ | ✅ |
| Ethereum / NFTs | ❌ | ✅ |
| **Community** | | |
| Leaderboard | ✅ | ✅ |
| Spot Map | 🌐 (browser only) | ✅ |
| Bounties | ❌ | ✅ |
| DAO / Governance | ❌ | ✅ |
| Auction system | ❌ | ✅ |
| Airdrop system | ❌ | ✅ |
| **Other** | | |
| Magazine / Blog | ❌ | ✅ |
| Witness voting | ❌ | ✅ |
| Zora / Coin trading | ❌ | ✅ |
| Mini-game | ❌ | ✅ |

---

## Why are wallet features limited on mobile?

Apple and Google have strict guidelines that restrict in-app cryptocurrency transactions. To be listed on the App Store and Google Play, the full wallet (send, swap, stake) had to be disabled. You can still view your balance and earnings in the app — to manage funds, use the [web app](https://skatehive.app).

---

## How does the Spot Map work on mobile?

The Spot Map is now accessible on mobile, but only through the browser — open [skatehive.app](https://skatehive.app) in your phone's browser and navigate to the map from there. It is not yet integrated into the native iOS/Android app.

---

## Video upload: same pipeline, both platforms

Both the mobile app and the web app use the same video transcoding infrastructure:

1. Your video is uploaded raw (no client-side compression)
2. A server transcodes it to H.264/MP4 using FFmpeg
3. The result is pinned to IPFS and the link is returned

The system runs three servers in failover order for reliability:

| Priority | Server | Notes |
|---|---|---|
| 1 | Mac Mini M4 | Primary — fastest |
| 2 | Oracle Cloud | Fallback |
| 3 | Raspberry Pi | Last resort — slower (ARM) |

---

## When to use each

**Use the mobile app when you're:**
- Filming and posting clips on the go
- Browsing the feed and voting
- Checking notifications
- Interacting with posts and comments

**Use the web app (or mobile browser) when you need to:**
- Manage your HIVE wallet (send, swap, stake)
- Use the Spot Map (available via browser on mobile)
- Use Bounties, DAO, or governance features
- Edit your profile or advanced post settings
- Access Zora, auctions, or the magazine

---

**Web app:** [skatehive.app](https://skatehive.app)  
**Mobile app:** [iOS App Store](https://apps.apple.com/app/skatehive/id6738086962) · Android (coming soon)
