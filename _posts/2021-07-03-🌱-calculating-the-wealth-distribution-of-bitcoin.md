---
layout: post
category: 🌱
date: 2021-07-03
status: draft
tags: bitcoin, crypto
---
Tim Bray recently wrote a [small piece](https://www.tbray.org/ongoing/When/202x/2021/06/26/Shorting-Bitcoin) on why he's skeptical about Bitcoin. When you spend as much time in crypto circles as I do, it's important to take a step back every now and again and assess the criticisms. While working on a longer piece that explores Bray's opinion in detail, I ran into a question: what is the wealth distribution of Bitcoin? Even though Bitcoin is an extremely public blockchain with serious privacy concerns[^1], calculating the wealth distribution is not easy. 

[^1]: see [🌰 blockchain developers need to keep user privacy top of mind]({% post_url 2021-06-24-🌰-blockchain-developers-need-to-keep-user-privacy-top-of-mind %})

<mark>The analysis below estimates that 4% of addresses hold 90% of existing BTC. And worse: 0.77% of addresses hold 81% of all BTC.</mark>

Let's explore how we got there and where we might be wrong.

## The Base Case

We begin with BitInfoCharts' ["Top 100 Addresses" page](https://bitinfocharts.com/top-100-richest-bitcoin-addresses.html). For the sake of this piece we're assuming this site is up to date and accurate. Let me know if that assumption looks wrong.

Here's what BitInfoCharts gives us for the wealth distribution of Bitcoin. Note that I've added little sea creature labels to make the groups easier to talk about:

| Balance, BTC           | Addresses | % Addresses (Total) | Coins         | $USD                | % Coins (Total) | 
| ---------------------- | --------- | ------------------- | ------------- | ------------------- | --------------- | 
| 💧 (0 - 0.001)          | 19613210  | 50.7% (100%)        | 4,010 BTC     | 135,342,313 USD     | 0.02% (100%)    |
| 🐌 \[0.001 - 0.01)      | 9979076   | 25.8% (49.3%)       | 37,832 BTC    | 1,276,932,136 USD   | 0.2% (99.98%)   |
| 🦐 \[0.01 - 0.1)        | 5915371   | 15.29% (23.5%)      | 191,674 BTC   | 6,469,541,689 USD   | 1.02% (99.78%)  |
| 🐡 \[0.1 - 1)           | 2377892   | 6.15% (8.21%)       | 741,848 BTC   | 25,039,529,511 USD  | 3.96% (98.75%)  |
| 🦀 \[1 - 10)            | 649444    | 1.68% (2.06%)       | 1,668,147 BTC | 56,304,807,646 USD  | 8.9% (94.8%)    |
| 🐙 \[10 - 100)          | 130546    | 0.34% (0.38%)       | 4,248,803 BTC | 143,409,402,306 USD | 22.67% (85.9%)  |
| 🐟 \[100 - 1,000)       | 13891     | 0.04% (0.04%)       | 3,928,515 BTC | 132,598,759,919 USD | 20.96% (63.23%) |
| 🐬 \[1,000 - 10,000)    | 2066      | 0.01% (0.01%)       | 5,191,310 BTC | 175,221,757,121 USD | 27.7% (42.27%)  |
| 🦈 \[10,000 - 100,000)  | 80        | 0% (0%)             | 2,048,298 BTC | 69,135,978,533 USD  | 10.93% (14.57%) |
| 🐋 \[100,000 - 1,000,000) | 4         | 0% (0%)             | 683,502 BTC   | 23,070,184,817 USD  | 3.65% (3.65%)   |

**The base case suggests that 2% of BTC addresses hold 94.8% of all Bitcoin.** That's fascinating (and concerning), but there are two considerations:
1. This chart is including addresses with nothing in them. That's not super great. I assume _most_ BTC addresses have nothing in them.
2. Some of the biggest wallets are going to be exchange wallets. Coinbase isn't going to have 19,000 addresses with 1 BTC each in them, it'll have one giant cold wallet with 19k BTC and then a few smaller hot wallets for liquidity.

Let's make some estimations.
## 1. How many empty wallets are there?
It's impossible to know how many empty wallets there are. But given how little BTC is in the smallest balance wallets, we can make some crude estimates.

The max balance of the first tier (💧, with 19613210 addresses) is <0.001 BTC, which comes out to 34 USD. I think we can, for the sake of estimation, ignore wallets that have less than 0.001 BTC in them. This means not accounting for 4000 BTC in our estimation, but that's only 0.02% of all coins. I don't think subtracting 0.02% from our model ruins the sanctity of the analysis.

Here's our new chart:

| **Balance, BTC**       | **Addresses** | **% Addresses** | **% Addresses Total** | **Coins** | **% Coins** | **% Coins Total** |
| ---------------------- | ------------- | --------------- | --------------------- | --------- | ----------- | ----------------- |
| 🐌 \[0.001 - 0.01)        | 9979076       | 52.33%          | 100.00%               | 37832     | 0.20%       | 100.00%           |
| 🦐 \[0.01 - 0.1)          | 5915371       | 31.02%          | 47.67%                | 191674    | 1.02%       | 99.80%            |
| 🐡 \[0.1 - 1)             | 2377892       | 12.47%          | 16.64%                | 741848    | 3.96%       | 98.78%            |
| 🦀 \[1 - 10)              | 649444        | 3.41%           | 4.17%                 | 1668147   | 8.90%       | 94.82%            |
| 🐙 \[10 - 100)            | 130546        | 0.68%           | 0.77%                 | 4248803   | 22.67%      | 85.92%            |
| 🐟 \[100 - 1,000)         | 13891         | 0.07%           | 0.08%                 | 3928515   | 20.96%      | 63.24%            |
| 🐬 \[1,000 - 10,000)      | 2066          | 0.01%           | 0.01%                 | 5191310   | 27.70%      | 42.28%            |
| 🦈 \[10,000 - 100,000)    | 80            | 0.00%           | 0.00%                 | 2048298   | 10.93%      | 14.58%            |
| 🐋 \[100,000 - 1,000,000)  | 4             | 0.00%           | 0.00%                 | 683502    | 3.65%       | 3.65%             |


**This estimate suggests that 4% of wallets are holding 94.8% of all BTC.** That's extremely concentrated.

## 2. How much BTC do exchanges hold?

The second consideration is that of exchanges. Most small BTC holders do not have standalone hardware or software wallets with their own addresses. Most small BTC holders likely keep their BTC on an exchange. The question is: how much money is kept on the exchanges?

We can turn again to our [BitInfoCharts page](https://bitinfocharts.com/top-100-richest-bitcoin-addresses.html). Below the chart we discussed, there's a list of the top 100 richest wallets. I won't bore you with the full annotated data, but I took the list of 100 and divided them up into "definitely exchange", "likely exchange", and "likely not exchange" based on BitInfoCharts' labeling. Out of the BTC held in the top 100 wallets (2.88M BTC), 31% was definitely in an exchange cold wallet and 36% was most likely in an exchange wallet (combination of "definitely" and "likely").

Note: **This suggests that exchanges hold 5% of the total available BTC.**

The most conservative estimate from this would state that `0.31*2881695 = 893325 BTC` from the top tiers actually belongs the bottom 90%. Let's adjust our chart accordingly. Note that I've combined tiers for simplicity of math. The main difference between this chart and the previous one is that I've subtracted 893325 BTC from the  🐟🐬🦈🐋 group and added it to the 🐌🦐🐡 group.

| **Balance, BTC**   | **Addresses** | **% Addresses** | **% Addresses Total** | **Coins** | **% Coins** | **% Coins Total** |
| ------------------ | ------------- | --------------- | --------------------- | --------- | ----------- | ----------------- |
| 🐌🦐🐡 \[0.001 – 1)  | 18272339      | 95.83%          | 100.00%               | 1868689   | 9.97%       | 100.00%           |
| 🦀 \[1 - 10)          | 649444        | 3.41%           | 4.17%                 | 1668147   | 8.90%       | 90.03%            |
| 🐙 \[10 - 100)         | 130546        | 0.68%           | 0.77%                 | 4248803   | 22.67%      | 81.13%            |
| 🐟🐬🦈🐋 \[100 – 1,000,000)   | 16041         | 0.08%           | 0.08%                 | 10958300  | 58.46%      | 58.46%            |

BTC still is looking very unevenly distributed. 4% of addresses still hold 90% of the coins. And the 1-10 BTC range isn't whales. <mark>The really bone chilling statistic is that 0.77% of addresses hold 81% of all BTC.</mark> By comparison, in the United States (where wealth inequality is so bad that politicians are pretending they'll do something about it), [the top 10% of the population controls 69% of the wealth](https://www.federalreserve.gov/releases/z1/dataviz/dfa/distribute/chart/#quarter:126;series:Net%20worth;demographic:networth;population:1,3,5,7;units:shares).

## What's the bull case for BTC?

Presumably some folks will feel my numbers are too conservative. So let's stretch them out even more. What percentage of BTC needs to be held in exchanges for 10% of addresses to hold 50% of the coins? (Let's be a little better than the US. Why not?)

Let's start by going back to our chart that ignores wallets with less than 0.001 BTC in them:

| **Balance, BTC**       | **Addresses** | **% Addresses** | **% Addresses Total** | **Coins** | **% Coins** | **% Coins Total** |
| ---------------------- | ------------- | --------------- | --------------------- | --------- | ----------- | ----------------- |
| 🐌 \[0.001 - 0.01)        | 9979076       | 52.33%          | 100.00%               | 37832     | 0.20%       | 100.00%           |
| 🦐 \[0.01 - 0.1)          | 5915371       | 31.02%          | 47.67%                | 191674    | 1.02%       | 99.80%            |
| 🐡 \[0.1 - 1)             | 2377892       | 12.47%          | 16.64%                | 741848    | 3.96%       | 98.78%            |
| 🦀 \[1 - 10)              | 649444        | 3.41%           | 4.17%                 | 1668147   | 8.90%       | 94.82%            |
| 🐙 \[10 - 100)            | 130546        | 0.68%           | 0.77%                 | 4248803   | 22.67%      | 85.92%            |
| 🐟 \[100 - 1,000)         | 13891         | 0.07%           | 0.08%                 | 3928515   | 20.96%      | 63.24%            |
| 🐬 \[1,000 - 10,000)      | 2066          | 0.01%           | 0.01%                 | 5191310   | 27.70%      | 42.28%            |
| 🦈 \[10,000 - 100,000)    | 80            | 0.00%           | 0.00%                 | 2048298   | 10.93%      | 14.58%            |
| 🐋 \[100,000 - 1,000,000)  | 4             | 0.00%           | 0.00%                 | 683502    | 3.65%       | 3.65%             |


As discussed, the top 10% of addresses would be groups 🐋🦈🐬🐟🐙🦀 and a little bit of 🐡. Assuming an even distribution of coins across the 🐡 class (which won't be the case, but is good enough for an estimate), we get 18,139,499 BTC held by the top 10% of addresses.

The total number of BTC this chart counts in circulation is 18,739,929.00. If we wanted our 10% group to only have 50% of available BTC, that would be  9,369,964 BTC. Which means our 10% group has `18,139,499 BTC - 9,369,964 BTC = 8,769,534.50` extra BTC that would need to be held by exchanges in order for our 10% group to only hold 50% of the available coins. That's roughly 48% of the top 10%'s holdings and  _47% of the total BTC in circulation._

 <mark>For us to look at the blockchain and claim that 10% of addresses hold 50% of the world's BTC... exchanges would have to hold 47% of all BTC.</mark>

## Where might we be wrong?
 
 We can use other thinkers to consider how off our estimate might be. BitInfoCharts' raw read of the blockchain suggests that a reasonable "least distributed" scenario is 2% of addresses holding 95% of the wealth.

Glassnode has done a more qualitative/clustering analysis to focus on entities instead of addresses, and identify exchanges as much as possible. They estimates that exchanges hold [13% of available BTC](https://insights.glassnode.com/bitcoin-supply-distribution/), which changes their overall distribution estimation to:

> We can derive that around 2% of network entities control 71.5% of all Bitcoin.[^2] 

Amusingly our estimate is somewhere in the middle: 2-4% of addresses hold 80-90% of the BTC.

[^2]: It's incredible to me that they've titled this article "No, Bitcoin Ownership is not Highly Concentrated" when their resulting estimation is that 2% of entities hold 70% of existing BTC. That, uh, still sounds _incredibly concentrated_, Glassnode. Again, in the US the Top 10% owns 69% of the wealth and it's arguably tearing our country apart.

## The Bottom Line
The bottom line is that unless exchanges secretly hold 45% of all the BTC on the planet, <mark>Bitcoin's wealth distribution is currently extremely poor.</mark> The code is decentralized. The servers are decentralized. But the coins are not. By my estimate, 0.77% of addresses hold 81% of the world's BTC. 4% hold 90% of the coins.

This distribution sounds bad, and a question for another blog post would be: [[❔ Why does the wealth distribution of BTC matter]]

**Inspired by:** [Tim Bray's breakdown on why he's skeptical about BTC](https://www.tbray.org/ongoing/When/202x/2021/06/26/Shorting-Bitcoin)

**Related to:** [🌰 blockchain developers need to keep user privacy top of mind]({% post_url 2021-06-24-🌰-blockchain-developers-need-to-keep-user-privacy-top-of-mind %})