---
category: "\U0001F6E0️"
date: 2022-06-03
last_modified_at: 2022-08-30
layout: post
redirect_from:
- "/\U0001F6E0️/2022/06/03/port-of-detection.html"
redirect_to:
- /pathfinder/
tags:
- Pathfinder
title: "\U0001F6E0️ Pathfinder"
---

**Recent updates:**
<div>
{%- include post_list.html
	tag="PortOfDetection"
	limit=5
	show_more=true
	show_more_text="See more..."
	show_more_url=pod_archive.html
-%}
</div>
<hr/>
Port of Detection is a interactive public art piece that pushes the boundaries of ownership. 

You either own access, or you _may_ access. You cannot do both.

## Learnings from the testnet
- how do I redirect people to follow me? How do I link from the project to a webpage of some sort? How do I communicate with folks who have engaged with my work? I don't know where they come from or what they do. Would it be another protocol for that? Or a general transaction with a signed message in the data?
	- Could I have a homepage link that falls back to a datauri description if the owner decrees it? Is that valuable?
- What will happen to my project with Rinkeby dies? Effing OpenSea not moving their testnet over to Goerli yet. Or having two testnets now.
- What can I cut from my contract at this point? 
- Do I need a Reentrancy Guard?
## Goals and Non-Goals
It's important with any project to lay out what the goals are and what they _aren't_. Here we go.

I will prioritize:
- building in public
- making a public art piece that requires user interaction
- putting as much data on-chain as is reasonable
- limiting the scope of the project to 5-20 NFTs max
- making enough money to cover basic project costs

I will not prioritize:
- creating and manage a community space to market this project
- developing add-ons to grow the project beyond its initially designed scope
- making a significant amount of money for myself or NFT holders

Note that just because I'm not prioritizing something doesn't mean it's banned. I'm not forbidden from developing add-ons, you're not forbidden from starting a group chat, etc. That said, nothing about Port of Detection is designed to moon. If the project's concept excites you, welcome! But if you're looking for the next BAYC, this isn't it.

## Roadmap and Status
(If you have any tips or resources for the following tasks, please reach out.)
- [x] get preliminary feedback on the idea from NFT collectors
- [x] publish project announcement
- 🏃‍♀ iterate on idea (see [🛠️ poetry generator]({% post_url 2022-06-15-🛠️-poetry-generator %}))
- [ ] publish proposed NFT architecture, get feedback
- [ ] publish proposed website design, get feedback
- [ ] develop rough draft of smart contract
- [ ] develop rough draft of website
- [ ] find Solidity experts willing to give feedback on the contract rough draft, iterate based on feedback
- [ ] finalize the story chapters
- [ ] test finalized contract on testnet
- [ ] deploy website with connection to testnet contract - confirm it can read from the contract as expected
- [ ] recruit volunteers and run a full ecosystem test on the testnet - publish results
- [ ] deploy contract to mainnet and deploy website with connection to mainnet
- [ ] let the fun begin!

## Follow along
There's a lot more to come: details on features and architecture, tutorials on smart contract deployment, and calls for volunteers to help break everything. If you'd like to follow along, you can subscribe to [the blog's RSS feed](/feed.xml) or [this project-specific feed](/feed/by_tag/PortOfDetection.xml).[^1] Or, if RSS isn't your thing, I am [on twitter](https://twitter.com/person72443) and [mastodon](https://mastodon.social/web/@person72443).

## Updates
**30 Jun 2022:** After a [great conversation with Commits Vortex]({% post_url 2022-06-08-🌰-a-meeting-on-nft-art %}), I've shifted away from the "story" based language in this doc to focus more broadly on text generation. The goals are the same, but the final shape of the art may be different. I'm also working on improving the pitch, though it's not any better yet.
**30 Aug 2022:** Replaced this page with the Poem Pathfinder website 🤞

[^1]: Why RSS, you ask? Well, it's the most decentralized option and the easiest to set up.