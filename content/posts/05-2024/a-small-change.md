+++
author = 'Jeff Mayeur'
title = 'A Small Change'
keywords = ['Estimation', 'Accessibility']
description = 'Get things done is important, but do not sacrifice the good for the quick'
tags = ['Estimation', 'Accessibility']
date = 2024-05-21T17:00:00-07:00
draft = false
+++

# Everything is a 1 Point Story

## A lot has been said
Many smarter folks than I have waxed on about the minefield that is Estimation. [Martin Fowler](https://martinfowler.com/bliki/PurposeOfEstimation.html) and [Camille Fournier](https://skamille.medium.com/yes-virginia-you-can-estimate-that-e33303eec9cf) have thoughts for more useful than I on the topic. Google and Reddit will take you places as well.

Thankfully I'm no longer in a professional role where estimation is anything other than - give me the Fiscal this will land. Even when I was closer to the daily grind, I often found creative ways to avoid providing anything close to a timeline. Not that I see estimates as good or bad necessarily; rather for me, the cells in my head would most often lock onto "okay how am I going to do this" well before I got to how, how much or how to sequence...

There was a phase in my career where not un-jokingly I would posit that any Story/Task/Problem was exactly 1 Story Point. This developer snark may well have coincided with with a phase where I was subject to the perils of [SAFe](https://scaledagileframework.com/story/), but my logic was somewhat sound.

It seemed for a least that period, everything took about the same amount of time. It was partly due to how I approached work, with long flow states for larger problems, and quick bursts with greater idle time for smaller problems. It was also likely due to a level of maturity when it came to breaking down stories into consumable chunks.

## There's always a but
On the one hand this made planning meetings really bearable. Toss up a story, shout 1, and move on. A whole backlog groomed in 5 minutes! Nobody really believed the estimates, but they weren't any more arbitrary than calling everything a 3, which seems to be the [Thermal stabilization of superconducting sigma strings and their drum vortons](https://journals.aps.org/prd/abstract/10.1103/PhysRevD.65.103520) a.k.a team maturity estimation marker.

The problem was that efficiency had replaced thought. I and the teams I was working with had reached that maximal level of trust where we could chunk through anything tossed our way. Intake; slap the keyboard; ship. Repeat. I've you've been developing for a while, you've probably had this happen to a team you've worked with.

But with build pipeline humming, there was a distinct lack of chatter about slow topics, like:
- Where are we going with this?
- Is this going to work for us if <insert pivot> happens?
- Do we even know what <inert code leaf> does anymore?
- Is this something we should even do?
- ...

There are a few names for this phase, all boiling down to "knowing enough to be dangerous". When as a developer you have the fundamentals down, but you haven't crashed at high speeds enough times to know how easy it is for things to go awry.

## Yeah so
We'll recently I encountered an ask in a work context, that was so easy, so small I spent most of my time just cracking jokes about how many months it would take. I didn't even really think about the ask. But then a much smarter coworker than I pointed out that the ask would create an [Accessibility](https://www.w3.org/TR/WCAG21/) issue in the experience. Once it was pointed out to me, had all of the phases of shame, guilt, disappointment, etc that I hadn't even taken a second to evaluate the ask. It was good to be humbled.

That humbling had made me think about this little memory capture venture. [Was this site accessible](https://pagespeed.web.dev/analysis/https-iguessthatworks-com/6xtz9m1bw4?form_factor=mobile)? - Well, nope, it's not, and that's not great.

![Lighthouse Accessibility Score of 77](/images/a-small-change/accessibile.png)

I'll be spending the next few posts seeing how I need to update the site's current [Clarity Hugo Theme](https://github.com/chipzoller/hugo-clarity/tree/master) with either a Fork, or overrides to get things right. Hopefully this will be a fun journey.


### QOTD
“There is nothing more deceptive than an obvious fact.”
― Arthur Conan Doyle, The Boscombe Valley Mystery - a Sherlock Holmes Short Story