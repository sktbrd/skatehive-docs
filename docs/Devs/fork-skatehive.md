---
title: Fork Skatehive Guide
sidebar_position: 1
icon: paste
---

# Fork Skatehive 3.0 Guide (Beginner Friendly)

This guide explains how to fork the Skatehive 3.0 repository, run it locally, and optionally enable advanced features. Start with the basic GitHub workflow and minimal installation. If you want a fully featured fork, the optional section covers Farcaster notifications and Wagmi/Ethereum settings.

## 1. Fork the repository on GitHub

1. Sign in to GitHub and visit [`Skatehive/skatehive3.0`](https://github.com/Skatehive/skatehive3.0).
2. Click **Fork** to create your own copy of the repo.
3. Clone your fork:
   ```bash
   git clone https://github.com/<your-username>/skatehive3.0.git
   cd skatehive3.0
   ```
4. (Optional but recommended) keep the original repo as an upstream remote:
   ```bash
   git remote add upstream https://github.com/Skatehive/skatehive3.0.git
   ```
5. Create a feature branch before making changes:
   ```bash
   git checkout -b my-feature
   ```
6. After committing your work, push to your fork and open a pull request.

## 2. Minimal local installation

These steps get the app running with the fewest required environment variables.

1. Copy the example environment file:
   ```bash
   cp .env.local.example .env.local
   ```
2. Edit `.env.local` and set the basic variables:
   - `NEXT_PUBLIC_THEME`
   - `NEXT_PUBLIC_HIVE_COMMUNITY_TAG`
   - `NEXT_PUBLIC_HIVE_SEARCH_TAG`
   - `NEXT_PUBLIC_HIVE_USER`
   - `NEXT_PUBLIC_BASE_URL`
   - `HIVE_POSTING_KEY`
3. Install dependencies and start the dev server:
   ```bash
   pnpm install
   pnpm dev
   ```

## 3. Optional advanced configuration

Expand your fork with additional integrations. All settings below live in `.env.local`.

### Wagmi & Ethereum

Provide Wagmi and on-chain connectivity by setting:

- `NEXT_PUBLIC_WC_PROJECT_ID`
- `NEXT_PUBLIC_ALCHEMY_KEY`
- `ETHERSCAN_API_KEY`

### Builder Dao Setup 

- `NEXT_PUBLIC_TOKEN`
- `NEXT_PUBLIC_METADATA`
- `NEXT_PUBLIC_AUCTION`
- `NEXT_PUBLIC_TREASURY`
- `NEXT_PUBLIC_GOVERNOR`

Check `.env.local.example` for additional variables such as Supabase or IPFS. Configure them as needed to match the features you want in your fork.
