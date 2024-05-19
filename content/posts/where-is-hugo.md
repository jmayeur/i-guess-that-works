+++
title = 'Where Is Hugo'
tags = ['Hugo', 'DSL', 'DNS', 'TXT Record', 'Azure Static Web Apps', 'Domain Registrar', 'Julia Evans', 'Markdown', 'Name Servers']
date = 2024-05-18T20:00:00-07:00
draft = true
+++
# It's Alive

## Hugo + Markdown
If you've spend much time in the programming space, [Markdown](https://en.wikipedia.org/wiki/Markdown). It's a great lightweight approach to structuring a document. You can choose your own adventure when it comes to level of structure, and that lends itself nicely to the world of blogging. Because it's essentially a template [DSL](https://martinfowler.com/dsl.html), it's relatively easy to go from MD --> HTML. But I'm getting way ahead of myself, so let me back up.

## How Did You Get Here?
If the answer is "...entered https://iguessthatworks.com in the browser..." you're as correct as you need to be. But, I still had questions about this magical flow. I can't recommend Julia Evans [How DNS Works](https://jvns.ca/blog/2022/04/26/new-zine--how-dns-works-/) zine, or for that matter anything that's been [posted](https://jvns.ca) by Julia. But there was something even more interesting to me about how this [Azure Static Web App](https://azure.microsoft.com/en-us/products/app-service/static) goes from some server in Azure to a browser.

It will take a few rambling posts to get there, but this one will cover a bit of the magic behind a [TXT](https://www.cloudflare.com/learning/dns/dns-records/dns-txt-record/) DNS Record.

### Key Pieces
- Domain Registrar
- Name Servers
- DNS Records
- Truck sized -well-I-guess-we-cans-
- DIG

## Welcome
The key 


