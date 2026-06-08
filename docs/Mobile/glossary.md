---
sidebar_position: 7
---

# Glossary

Key terms you'll encounter in the Skatehive app and the HIVE ecosystem.

---

## A

**Active Key**
A HIVE private key that controls fund transfers, staking, and witness votes. More powerful than the Posting Key — do not enter it in the Skatehive app.

**Airdrop**
A distribution of free tokens to a group of users, usually based on activity or community membership. Available on the [web app](https://skatehive.app).

**Author Rewards**
The portion of post earnings that goes to the post creator. Paid out 7 days after publishing, split between HP and HBD.

---

## B

**HBD (Hive Backed Dollar)**
A stable token pegged to approximately $1 USD, issued on the HIVE blockchain. Received as part of post payouts.

**Beneficiary**
A split of post rewards that goes to another account. Used to credit collaborators or tip curators. Available on the web app only.

---

## C

**CID (Content Identifier)**
A unique hash that identifies a file stored on IPFS. Every video you upload gets a CID — it's how IPFS locates your content across the network without a central server.

**Curation Rewards**
The portion of post earnings that goes to people who upvoted the post. Voters earn more by voting early on content that later becomes popular.

---

## D

**DHive**
The JavaScript/TypeScript library used by the Skatehive apps to interact with the HIVE blockchain (`@hiveio/dhive`).

**DAO (Decentralized Autonomous Organization)**
A community-governed fund on HIVE where members propose and vote on how to allocate resources. Skatehive uses the HIVE DAO for community funding proposals.

---

## E

**Expo**
The framework used to build the Skatehive mobile app. Expo runs on top of React Native and simplifies iOS/Android development and distribution.

---

## H

**HIVE**
The base cryptocurrency of the HIVE blockchain. Can be liquid (transferable) or staked as HIVE Power.

**HIVE Blockchain**
A delegated proof-of-stake blockchain designed for social media applications. All Skatehive posts, votes, and comments are stored permanently on-chain.

**HP (HIVE Power)**
Staked HIVE. The more HP you hold, the more your upvote is worth and the more curation rewards you earn. Powering down takes 13 weeks.

**HIVE Node / RPC Node**
A server that provides access to the HIVE blockchain API. The app queries multiple nodes (`api.deathwing.me`, `api.hive.blog`, etc.) and falls back automatically if one is unreachable.

---

## I

**IPFS (InterPlanetary File System)**
A decentralized storage network where files are addressed by their content (CID) rather than a server location. All videos uploaded to Skatehive are stored on IPFS via Pinata.

---

## K

**Keychain**
The secure, hardware-backed credential storage on iOS and Android. The Skatehive app stores your Posting Key here — it is encrypted and never leaves the device.

---

## M

**Master Password**
The seed phrase used to derive all four HIVE keys. Grants full account control — never enter it in any app. Store it offline.

**Memo Key**
A HIVE key used to encrypt and decrypt transfer memos. Not used by the Skatehive app.

---

## O

**Owner Key**
The most powerful HIVE key — can replace all other keys and fully control the account. Keep it offline and never enter it in any app.

---

## P

**Payout Window**
The 7-day period after publishing during which a post accumulates upvote rewards. After 7 days, rewards are distributed and the post can no longer earn from votes.

**Pinata**
The IPFS pinning service used by Skatehive. Pinata ensures your content stays available on IPFS by keeping it "pinned" — meaning it won't be garbage-collected by the network.

**Posting Key**
The HIVE private key used for social actions: posting, voting, commenting, and following. This is the only key the Skatehive app needs.

**Power Down**
The process of converting HP back to liquid HIVE. Takes 13 weeks, with equal weekly payments.

**Power Up**
Converting liquid HIVE into HP to increase voting influence and RC.

---

## R

**RC (Resource Credits)**
A measure of how many blockchain actions (posts, votes, comments) you can perform per day. RC regenerates automatically at ~20% per day. New accounts start with very low RC — if actions are failing, check your RC at [hivebuzz.me](https://hivebuzz.me).

**React Native**
The framework underlying the Skatehive mobile app. Allows a single TypeScript codebase to run natively on both iOS and Android.

---

## S

**Snap**
A short-form post format in the Skatehive app — quick photo or video update, simpler than a full article.

**Spectator Mode**
A guest mode in the app that lets you browse the feed and watch videos without logging in. Posting, voting, and commenting require an account.

---

## T

**Tailscale**
The mesh VPN used to connect Skatehive's backend servers (Mac Mini, Raspberry Pi, cloud nodes) securely without exposing ports to the public internet.

**Transcode**
The process of converting a raw video file to a web-optimized format (H.264/MP4). Handled server-side by the Skatehive video transcoder — no compression happens on your device.

---

## U

**Upvote**
A vote on a post or comment. Each upvote uses a portion of your Voting Power and distributes rewards to the author and previous curators.

---

## V

**Voting Power**
A percentage (0–100%) that represents how much weight your next upvote carries. It drains with each vote and regenerates at ~20% per day. Visible on your profile in the app.

---

## W

**Witness**
A node operator who produces blocks on the HIVE blockchain. The top 20 witnesses run the network. HIVE holders vote for witnesses with their HP. Witness voting is available on the web app.
