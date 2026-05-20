+++
author = 'Jeff Mayeur'
title = "A Frame for Intelligence"
keywords = ['ai', 'intelligence', 'models', 'agents', 'learning']
description = "A thought experiment on intelligence, model limits, and the need for practical evaluation frames."
tags = ['ai', 'learning', 'engineering']
categories = ['learning', 'engineering']
date = 2026-05-20T07:00:00-07:00
draft = false
+++

I like reading research papers. There was a phase in my life where I had the good fortune to spend hours a day in a library. I would find a Master’s or Doctoral thesis to clod through, and see what, if anything, I could understand. Trust me, it’s more fun than it sounds.

These days I have less time, but when I can eke out an hour or more, I’ll see if there’s anything on arxiv.org that sounds interesting. To be clear, most of what I read is well beyond my understanding. One of my goals in the next few weeks is to read through [this paper](https://arxiv.org/pdf/2605.19154) a light and breezy examination of the indirect methods to study inter-generational mobility. I can read this paper, and I probably will understand aspects, but there’s no short-term, reasonable way for me to have any deep comprehension, and certainly no expertise.

I read these papers for two main reasons. First, I treat it somewhat like a crossword. I want to exercise my brain. When I see a line like “… captures stochastic deviations in the relation between child and parent characteristics.”, I learn new terms - “stochastic deviations” - and I can then happily mis-apply them in new contexts, like claiming a temporary loss of memory was just a stochastic deviation.

Secondly, I read these papers to see if I want to learn more. I don’t really want to be an economist, but I am fascinated by the way modern economics has become so interleaved with sociology. I like thinking about people, and economics seems like a fascinating lens through which to view social interactions. Even if I don’t become an expert, I want to have a clear map of what I do and don’t understand about these domains, and be able to reliably apply my knowledge when called upon.

Which leads me to my current set of meanderings. Intelligence. Once again, I find that I lack the expertise to have any deep understanding of how intelligence works, and what frameworks are valid tools for evaluating it. The paper I’m going to trod through next, [On the Measure of Intelligence](https://arxiv.org/pdf/1911.01547), promises to be miles above my pay grade, but it might give me some tools to understand a thought experiment I’m using to connect intelligence and AI.

**Thought Experiment**

Say I’m a developer, and I make a simple solitaire app. One of my goals for this app is to keep the player engaged as long as possible. After some initial experimentation, I determine that players have a unique pattern of loss-to-quit behavior. Some players lose 1 game and they’re out, others 4. I also notice that some players quit if they have too many easy hands in a row. I encode some logic that observes the player’s behavior and tailors their loss/win/easy mix based on their habits.

I would assert that in this case the solitaire app has intelligence; my intelligence. Based on my observations of data, I created a decision tree that governs the experience for players.

Say I then write a paper showing the outcomes based on my decision tree and its impact on player play durations. Say also that other papers are written and published detailing how gameplay dynamics and perceived challenge/reward feedback impact player play duration. For kicks, let’s also include the broader field of research on gameplay & game theory.

I then take a tool that has the ability to parse those papers, classify their content, and build a very large map that correlates player behavior, player perceptions of game “fit”, and outcomes based on those factors. If I use that map to generate a ruleset for how to govern player experiences in a brand new card game app…

Does this new app have intelligence? If so, from where? Is it specifically the map’s intelligence, or is it just an amalgamation of intelligences of dubious provenance? What I want to spend time with is really centered in section II.1.3 of the On the Measure of Intelligence paper. I’m not going to zip off a monograph excoriating the limitations of digitally synthesized reasoning. Instead, I want a frame I can use to explore how to interact with the coming slew of AI models. When I talk about the tools I will end up using, I want confidence in my understanding of their specific capabilities.

Okay but - why? I mean, it’s just a tool to automate something, so why does it matter how I perceive it?

One habit I’ve added to my semi-daily thought loop is asking Claude to read a blog post I’ve made and suggest other areas for me to think about. For this post [Superish-IC](https://iguessthatworks.com/posts/05-2026/superish-ic/) it recommended creating something specific about Bond vs Build. That totally makes sense. The tool did parse the content and figure out what I was trying to get at, and then reasonably suggested that I needed more on my main point.

{{% centerimage src="https://bygl.osu.edu/sites/default/files/styles/720/public/field/image/Spurge%20-%20Prostrate%20Size-12%20Shoe%202012.jpg?itok=Ls_FHGfF" alt="Prostrate spurge next to a size-12 shoe" title="Prostrate spurge" width="70%" %}}

*Image source: [Ohio State University BYGL](https://bygl.osu.edu/sites/default/files/styles/720/public/field/image/Spurge%20-%20Prostrate%20Size-12%20Shoe%202012.jpg?itok=Ls_FHGfF)*

I also asked Claude (Sonnet 4.6) to find spelling and grammatical errors. It found “"spurge" → should be "surge" — "the current spurge of Super-IC content". Spurge is actually a type of plant.” Which is correct, and completely wrong. Spurge is the word I want. It’s the semi-discordant voice coming through; it doesn’t make sense and most people will read it as surge, but some people might see spurge. They might look it up or already know what it means, that its sap is a skin irritant. Someone might find the subtle slight humorous, or at least that it adds a little extra spice to the flow.

This limit of Sonnet (Opus 4.7 thinking also doesn’t like spurge) tells me that at least these models can’t evaluate my voice intent. Even with additional prompting around what the voice of the piece is, these models don’t have a frame to evaluate the edges of my intelligence.

This is a very long way to say I want a frame I can use to determine the limits of these tools. In the same way I wouldn’t hand a typical kindergartner a differential equation and expect a valid answer, I want a map that tells me this tool can be trusted to understand & deliver these tasks. Just as I have limited areas of expertise, and other areas where I can grasp the basic intent, I need to make sure those who depend on me understand my limits. My use of intelligence tools to date has mostly been trial and error, but I want to solidify how I think and talk about model+agent capabilities - especially as the push to automate accelerates.