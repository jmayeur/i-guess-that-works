+++
author = 'Jeff Mayeur'
title = "The Cost of Control"
description = "OpenSpec's gates cost me 3X the tokens of a lean spec-only flow. Is that control creating value, or just a feeling?"
keywords = ['openspec', 'agentic development', 'spec driven development', 'software factory', 'token cost', 'value creation', 'ai']
tags = ['openspec', 'agentic development', 'ai', 'learning']
categories = ['learning']
date = 2026-11-17T07:00:00-07:00
draft = false
+++

As I was writing about why I like the flow of [OpenSpec](../legos/), it occurred to me that I really didn't have a sense of the value, other than the emotional value of a process with controlled gates. I also noticed that my token burn rate was 3X as much as another ad-hoc spec-based project I was working on. That's a real cost, with an unmeasured value.

I've been in dozens of conversations over the last few months where the focus falls on the challenge of equating productivity with value creation. It's nearly universal amongst the senior engineers that I encounter: hand-writing most code is over. It's now doctrine that agents do the typing. It's also very clear that most engineers are struggling to clearly articulate the value of this newfound power. More, sure - but is it really creating consumer value? I'm on team "it was never how long it took to build, it was how long it took to find the right thing to build." The hard part is still the what, not the how.

I'm also squarely in the agent-first camp. I spec - it types. So why would it be important for me to feel good about a process; about the steps, stops and loops? Certainly, if I'm going to be the assayer of shipped code, it's reasonable to want some control, but does that control actually contribute to the value at a rate reasonable to its cost?

OpenSpec generates a lot of non-code output, way beyond the spec itself. The [tasks](https://github.com/jmayeur/gameclock/blob/main/openspec/changes/archive/2026-11-09-panel-bring-up/tasks.md), one of my favorite steps, alone can be thousands of tokens per feature. Add a proposal and design doc on top of the spec itself. That's a lot of tokens - and they get re-parsed at every step as the agent walks through the tasks and checks them off. That's where the token burn comes from.

My assumption has been that it gives me two value paths. First, it allows me to spend more time thinking about the what before building, and second, it leaves a traceable record that can create a solid context base for future work. Anecdotally, I have to say I don't know if those two values actually still hold up.

On one project I've been working on for the last few months, I work solely with a spec - no framework. Each spec begins with a "vibe-code-level" prompt followed by a set of goals, functional and non-functional. The spec is closed with any verifications I require. I run that spec through a red->green->verify->draft-PR->code-review->comment-processing->(loop)->open-PR flow and then begin any additional appropriate verification before merging.

The hard part - I'm less involved. I don't have the same sense of ownership because I'm reading and approving less. It's not one-shot vibe coding, but it's closer, and it's much leaner on token usage. The harder part - I don't see any quality issues or context issues that I had been assuming would happen without the full set of rails.

I'm not ready to abandon OpenSpec - choosing the right model to manage costs while creating non-deliverable outputs goes a long way toward mitigating the impact of the extra output, but I can't cleanly say there's value beyond the feeling of control it gives me. Specs are a must - the agent needs to know what, and how to verify it. The challenge for me over the next few months is to really examine what makes a factory efficient and reliable, and what is really just shiny toys to keep me entertained. There's certainly some value in having a sense of ownership of what's created, but it's a good cost-value question to ask.

How do you know if your agentic pipeline is creating value for you, or for your target audience?
