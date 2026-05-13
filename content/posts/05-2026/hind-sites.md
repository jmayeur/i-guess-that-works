+++
author = 'Jeff Mayeur'
title = "Hind Sites: The World of MicroSites"
keywords = ['engineering', 'web', 'microsites', 'hugo', 'vibe-coding', 'cloudflare']
description = "A series on building and hosting small static and interactive web experiences — what worked, what didn't, and what I'd do differently."
tags = ['engineering', 'web', 'learning']
categories = ['engineering', 'learning']
series = 'The World of MicroSites'
date = 2026-05-08T07:00:00-07:00
draft = false
+++

## Preface

This series isn't intended to be a comprehensive review of technology tools or platforms to build & host small static or interactive web experiences. There are plenty of platforms out there for building WYSIWYG community sites, or e-Fronts for small businesses. With the wave of vibe-coding there are now an expanded set of paths that include a wider set of cloud platforms. One thing I am sure of is that there is no best-for-all answer in any technology domain.

This is mostly just for me to gather my thoughts on what I liked about the platforms I chose, and what I wish was easier. For me when I want to learn something I need to read about it, use it and then try to explain what I think it means to anyone who will listen. A few callouts: the 3 experiences I built were all very simple, 2 are public and one is an internal informational site. The public sites use OSS frameworks and the internal is pure old-fashion HTML, JavaScript and CSS. Two of the sites are majority vibe coded and one is a hand-roll just to see if I could still put something together.

## A Brief Aside on AI Layoffs

Given the recent slew of "AI" driven tech layoffs it seems like it can't hurt to double down on a few thoughts I've been forming on the AI productivity shift. Watching what's happening at Cloudflare doesn't fill me with a ton of confidence in where they are going. I'm a pragmatist, and I definitely believe that digital product teams can be much more productive with AI tools, and I see the through-line to reducing operational costs and maintaining delivery capacity. The gap for me is the value of many-minds; sure you can have a team of 2 do what a team of 6 used to do, but this wave of intelligence tools doesn't have the capability to prevent you from doing the wrong thing faster — that's something people are still better at.

I believe the ability to reliably automate digital product development is more complicated than some tech companies have concluded. Do I think they will get there eventually? Yes, but I think it's both a longer timeline and will require new ongoing operational investments to sustain. Much as I think about the challenge of codifying a business problem into an automated flow, I focus on the number of edges or decision points. Each point is a multiplier of failure paths — at some point you are almost assured that what you build will fail for some percentage of users, and you will continually need to find and address those edges before they create cascading failure.

For Cloudflare, I have no real insight into the internal forces driving their layoffs; but reading their [blog from a few weeks back](https://blog.cloudflare.com/internal-ai-engineering-stack/) it does seem like they're on the right path to build a robust pipeline (no call out about Accessibility? — tsk tsk). I'm sure their engineering team is extremely talented, yet I'm pretty sure there will be some fun surprises in the next few months that maybe would have been avoided if they were able to re-imagine the long term operational model and the costs associated with automating the infinite.

## Projects

- **Resume** — Being a jobseeker again meant that I needed to dust off my [resume](https://jmayeur.dev). I have thoughts on [resumes](../day-4-whats-next/), but I need one, and being that I'm a technologist it made sense to go digital.
- **[Localmatal](https://localmatal.com)** — I wanted to go a little bit beyond a basic static site, nothing that would break the bank, but something that would in theory at least support a community level experience.
- **Informational Site** — I wanted the simplest experience to host some information and documents without using a SaaS platform. I know every tech leader out there is cringing — why build it if you can just use \<insert platform here\> — but sometimes it's just fun to make things.

## Build Goals

They were slightly different for each project, but the core focus was on trying to understand the state of play outside of corporate edicts and infrastructure guardrails. What would I do if I didn't have to stick to an existing set of conventions, and frankly — is it any better out in the wide open? I explicitly avoided all-in-one platforms like Wix or Squarespace, or even something slightly more flexible like WordPress, Vercel and Netlify. Each of those has a purpose and there are times I would definitely reach for them. In this case I wanted gateways to larger cloud platforms where I could continue to poke and prod as new ideas come my way.

## Series Goal

This isn't a buyer comparison, it's primarily just a log for me to note what I enjoyed and what I might want to improve. Mostly it's just study notes to prep me for whatever tests are coming my way.

## Up Next

```
10 PRINT Hello 2000
20 GOTO 10
```
