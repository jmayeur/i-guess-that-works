+++
author = 'Jeff Mayeur'
title = "Sloppy Joes"
keywords = ['ai', 'cloudflare', 'swift', 'ios', 'agents', 'pipelines', 'engineering']
description = "Why fast exploratory builds and hardened production pipelines both matter when validating app ideas."
tags = ['engineering', 'learning', 'ai']
categories = ['technical', 'learning']
date = 2026-06-10T07:00:00-07:00
draft = false
+++

I’ve always leaned into a build flow that emphasizes working software. I like iterating on an experience and shaping the architecture at the same time. This is core to Agile: it reduces wasted time on detailed designs that miss the mark with end users. There are limitations to this approach. There’s a temptation to ship as soon as it starts to look finished, without taking the time to review critical aspects of any application, like security or accessibility.

Thesis: Use fast, exploratory builds to validate ideas quickly, then harden the successful ones with a production-ready pipeline.

![Development pipelines illustration](/images/sloppy-joes/pipelines.jpg)

Having clear contracts—expectations around accessibility, security, documentation, coding standards, and design guidelines—can reduce the risks of forgoing upfront planning. But this is an interesting challenge in the world of "vibe coding." I’m trying to stick to my goal of creating two applications a month. Part of that goal is to continue my exposure to different models, refine my thinking, and structure an agentic build flow; partly, I just like building things—it's fun.

This week I’m creating an iOS version of [localmatal.com](https://localmatal.com) — it’s a super-simple web experience hosted on Cloudflare, where I’ve successfully kept operational costs low by actively eschewing real users. I’ve done some work in Swift, lots of debugging, and a few demo apps along the way, but it’s not a primary language for me.

With the release of Fable 5 yesterday, I was curious if it might be a good fit to help me confidently build a quick iOS version. The answer is no — not because it lacks capability, but because the app is far too simple to justify burning that much cash. I asked Sonnet, Opus, and Fable for an opinion; they concurred. Sonnet and Opus suggested they would be ideal for building something this simple.

Cool — so I can build this on the cheap, but since Swift and the iOS ecosystem aren’t areas where I have deep expertise, I’d need some help ensuring I didn’t drive the bus off a cliff. There are a few shortcuts, like the GitHub repo [swift-agent-skills](https://github.com/twostraws/swift-agent-skills). I’ll spend some time reading other repos to see how they structure things, and I’ll phone a friend if I get stuck.

My approach is iterative.
1. Build the base repo, including skills for accessibility and testing, using Sonnet. ✔
2. Use Opus to do an architecture review and update as needed. ✔
3. Use Opus to do a security review. ✔
4. Use the app in a simulator to ensure basic functionality and usability.
5. Run the app on my devices to validate usability.
6. Then pull in additional skills to polish the edges—especially for security.

This is not exactly how I would think of a pipeline if I were building a commercial app or working within an enterprise, but it reflects the same fundamental thought process: focus on what I need to do for each step, don’t overbuild or overdesign, ensure that quality, security, and accessibility meet my expectations, and then consider deploying to users to assess the value created. I’m not likely to push this experience to the App Store, as I have a stated goal of keeping costs low by bypassing end users, but I want to work through all of the steps I might take if I were creating an app.

The big takeaway for me from the last few build-outs has been not to obsess over efficiency, but to think about when waste is reasonable. In this case, even though much of the code Sonnet wrote was rewritten by Opus, there was still value in the first build. It led me to dive into complex questions like app attestation and the eventual barrier I’d hit with Cloudflare’s free Bot Fight Mode. Having mostly working code quickly allows me to spend more time thinking about what I would expect from a native app version.

This leads me to think that development teams may want multiple harnesses/pipelines: ones that intentionally create low-quality applications as cheaply as possible to explore concepts, and a hardened production pipeline that prioritizes operational viability over speed. If a concept is worth exploring I would expect that its source code would be used in a transitional flow to generate specs highlighting issues found by skills like accessibility and security.

Actionable: Try a two-track workflow—rapid, low-cost prototypes to validate ideas, then migrate successful prototypes into a hardened production pipeline for anything you plan to expose to users.

This is something I'm going to experiment with on my next app — will I be happier with the final product of iterative audited builds than I am with a single managed pipeline of agents driving to production?
