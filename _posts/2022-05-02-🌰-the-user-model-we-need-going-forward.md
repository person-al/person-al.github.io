---
category: "\U0001F330"
date: 2022-05-02
layout: post
title: "\U0001F330 the user model we need going forward"
---

I've talked about how [🌰 blockchain developers need to keep user privacy top of mind]({% post_url 2021-06-24-🌰-blockchain-developers-need-to-keep-user-privacy-top-of-mind %}). Here's an easy example of a good approach vs a bad approach.

## YouChoose
YouChoose is an extension that displays alternative recommendations to YouTube's algorithm. As they put it:
> This is the technology that allows you to choose to see what youtubers recommend you, confront it with what the Youtube’s algorithm recommend, or hide all the ~~distractions~~ recommendations. All you have to do is download it from your browser’s store.

Because part of their goal is to analyze, estimate, and publicize YouTube's default recommendation algorithm, they allow you to donate data. By allowing them to see what YouTube recommends you, you help them understand YouTube better. But the latest in cryptography allows them to collect data on YouTube without collecting too much about _you_:

> The recommendations are stored in Zero-Knowledge database, which means that every recommendation record is signed with a unique cryptographic token, generated with your private key. Because only you have this private key, only you can claim these records, aggregate them, or delete them. No one else can relink your contributions together. Not even us, or any hypothetical attacker who would breach into the database. [Learn more](https://youchoose.ai/data-donation).

This is the user model we need to see going forward. While in this case blockchain isn't involved, crypto wallets are by definition private key storage systems. This allows any project, blockchain or otherwise, to utilize a user's existing crypto wallet to anonymously sign data like this.

## Mobility Open Blockchain Initiative (MOBI)
According to [Cointelegraph](https://cointelegraph.com/magazine/2021/12/29/introducing-trivergence-transformation-blockchain-ai-iot), "the Mobility Open Blockchain Initiative (MOBI) is a nonprofit alliance of public and private organizations working to make transportation more efficient, affordable, greener, safer and less congested using blockchain, IoT, AI and other related technologies." One of their projects is to make payments more seamless while driving. As they describe it:

> MOBI and its partners are optimizing the blockchain-based system for connected electric vehicles. This way, transactions for tolls, car maintenance and even rest stop snacks can be recorded on the fly and then paid all at once when the vehicle is plugged into a charging station. In a recent analysis, Juergen Reers, Stephen Zoegall, and Pierre-Olivier Desmurs of Accenture predict that transactions like these will become a multi-trillion-dollar global ecosystem that enables new pay-as-you-go mobility services, with blockchain providing the infrastructure for data sharing and security across manufacturers, suppliers and other relevant parties.

There's no mention here of user privacy, which is a huge issue. Our phones already [track our every movement and sell that data to whoever comes knocking](https://www.nytimes.com/interactive/2019/12/19/opinion/location-tracking-cell-phone.html). Adding _purchasing_ data on top of that should not be allowed. Private payments is doable-- [Brave browser](https://support.brave.com/hc/en-us/articles/360021123971-How-do-I-tip-websites-and-Content-Creators-in-Brave-Rewards-) already allows you to tip content creators without Brave _or_ the content creator knowing who the tip came from. But there's no mention of that approach in this piece.

The user model we need in the future is the former, not the latter. The current default in tech is to store and use all the user data you can. Consumers have put up with that for ages, but the conversation is slowly turning. As we continue to build and buy, we should be looking for models that preserve our privacy to the best of their ability.

**Info**:
- **Related to:**
	- [🌰 blockchain developers need to keep user privacy top of mind]({% post_url 2021-06-24-🌰-blockchain-developers-need-to-keep-user-privacy-top-of-mind %})