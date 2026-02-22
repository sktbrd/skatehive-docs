---
title: Fork Skatehive
sidebar_position: 1
description: "Fork Skatehive open-source code to create your own skateboard community, skateshop frontend, or local crew website. Complete guide to cloning, customizing, and deploying Skatehive technology."
---
---

# Fork Skatehive 3.0 Guide (Beginner Friendly)
This guide explains how to fork the Skatehive 3.0 repository, run it locally, and optionally enable advanced features.

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
Skatehive now uses a centralized configuration system where sensible defaults are committed to version control.
1. Copy the example environment file:
   ```bash
   cp .env.local.example .env.local
   ```
2. Edit `.env.local` and set the **only** required variable for basic operation:
   - `HIVE_POSTING_KEY` – your Hive posting key
All other values (Hive tags, app account, theme, URLs, DAO addresses) are pre-configured in `config/app.config.ts`.
3. Install dependencies and start the dev server:
   ```bash
   pnpm install
   pnpm dev
   ```
## 3. Customizing your fork
The application configuration is centralized in `config/app.config.ts`. This file contains:
- `HIVE_CONFIG` – community tags, search tags, default app account
- `DAO_ADDRESSES` – Base Mainnet DAO contract addresses
- `ETH_ADDRESSES` – known Ethereum addresses (multisig, tokens, NFTs)
- `APP_CONFIG` – app name, domain, theme, IPFS gateway, vote weight
- `EMAIL_DEFAULTS` – SMTP configuration defaults
- `EXTERNAL_SERVICES` – DAO GraphQL, Hive signer, signup signer
To fully customize your fork, edit `config/app.config.ts` with your values:
```typescript
export const HIVE_CONFIG = {
  COMMUNITY_TAG: 'hive-your-community',
  SEARCH_TAG: 'your-tag',
  APP_ACCOUNT: 'your-account',
  // ...
};
export const APP_CONFIG = {
  NAME: 'Your Community',
  DOMAIN: 'your-community.app',
  BASE_URL: 'https://your-community.app',
  DEFAULT_THEME: 'your-theme',
  // ...
};
```
Environment variables in `.env.local` are only needed for:
- Secrets (API keys, posting keys)
- Deployment-specific overrides
- Optional feature flags
## 4. Optional advanced configuration
Add these to `.env.local` as needed:
### Supabase / Database
- `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLIC_KEY`, `SUPABASE_SERVICE_ROLE_KEY`
### Web3 / Ethereum
- `NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID`
- `NEXT_PUBLIC_ALCHEMY_KEY`
- `ETHERSCAN_API_KEY`
### Zora
- `NEXT_PUBLIC_ZORA_API_KEY`
### Farcaster Notifications
- `FARCASTER_HUB_URL`
- `FARCASTER_INIT_PASSWORD`
- `ADMIN_USERS`
### Signup / Signer System
- `SIGNER_URL`, `SIGNER_TOKEN`
- `VIP_PEPPER`, `JWT_SECRET`
### Email / SMTP
- `EMAIL_USER`, `EMAIL_PASS`, `EMAIL_RECOVERYACC`
### IPFS / Pinata
- `PINATA_JWT`
See `.env.local.example` for the complete list of optional variables.
EOF
