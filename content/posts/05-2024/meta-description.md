+++
author = 'Jeff Mayeur'
title = 'Meta Description Tags'
keywords = ['Accessibility', 'Front Matter', 'Hugo']
description = 'Standardizing how meta tag data is set and flows through the system'
tags = ['Accessibility', 'Front Matter', 'Hugo']
categories = ['Taxonomies', 'Accessibility']
series = 'Customizing Front Matter'
date = 2024-05-26T14:00:00-07:00
draft = false
+++
# What am I saying

## Why it Matters
The description [meta](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) tag is another key piece of [site accessibility](https://dev.to/frontend_jedi/creating-web-accessibility-meta-tags-1pcp). In fact there are a few meta tags it would be good for me to ensure are populated with meaningful data. `<meta name="author"..., <meta name="keywords"...and <meta name="description"...". These would all be useful in optimizing everyone's experience on through a site.

## But First
There are few bits to this that I want to work though. The template that is responsible for handling these meta tags is the [opengraph.html](https://github.com/chipzoller/hugo-clarity/blob/master/layouts/partials/opengraph.html), so named because it also generates the [Open Graph Tags](https://ogp.me) that help make your site more machine interpretable. I won't be covering those in this post, except where they overlap with the meta tags. My main focus is to see if I can practice making a page as [screen reader](https://www.afb.org/blindness-and-low-vision/using-technology/assistive-technology-products/screen-readers) friendly as possible.

On other thing I want to figure out, is how to handle all of the different [Summing it Up](/posts/05-2024/summing-it-up) pathways exist in the [Clarity Theme](https://themes.gohugo.io/themes/hugo-clarity/). I see the following summary like pathways
- [Summary](https://github.com/chipzoller/hugo-clarity/blob/master/layouts/partials/opengraph.html#L1)
- [Description](https://github.com/chipzoller/hugo-clarity/blob/master/layouts/partials/opengraph.html#L18)
- [Abstract](https://github.com/chipzoller/hugo-clarity/blob/8412edb369414537eabc4de1ecf6f3b8edf70c50/layouts/partials/excerpt.html#L21)

You can see them in the Page Parameters section of the [Readme.md](https://github.com/chipzoller/hugo-clarity/blob/8412edb369414537eabc4de1ecf6f3b8edf70c50/README.md?plain=1#L273) which leads us to the [Front Matter](https://gohugo.io/content-management/front-matter/#readout). I want to see if I can both keep the level of effort low for creating useful information, and have a consistent approach to each of these values.

## It's Running, but How?
![Image with showing the description meta tag value](/images/meta-description/description.png)
If I visit the [home](/) page and inspect, I can see that the `<meta name="description" content="Musings by Jeff Mayeur on Learning and Working in Technology">` value. In fact if I visit many pages, I see the same exact text for the description. That's not very helpful. I can see that it comes from [this line](https://github.com/jmayeur/i-guess-that-works/blob/main/config/_default/config.toml#L9) of the config.toml (also below).  I see that for a page like [Centering an Image](/posts/05-2024/centering-an-image/) it's actually being overridden by the [Summary](https://github.com/jmayeur/i-guess-that-works/blob/main/content/posts/05-2024/centering-an-image.md?plain=1#L6) value.

Ideally I would have it only be set from a consistent value. There may be times when I want a wordier summary, but a shorter mete description.  I'm also not sure how an `abstract` value would affect this. Time for some experiments

```yaml
config.toml
[params]
  title_short = "It Works"
  description = "Musings by Jeff Mayeur on Learning and Working in Technology"

---
centering-an-image.md
date = 2024-05-24T17:00:00-07:00
summary="Learning how to center an image with Hugo."
```

## What hierarchy (Let's Experiment)

### EXPT 1
#### Set a description, summary, abstract, author and keywords in the config.toml
1. Observe the values set on the [home](/) page
2. Observe the values set on the [Sidebar x002 - Play](/posts/05-2024/sidebar-x002/) page

##### Home Page
| meta tag    | populated by            |
| ----------  | ----------------------- |
| description | Site.Params description |
| keywords    | Site.Params keywords       |
| author      | NOT SET                 |

##### Sidebar x002 - Play Page
| meta tag    | populated by         |
| ----------  | -------------------- |
| description | Page.Summary         |
| keywords    | NOT SET              |
| author      | NOT SET              |


### EXPT 2
#### Set a description, summary, abstract, author and keywords in the config.toml & sidebar-x002.md
1. Observe the values set on the [Sidebar x002 - Play](/posts/05-2024/sidebar-x002/) page

##### Sidebar x002 - Play Page
| meta tag    | populated by     |
| ----------  | ---------------- |
| description | Page.description |
| keywords    | Page.Keywords    |
| author      | NOT SET          |

### Learnings
Okay I can see at the Page level description is set by the hierarchy below. Keywords is Page Only. and Author - we'll that doesn't even work. I think I have enough to move forward.
1. Page.Description
2. Page.Summary
3. Site.Description


## Level 1 Get Things Loaded 
Here's my plan.
1. Fix the missing author meta tag
2. Set a description on every page, this with be shorter than the summary
3. I'll remove the fallback to Summary. I may have some pages where the summary & description end up being the same, but I will come up with an explicit solve for that when I need it.
4. I'll leave the fallbacks to the Site param values for now, but I'm not sure about long term yet
5. For now, I will set keywords on each page. In the long run I may merge this with the Tags or Categories capability, but I don't have a big enough sample size.

## Future Me
One thing I've noticed, is that I really dislike not having any sort of validation/test/etc on build. I will need to add a build step to validated that these values are set as expected.

### QOTD
“Access to communication, in its widest sense, is access to knowledge. We must not be pitied, nor reminded we are vulnerable. We must be treated as equals and communication is the way we can bring this about.”
― Louis Braille




