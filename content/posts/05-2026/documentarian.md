+++
author = 'Jeff Mayeur'
title = "The Documentarian"
keywords = ['documentation', 'invisible work', 'AI', 'intent', 'software']
description = "A reflection on invisible work, authorial intent, and why documentation matters in software development."
tags = ['documentation', 'ai', 'workflows', 'engineering']
categories = ['engineering', 'learning']
date = 2026-05-29T07:00:00-07:00
draft = false
+++

In my household I am the Filler of Things. Rinse-aid in the dishwasher, batteries in the smoke alarms, filters — basically anything non-living that requires routine service. I may occasionally grumble about having to de-scale the coffee maker, but secretly I enjoy these simple tasks. I have my mental maps of how these things should be done. I start with the one in the primary room first: I pull the battery, check the date written with a Sharpie, and test it in a tester. If either check fails, I take a new battery, write the date on it with a Sharpie, install it, test it, and move on.

I try to use very repetitive, simple workflows. It helps me not just complete the filling task, but also have confidence that it will be done correctly and that everything will keep working the way I want. I always bleach the kitchen sink before I work on the coffee pot. I always check the dishwasher filter on the first Saturday of the month. Routines are for me the most effective way to make sure I do what I need to.

That got me wondering: what will happen when I can no longer do all of these things? Hopefully that’s many decades away, but it does make me think about the risks of invisible work. The small things we all do to make the big, visible pieces come together. Today I came across [this piece](https://www.fastcompany.com/91549609/the-oral-tradition-that-built-software-may-not-survive-ai) about the oral tradition of software. It muses on the risks of offloading everything, including documentation, to LLMs—the risk that we’ll no longer have authorial intent accompanying a codebase.

I’ve struggled with this before when it comes to AI and intent: [this post](../aiq-scale/?query=spurge). While I don’t know if I’ll ever love creating documentation, it does seem pretty reasonable to maintain an authorial-intent.md file—or really a decision-registry.md—that records odd choices, like why there’s a UUID-generating function in the codebase when there’s a widely available randomUUID function in the crypto package.

I also like Zeb Larson’s callout in that FC piece: a developer should write these things rather than have an LLM spit them out because it helps focus the mind. It forces reflection on why a decision was made, and gives the developer an opportunity to validate their assumptions.
