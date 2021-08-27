---
layout: post
category: 🌱
title: "🌱 a beginner's guide: where to store your crypto"
date: 2021-08-26
tags: crypto
---
Many moons ago, I was asked a seemingly-simple question: 
**What is the best way to store non-ERC20 tokens?**

As anyone who has dabbled in crypto knows, it's not a straightforward answer, not yet anyway. Here's my approach, which I feel applies equally well to _all_ crypto.

<mark>Disclaimer: I cannot 100% vouch for the security of any of these wallets. Do your own research.</mark>

I recommend splitting your tokens between a hardware wallet and a custodial exchange:
- Hardware wallet is more secure, but if I do something unwise or lose my seed phrase, I lose _everything_.
- Custodial exchange (aka not my keys, not my crypto) makes for cheaper transfer fees and much easier transfer in a pinch if I need to buy or sell something. Also, there's customer service I can call if needed. No risk of losing seed phrase.
	- A note on cheaper transfer fees: I've noticed that some of the big exchanges will swallow or subsidize the transfer fee when you're taking tokens off their platform. Worth it for tokens you plan on exchanging frequently.
	- But you need to _really_ trust the exchange. Not all exchanges are worth storing tokens with. We'll get into that later.

**Community-trusted hardware wallets:**
- Ledger
- ~~Trezor~~
	- Kraken claims they were able to hack both the Trezor One and the Trezor Model T in [2020](https://blog.kraken.com/post/3662/kraken-identifies-critical-flaw-in-trezor-hardware-wallets/), but in 2021, Investopedia listed the Trezor Model T as the "[most secure](https://www.investopedia.com/best-bitcoin-wallets-5070283#best-for-security-trezor-model-t)" option. Do your own research here and report back so I can learn too!

**How to pick a custodial exchange:**
- Consider using an exchange _legally registered_ in your country
	- This advice is very location dependent. But if you reside in the US or another country with a robust legal system, using an exchange located in your country may give you more legal recourse options.
	- If it's a random exchange halfway around the world, communication with customer service can be harder, and taking legal action in a worst case scenario may also be harder. (\*cough\* WEX, Voyager, etc.)
	- Frankly, _most_ exchanges aren't worth storing your tokens on long-term. Be very judicious here. I've heard of certain tokens being trapped on Gate.io for months at a time due to a delayed system upgrade and you may remember how Voyager [choked](https://www.trustpilot.com/review/www.investvoyager.com) in 2020. If you want a long-term custodian of your crypto and you're in the US, your best bets are established US exchanges or a hardware wallet, imo.
	- US-based exchanges I know of:
		- Coinbase (FDIC insured on USD, no other claims of insurance, but it's based in the US and very popular, so I know I won't be the only one suing them if something goes wrong.)
		- Gemini (FDIC insured on USD, claims to have insurance on crypto)

**Things to look out for when choosing your wallet:**
- a hardware wallet you trust (or a paper wallet) is the most secure from remote attackers because you can be confident that your private key truly never touches a device that connects to the internet
	- hardware wallets, of course, are a better long-term solution than paper wallets. Paper wallets are one-time use only.
- non-ERC20 projects typically build their own wallets or promote a wallet for use with their token. This is a great first step until you have too many non-ERC20 tokens and need something else
- you want to hold your own keys ("non-custodial")
- reasonable proof that your keys are 100% secure
- it should generate your keys on your device, not in the cloud (ideally not connected to the internet)
- security audits from an independent reputable firm is a plus
- open source is a plus if there are enough users that you feel confident someone would notice any issues
	- Open source is less secure if it means "the code is available to any hacker, but no one is actually checking the code for issues on a regular basis."
