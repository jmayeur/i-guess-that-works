+++
author = 'Jeff Mayeur'
title = 'Categories & Series Front Matter'
keywords = ['Hugo', 'Front Matter']
description = "A wrap on the Front Matter classifications with Categories & Series"
tags = ['Hugo', 'Front Matter', 'Series', 'Categories']
categories = ['Taxonomies']
series = ['Customizing Front Matter']
date = 2024-05-19T20:00:00-07:00
draft = false
+++
# More Discovering

## The Final Front Matters 
Well at least for now. Just to complete the standard set of [Front Matter](https://gohugo.io/content-management/front-matter/) "discovery" enabled Front Matter bits, and to setup some future work experimenting with [on-site search](https://gist.github.com/eddiewebb/735feb48f50f0ddd65ae5606a1cb41ae) I'm going to add Categories & Series Front Matter tags where necessary.

## What's it look like
The full set of [Front Matter](https://gohugo.io/content-management/front-matter/) tags for this page is in the code block below.  I'm essentially using the following hierarchy
* series - explicitly related posts, either a topic that's been split across 1..n posts, or a re-visiting a topic post an original
* categories - top level topic(s) for a post. at most 2-3, preferably 1 per post. this is intended to group a post into very general buckets 
* tags - key concepts covered by a post, can be 1-9, but preferably less than 5. 

For this post, the category is `Taxonomies` because that's how Hugo identifies them. They series is `Customizing Front Matter` because there are now 4 posts that talk about the same general topic of customizing the Front Matter for different outcomes. I could have used `Front Matter` as the category, and I may revisit these choices as the post count grows, but for now it's working the way I'd like it to.

```yaml
+++
author = 'Jeff Mayeur'
title = 'Categories & Series Front Matter'
keywords = ['Hugo', 'Front Matter']
description = "A wrap on the Front Matter classifications with Categories & Series"
tags = ['Hugo', 'Front Matter', 'Series', 'Categories']
categories = ['Taxonomies']
series = ['Customizing Front Matter']
date = 2024-05-28T20:00:00-07:00
draft = false
+++
```
## Why again?
If this is mostly just for me, why do I need all of the bells an whistles? Partly just so I can learn more about how Hugo works. As I mentioned above, I want to see if I can understand how the magic behind `enableSearch = true` Site.Param that enables on-site search really works.

More importantly though, I'm hopeful that I will be persistent enough with posting, that I'll need some help sorting through my own mess of content at some point. Like anything, I'd expect to get better at this over time, and hopefully write at least a baker's dozen of useful thoughts on a page. I'd like to be able to find, recall and hopefully repurpose some of this content in other forms.

## Google or Copilot?
But there are so many other ways to index, search and discover content. Shouldn't I spin up a local [LLM](https://en.wikipedia.org/wiki/Large_language_model) and index everything. Can't I just Google it? Definitely and Sure; but that's part of the fun. I've found myself trying to build the entire [Millennium Falcon Lego Set](https://www.lego.com/en-us/product/millennium-falcon-75192) every time I try a project. I get so spun up on trying to figure it all out, I end up abandoning something without ever really giving it a shot.

For this humble Hugo blog, I'm going to just build something, brick by brick, and hopefully I'll find it turns into something useful along the way.

### QOTD
“If everything seems under control, you’re just not going fast enough.”
― Mario Andretti