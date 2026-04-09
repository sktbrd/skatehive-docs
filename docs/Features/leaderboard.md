---
sidebar_position: 3
icon: trophy
---

# Leaderboard

The Skatehive Leaderboard ranks community members based on their engagement, holdings, and contributions. Data is stored in Supabase and updated regularly.

View it at [skatehive.app/leaderboard](https://skatehive.app/leaderboard)

---

## 🏆 Overview

The leaderboard tracks Skatehive community subscribers and ranks them by **points**. Points are calculated from multiple factors including:

- Hive holdings (HIVE, HP, HBD)
- Ethereum assets (Gnars votes, Skatehive NFTs)
- Activity (posts, snaps)
- Community support (witness votes, donations)

---

## 📊 Data Tracked

Each user on the leaderboard has the following data:

| Field | Description |
|-------|-------------|
| `hive_author` | Hive username |
| `hive_balance` | Liquid HIVE balance |
| `hp_balance` | Hive Power |
| `hbd_balance` | HBD balance |
| `hbd_savings_balance` | HBD in savings (15% APR) |
| `has_voted_in_witness` | Whether user voted for Skatehive witness |
| `eth_address` | Linked Ethereum address |
| `gnars_balance` | Gnars NFT holdings |
| `gnars_votes` | Gnars DAO voting power |
| `skatehive_nft_balance` | Skatehive NFT count |
| `max_voting_power_usd` | User's max vote value in USD |
| `post_count` | Combined posts/snaps score |
| `giveth_donations_usd` | Total donated via Giveth |
| `points` | Calculated ranking score |

---

## 📈 Points Calculation

Points are calculated with the following multipliers and caps:

### Positive Factors

| Factor | Multiplier | Cap |
|--------|------------|-----|
| HIVE Balance | 0.1 | 1,000 HIVE |
| HP Balance | 0.5 | 12,000 HP |
| HBD Savings | 0.2 | 1,000 HBD |
| Gnars Votes | 30 | - |
| Skatehive NFTs | 50 | - |
| Max Voting Power (USD) | 1,000 | - |
| Post Count (activity score) | 0.1 | 3,000 |
| Witness Vote | +1,000 points | - |
| ETH Wallet Linked | +5,000 points | - |
| Giveth Donations | 5 per USD | 1,000 USD max |

### Penalties

| Condition | Penalty |
|-----------|---------|
| No ETH wallet linked | -2,000 |
| Zero HIVE balance | -1,000 |
| Zero HP balance | -5,000 |
| Zero Gnars votes | -300 |
| Zero Skatehive NFTs | -900 |
| Zero HBD savings | -200 |
| Zero post count | -2,000 |
| Inactivity | Up to -100 (days since last post) |

> Minimum points is 0 - users can't have negative scores.

---

## 📡 Data Sources

### Hive Blockchain
- Account balances (HIVE, HP, HBD)
- Vesting shares (for HP calculation)
- Witness votes
- Last post date
- Metadata (for ETH address extraction)

### Ethereum
- Gnars NFT balance and voting power
- Skatehive NFT holdings
- Read via public RPC

### Skatehive API
- `api.skatehive.app/api/v2/activity/posts` - Post activity scores
- `api.skatehive.app/api/v2/activity/snaps` - Snap activity scores

### Giveth
- Donation tracking via Giveth API
- USD values matched to Hive usernames

---

## 🔄 Update Schedule

The leaderboard data is updated in batches:

1. **Full refresh**: All community subscribers processed
2. **Partial refresh**: 100 oldest records updated
3. **Batch size**: 25 users processed in parallel
4. **Community**: `hive-173115` (Skatehive)

After data fetch, points are recalculated for all users.

---

## 🎯 Activity Score

The `post_count` field is actually a combined activity score:

```
combined_score = (post_score × 10) + (snap_score × 3 × capped_ratio)
```

- Posts have higher influence (10x multiplier)
- Snaps have lower influence (3x multiplier)  
- Maximum 50 snaps counted (prevents spam gaming)

---

## 🖥️ API Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET https://api.skatehive.app/api/skatehive` | Fetch leaderboard data |
| `GET https://api.skatehive.app/api/leaderboard` | Trigger data refresh |

---

## 🎨 UI Features

The webapp leaderboard shows:
- **Podium**: Top 3 users with avatars
- **Rankings table**: All users sorted by points
- **User stats**: Click to see detailed breakdown
- **Dynamic OG images**: For social sharing

---

## 🔗 Airdrop Integration

The leaderboard powers the airdrop system:
- Filter users by various criteria
- Sort by points, HP, NFTs, etc.
- Apply weighted distribution based on rankings

See the [Airdrop docs](./airdrop) for more details.

---

**Climb the leaderboard by being active, holding assets, and supporting the community! 🏆🛹**
