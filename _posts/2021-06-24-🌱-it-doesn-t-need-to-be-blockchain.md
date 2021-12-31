---
category: "\U0001F331"
date: 2021-06-24
layout: post
status: published
tags: blockchain
title: "\U0001F331 it doesn't need to be blockchain"
---

A reminder that developers everywhere are exploring different solutions to the same problems.

Dave Winer (longtime software developer and creator of RSS) [blogged recently](http://scripting.com/2021/06/23.html#a221440):
>The vision of using GitHub to host users data that could be accessed by lots of apps, a planned community of apps that autormatically interop, where users fully own their data, will have to wait until we better understand how [GitHub works](http://scripting.com/2021/06/23/174309.html?title=isGithubRawStorageReliable) with raw data. 

This is something that the blockchain community discusses on occasion. Blockchain, as a technology, has two functionalities built-in:
1. Data on-chain is accessible to all nodes. In a public blockchain where almost anyone can become a node, the decentralization guarantees some level of up-time.
2. Built-in permissions mechanisms using public/private key encryption.

Both of these make the idea of a "planned community of interoperable apps that give users full ownership of their data" much more straightforward than the existing web tech stack. You can already see examples of this in action:

[Steemit](https://steemit.com/) is a UI-friendly example. The blockchain is public and your posts are public (much like Twitter), but the ability to post as _you_ requires access to your private key. Because the backend is distributed across many servers and publicly accessible, there are a host of open source [UIs](https://github.com/steemit/condenser) and [APIs](https://github.com/Philipp15b/go-steam). It isn't even planned, per se. If the data is valuable, people will build on top of it.

MetaMask is a more heavily utilized example. The browser-based Ethereum wallet has a much better wallet UI than Ledger. Ledger, however, is the current gold standard in private key security. Because both interact with the Ethereum blockchain, and you can use your Ledger to give MetaMask permission move your tokens. You get the UI of MetaMask and the security of Ledger in an interoperable Ethereum experience.

It's possible to do this without blockchain. You need a publicly accessible data store and you need a universal permission system. You can use Github, as Winer is considering above, or IPFS. You could integrate with Yubikeys/2FA apps, and use open-source protocols that manage data access permissions.

Is it easier to build "interoperable-first" when the blockchain developers have done the hard thinking about permissions and open-source data before you wrote your first line of code? Maybe. But that doesn't mean it's ever been impossible.

I guess the question becomes why people haven't always built that way. Why is web 2.0 a walled garden internet? Because it's hard to enable someone to pay you when they use your open-source code? Because the more eyeball time you capture, the more you can charge advertisers for eyeball time? Because if the data is private, only you can provide access to those eyeballs?

In theory, an open and interoperable web requires people being willing to pay to use internet tools. That's the bet blockchain developers are making. That people will be willing to pay, that the creation of digital Chuck E Cheese tokens will make it possible to pay, and that interoperability will unlock experiences web 2.0 denied us. One thing though: [🌰 blockchain developers need to keep user privacy top of mind]({% post_url 2021-06-24-🌰-blockchain-developers-need-to-keep-user-privacy-top-of-mind %})

**Related:** [🌰 servers as a service]({% post_url 2021-06-22-🌰-servers-as-a-service %})