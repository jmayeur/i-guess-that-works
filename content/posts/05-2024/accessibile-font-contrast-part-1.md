+++
author = 'Jeff Mayeur'
title = 'Accessible Font Contrast Part 1'
tags = ['Accessibility', 'color-contrast', 'WCAG 2.1 (AA)']
date = 2024-05-22T17:00:00-07:00
draft = false
+++

# Accessible Font Contrast Part 1

## First the Why
It's fair to assume that this set of blogs won't get much traffic. Sure I'll dink around with things like SEO, or cross posting on [Linkedin](https://www.linkedin.com/in/jeff-mayeur/), but there's too much content for this to get any eyeballs. So for me this goes back to an incident in pre-school.

It was my first day in [Challenger Preschool](https://www.yelp.com/biz/challenger-school-saratoga-saratoga). Many long years ago. After a morning of being read to, experiencing the recess with lots of loud kids, it was time for Art. We were going to make [Paper Bag Puppets](https://tinkerlab.com/paper-bag-animal-puppets/). A brown paper bag, some crayons, glue and scissors, it was going to be great. And I kicked some butt. I was the first kid done with their puppet.

But something was wrong. When I let the teacher know I was done, suddenly she was talking to another adult, and before I knew what was happening I was being led into another classroom with even more kids. I was told to sit at a table, and color.

I was mad, scared, ashamed, confused, really worried... I had no idea why I was in a new room. Either I couldn't understand what the teacher was telling me, or they weren't taking the time to explain what was happening in a way I could grasp. Things were happening to me, and I couldn't understand.

When I was picked up later that day, I heard the teachers explain to my mom, that I was too advanced for the first class (what ever that meant). But what stuck with me about the experience was that when you intentionally, or unintentionally keep information from people, it can be extemely frustrating.

While my experiences are not the same as those with differing abilities, I really want to see if I can start with empathy, and find a way to include as many as possible in whatever I'm trying to get after.

## Okay, What's First
![Image identifying elements where Background and foreground colors do not have a sufficient contrast ratio](/images/accessibility-contrast/contrast.png)

I'm going to see if I can fix the contrast between the Tag text and the tag background. I'll start by trying to update the color from #0077b8 to #c5f55c and see if that helps with contrast.

FAIL!!!
![Image with poor font contrast](/images/accessibility-contrast/contrast-fail.png)

Okay, lets see if I can figure out what the SASS is going on.
- I updated the `$theme: #0077b8` value in an assets/sass/_variables.sass to `$theme: #c5f55c` - and it changed the color of the font, but the background is updated as well.. hmm
- If I find the html `<a href="http://localhost:1313/tags/dsl/" class="post_tag button button_translucent" title="dsl">` that renders those links, I see that there's a button_translucent class that comes from [here](https://github.com/chipzoller/hugo-clarity/blob/8412edb369414537eabc4de1ecf6f3b8edf70c50/assets/sass/_components.sass#L188). I see the `background-color: rgba($theme, 0.15)` call. Maybe what I need is to increase that contrast with the original colors

Better?
![Image with better font contrast](/images/accessibility-contrast/contrast-better.png)

But, it doesn't have a [Color Contrast Ratio](https://webaim.org/resources/contrastchecker/) (CCR) of 4.5:1. The WebAIM calculator doesn't quite know what to to with these colors, but even just an quick glance would tell me I'm off. Not to mention I haven't even looked at the Dark Mode contrasts. I'll need to spend a little time thinking about this one. First reading a bit more about [color contrast](https://dequeuniversity.com/rules/axe/4.8/color-contrast) and then, since I only loosely understand [SASS](https://sass-lang.com), I'll need to spend a bit of time walking that tree

### QOTD 
“When you change the way you look at things, the things you look at change.”
― Max Planck