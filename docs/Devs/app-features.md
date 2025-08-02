---
title: App Features
sidebar_position: 2
---

# Skatehive 3.0 Application Overview

Skatehive 3.0 is a comprehensive community platform for skaters, built with Next.js and Chakra UI. The application enables users to publish content to the Hive blockchain while seamlessly integrating with Farcaster and Ethereum ecosystems. This overview showcases the key features and functionality available in the platform.

## Posting Composer

The posting composer allows users to create rich content using Markdown syntax, upload multimedia files, and publish directly to the Hive blockchain. The component features real-time preview capabilities and handles image/GIF uploads with integrated media processing hooks.

![Image](https://ipfs.skatehive.app/ipfs/QmbMT47u9nd7zyNYWUCR5hHe1AG6k49xGrPjQcv4mqDr3u)

## Skate Spot Map

An interactive map displays community-submitted skate spots through Snaps integration. The map uses dynamic loading to maintain optimal page performance until users access the feature. _Note: Current implementation requires manual input from web-gnar to transfer Snaps submissions to Google Maps - community contributions welcome._

![Image](https://ipfs.skatehive.app/ipfs/QmcigkjTTHjm2PXHLzRCAFLBXbjdFyKgd9XVS9yMqQDzdj)

## Bounties

The bounty system gamifies trick challenges where users submit video clips to earn community rewards. Submitting a bounty creates a Snap, while claiming bounties works through upvoting mechanisms. The bounty creator triggers payments when challenges end, automatically generating winner announcements.

![Image](https://ipfs.skatehive.app/ipfs/QmZgF8eKLmtkCDLVRP9Tey9CLjhsWX8gG4fU6ms285QfjK)

## Magazine Mode

Magazine mode transforms community posts into an elegant flipbook-style presentation, highlighting trending content within the Skatehive ecosystem for an immersive reading experience.

![Image](https://ipfs.skatehive.app/ipfs/QmQSiX4dBw9mA4uB8FFemMcLauKfJYg5pS2SU1ND2u4kN1)

## Leaderboard

The leaderboard ranks SkateHive users based on engagement, posting, Hive Power, NFT holdings, treasure donations, witness voting etc.

![Image](https://ipfs.skatehive.app/ipfs/QmekeXkQzMhz6io69k3tpmGN1KcXPv6hgJcYM7aJ83KY7y)

## Invite System

Authenticated users can invite friends by creating new Hive accounts through email invitations. The system constructs and broadcasts the required Hive operations using Keychain integration for secure account creation.

![Image](https://ipfs.skatehive.app/ipfs/QmXWnFG2EpEXpVLtLRYSnPPq5LLgDDoeJvLLmy6VwDnXhR)

## Airdrop

Any user can create airdrops with Hive tokens or whitelisted ERC20 tokens to support or encourage user behavior by filtering the airdrops by leaderboard category.

![Image](https://ipfs.skatehive.app/ipfs/Qma3ViucPUGTtoYQXBbC2y6cBfzHUp1rSvY66MjRy31Jxk)

## Settings and Theme Selection

The platform offers customization through multiple theme options. Creating custom Skatehive themes is straightforward, and while some themes may have minor quirks, they all provide unique visual experiences. Community contributions for new themes are encouraged!

![Image](https://ipfs.skatehive.app/ipfs/QmcZQSbz1ufccTatNk28eZ1W5RE88cYtfBLcB6Mx8hAsac)

## Fast Reply Notification System

The notification page features an integrated SnapComposer for quick replies directly from notifications. This functionality extends to the Farcaster miniapp, enabling seamless communication across platforms.

![Image](https://ipfs.skatehive.app/ipfs/QmS9rJCC8C2HTid4KsXEA8fd1U4TxqEcvGXbUDWjz8phaw)

## Buy Hive Account with ETH

Our OnchainKit-powered webapp (compatible as a Farcaster miniapp) enables users to purchase Hive accounts using ETH or USDC on Base network. All proceeds are directed to the skatehive.eth wallet to support platform development.

![Image](https://ipfs.skatehive.app/ipfs/QmZdaFxbfVCWYUwjHZeiiWtnqHf7ZBZxcARQ7ok3cHmJSy)

## Multichain Wallet

The [`/wallet`](https://skatehive.app/wallet) page provides a unified dashboard for managing balances across Hive, Ethereum, and Farcaster wallets. The SkateBank section offers advanced features including HBD savings, token staking, and Pix integration, creating a comprehensive financial management hub within the application.

![Image](https://ipfs.skatehive.app/ipfs/QmcfDJLwJ25LuPqGt3JvCxabdyhW7rMGtSMbZBPL7tjne2)

## Farcaster Notifications

The platform bridges Hive blockchain events to Farcaster miniapp users through push notifications. Users first add the miniapp in Farcaster to register in our PostgreSQL database via webhook, then visit [`/settings`](https://skatehive.app/settings) to link their Hive account with Farcaster and enable cross-platform mobile notifications.

![Image](https://ipfs.skatehive.app/ipfs/QmRoSSP8oQQRYKoM56r8EpR2qaX7UybTTv87SFpFTHK7gw)

## Auction Platform

As a [Builder DAO](https://docs.nouns.build/), Skatehive operates an [`/auction`](https://skatehive.app/auction) marketplace that fetches auctions from Nouns Builder contracts. The platform includes Farcaster frame metadata, enabling users to collect digital art directly through Farcaster frames for seamless NFT interactions.

![Image](https://ipfs.skatehive.app/ipfs/QmXxhcDdcMewU7MBACAv3WHhaWGGFjrrngt5gaLs3Ff8jt)

## Miniapp Integration

Skatehive functions as a native Farcaster miniapp with intelligent client detection and automatic user authentication. The miniapp components handle seamless account linking without requiring additional sign-in processes, sending welcome notifications upon successful linking.

![Skatehive-miniapp](https://ipfs.skatehive.app/ipfs/QmWof7MSt6KRMM8MbS666VqcJwS4YzzDG3TJSkdCPjmknU)

## Media Upload Infrastructure

The platform utilizes a hybrid approach for media hosting: Hive Images service for standard uploads, and our dedicated IPFS endpoint (ipfs.skatehive.app) for magazine posts and videos. Our Pinata Basic plan ($20/month) ensures optimal video loading performance but public gateways will work as well. Future plans include reintegrating 3Speak functionality as previously implemented.

![Image](https://ipfs.skatehive.app/ipfs/QmP3Vfq8aWadEKj4xQJwj2fJc2azrZdXD2DxuFM8HpMDco)

## GIF Creation Tool

The integrated GIF maker allows users to upload videos and create custom GIFs with up to 30 seconds duration.

![gif-maker](https://ipfs.skatehive.app/ipfs/QmS3J89iM3xKfQTmaSKZPhBBc8uyEdUFGKkxuAGSwSPHso)

## Zora Integration

Ethereum-connected users can mint Zora coins on Base network and promote Hive posts to Zora collectibles. This feature bridges traditional social content with NFT monetization. For detailed implementation information, refer to the dedicated Zora integration documentation.

![Image](https://ipfs.skatehive.app/ipfs/QmUW2uCjYFE5VsfsW7qM8CpDdF2Nfvwv8P2ZmVmuUgtUb9)

## Ethereum Features

If a user is connected solely with their Ethereum wallet and does not have a Hive account, the SnapComposer adapts to display Ethereum-specific actions. This allows users to interact with the platform using their Ethereum identity, providing relevant features and options available on the Ethereum network.

![Image](https://ipfs.skatehive.app/ipfs/QmUsht6Da3h2kFRmc4PfuvDnSzXQoCnoLBkdKEem9FeeEm)

---
