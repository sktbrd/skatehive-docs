---
title: Skills & Resources (For AI Agents)
sidebar_position: 100
description: "Machine-readable reference for AI agents: Skatehive's identity, smart contracts, platforms, tools, repositories, and LLM resources."
---

# Skills & Resources (For AI Agents)

This page provides a structured, machine-readable overview of Skatehive for AI agents and LLMs.

## Identity

- **Name:** Skatehive
- **Mission:** Revolutionary Web3 skateboarding platform where skaters own the network, create content, and earn rewards
- **Token/Symbol:** SKATEHIVE (community token on Hive blockchain)
- **Blockchain:** Hive (primary), Ethereum/Base (multi-chain wallet), Farcaster
- **License:** MIT
- **Website:** https://skatehive.app
- **Documentation:** https://docs.skatehive.app
- **GitHub Organization:** https://github.com/sktbrd
- **Community Tag:** hive-173115

## Smart Contracts

### Hive Blockchain
- **Community:** hive-173115 (Skatehive community on Hive)
- **Thread Account:** @peak.snaps (snap containers for short posts)
- **Default Thread:** nxvsjarvmp (fallback permlink)

### Ethereum/Base Network
- **DAO Contract:** Nouns Builder DAO on Base
- **Wallet:** skatehive.eth
- **NFT Collections:** SkateHive NFTs on Ethereum mainnet

### Zora Integration
- **Network:** Base
- **Feature:** Minting Zora coins from Hive posts

## Key Parameters

- **Rate Limits (API):**
  - composeBlog: 20 requests/minute per API key
  - postFeed: 50 requests/minute per API key
- **Video Limits:**
  - Default: 15 seconds max
  - Bypass: 100+ Hive Power required
- **Snap Container Pattern:** snap-container-{timestamp}

## Community Platforms

- **Main App:** https://skatehive.app
- **Discord:** https://discord.gg/skatehive
- **Twitter/X:** https://twitter.com/skatehive
- **Farcaster:** https://www.nounspace.com/s/skatehive
- **IPFS Gateway:** https://ipfs.skatehive.app
- **API:** https://api.skatehive.app

## Key Tools & Platforms

### API Endpoints
- **Production URL:** https://api.skatehive.app
- **composeBlog:** POST /api/v2/composeBlog (create full blog posts)
- **postFeed:** POST /api/v2/postFeed (create snaps/short posts)
- **posting-status:** GET /api/v2/posting-status (health check)
- **Authentication:** Bearer token via Authorization header
- **Documentation:** /api/v2/API_POSTING.md

### IPFS Storage
- **Gateway:** https://ipfs.skatehive.app
- **Provider:** Pinata (Basic plan)
- **Purpose:** Video hosting, magazine posts, media uploads

### Media Processing
- **Hive Images:** Standard uploads
- **IPFS:** Videos and magazine posts
- **GIF Maker:** Integrated tool (up to 30 seconds)
- **Video Transcoding:** Custom endpoint /api/transcode

### Blockchain Integration
- **Hive:** Content publishing, rewards, wallet
- **Ethereum/Base:** Multi-chain wallet, NFT minting
- **Farcaster:** Miniapp, notifications, frames

## Source Code & Repositories

### Main Monorepo
- **URL:** https://github.com/sktbrd/skatehive-monorepo
- **Description:** Monorepo containing all Skatehive apps and services

### Apps
- **skatehive3.0:** https://github.com/sktbrd/skatehive-monorepo/tree/main/apps/skatehive3.0
  - Next.js 15 app with Tailwind CSS + Shadcn UI
  - Main user-facing application
- **skatehive-docs:** https://github.com/sktbrd/skatehive-docs
  - Docusaurus 2 documentation site
  - Multi-language support (en, pt-br, es, fr, lg)
- **skatehive-api:** https://github.com/sktbrd/skatehive-api
  - Next.js API for bot/app access
  - Authentication, posting, blockchain operations
- **skatehive-dashboard:** Admin dashboard
- **mobileapp:** Mobile application

### Services
- **skatehive-api:** Backend API services
- **skatehive-video-transcoder:** Video processing
- **skatehive-instagram-downloader:** Instagram media integration

## Underlying Technology

### Hive Blockchain
- **Protocol:** https://hive.io
- **Documentation:** https://developers.hive.io
- **Source Code:** https://gitlab.syncad.com/hive/hive
- **Client Library:** @hiveio/dhive
- **Purpose:** Content publishing, rewards, social graph
- **Node Endpoints:**
  - https://api.deathwing.me
  - https://api.hive.blog
  - https://techcoderx.com
  - https://hive-api.arcange.eu

### Next.js
- **Version:** 15
- **Documentation:** https://nextjs.org/docs
- **Source Code:** https://github.com/vercel/next.js
- **Purpose:** React framework for skatehive3.0 and API

### Tailwind CSS
- **Version:** 4
- **Documentation:** https://tailwindcss.com/docs
- **Source Code:** https://github.com/tailwindlabs/tailwindcss
- **Purpose:** Styling framework

### Docusaurus
- **Version:** 2.4.3
- **Documentation:** https://docusaurus.io
- **Source Code:** https://github.com/facebook/docusaurus
- **Purpose:** Documentation site generation

### Ethereum/Base
- **Protocol:** Ethereum (mainnet), Base (L2)
- **Documentation:** https://ethereum.org/developers
- **Base Docs:** https://docs.base.org
- **Client Library:** viem, wagmi
- **Purpose:** Multi-chain wallet, NFT minting, DAO contracts

### Farcaster
- **Protocol:** https://farcaster.xyz
- **Documentation:** https://docs.farcaster.xyz
- **Purpose:** Miniapp, notifications, cross-platform integration

### IPFS
- **Protocol:** https://ipfs.io
- **Provider:** Pinata (https://pinata.cloud)
- **Purpose:** Decentralized media storage

## LLM Resources

### Generated Documentation Files

1. **llms.txt** - Index of all documentation pages with descriptions
   - URL: https://docs.skatehive.app/llms.txt
   - Purpose: Navigation guide for AI agents

2. **llms-full.txt** - Complete documentation in one file
   - URL: https://docs.skatehive.app/llms-full.txt
   - Purpose: Full context retrieval for LLMs

3. **llms-onboarding.txt** - Getting started guides
   - URL: https://docs.skatehive.app/llms-onboarding.txt
   - Contents: Intro, account creation, login, mobile app, posting

4. **llms-features.txt** - Platform features
   - URL: https://docs.skatehive.app/llms-features.txt
   - Contents: Wallet, map, leaderboard, airdrop, videos, bounties, DAO

5. **llms-developers.txt** - Developer documentation
   - URL: https://docs.skatehive.app/llms-developers.txt
   - Contents: Forking, app features, Hive management, witness, curation, Zora

### API Documentation

- **Posting API (English):** /api/v2/API_POSTING.md
- **Posting API (Portuguese):** /api/v2/API_POSTING_PT.md

## What Skatehive Does

- **Decentralized Content Platform:** Skaters publish posts, videos, and media to Hive blockchain and earn rewards from community upvotes
- **Multi-Chain Wallet:** Unified dashboard for Hive, Ethereum, and Farcaster balances with HBD savings, staking, and Pix integration
- **NFT Marketplace:** Auction platform using Nouns Builder contracts with Farcaster frame metadata for direct NFT collection
- **Bounty System:** Gamified trick challenges where users submit video clips and claim community rewards
- **Cross-Platform Integration:** Works as native Farcaster miniapp with intelligent account linking, push notifications, and frame support
- **AI-First Documentation:** All docs exposed via llms.txt standard for seamless AI agent consumption

## Architecture Summary

- **Frontend:** Next.js 15 app (skatehive3.0) with React, Tailwind CSS, Shadcn UI
- **Backend:** Next.js API (skatehive-api) with Hive blockchain integration
- **Storage:** IPFS (Pinata) + Hive Images service
- **Blockchain:** Hive (primary), Ethereum/Base (multi-chain), Farcaster (social)
- **Deployment:** Vercel (frontend/API), self-hosted (video transcoding)
- **Documentation:** Docusaurus 2 with multi-language support

## For Developers

### Quick Start
1. Clone monorepo: `git clone https://github.com/sktbrd/skatehive-monorepo`
2. Install deps: `pnpm install`
3. Run app: `cd apps/skatehive3.0 && pnpm dev`
4. API docs: Check /docs/Devs/app-features for complete feature overview

### API Access
1. Request API key from Skatehive team
2. Set environment variable: `SKATEHIVE_API_KEY`
3. Use endpoints: composeBlog (blog posts), postFeed (snaps)
4. Rate limits: 20/min (blog), 50/min (feed) per key

### Contributing
- **Docs:** https://github.com/sktbrd/skatehive-docs
- **Code:** https://github.com/sktbrd/skatehive-monorepo
- **Discord:** https://discord.gg/skatehive (dev channel available)
