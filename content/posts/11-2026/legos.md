+++
author = 'Jeff Mayeur'
title = "Lock-Driven Development"
description = "Two side-project rewrites, one skipped spec-and-validate flow, and why I want intentional gates in my agentic software factory."
keywords = ['openspec', 'agentic development', 'claude code', 'spec driven development', 'software factory', 'side projects', 'ai']
tags = ['openspec', 'agentic development', 'claude code', 'ai', 'learning']
categories = ['learning']
date = 2026-11-10T07:00:00-07:00
draft = false
+++

TL;DR - Be an engineer, map your flow before you go.

I'm a fan of the [OpenSpec](https://openspec.dev) flow. It's a linear approach with gates, both to read through what's been done and to implicitly validate the work. That's something I think belongs in any software factory.

Recently I've been going through my list of old projects, some from a decade ago or more, and deciding if it's worth modernizing. Last week it was a photo frame that loops through all of the photos on my NAS that were taken on that day of the year. It used fbi ("framebuffer imageviewer"), which led to a lot of interesting Google searches when I first built that project in 2017.

When I kicked off the - let's see if we can make this more robust - update I went straight into Claude Code and started poking around. Something I thought might take a few hours ended up closer to 12 and spread across 3 days. Partly this was the challenge of using fbi via a "service". I remember spending several days fighting with that originally. Getting the frame stable, having off hours in the evening, restarting smoothly. It was rough, so watching Opus 5.5 struggle was reassuring. In this case I don't think Opus would have succeeded without me pointing out the mistakes.

The other half of what I did wrong was skipping the Spec --> Validate flow. Even on simple projects, agentic work needs testable gates. Though I'd listed out some goals like resiliency, performance, configurability - I wasn't specific. That was a true self-own. I spent my time arguing with Opus about what it wasn't doing instead of specifying what I expected as a result.

So, lesson learned, I picked my next project - a rewrite of a 64x36 RGB LED matrix driven by an Adafruit hat and a Pi Zero W. I knew there were a few goals. I wanted to see if I could eke out some CPU relief using Rust vs Python (turns out sort of). I wanted to de-hackify a few Frankensteined appendages that I'd added over the years. And remove some dead functionality.

OpenSpec to the rescue? Not so fast says Opus. While models have generally gotten better, the biggest challenge for me is the insistence on trying to be as helpful as possible. When I initialized V2 of my RGB Matrix project I explicitly asked it to analyze the legacy project but not to focus on the features. I wanted to bring the features over one by one via OpenSpec. Opus decided to create a roadmap that indicated how each feature would be brought over using OpenSpec.

OpenSpec itself has been streamlined - removing some of the steps like opsx:verify by default. Validation still happens and the Tasks are verified - but it's automated. Everything happens behind the apply prompt. I had that sinking feeling that I wasn't really driving what was being built - reduced to just approving steps in what was going to be a one-shot build.

Thing is - I still didn't spend enough upfront effort defining what I wanted to happen. I followed the shiny object - I wanted to spend my time in Spec land. I wanted to noodle on how these features would work. I skipped right over how my software factory needed to work. Early on in this agentic transition I landed on an approach of segmented phases with tight inner loops. Agents can go hog wild trying to best themselves to solve a problem within the confines of a segment - but I wanted the control panel - at least for now.

I want Lock-driven development (think canal locks). I'm not going to produce more code, and sometimes I won't even produce better code - but I do have the clearest vision of what I want to build, and for me I need these intentional breaks to force me into self-analyzing loops. Is this going the way I want it? Am I actually making this better or just newer? What would happen if I stopped? What would I change with what I know now?

{{< figure src="/images/legos/panama-canal-lock.webp" alt="The Panama Canal lock, one of the world's largest." caption="The Panama Canal lock, one of the world's largest. Photo: Shutterstock, via [WorldAtlas, \"The Largest Lock Systems in the World\" by Amber Pariona](https://www.worldatlas.com/articles/the-largest-lock-systems-in-the-world.html)" class="center" >}}

There is no model, no matter how advanced, that can drive that self interrogation loop for me. Even if I don't change the course, if I just flip the next lever, the value is in my confidence in where things are going. The reason this matters, even on a simple side project that only exists for me, is something I keep repeating to my kids - "How you do anything is how you do everything." I'm not going to make or lose millions if my RGB Matrix is janky, but there's no reward in practicing failure. In the end, like everything good, it's all about the flow.
