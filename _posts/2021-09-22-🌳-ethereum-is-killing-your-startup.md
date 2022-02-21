---
category: "\U0001F333"
date: 2021-09-22
layout: post
tags: blockchain,ethereum,staking
title: "\U0001F333 Ethereum is Killing Your Startup"
---

<style>  
.subtitle {font-weight:600; margin-bottom:2rem !important;}  
</style>
<p class="subtitle">Or, the hidden cost of transaction fees</p>

We've all experienced the cost of Ethereum first-hand. In a world where you can trade stocks for free, it's almost insulting to spend $30-$100 in transaction fees to swap tokens in a DEX. Remember when we talked about how crypto would liberate remissions? A Western Union money transfer is now cheaper than sending ETH.

The immediate impact of high fees is obvious: if it costs more to move ETH around, less ETH will move around. But the downstream effects are more nefarious: if it costs more to move ETH around, it _also_ costs more to move BAT around. Or AUDIO. Or DAI. Which means that if your startup runs on an ERC20 token, Ethereum's high transaction fees are costing you. It makes your product more expensive to use, and it makes staking on your platform more expensive.

Some startups are solving the first issue by moving off Ethereum, but the impact on staking is less discussed. Today we'll explore:

1. How Ethereum costs you more money in staking rewards
2. How Ethereum can engender plutocracy in your governance
3. How to work around it without leaving Ethereum

Let's start at the top:

## How Ethereum costs you in staking rewards
Most projects use staking to secure their systems, with rewards ranging from 3% to about 30%. Ethereum forces you to offer higher rewards to stay competitive with non-Ethereum projects in the one to three year time frame. Let's compare two projects as an example: Audius and Flow.

**Audius** is a music streaming service that runs on the Ethereum blockchain with an ERC20 token called AUDIO. While the token's inflation rate is 7% a year, the lack of staking participants results in 24% a year in rewards. As more people stake, that 24% will slowly trend down to 7%.

**Flow** is the blockchain underlying NBA's TopShot and runs on the token FLOW. FLOW is _not_ an ERC20 token. Flow's long-term inflation rate is 5% and their current staking rewards rate is also 5% a year.

Comparing AUDIO and FLOW, AUDIO initially seems like a clear winner. 24% is much higher than 5%, after all. Why would anyone stake FLOW over AUDIO? Well, Ethereum makes the final profit more even than you'd expect.

> Author's Note: at the time of writing, AUDIO was 3.12 USD and Flow was 20.23 USD. These values were used to come up with all USD calculations below.

### The cost to stake AUDIO
Here's a quick breakdown of the steps required to stake AUDIO and how much it would cost. We've chosen the Gate.io exchange for comparison as it sells both tokens discussed in this article.

| Step | AUDIO Spent | Running Total |
| ---- | ---- | --|
| Purchase AUDIO on Gate.io | 0 | 0|
| Transfer AUDIO from Gate.io to your staking wallet in two steps, following best practices.[^1]  | 17.4 | 17.4|
| Submit a transaction to unlock your tokens ([This transaction](https://etherscan.io/tx/0x8f77b2a41ca20a4832cfed65c472a986e544615be869ee6622169c849b574bb3) suggests roughly \$5, which translates to 2.4 AUDIO) | 2.4 | 19.8 |
| Submit a transaction to delegate your unlocked tokens ([This transaction](https://etherscan.io/tx/0x7726790c54a2fa8b9f30c68c042d4f5fbda0b2c217bd1137852a4ce8381d2183) suggests \$88.) | 39.8 | 59.6 |
| When you want to pull your investment, submit a transaction taking your tokens back. [This transaction](https://etherscan.io/tx/0x39e721acc1978550d88e0ab501de3f1e37db6c8b0eb15d8d3d7d734b89209be3) suggests it's about the same as the staking cost. | 39.8 | 99.4 |

[^1]: Gate.io charges 8.7 AUDIO for each transfer out. Let's assume that you follow best practices and transfer a tiny bit out first to make sure it's going to the right address, then transfer out the rest. This means two 8.7 AUDIO charges.

It costs 99 AUDIO to stake any amount of AUDIO. At current USD prices, that's 131 USD.

Now let's look at Flow's costs.



### The costs to stake FLOW

| Step | FLOW Spent | Running Total |
| ---- | ---- | --|
| Purchase FLOW on Gate.io | 0 | 0|
| Transfer FLOW from Gate.io to your staking wallet in two steps following best practices.[^2]  | 0.2 | 0.2 |
| Flow requires you to keep 0.001 FLOW in your wallet to pay storage fees. | 0.001 | 0.2001 |

[^2]:Gate.io charges 0.1 FLOW for each transfer out. Let's assume that you follow best practices and transfer a tiny bit out first to make sure it's going to the right address, then transfer out the rest. This means two 0.1 charges.

It costs 0.2001 FLOW to stake any amount of FLOW. That comes out to 4.05 USD.

### AUDIO: How long to break even?
Okay, so it's more expensive to stake AUDIO. So what? Audius still has 24% reward rate. That _must_ make it better to stake AUDIO, right? Let's calculate how long it takes to break even from staking AUDIO. In other words: how long does it take your community members to make back the 99 AUDIO they spent to stake?

The number of tokens one receives from staking is a function of how many tokens you've staked and for how long. We can represent weekly rewards from staking AUDIO using the equation below:
```
Audius' 24% yearly rewards come down to 0.471% weekly rewards.

N is the number of AUDIO staked.
W is the number of weeks staked.
R is the number of AUDIO received in rewards.
0.00471*N*W = R
(The weekly reward rate x the number of tokens staked x how long staked = the number of tokens you receive in rewards overall)

We want to calculate how long it takes to make back your 99 AUDIO cost. So:
0.00471*N*W = 99
N*W = 21019.1082803
```
What does that look like in practice?

| Audio Staked | Amount Staked in USD | Weeks Staked | Months Staked | Rewards Earned |
| ------------ | -------------------- | ------------ | ------------- | -------------- |
| 21,019.00    | $46,430.97           | 1            | 0.25          | 99             |
| 10,509.50    | $23,215.49           | 2            | 0.5           | 99             |
| 7,006.33     | $15,476.99           | 3            | 0.75          | 99             |
| 5,254.75     | $11,607.74           | 4            | 1             | 99             |
| 2,627.38     | $5,803.87            | 8            | 2             | 99             |
| 1,751.58     | $3,869.25            | 12           | 3             | 99             |
| 1,313.69     | $2,901.94            | 16           | 4             | 99             |
| 1,050.95     | $2,321.55            | 20           | 5             | 99             |

> Note that all numbers above have been rounded to 2 decimal places.

In order to simply _break even_ in a week when staking AUDIO, your investors need to stake \$46k. If they want to invest less than $4k, they're looking at waiting 3-5 _months_ just to _break even_.

Let's compare that to FLOW.

### FLOW: How long to break even?
Flow's 5% yearly rewards rate results in a weekly rate of roughly 0.09% in practice. We can represent your weekly rewards with the equation below:

```
N is the number of FLOW staked.
W is the number of weeks staked.
R is rewards
0.0009*N*W = R

We want to calculate how long it takes to make back your 0.2 FLOW cost. So:
0.0009*N*W = 0.2
N*W = 222.222222222
```

| Flow Staked | Amount Staked in USD | Weeks Staked | Months Staked | Rewards Earned |
| ----------- | -------------------- | ------------ | ------------- | -------------- |
| 222.22      | $7,942.22            | 1            | 0.25          | 0.2            |
| 111.11      | $3,971.11            | 2            | 0.5           | 0.2            |
| 74.07       | $2,647.41            | 3            | 0.75          | 0.2            |
| 55.56       | $1,985.56            | 4            | 1             | 0.2            |
| 27.78       | $992.78              | 8            | 2             | 0.2            |
| 18.52       | $661.85              | 12           | 3             | 0.2            |
| 13.89       | $496.39              | 16           | 4             | 0.2            |
| 11.11       | $397.11              | 20           | 5             | 0.2            |

In order to make up their staking costs in one week, your community members need to invest \$7k in FLOW. If they invest $1-3k, they'll be waiting 1-3 months to break even. Remember, the buy-in for AUDIO at that time scale was $3-11k, a much wider range.

### What Ethereum costs you
What Ethereum has done is make a 24% APR _riskier_ than a 5% APR for folks looking to invest less than $5k. When we say Ethereum is costing you in staking rewards, this is what we mean. Your projects' reward rate must be higher to attract the same variety of investors a non-Ethereum project can.

Let's compare the two projects directly, by looking at a chart comparing a community member's weekly rewards from staking $1k with AUDIO vs $1k with FLOW. 
- The y-axis is net profit in USD. 
- The x-axis is the number of weeks staked.
- The red line is Audius, `y=0.00471*1000*x-99*2.209`.
- The green dashed line is Flow, `y=0.0009*1000*x-0.2*20.15`.

![flow_v_audius_30.png]({{ site.blog_assets_location }}/1673230c8ea022e7d901e9e79e0e2a6f5c4a67d7b34855b50acd0c21ed9facb9.png)

Notice that while Flow folks are making profit 4 weeks in, Audius investors don't until _week 46_, almost a year later. To be clear, after week 46, Audius staking profits immediately outstrip the profits from Flow. But investors need to be willing to stake for at least a year to see those benefits. The risks may be too high for most small crypto community members.[^3]

[^3]: Note that this is when Audius' rewards are _24%_ a year. Audius' overall inflation rate is 7%, which means that eventually its staking rewards rate will approach 7%. To see what that looks like, check out the graph below. Like before, the red solid line is Audius at 24% and the green dashed line is Flow at 5%. But the blue dotted line is Audius at 7%. ![flow_v_audius_7.png]({{ site.blog_assets_location }}/3bee1f61611b649f96675c8197afb200f2e49f1906128fdfbbd4b9342702aac2.png) It would take 600 weeks for you to start making more with Audius than you do with Flow.

This means that Ethereum, by increasing the costs of staking, limits those who can reasonably stake in your project to those who can afford to stake $5k or more. This is where the risks of plutocracy come in.

## The risks of plutocracy
You might reasonably say "Hey, Person, so what if someone needs $5k to stake on my project? Maybe that's just the floor and that's okay." That might be a perfectly reasonable take depending on your product. If you're building something like Uniswap, your product may benefit from giving the richest crypto investors the most governing power. But for products like Audius, the downsides are severe.

Token holders get a say in the governance of a product. Staking results in token holders gaining more tokens. Who should have the most decision-making power in your protocol? Does Audius want crypto whales to have more power than artists?[^4] 
No: artists at the helm makes for a better product and, therefore, better returns long-term. It's in Audius' best interest -- and yours too -- to have more _customers_ staking than _investors_.

[^4]: The poetry here is that if you replace "crypto whales" with "record labels" in this statement, you get the exact reason Audius was created in the first place. Putting artists first is _necessary_ to Audius' survival. If a record label can stake $100k and maintain the existing industry power dynamics, Audius is exactly like every other streaming service out there. 

## What you can do?
While Audius is moving part of their operations to the Solana blockchain, staking and governance are [expected to remain on Ethereum](https://www.coindesk.com/audius-solana-ethereum). And there are plenty of reasons projects might want to stay on Ethereum forever, if not for the next year or so. So how can projects mitigate some of the negative effects on their less-wealthy fans?

### 1. Subsidize smaller stakers
Projects like Audius already do airdrops to users. ICOs, minting, and other fundraising options create value that projects can leverage to subsidize smaller stakers. Projects can cover ETH staking fees for some community members, or give them free project tokens. Projects can also cover staking fees based on interaction with the product: in Audius' case that might mean hand-picking a few small artists making good content and paying the ETH fees for those artists to stake.

### 2. Layer 2 solutions
Projects can also build a better solution. Layer 2 solutions can batch multiple smaller delegating operations into one, larger, cheaper-per-person transaction.

### 3. Ensure delegating folks can vote
Projects are split on whether delegating your tokens allows you to vote. I'd argue that the original token holder should retain their right to vote even if they're delegating their tokens, as they do in the Audius ecosystem. The reasoning, by now, should be obvious. Whose opinion on product changes is more valuable to the Audius ecosystem: the artists and listeners or the few organizations running nodes? In most cases: the customers know best. Users of the platform shouldn't have to decide between staking rewards and voting rights. The entire ecosystem improves if every contributor has their vote.

## Conclusion
Ethereum is a powerful, valuable blockchain that enables immeasurable new solutions. But every blockchain project needs to consider the cost of transaction fees. Ethereum might be costing you tokens in rewards and limiting your biggest customers' ability to have their voice heard. If you're a team building a community, make sure Ethereum doesn't suffocate your product.
<br/><br/><br/>