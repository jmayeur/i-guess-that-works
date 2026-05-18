+++
author = 'Jeff Mayeur'
title = "BASIC 101"
keywords = ['engineering', 'web', 'microsites', 'html', 's3', 'basic']
description = "A simple internal documentation microsite built with plain HTML and hosted directly from S3."
tags = ['engineering', 'web', 'learning', 'ai']
categories = ['engineering', 'learning']
series = 'The World of MicroSites'
date = 2026-05-13T07:00:00-07:00
draft = false
+++

## The Way Back Machine

I don't recall if I encountered [Applesoft BASIC](https://en.wikipedia.org/wiki/Applesoft_BASIC) or [Logo](https://en.wikipedia.org/wiki/Logo_(programming_language)) first. I do remember playing [Summer Games](https://en.wikipedia.org/wiki/Summer_Games_(video_game)) on an Apple *][c*, and then thinking how cool it would be if I could make my own game. I tried BASIC, and after a lot of HPLOT-ing around, I only managed to make a really primitive version of [Missile Command](https://en.wikipedia.org/wiki/Missile_Command). It was fun, at least for a few rounds, and I loved that I could, with my limited math and comprehension of computers, make something I could interact with.

Much later, when I actually realized that you could have a career in this wacky world of programming, I found myself drawn to the simple-tools-for-simple-tasks mindset. I got to play around with [SGML](https://en.wikipedia.org/wiki/Standard_Generalized_Markup_Language), one of the predecessors of HTML, and I loved the order and simplicity of how markup could structure information.

Like BASIC, SGML and HTML were accessible ways to begin creating digital experiences. You could create something without a lot of lift, and if you wanted, you could go deeper and end up creating ever more complex things. Yes, there are better tools than BASIC for game creation, and building large, complex web experiences with raw HTML is not particularly efficient, but it works, and sometimes it's just what you need.

## What?

I wanted a simple way to publish some internal documentation. There wasn't enough content to justify a CMS, especially since it was a fixed set, not an ever-expanding knowledge base. With Claude, I could easily say, "create a statically generated website with this content," but where's the fun in that? Instead, I opted for building ~12 pages of content based on a modified version of [HTML5 Boilerplate](https://github.com/h5bp/html5-boilerplate/blob/main/src/index.html).

## How?

[This](https://jmayeur.github.io/classic-html-template/src/) is a generified version of what was built. It's the most basic HTML+CSS site. The actual experience is uploaded into an S3 bucket and accessed directly. There's proprietary information in the docs, so there was no need for OAuth or any other mechanism to restrict access. Frankly, if I had my druthers, it might just be hosted on an under-the-desk server somewhere, but those are increasingly hard to come by.


## What'd I learn?

Well, I was already familiar with S3; I've used it personally and professionally for all kinds of static web experiences and content. In this case, I really just wanted to reinforce the idea that a simple problem can be solved with a simple solution. Sometimes there's just not enough there to justify the overhead of complex engineering. Abstraction layers are great when you have to support continually scaling systems, but sometimes you really just need the most basic approach possible.

Since this was a publish-once-and-forget effort, there was no CI/CD, no GitHub Actions, just upload and view. Easy-peasy, fresh and breezy.

## Would I do this again?

Yep, if the problem was similar, or similarly lacked complexity, I might just choose the same approach. One could ask why this isn't just a PDF, or an Office doc, and the main answer was that it needed to link to and embed other web content seamlessly. Sure, you can toss a YouTube video into a Word doc, but I've never enjoyed that type of experience. Even when dealing with images, I didn't want to have to download or copy and paste a bunch of hosted images into a doc; that's the beauty of HTML.


## Up Next

The Great Un-Pause



Series: The World of MicroSites
