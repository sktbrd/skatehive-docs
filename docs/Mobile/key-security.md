---
sidebar_position: 5
---

# Key Security Guide

Understanding your HIVE keys — what each one does, which to use where, and what to do if one is compromised.

---

## The four HIVE keys

Every HIVE account has four key pairs, each with a different level of access. Think of them as a hierarchy — the higher up, the more powerful and the more carefully it should be guarded.

| Key | What it controls | Use in the app |
|---|---|---|
| **Owner Key** | Full account control, can replace all other keys | Never — keep offline |
| **Active Key** | Fund transfers, staking, voting for witnesses | Web app only |
| **Posting Key** | Posts, votes, comments, follows | ✅ This is what the app uses |
| **Memo Key** | Encrypting/decrypting transfer memos | Not needed for the app |

**Rule of thumb:** use the least powerful key that gets the job done. The Posting Key is all you need for Skatehive.

---

## The Master Password

The master password is not a key — it's a seed used to derive all four keys. It grants complete access to your account.

- **Never enter it in any app**, including Skatehive
- Store it offline — written on paper, in a safe, or in an encrypted password manager
- If someone gets your master password, they control everything including your funds

---

## What the Skatehive app stores

When you log in, the app stores only your **Posting Key** — encrypted in the device's hardware-backed keychain (iOS Keychain / Android Keystore). It is:

- Never sent to any server
- Never synced to the cloud
- Only accessible via biometric authentication or your PIN
- Isolated from other apps on the device

---

## What each key compromise means

### Posting Key leaked

An attacker can post, vote, comment, and follow on your behalf — but **cannot move funds**.

**What to do:**
1. Go to [wallet.hive.io](https://wallet.hive.io) and log in with your Active Key or master password
2. Go to **Permissions → Posting → Update**
3. Generate a new posting key and save it
4. Log out of the Skatehive app and log back in with the new key

### Active Key leaked

An attacker can transfer your HIVE and HBD, power down HP, and vote for witnesses.

**What to do — act fast:**
1. Log in to [wallet.hive.io](https://wallet.hive.io) with your **Owner Key or master password**
2. Go to **Permissions → Active → Update** and rotate the key immediately
3. Check your transaction history for unauthorized transfers
4. If funds were moved, they are likely unrecoverable — HIVE transactions are irreversible

### Owner Key or Master Password leaked

Full account takeover is possible. The attacker can replace all keys and lock you out.

**What to do — immediately:**
1. Go to [wallet.hive.io](https://wallet.hive.io) and try to log in with the Owner Key
2. Replace all keys (Owner, Active, Posting, Memo) as fast as possible
3. If already locked out, use the [HIVE account recovery process](https://wallet.hive.io/recover_account_step_1) — this requires a recovery account set up in advance
4. Report in [Discord #help](https://discord.gg/skatehive)

---

## Setting up a recovery account

A recovery account is a trusted HIVE account that can help you reclaim your account if your Owner Key is compromised. By default it's set to the account that created yours (often `skatehive` or `anon`).

To change it: go to [wallet.hive.io](https://wallet.hive.io) → **Settings → Recovery Account**.

Set it to an account you control or someone you fully trust. This is the only way to recover a fully compromised account.

---

## Best practices

**Do:**
- Use a unique, strong master password and store it offline
- Enable biometric authentication in the app
- Rotate your posting key periodically if you use it in multiple apps
- Set up a recovery account before you need it

**Don't:**
- Enter your master password or active key in the Skatehive app
- Share any key in Discord, Telegram, or any chat — no legitimate service will ask for it
- Store keys in screenshots, notes apps, or cloud storage unencrypted
- Use the same key across multiple wallets or services

---

## Quick reference

| Situation | Key needed |
|---|---|
| Log in to Skatehive app | Posting Key |
| Send or receive HIVE/HBD | Active Key (web app) |
| Power up / Power down | Active Key (web app) |
| Change account keys | Owner Key or Master Password |
| Recover compromised account | Recovery account + Owner Key |

---

**Lost your keys?** See the [FAQ](./faq.md#i-forgot-my-posting-key-what-do-i-do) for recovery steps.  
**Suspected compromise?** Go to [wallet.hive.io](https://wallet.hive.io) immediately and rotate your keys.
