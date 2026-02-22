---
sidebar_position: 4
icon: gift
---

# Airdrop System

The Skatehive Airdrop System lets community members distribute tokens to other users based on leaderboard data. It supports both Hive and Ethereum tokens.

---

## 🎁 Overview

Any connected user can:
1. Select recipients from the leaderboard
2. Choose a token to distribute
3. Configure distribution settings
4. Execute the airdrop

The modal guides you through a 5-step process from token selection to confirmation.

---

## 💰 Supported Tokens

### Base Network (ERC-20)
- **HIGHER** - Default ERC-20 token
- **USDC** - Stablecoin

### Hive Blockchain
- **HIVE** - Native Hive token
- **HBD** - Hive Backed Dollars (stablecoin)

> The available tokens depend on which wallets you have connected (Hive, Ethereum, or both).

---

## 📋 5-Step Workflow

### Step 1: Token Selection

Choose which token to airdrop:
- View your connected wallet(s)
- Select from available tokens based on your connections
- See token information (network, symbol)

### Step 2: Configuration

Set up the airdrop parameters:

| Setting | Description |
|---------|-------------|
| **Sort By** | How to rank recipients (points, HP, NFTs, etc.) |
| **Limit** | Number of recipients (top N users) |
| **Total Amount** | Total tokens to distribute |
| **Include SkateHive** | Whether to include the official account |
| **Weighted Distribution** | Split based on user scores vs equal split |
| **Custom Message** | Optional message for the airdrop |

### Step 3: Preview

Review the distribution before executing:
- List of recipients with their shares
- Amount each user will receive
- Total cost including gas fees (for ERC-20)

### Step 4: Announcement Preview

Configure the community announcement:
- Preview the post that will be created
- Optionally include a network visualization screenshot
- Edit the message if needed

### Step 5: Confirmation

Execute the airdrop:
- Approve token spending (ERC-20 only)
- Sign and broadcast transactions
- Monitor progress in real-time
- See completion status

---

## ⚖️ Distribution Methods

### Equal Distribution

Each recipient gets the same amount:
```
amount_per_user = total_amount / number_of_recipients
```

### Weighted Distribution

Recipients get proportional shares based on their scores:
```
user_share = (user_score / total_score) × total_amount
```

Higher-ranked users receive more tokens.

---

## 🔗 Technical Details

### ERC-20 Airdrops (Base Network)

Uses a bulk transfer contract for efficiency:
- Contract: `0x8bD8F0D46c84feCBFbF270bac4Ad28bFA2c78F05`
- Requires token approval before transfer
- Single transaction for multiple recipients
- Gas fees paid in ETH on Base

### Hive Airdrops

Uses direct Hive transfers via Aioha:
- Transfers sent sequentially
- Memo includes airdrop information
- No gas fees (resource credits used)

---

## 📊 Recipient Selection

Recipients are selected from the leaderboard based on:

### Sort Options

| Option | Description |
|--------|-------------|
| `points` | Overall leaderboard score |
| `hp_balance` | Hive Power holdings |
| `skatehive_nft_balance` | NFT count |
| `gnars_votes` | Gnars voting power |
| `hbd_savings_balance` | HBD in savings |
| `post_count` | Activity score |

### Filters

- Minimum ETH wallet requirement (for ERC-20)
- Exclude skatehive account (optional)
- Top N users only

---

## 📣 Announcement

After executing, an announcement post is created:
- Posted to Skatehive community on Hive
- Lists recipients and amounts
- Includes optional message
- Can include network visualization

---

## 💡 Tips

1. **Check balances first** - Ensure you have enough tokens
2. **Start small** - Test with a small amount first
3. **Use weighted for fairness** - Rewards top contributors proportionally
4. **Add a message** - Tell recipients why they're receiving tokens
5. **Watch gas fees** - ERC-20 airdrops require ETH for gas

---

## 🔐 Requirements

### For ERC-20 Airdrops
- Connected Ethereum wallet (wagmi)
- Token balance on Base network
- ETH for gas fees

### For Hive Airdrops
- Connected Hive account (Aioha)
- HIVE or HBD balance
- Sufficient resource credits

---

**Reward your community with airdrops! 🎁🛹**
