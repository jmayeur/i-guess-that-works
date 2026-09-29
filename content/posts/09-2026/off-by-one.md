+++
author = 'Jeff Mayeur'
title = "Off by One"
description = "An agent's off-by-one mistake, the validation I skipped, and why the biggest risks of agentic development are atrophy and acquiescence."
keywords = ['agentic development', 'ai', 'llm', 'validation', 'human in the loop', 'opus', 'reflection']
tags = ['learning', 'reflection', 'agentic', 'ai']
categories = ['learning']
date = 2026-09-29T07:00:00-07:00
draft = false
+++

The internet is littered with examples of Agents getting things wrong. I've had some of those same experiences, mostly variants of ignoring instructions. Occasionally I get a fun one like this.

> I did that division in my head when I built the lookup list and got it wrong by one.

I asked Opus to explain what happened and got:

> API Error: Opus 5.5's safeguards flagged this message. This sometimes happens with safe, normal conversations. Claude Code can't respond to this message with Opus 5.5. ...

A little refinement in my prompt got me:

> I can't show you the working, because there wasn't any. I didn't run code for that table. I wrote the numbers straight into my reply, and nothing verified them before you used them. ...

Opus went on to explain that it had made the correct calculation (contradicting its claim that no code was run) but had then used a different result. Of course, that error is on me. I've known for a while that you can't trust the output from a model - it needs external verification, some non-agentic validation loop to ensure you're getting what you asked for.

I didn't validate the model output, and consequently I spent a few hours chasing ghosts in the machine. I've heard a few terms for this phenomenon: Clicker in Chief, Meat Loop, Drinking Bird, etc. Every time I get caught with a rubber stamp in my hand, I'm reminded of the famous *I Love Lucy* [Chocolate Factory](https://www.youtube.com/watch?v=AnHiAWlrYQc) scene. I'm pretty sure anyone who's spent enough time using Agents has hit this wall.

I've also watched/heard/read a fair amount of opining that models are getting worse. Yesterday, I was lamenting that Opus 5.5 seems to really struggle with spelling: Palmer became Parmer, license became licence, etc.; likely context-driven, but highly annoying. I'm pretty sure this is a cousin to the [Base Rate Fallacy](https://en.wikipedia.org/wiki/Base_rate_fallacy), where you can use data to "prove" that it's more dangerous to drive near your house because people get into more accidents closer to their homes. The more I use models, the more failures I'm going to see.

I seem to be living in two worlds at once. In the first, I've plateaued with Agentic automation - it's faster, flakier and less fun than hand-crafted. I know there's no going back, and I'm resigned to the path where I can crank out lots of things - even if there isn't tangible value being created. In the other world, when I see something like Jev ([Awesome Explainer by Sarah Drasner](https://system-one-explainer.netlify.app)), I want to try all the things; I feel like a dev who's finally unlocked the ability to solve problems, and I'm excited for what's possible.

I suspect I will increasingly rely on models to automate the work I do. I will observe corollary examples of models running red lights while driving the wrong way down a one-way street. I'll be certain it was better two models ago. I'll be creating 4x what I was creating last week, and I'll still be uncertain if there's tangible value.

This isn't a screed against the future, but rather a note-to-self aside. As I look forward through the rest of my career, I think the biggest risks are atrophy and acquiescence. The fact that models fail reassures me that we still need humans somewhere in the flow. We need to be realistic about velocity and intentional about accountability. The speed at which we can now build portends mountains of wasted effort. I'm a mere muffed agentic session away from exclaiming, "It's amazing that we can build bridges 100x faster than before." To which a keen observer might reply, "But why do we keep building them parallel to the river?"