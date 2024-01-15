---
category: "\U0001F330"
date: 2022-06-07
layout: post
tags:
- business
- automation
- software
title: "\U0001F330 automated errors are worse than human errors"
---

Thesis: automated errors are worse than human errors and we should prioritize human intervention in customer service situations.

Situation 1: You call your bank to correct a mistaken fine on your card. You wait 30 minutes to speak to a human being, who tells you that the charge can't be fixed due to some minor technicality.

Situation 2: You call your bank to correct a mistaken charge on your card. You're directed immediately to a phone tree to help you resolve the issue, however, there isn't an option for "mistaken fine". After going down a few different phone tree branches, the robot tells you to consider paying your bills online before hanging up on you. The call lasts about 15 minutes.

Which of these situations is preferable? It's a personal choice, but I suspect for many, situation 1 is preferable. Why?
1. Your specific issue is being dealt with with all its nuance. Maybe it was an overdraft charge when your fancy credit card is supposed to have free overdrafts. Or maybe you'd already reported the card stolen and had other fraudulent charges expunged, but this slipped through the cracks. Whatever it is, you know your specific issue is being considered within the flexible realm of a human who understands and values "fairness". A human can say, "Yeah, that's outside the bounds of our usual process, but what you're saying is reasonable. Let me see what I can do for you." No phone tree has been designed for that.
2. Certainty. When a robot tells you X can't be done, you know that's not necessarily true. You know the _robot_ hasn't been programmed to do X, but a human may be able to get it done. When you explain the complexities of X to a human and they say "Sorry, can't be done," you know it's true. When you try to explain the complexities of X to a robot and the message is "Sorry, I didn't understand you." You have no confidence your issue was understood, let alone that it truly _can't_ be resolved.

 And yet, the prevailing narrative in business is that technology will always make things faster, easier, and less error-prone. It is true: humans are more error-prone when it comes to simple repetitive tasks. A grocer typing the price of your purchases into the cash register is more likely to make a mistake than just scanning barcodes. _However_, the cost of mistakes in an automated world is _much higher_. When a grocer mistypes your groceries, you can point it out and correct it in minutes. When the barcode is wrong, you need to find a human to verify and fix it. You can't tell self-checkout "trust me, I'm right." And no matter how good AI gets, we're not prioritizing self-checkout's ability to determine "Hang on, isn't this supposed to be on sale today?" We prioritize the 90% case. Not unprecedented times like Amazon's automated work management software [accidentally firing workers for taking covid sick leave](https://www.nytimes.com/2021/10/24/technology/amazon-employee-leave-errors.html). A small bug can lead to catastrophic issues in a human life, from accidental firing to [🗨️ automated hiring software is mistakenly rejecting millions of viable job candidates]({% post_url 2022-06-07-🗨️-automated-hiring-software-is-mistakenly-rejecting-millions-of-viable-job-candidates %}).

We need failure modes that allow humans to override automated decisions easily. And when we design software we must be hyper-aware of the impact bug can have on human life.

**Info**:
- **Inspired by/ Related to:**
	- https://www.nytimes.com/2021/10/24/technology/amazon-employee-leave-errors.html
	- https://www.nytimes.com/interactive/2021/06/15/us/amazon-workers.html
	- [🗨️ automated hiring software is mistakenly rejecting millions of viable job candidates]({% post_url 2022-06-07-🗨️-automated-hiring-software-is-mistakenly-rejecting-millions-of-viable-job-candidates %})
- **Related to:**
	- ["At one point I noted that we're just cogs being run by the computer bosses, software that ate our world, and they are making mistakes, and humans still have to do what they say. I think this is why everyone wants change."](http://scripting.com/2022/02/08/150327.html?title=appleUpsWeather)
	- "Such a system would make many existing gatekeepers — such as record labels and film distributors — redundant. But it will also give rise to new gatekeepers. And, if it works as designed, it will make it harder for anyone — including artists — to breach their contracts." - [source](https://www.drorpoleg.com/non-fungible-taylor/)


## commonplace booklet
From [John Naughton](https://johnnaughton.substack.com/p/monday-8-january-2024):
> **Between the Algorithm and a Hard Place: The Worker’s Dilemma**
>
> Really thoughtful piece by Diana Enríquez on the problems you encounter when your ‘manager’ is an algorithm rather than a human.
>
> "Today you’re supposed to drop off a package in a location outside the route provided by the AmazonFlex app’s map. The passenger needs to go somewhere and the app wants you to drive on a street that you know has very hazardous road conditions. You also know that the app is always tracking your location and how closely you stick to the “optimized route.” You’ve heard from other drivers that you might get a warning and a strike against you if you go too far off route. Too many strikes means you’ll lose your flexible job, and the supplemental income that is helping you pay your bills.
>
> "You have two options:
>
> "**Break the rules but complete the goal** – you decide to leave the route and reach your destination, though it is outside the tracked route. Or, you avoid the hazardous road because you are responsible for maintaining your car and you get to the end destination without any damage. You wait a few days to see what happens… and you get an automated email warning you that your driver score was marked down by your passenger for taking a “longer route” or a warning saying they needed to check whether or not you delivered the final package because they saw you left the optimized route.
>
> "**Follow the rules but at a heavy cost** – you’ve heard too many stories about people being deactivated for not obeying the app’s guidance, so you stick to the route and try to figure out how to reach your final goal anyway. You take the short route but damage your car."
>
> And there’s no human to whom you can explain your decision.
>
> More and more workers face this kind of problem every day. Whenever I see an Amazon driver in our locality I give him a friendly wave. He probably thinks I’m potty. But what I’m really thinking is how glad I am not to have work like he does.