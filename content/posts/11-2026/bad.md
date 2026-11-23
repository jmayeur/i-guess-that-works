+++
author = 'Jeff Mayeur'
title = "Supercalif-Agile-istic™"
description = "A failed SD card and a fresh runbook show how cheap input costs flip the Agile habit of deferring infrastructure, making room for Outside-In and Inside-Out work at the same time."
keywords = ['agile', 'outside-in', 'inside-out', 'runbooks', 'evolutionary architecture', 'raspberry pi', 'agentic development', 'ai']
tags = ['agile', 'agentic development', 'ai', 'learning']
categories = ['learning']
date = 2026-11-23T07:00:00-07:00
draft = false
+++

Things fail. Sometimes even conveniently. Nine years and 4+ months of good service - impressive for an SD card, but it's now BAD. A few days ago one of my Pi-powered photo frames started showing images with gray blocks across the bottom third. I suspected network issues first, then failed ImageMagick transforms, but in the end it was bad blocks on the SD card.

{{< figure src="/images/bad/bad-sd.png" alt="A red and gray SanDisk Ultra microSD card on a wooden desk with BAD written across it in black marker" class="center" >}}

One new SD card and 45 minutes later everything was as good as new. It was perfect timing. I'd just revamped the code and, at the same time, created a runbook to set up a new frame. It's not a complicated project, but still, having a single source of how to get things going was incredibly useful. If this had happened a year later - I might have spent 2-3x as long figuring out how to right the ship without the setup guide.

That runbook only existed because I'd broken an old habit. One dev approach I'm having to relearn is the focus on Outside-In development. Years of hyper focus on Agile development - centered on the User Story and what we need to build now - has trained me to de-emphasize a lot of the "production level" infrastructure until the Last Responsible Moment.

To be clear, that approach has been very useful at reducing waste. Trying to create the perfect Terraform before a single feature wasn't going to yield a high return on effort. Costs needed to be managed to reduce wasted effort. I found myself a big proponent of evolutionary architectures, focusing on the scaffolding, then the framing, then the rough in before obsessing over the finish.

With agents doing the heavy lifting, costs are now very different. Working on the last few projects I've found myself benefiting from an Outside-In approach. If it takes me an hour to spin out an architecture diagram that I end up throwing away - the waste is not only small, but I've been allowed to think deeper about what I'm doing, making any future design choices more sound than they would have been.

The biggest shift for me is being able to focus on the future as well as the now. Beyond design choices, I can now spin up full operational playbooks as a platform is evolving. I don't need to wait until it's an hour before launch and everyone is in a panic. Runbooks are now incredibly cheap to make, and if they become obsolete as a platform evolves, that's not entirely waste.

It's not that I'm suddenly sold on the benefits of W-agi-fall projects, but I do see the value in larger upfront and concurrent project infrastructure workstreams - as long as they are clearly understood to be ephemeral. A runbook written a week into a project is the functional equivalent of a PoC spike. It shows the thinking, matches the current understanding of the domain and sets a floor to build on - but it should never deploy to production.

In some small way, this is the career I've always wanted - every day is a loop of un-learning->discover->re-contextualizing->learning anew. Today's lesson is that cheap input costs unlock a simultaneous Outside-In & Inside-Out approach to building. Tomorrow? We'll see, maybe I'll be sure that I need a structured language to more effectively create a spec, or more likely it's something I've known and haven't considered in years.
