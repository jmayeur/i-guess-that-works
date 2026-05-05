+++
author = 'Jeff Mayeur'
title = "Agentic Build Learnings"
keywords = ['cloudflare', 'ai', 'agents', 'engineering', 'bmad', 'learning']
description = "What I learned building and deploying a small app with a fully agentic flow using BMAD and Claude on Cloudflare Pages."
tags = ['engineering', 'learning', 'ai']
categories = ['technical', 'learning']
date = 2026-05-05T07:00:00-07:00
draft = false
+++

One of my goals during this unplanned career reset is to build more depth around what cloud capabilities make the most sense for a given challenge. Like most people, I have tools that I know work, so I go to them by default, but as I now have time I want to explore a bit more.

For inspiration I took a look at an experience I enjoyed using with my kids. [Biketag.org](https://portland.biketag.org) — I liked the experience of exploring, and I'm always game for a bike ride. I took this basic concept of linking photos, and stripped it down to an experience where users upload a photo of a place with a short description of why they love it. Each subsequent photo has to have a description that has some contextual overlap. It keeps the focus on being outside, but allows for a broader connectivity. You can try it at [localmatal.com](https://localmatal.com).

It's a clunky alpha experience and I don't expect much usage, the point for me was to dive a little into the [Cloudflare Pages](https://pages.cloudflare.com) ecosystem. Here's a few things I can say after a few days exploring. I like it. Yes there are definitely lots of alternatives and I like many of them too, but I've found the tooling and products very easy to use. My main complaint is that it will be too easy to spend money. I'll be diving a bit more into the tech stack in other posts, for now here's some thoughts on using a fully Agentic flow to build & deploy this. Note, this isn't set up, built or orchestrated the way I would expect a monetized production experience to be, it wasn't a squad of agents swarming to build an experience.

## Context

I used Claude + Opus 4.7 to work through some initial questions around what platforms made sense to build & host an experience. That led me to [Cloudflare Pages](https://pages.cloudflare.com) + [R2](https://developers.cloudflare.com/r2/). I then shifted to [BMAD](https://github.com/bmad-code-org/BMAD-METHOD) to create the PRD, Architecture, FRs/NFRs and epics, with Claude driving through the build & delivery phases using Sonnet 4.6 Medium.

## Takeaways

### Waste

A recurring challenge I face with Agents is that they can use outdated code, libraries or patterns. Often it's only outdated by a few months, but with the churn created by Agentic development across the board this tends to create waste in the form of rework. In this case there was ~30% waste both in tokens and time. Mitigations would include using Opus 4.7, and of course MCP servers for key platforms or libraries, however even that would likely have more waste than I prefer. This is a side effect of so much churn.

In this case specifically, the key inflection point was based in how agents tend to work. When Claude tried to run `npm create astro@latest`, it failed because the directory wasn't empty (BMAD). Claude took initiative and manually set up Astro. From there, the build-out was going to be off. I could have paused Claude and found a workaround but I was curious where this would go. In the end it failed during deployment to Cloudflare. Claude was able to recover, but this is the type of thing that makes me think there's still a need for non-cursory technical understanding when building with Agents.

### Building for Users vs Use Cases
h
Without some robust loops like test automation and separate cycles around design & user experience, I find the general user experience delivered by Agents to be at best passable. It can be prompted to think about things like WCAG, and you can take screenshots during development and point out how the UI isn't working, but I think there's a long shadow caused by training on code/developer flows. There's a big difference between solving for a functional or non-functional requirement and specifically creating an experience that resonates with users. This is an area I think the whole industry (Figma & Claude Design included) need to spend some more time. It's on me to do more upfront, but I would prefer to have something more integral to the build flow — I'm not a fan of forcing waterfall into a process.

### Tools for Purpose

In the past I've used [BMAD](https://github.com/bmad-code-org/BMAD-METHOD) for the PRD, and [OpenSpec](https://github.com/openspec) for the build. It's a personal preference, but I really did miss the precision and compactness of driving an experience change by change. I can appreciate the speed of handing off large chunks, but I feel like I missed too much about what was made. I'm all for speed, but sometimes a little bit of human in the loop provides a lot of benefit — at least to that human.
