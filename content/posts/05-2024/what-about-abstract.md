+++
author = 'Jeff Mayeur'
title = 'Abstract Front Matter'
keywords = ['Front Matter', 'Hugo']
description = 'Figuring out what the abstract param is for'
tags = ['Abstract', 'Front Matter', 'Hugo']
categories = ['Taxonomies']
series = 'Customizing Front Matter'
date = 2024-05-27T12:00:00-07:00
draft = false
+++

# Parade of Params

## What I know and don't
In the [previous post](/posts/05-2024/meta-description/) on the description [meta](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/meta) tag I walked through how the Keywords, description and author meta tags make it onto the page. There was one last related bit of [Front Matter](https://gohugo.io/content-management/front-matter/#readout) that I was curious about, the [abstract](https://github.com/chipzoller/hugo-clarity/blob/8412edb369414537eabc4de1ecf6f3b8edf70c50/README.md?plain=1#L273) param.

I can see there are 2 [partial templates](https://github.com/search?q=repo%3Achipzoller%2Fhugo-clarity%20abstract&type=code) that reference the param. It seems like an alternative to the Summary param, but It's not clear to me if I can just delete that from those templates, and get rid of it, or if there is some other potential use for another way to capture the intent of a post.

## What's in the wild
Sometimes I find it helpful to see how others are using a concept. I may not come to the same conclusion, but their PoV might help me build out mine. In another the [kbenoit-hugo-site](https://github.com/search?q=repo%3Akbenoit%2Fkbenoit-hugo-site%20abstract&type=code) I see some overlap with what the [Clarity Theme](https://themes.gohugo.io/themes/hugo-clarity/) is doing, but I [see](https://github.com/kbenoit/kbenoit-hugo-site/blob/5168262ff710329c0e88761236ff34ec87f2a5d8/themes/academic/archetypes/talk/index.md?plain=1#L15) something similar to what I associate an abstract with.

It's an excerpt for a talk, or academic paper, often containing the key arguments. It's definitely something longer than a Description or Summary, but is certainly in the same content space. Walking through that [repo](https://github.com/kbenoit/kbenoit-hugo-site) I found a lot of structural components that I might need to come back to in the future. But I'm not an [academic](https://themes.gohugo.io/themes/theme-academic-cv/), I don't teach, write research papers, and as far as formal talks; I'm squarely in the realm of extemporaneous rambles.

## To Prune or Not to Prune
In this case, because I don't really like unexpected outcomes, it makes sense to at least remove abstract from the fallback logic.  I understand the intent of having it set up that way. If I write a post with an abstract I may not want to duplicate content just to create a Summary or Description. 

For me though I appreciate the explicit. I really struggle with ambiguous flags like `showCustomFooter: Boolean`. I can assume that if that variable evaluates as `True` a custom "footer" will be shown. What I don't explicitly know is what happens if the variable evaluates to `False`. Does any "footer" show. Is it the default? Is there additional contextual logic.

Where possible I prefer very explicit configurations. If there multiple footers, have an Enum, set a `footerToRender: Enum.Footers` value. Make sure I know what I'm doing when I try to make a change.

In this case, even though I can read the code and figure out what will happen with the `abstract` value, It's less transparent than I prefer. I wont complete prune the `abstract` param, but I will prune the logic.

## But
There's always a but. There are some downsides to this. Obviously the more I customize, the more I own going forward. I can no longer easily migrate to newer versions of the them.

Beyond that, I'm careening towards a path where I might end up having to build a completely custom theme. In some respects that's antithetical to my intent when choosing ([Hugo](https://gohugo.io)). I wanted something light, but not a SASS platform. I wanted to have some control without writing something from scratch.

Going through this exercise with Front Matter and Partial Templates I've encountered a few things that I know will needle me until I clean them up. For instance the `<description>` node in the [rss.xml](https://github.com/jmayeur/i-guess-that-works/blob/main/layouts/_default/rss.xml) has duplicate logic to the [excerpt.html](https://github.com/jmayeur/i-guess-that-works/blob/main/layouts/partials/excerpt.html) template.  In my ideal world, there would be one path to resolve each param. 

I don't have enough data yet to embark on that level of customization. I don't know the world of RSS well enough to determine what the keyword description is most like. Is it meant to function like the [description](/posts/05-2024/meta-description/) meta tag or is it more of a [summary](/posts/05-2024/summing-it-up). For now I'm going to keep it as is, minus the abstract param.

### QOTD
“Quiet people have the loudest minds.”
― Stephen Hawking