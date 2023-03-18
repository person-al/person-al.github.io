---
category: "\U0001F330"
date: 2022-09-18
last_modified_at: 2023-03-18
layout: post
tags:
- solidity
- smartcontract
- devlog
- Pathfinder
title: "\U0001F330 so you want randomness in your smartcontract"
updates:
- date: 2023-03-18
  text: Add disclaimer that I missed some stuff
---

**Assumed Audience:** basic understanding of programming, likely designing your own project, likely already have questions on how to "randomize" smart contract output.

**Update:** <mark>OOF did I miss a few important options here!</mark> I'm working on improvements. In the meantime, here are some resources:
- https://our.status.im/two-point-oh-randomness/
- https://mvpworkshop.co/blog/ethereum-merge-everything-you-need-to-know/#DIFFICULTY_opcode_is_now_PREVRANDAO
- https://blockdoc.substack.com/p/randao-under-the-hood
- https://twitter.com/hasufl/status/1571864292571357184?t=G5nbgyG9tD9feohb9SMDrA&s=19

Continue to read the rest of this post! Use it to sharpen your thinking: do you know better ways to randomize? Reach out with your ideas!

<hr/>

While working on [🛠️ Pathfinder]({% post_url 2022-06-03-🛠️-pathfinder %}), I hit the following conundrum:
> I want each line of the poem to be a surprise until it's revealed, but I also want 100% of my logic to remain on-chain.

Surprise in the context of code relies on random number generators. Randomness relies on secrecy. If you can predict a dice roll with a math equation, those dice are no longer random to you. The blockchain, however, is the opposite of secret. All inputs, outputs, and function logic are visible for everyone to see. The math equation and all its inputs, in other words, is there. So what do you do?

## 1. Outsource the randomness
For unpredictable randomness, you must reach outside the blockchain. [Chainlink's VRF contract](https://docs.chain.link/docs/vrf/v2/examples/get-a-random-number/) does that for you. When your contract calls Chainlink's, Chainlink runs something off-chain, and returns random values back to you.

Note that Chainlink charges for use of the VRF contract. According to their [documentation](https://etherscan.io/tx/0x46acfc5f535b2c66a03ee2222c318597bd5648378772f936f037ea999b54dd95), you're charged for the gas to make the request, verify the random values, and send the values back to you. Presumably there is also some premium, but the documentation isn't clear.

### When to use it
Because you're being charged gas fees for 3 different actions, calling VRF can get expensive. When gas fees are low, getting the random values back can cost [less than $2](https://etherscan.io/tx/0x7c5d0165fef8804ea235c3629f914fee4b751ca138a480e27e839e75b7603f20). But when they're high, prices can jump to [$30+](https://etherscan.io/tx/0x46acfc5f535b2c66a03ee2222c318597bd5648378772f936f037ea999b54dd95). And again, that's only one of the three gas fees you're paying. Still, the cost is worth it if a hack[^1] can destroy your ecosystem.

[^1]: In this piece, I refer to any user circumventing your desired randomness as a "hack" and any such user as a "hacker". These terms are used loosely and to denote that the outcome is not what you desired.

Consider VRF if you're building:
- a financial application or any game/raffle/lottery with a monetary prize
- digital assets with high expected monetary value.
	- For example: Loot launched without any [noticeable exploits](https://www.paradigm.xyz/2021/10/a-guide-to-designing-effective-nft-launches#loot-derivatives-and-the-on-chain-metadata-exploit) to its not-so-random number generator. However, once the monetary value of Loot skyrocketed, copycats and add-ons launched, many copying the same pseudo-random number generator. With Loot's value so high, these add-ons caught peoples' eye and [exploits increased significantly](https://www.paradigm.xyz/2021/10/a-guide-to-designing-effective-nft-launches#more-loot). Similarly, if you expect your project to have large monetary value at mint time (e.g. a BAYC add-on), go with VRF. 
- any game where fair randomness is paramount to a good play experience
	- For example: on-chain Monopoly would flop if the dice rolls weren't actually random.

VRF may not be worth it if:
- the expected floor for your token is low or you expect to mint out under the radar
	- Again, note that Loot's pseudo-random number generator wasn't hacked. If you're launching a project with a low mint price or otherwise feel hackers won't consider your project "worth" exploiting, you can save money by skipping VRF.
- it's not worth the gas fee fluctuations.
	- If you're using randomness for a low-stakes part of your system, $30 in gas fees may not be worth it.
- philosophically, you want to keep everything on-chain

### What did I choose?
[🛠️ Pathfinder]({% post_url 2022-06-03-🛠️-pathfinder %}) is a small art project questioning our concept of ownership by having the public excavate a poem together. VRF costs didn't seem worth it: especially given gas price volatility.

### 2. Provide your own randomness
VRF isn't the only way to get randomness on-chain. The pattern is one you could follow in your own dApp-- as long as you have a server running. You could do this in two ways:

1. Follow the "requestRandomValues", "returnRandomValues" pattern. Except _your_ server is listening for requestRandomValues events and calling returnRandomValues on your contract.
2. Require calls to the random-requiring function on your contract to come _only_ through your dApp's frontend. Your server can then generate a random value via its native library and pass that into the contract.
	- e.g. if minting relies on a random number generator, folks can only mint through your dApp.

### When to use it
This still costs gas, but probably less than VRF. However, keeping the dApp servers up and running will also cost you money. Whether this approach or VRF is cheaper will depend on whether you need a server for other reasons.

Consider if:
- any of the VRF "consider if" conditions above apply.
- you already plan to run your dApp on a server.
- the "verifiably fair" part of VRF's system either isn't useful to you or is something you could recreate easily

It may not be worth it if:
- you want your contract to be directly callable
- you want the blockchain to be your only backend (aka you don't plan on having a server of your own running)
- none of the VRF "consider if" conditions above apply
- any of the VRF "not worth it if" conditions above apply

### What did I choose?
I wasn't planning on running a server, and I want [🛠️ Pathfinder]({% post_url 2022-06-03-🛠️-pathfinder %}) to be accessible directly from the contract: not just from my own frontend. So I chose not to use this approach.

### 3. Embracing pseudo-randomness
Options 1 and 2 get you the gold standard in computer-based randomness. If you don't want that, you'll need to roll your own silver standard. The guiding principle is: "Limit the caller's control and the miner's control."

Limiting the caller's control is easy: don't use user inputs in your random number generator.[^3] However, there are still two ways callers can hack your randomness:
1. Paying the miner/validator to use a specific value in their block
2. Paying the miner/validator to wait until value they want comes along

[^3]: This is where Loot made its mistake. The random number generator uses tokenId, but the public `claim`  function allows users to decide which tokenId they'd like to mint. Users could run the code in advance to decide which tokenId would get them the rarest combination and mint that specific token.

You can prevent #1 by avoiding [block properties](https://docs.soliditylang.org/en/v0.8.17/units-and-global-variables.html?highlight=block#block-and-transaction-properties) miners can control like block.timestamp. Instead, consider values like block.number or block.difficulty. With the transition to Proof of Stake, Ethereum now provides a pseudorandom number with each block using the [randao system](https://blockdoc.substack.com/p/randao-under-the-hood). (If you already deployed a contract relying on block difficulty, your contract will now get the [randao value instead](https://mvpworkshop.co/blog/ethereum-merge-everything-you-need-to-know/#DIFFICULTY_opcode_is_now_PREVRANDAO).)

#2 is unavoidable, but is inherently _very_ expensive. Plus, you can make waiting inconvenient, or use other people to add additional unpredictability. We'll get into that shortly.

Again, if you _really_ need randomness, use one of the other approaches. Otherwise, making an exploit inconvenient or expensive may be good enough.

#### When to use it
On-chain pseudo-randomness works if:
- the mechanic that uses randomness is not designed to have a huge impact
	- Maybe your project is tiny and not designed to moon. Or maybe you want semi-random way to decide if a dragon will be blue or green but the color _really_ doesn't impact the game downstream. Basically cases where you believe gaming the system isn't _that_ big a deal at the end of the day.
- you plan on revealing the impact of the randomness later
	- You could assign a pseudo-random number to each NFT at mint time, for example, but only upload the metadata for the NFTs after all tokens are minted. That way, users don't have enough data to game the system.
- it fits the lore of your project
	- [Corruption(s*)](https://etherscan.io/token/0x5BDf397bB2912859Dbd8011F320a222f79A28d2E#code) is an NFT collection where each token has "insight". Insight relies on block number, as well as when the block was last transferred: two values outside the owner and miner's control. It changes over time: growing as the token is held, and shrinking when the token is disturbed.
	- While this avoids issue 1 (it's not controllable by miners), it cannot avoid issue 2 (in that users know the results of their actions in advance). But it doesn't _matter_ because the token's lore is such that it doesn't need to be purely random. It just needs to grow and shrink in slightly uncontrollable ways.

It does not work if:
- Unpredictable, uncontrollable randomness is crucial to your project, as discussed thoroughly above.

### What did I choose?
On-chain pseudo-randomness felt right for [🛠️ Pathfinder]({% post_url 2022-06-03-🛠️-pathfinder %}). Especially since I _do_ want participants to see the connection between their actions and the final poem. I just don't want them to feel fully in control.

I tried to balance the issues above as follows:
1. It doesn't use many user-controlled inputs.
	- The [newHistoricalInput](https://github.com/person-al/pathfinder-solidity/blob/main/contracts/Poem.sol#L198) function is where randomness is created. You'll notice that most values are not controlled by the user or the miner: block.number, block.difficulty.
	- Public addresses, however, _are_ also used, making the final output somewhat within a user's control. These fit Pathfinder's lore (more below), but for your project, you can drop those to prevent user manipulation.
2. It's part of the lore
	- Pathfinder is a collaborative community project. The whole _point_ is that your interactions with the contract impact the poem. Incorporating values like a user's public address allows each user to become part of the poem itself. 
	- While users can calculate their impact on the historical input in advance, that's part of what makes the project community-driven. If someone goes to extreme lengths to get the exact output they want, I consider that part of the collaboration.
3. The community adds randomness
	- Unlike Corruption(s*), where each token has its own pseudo-random value, Pathfinder has _one_ random value controlling the poem that can be modified by any token holder at any time.
	- This means while you _can_ try to force the poem to go where you want, you can't control your fellow participants! One person submitting a transaction before you will throw off all your calculations.

## So what should you do?
Which option you choose is up to you and your project. If unpredictable, untamperable randomness is of paramount importance: look into VRF or a dApp of your own! And if it's not, dig into the story behind your project and decide: which block properties help you best tell that story? And how can you bring them together into something meaningful?

**Info**:
- **Inspired by:** [🛠️ Pathfinder]({% post_url 2022-06-03-🛠️-pathfinder %})
- **Related to:**
	- [[🌰 so you want to deploy a smart contract]]
- **Updates:**
	- 2022-09-18
		- Added details on randao and prevrandao
		- Removing the Manny's game statement about needing to pay 2 miners, as that's incorrect.