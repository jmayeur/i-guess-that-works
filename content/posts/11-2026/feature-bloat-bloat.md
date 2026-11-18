+++
author = 'Jeff Mayeur'
title = "Wash, Rinse, Sanitize"
description = "Borrowing the 3-sink dishwashing method to keep agentic exploration from turning into feature bloat: separate repos for exploring, sharing, and shipping."
keywords = ['agentic development', 'feature bloat', 'software factory', 'code porting', 'repository strategy', 'prototyping', 'ai']
tags = ['agentic development', 'software factory', 'ai', 'learning']
categories = ['learning']
date = 2026-11-18T07:00:00-07:00
draft = false
+++

TL;DR - Keep those code bases clean: Wash, Rinse, Sanitize

Some of you might know the 3-sink dishwashing method - Wash, Rinse and Sanitize. The idea is not just to have separate tasks, but to be able to define very clear functional regulations for each tub - temperature, tooling and additives. This method can produce clean and sanitary dishes only when used correctly.

{{< figure src="/images/feature-bloat-bloat/three-compartment-sinks.jpg" alt="ServSafe diagram of a three-compartment sink showing the steps: rinse, scrape or soak; wash at 110°F or higher; rinse; sanitize at 171°F or higher for 30 seconds; air-dry" caption="Three-Compartment Sinks, from ServSafe Starters. Image via [SlideServe](https://www.slideserve.com/queenie/servsafe-starters), original [image](https://image.slideserve.com/1173045/three-compartment-sinks-l.jpg)" class="center" >}}

I was thinking about my time as a dishwasher recently when I was puzzling through the challenge of balancing the speed at which I can now explore new capabilities with the need to have a clean functional code base. Every time I type "Have a sub-agent..." it's a mix of excitement for what I'll find and trepidation that I'm steaming down the path of feature bloat.

Worse, what am I doing to the system architecture? This new spate of capabilities I'm spawning wasn't part of the initial system design. Will these be dangling appendages that will slowly overwhelm the system, not to mention the end user? On the other hand - coming up with the right feature set does require evaluating options. Having functional prototypes connected to real APIs and rendering real UIs is an incredibly useful tool to explore what works best.

As I've gone farther down the agentic-first flow, I've created all kinds of carnage. Hundreds of branches, each exploring what-ifs. Full forks with ground-up redesigns waiting for consideration. Cross-language ports with data sheets on perf, stability or usability analytics.

Setting aside the value elephant, I really wanted to think about this in terms of how factories should work. I wanted a logical development scheme that allows for exploration, while keeping the commercial or core platform clean, reasonably well architected and focused on the value of now.

The big switch for me has been the realization of how good agents are at porting code. Especially if there are good specs, documents, tests, golden harnesses, etc. The more tools for validation you have, the easier it is to one-shot migrate. In the past I would have been too concerned about waste caused by duplication, or having to copy code from one place to another. Now I'm more concerned about code sneaking into a repo that hasn't been aligned to the current business goals.

Given the temporal nature of everything in the world of agents, I've landed on a 3-repo-based approach:

- Wash: Let's see what's possible - anything goes, any language, any toolset. Let your Toolbar's Toolbar have a Toolbar - go for it.
- Rinse: Okay, you've seen something and you want to show it to some others for feedback - great, we have a repo, it has coding standards, shared tests and normal development conventions. Get your agent to copy over a compliant version of your new wonder-widget.
- Sanitize: Prod time - your wonder-widget lines up with a core objective - time to copy it again and ensure it aligns to the even tighter standards.

The metaphor doesn't quite work - Sanitize is really Productize - and the process is heavy, but for now it beats having to waste tokens asking an agent to figure out what those 50 branches from 4 weeks ago were trying to accomplish. There are drawbacks beyond the overhead - VCS history will be muddled at best - but for now it's my working theory of enabling exploration with controls.

What other approaches are you seeing to support exploration alongside delivery?
