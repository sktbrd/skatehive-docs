---
title: App Features
sidebar_position: 2
---

# Skatehive 3.0 Application Overview

Skatehive 3.0 is a community hub for skaters built with Next.js and Chakra UI. It allows users to publish content to the Hive blockchain and connect with Farcaster and Ethereum ecosystems. Below is a tour of the major features found in the repository.

## Posting Composer

Users can create posts with Markdown, upload media, and publish directly to Hive. The composer component handles image and GIF uploads through hooks and displays previews before publishing.

![Image](https://ipfs.skatehive.app/ipfs/QmbMT47u9nd7zyNYWUCR5hHe1AG6k49xGrPjQcv4mqDr3u)

## Skate Spot Map

A dedicated map shows skate spots submitted by the community through Snaps. It uses a dynamically loaded map component so the page stays lightweight until the map is viewed. **Current implementation still relies on web-gnar manually inputing the snaps subsmissions into google maps, help is appreciated here**

![Image](https://ipfs.skatehive.app/ipfs/QmcigkjTTHjm2PXHLzRCAFLBXbjdFyKgd9XVS9yMqQDzdj)

## Bounties

Bounties are trick challenges where users can submit clips and earn community rewards. Submmiting a bounty is actually creating a Snap, claiming a bounty is actually upvoting it, the list of claimers is the list of upvoters. Bounty creators triggers the payment after bounty ends and an auto winner comment is created

![Image](https://ipfs.skatehive.app/ipfs/QmZgF8eKLmtkCDLVRP9Tey9CLjhsWX8gG4fU6ms285QfjK)

## Leaderboard

The leaderboard ranks Hive users based on engagement. Frame metadata is provided so Farcaster users can open the leaderboard from a frame.

![Image](https://ipfs.skatehive.app/ipfs/QmekeXkQzMhz6io69k3tpmGN1KcXPv6hgJcYM7aJ83KY7y)

## Magazine Mode

Magazine mode presents community posts in flipbook style and features the trending posts in Skatehive

![Image](https://ipfs.skatehive.app/ipfs/QmQSiX4dBw9mA4uB8FFemMcLauKfJYg5pS2SU1ND2u4kN1)

## Invite System

Logged-in users can invite friends by creating new Hive accounts for them via email. The invite page constructs and broadcasts the necessary Hive operations using Keychain.

![Image](https://ipfs.skatehive.app/ipfs/QmXWnFG2EpEXpVLtLRYSnPPq5LLgDDoeJvLLmy6VwDnXhR)

## Buy Hive Account with ETH

We have an onchainkit webapp (also a farcaster mini app) that allows the user to buy himself a hive account with ETH or USDC on base. All proceeds goes to skatehive.eth wallet

## Farcaster Notifications

The project bridges Hive events to Farcaster miniapp users. Currently the user has to Add the miniapp in Farcaster so he is added to the postgres database through our webhook, after that the user needs to go to [`/settings`](https://skatehive.app/settings) to link its hive account to his farcaster account

![Image](https://ipfs.skatehive.app/ipfs/QmRoSSP8oQQRYKoM56r8EpR2qaX7UybTTv87SFpFTHK7gw)

## Auction Page

Skatehive operates as a Builder DAO and exposes an [`/auction`](https://skatehive.app/auction) route. This page fetches auctions from Nouns Builder contracts and presents them with Farcaster frame metadata so users can collect art directly from a Farcaster frame.

![Image](https://ipfs.skatehive.app/ipfs/QmXxhcDdcMewU7MBACAv3WHhaWGGFjrrngt5gaLs3Ff8jt)

## Miniapp Integration

Skatehive doubles as a Farcaster miniapp. It detects when loaded inside the Farcaster client and automatically authenticates the user. Miniapp components handle account linking without additional sign-in, and a welcome notification is sent when linking succeeds.

## Security Model

Admin privileges are enforced on the server. Usernames with admin access are supplied through environment variables, and all sensitive API endpoints verify these privileges before proceeding. Client-side checks are only for convenience and do not grant access on their own.

---

This document summarizes the main features of Skatehive 3.0. For deeper implementation details, see the developer overview and the other documentation files in this folder.
