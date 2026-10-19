+++
author = 'Jeff Mayeur'
title = "From Plinko to Shape Sorter"
description = "How my mental model of System One models missed the mark, why it mattered, and what I'm using instead."
keywords = ['mental models', 'system one models', 'embeddings', 'classification', 'learning', 'ai']
tags = ['mental models', 'embeddings', 'ai', 'learning']
categories = ['learning']
date = 2026-10-19T07:00:00-07:00
draft = false
+++

In a recent conversation on these System One models I learned that my mental model for how to place them in my toolbox was way off. Even though that model correctly let me interpret them as a way to more efficiently classify requests, I'd missed the mark.

The working structure I was using resembled a basic rules engine - an intentional Plinko - that would bucket a request based on the best fitting pattern. Functionally that's not entirely wrong, but where I was playing fast and loose was in the specificity of how queries would be classified - there's no ruleset doing the scoring - it's strictly embeddings producing a score that pinpoints the fastest answer.

- Why my mental model was misleading 
    - It implied human curation - some nearest-neighbor match based on pre-selected evaluations. 
- Why that's not great 
    - Even if my model let me understand valid use cases, it highlights the danger of misjudging where they fit - A human tuned ruleset might imply System One models can easily be tuned to handle emotional distinctions - something they're explicitly not good at
- How'd I come to the wrong conclusion
    - I started with reading the use-cases and backtracing to how I might solve that problem instead of focusing on how they work, and how that influences the chosen use cases
- What would I do differently next time
    - Read the docs - or at the very least a digest of several docs before I focus on where to put these tools. 5 minutes with this [paper](https://arxiv.org/html/2609.37647v1) would have done it.
- What mental model do I have now
    - For now I'm sticking with a variant of "It's an adaptive shape sorter - trained to create shape holes that can sort the incoming shapes incredibly efficiently"


Okay, why share this? For me, I am extremely reliant on having fast mental model of tools. The rate of change these days multiplied against the breadth of stacks I'm trying to keep up on means that I need to observe, classify and move on fairly quickly. I suspect I'm not the only one.

For me the lesson is the 999,999th time this week that I need to be reminded not to overload my plate at the buffet. It's okay not to know every new thing, in fact it's better not to know than to misalign understanding with reality. Will I fall down a similar hole in the near future? Probably, but I'm very lucky to have a community that is ready to toss me a rope when I do. What's a mental model you've had to rebuild lately?
