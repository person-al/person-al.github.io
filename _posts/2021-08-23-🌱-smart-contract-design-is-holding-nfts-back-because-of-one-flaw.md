---
layout: post
category: 🌱
title: 🌱 Smart contract design is holding NFTs back because of one flaw
date: 2021-08-23
last_modified_at:
tags: nft
---
Cointelegraph recently wrote an article entitled "[Blockchain tech is holding NFTs back because of these three design flaw[Blockchain tech is holding NFTs back because of these three design flaws](https://cointelegraph.com/news/blockchain-tech-is-holding-nfts-back-because-of-these-three-design-flaws)(https://cointelegraph.com/news/blockchain-tech-is-holding-nfts-back-because-of-these-three-design-flaws)", which almost nails the problem with NFTs, but not quite.

The article argues that the three "blockchain" problems holding NFTs back are:
1. The images aren't stored on the blockchain. Making what you actually own unclear at best, and hackable and lossy at worst.
2. The images are often stored on centralized servers. Again: hackable and lose-able.
3. You can't inherit NFTs by default.

I would argue that this is partially off base. 1 & 2 are basically the same issue. And the third point is....frankly....useless? Not even in the top 10 biggest problems with NFTs, in my opinion.

There's only one design flaw holding NFTs back: **Not everything that *should* be stored on the blockchain is being stored on the blockchain.**

This is clearly visible in two ways. The first is as I outlined in [🌱 NFT best practices necessitate proving data integrity]({% post_url 2021-06-09-🌱-nft-best-practices-necessitate-proving-data-integrity %}). Because images and video are too large and expensive to store on the blockchain, they're stored elsewhere and a link to a file is stored on the blockchain. This, as Cointelegraph noted, allows your NFT to decay the same way [25% of deep links on the New York Times website since 1996 have decaye[Blockchain tech is holding NFTs back because of these three design flaws](https://cointelegraph.com/news/blockchain-tech-is-holding-nfts-back-because-of-these-three-design-flaws)(https://www.theatlantic.com/technology/archive/2021/06/the-internet-is-a-collective-hallucination/619320/). Imagine you link to a Dropbox file and Dropbox shuts down in 30 years. It also allows for [rug pull[Blockchain tech is holding NFTs back because of these three design flaws](https://cointelegraph.com/news/blockchain-tech-is-holding-nfts-back-because-of-these-three-design-flaws)(https://cointelegraph.com/news/opensea-collector-pulls-the-rug-on-nfts-to-highlight-arbitrary-value) and other kinds of hacks.

The second is when you dig deep into the royalty structure of existing NFT marketplaces. Here's a little math problem. Let's say you create an NFT on Rarible and set your royalties to 10%. Tiffany Aching buys the NFT from you, and then transfers it to OpenSea, where she sells it to Nanny Ogg for 3 ETH. How much ETH do you get from that transaction? If you said "[0 ETH because royalties don't work across platform[Blockchain tech is holding NFTs back because of these three design flaws](https://cointelegraph.com/news/blockchain-tech-is-holding-nfts-back-because-of-these-three-design-flaws)(https://gov.rarible.com/t/listed-on-rarible-sold-on-opeansea/6154)", you would be correct.

In web2.0 land, this is a very reasonable expectation. If Rarible has servers and OpenSea has servers of _course_ it would be impossible to share that info across! The problem is that these two companies _don't_ have separate servers. They're using the Ethereum blockchain. This should not only be possible, it should be _easy_. Someone just needs to make a smart contract structure that:
1. stores the royalty amount _directly on the NFT itself_ at mint time
2. stores the creator address _directly on the NFT itself_ at mint time
3. calls an open source transfer function when transferring the NFT that takes in the royalty amount and creator address and sends the right amount to the creator.
And OpenSea and Rarible can inherit from _that_ smart contract in their own contract structure.

It really comes down to this. **Not everything that _should_ be stored on the blockchain is being stored on the blockchain.** And we need to change that.

- **Inspired by:** 
	- [Blockchain tech is holding NFTs back because of these three design flaw[Blockchain tech is holding NFTs back because of these three design flaws](https://cointelegraph.com/news/blockchain-tech-is-holding-nfts-back-because-of-these-three-design-flaws)(https://cointelegraph.com/news/blockchain-tech-is-holding-nfts-back-because-of-these-three-design-flaws)
- **Related to:**
	- [🌱 NFT best practices necessitate proving data integrity]({% post_url 2021-06-09-🌱-nft-best-practices-necessitate-proving-data-integrity %})