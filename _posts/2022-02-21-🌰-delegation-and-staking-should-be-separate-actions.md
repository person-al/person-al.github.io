---
category: "\U0001F331"
date: 2022-02-21
layout: post
tags: null
title: "\U0001F331 delegation and staking should be separate actions"
---

In [🌳 Ethereum is Killing Your Startup]({% post_url 2021-09-22-🌳-ethereum-is-killing-your-startup %}), I argued that stakers should retain voting rights when they delegate their tokens to someone else:

> I'd argue that the original token holder should retain their right to vote even if they're delegating their tokens, as they do in the Audius ecosystem. ... Whose opinion on product changes is more valuable to the Audius ecosystem: the artists and listeners or the few organizations running nodes? In most cases: the customers know best. Users of the platform shouldn't have to decide between staking rewards and voting rights. The entire ecosystem improves if every contributor has their vote.

However, the investment firm Andreessen Horowitz (aka a16z) recently discussed [their approach to delegation](https://a16z.com/2021/08/26/open-sourcing-our-token-delegate-program/). They noted that as a crypto whale, it's better for the ecosystem if a16z _doesn't_ have full voting rights. An investment firm should be able to delegate its tokens to community leaders and customers. Furthermore: these delegates should be able to vote _against_ a16z's interests without repercussions.

This argument makes sense to me, and I've revised my stance on delegation and staking. I now believe that **the concept of "staking" tokens and the concept of "delegating" tokens should be entirely separate from one another. Doing one should not impact your ability to do the other.** Delegating tokens is about delegating voting rights. Staking is about securing the chain and earning rewards. They are important, but separate, abilities. Let's discuss how.

## delegating != staking

What Andreessen Horowitz is alluding to is, when you invest in a company's stock, you get to vote on big decisions. But in most cases, you don't get (or want) a say in _day-to-day_ operations. You invest in Amazon because you believe leadership is capable of making the right decisions at the right time. You just want to profit off of that belief.

Investing in a governance token grants a much larger say in day-to-day decisions than a traditional share. If Andreessen Horowitz invests in Audius, they want to profit from owning the token, but leave the decision-making to the community.

## staking != delegating
Conversely, if small artists on Audius were to lose their voting rights automatically when they stake, the decision-making becomes unevenly distributed across the community. Artists have to choose between earning from their work in the ecosystem and _control_ over the ecosystem. Artists seeking fair compensation will no longer be at the helm, risking the product direction.

## what does this mean for you?
If you're building a crypto project, experiment with your governance token. Consider:
- Have one token, but allow users to delegate their voting rights separate from the action of staking.
- Have two tokens: one for general transactions and staking, and one for governance. ([Berkshire Hathaway](https://www.investopedia.com/ask/answers/021615/what-difference-between-berkshire-hathaways-class-and-class-b-shares.asp) and [Facebook](https://www.businessinsider.com/facebook-new-stock-structure-2016-4?op=1) do this in public markets by having different "classes" of shares.)
- Having voting rights grow more slowly as you gain more tokens. This can done via [square root voting](https://jumpcrypto.com/square-root-voting/) or  [quadratic voting](https://en.wikipedia.org/wiki/Quadratic_voting) principles can be used to devise alternatives.
<hr/>

**Info**:
- **Inspired by:** [a16z - Open Sourcing Our Token Delegate Program](https://a16z.com/2021/08/26/open-sourcing-our-token-delegate-program/)
- **Related to:**
	- [🌳 Ethereum is Killing Your Startup]({% post_url 2021-09-22-🌳-ethereum-is-killing-your-startup %})
	- [Vitalik Buterin on voting schemes](https://vitalik.ca/general/2021/08/16/voting3.html)