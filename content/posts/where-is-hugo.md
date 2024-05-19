+++
author = 'Jeff Mayeur'
title = 'Where Is Hugo'
description = 'Being creative is the key to getting things done'
summary = 'Why a TXT DNS Record is both necessary, and fun when it comes to using a custom domain name for this blog'
tags = ['Hugo', 'DSL', 'DNS', 'TXT Record', 'Azure Static Web Apps', 'Domain Registrar', 'Julia Evans', 'Markdown', 'Name Servers']
date = 2024-05-19T09:00:00-07:00
draft = false
+++

# It's Alive

## Hugo + Markdown
If you've spent much time in the programming space, [Markdown](https://en.wikipedia.org/wiki/Markdown). It's a great lightweight approach to structuring a document. You can choose your own adventure when it comes to level of structure, and that lends itself nicely to the world of blogging. Because it's essentially a template [DSL](https://martinfowler.com/dsl.html), it's relatively easy to go from MD --> HTML. But I'm getting way ahead of myself, so let me back up.

## How Did You Get Here?
If the answer is "...entered https://iguessthatworks.com in the browser..." you're as correct as you need to be. But, I still had questions about this magical flow. I highly recommend Julia Evans' [How DNS Works](https://jvns.ca/blog/2022/04/26/new-zine--how-dns-works-/) zine, or for that matter anything that's been [posted](https://jvns.ca) by Julia. But there was something even more interesting to me about how this [Azure Static Web App](https://azure.microsoft.com/en-us/products/app-service/static) goes from some server in Azure to a browser.

It will take a few rambling posts to get there, but this one will cover a bit of the magic behind a [TXT](https://www.cloudflare.com/learning/dns/dns-records/dns-txt-record/) DNS Record.

### Key Pieces
- [Domain Registrar](https://www.cloudflare.com/learning/dns/glossary/what-is-a-domain-name-registrar/)
> Used to register and manage a Domain. In this case I've registered iguessthisworks.com allowing the management of DNS Records for it
- [DNS Records](https://www.cloudflare.com/learning/dns/dns-records/)
> A table of data about a Domain, including details such as where to look for iguessthisworks.com 
- [(NS) Nameserver Records](https://www.cloudflare.com/learning/dns/dns-records/dns-ns-record/)
> Used to lookup who is the authoritative keeper of where to find the pot of gold at the end of the iguessthisworks.com 
- Truck sized -well-I-guess-we-can-
> The [TXT](https://www.cloudflare.com/learning/dns/dns-records/dns-txt-record/) DNS Record is a way to associate a block of text with a Domain. Originally designed to be read by humans, it's become a way to perform a secret handshake between a [Domain Registrar](https://www.cloudflare.com/learning/dns/glossary/what-is-a-domain-name-registrar/) and a [Host](https://azure.microsoft.com/en-us/products/app-service/static)

## Welcome
The key here is the [TXT](https://www.cloudflare.com/learning/dns/dns-records/dns-txt-record/) DNS Record, but there are a few precursors I'll try to cover in other posts including:
- Walking through setting up a basic ([Hugo](https://gohugo.io/getting-started/quick-start/)) site
- Writing the first [post](https://iguessthatworks.com/posts/it-starts-here/)
- Updating to use the [Clarity Theme](https://themes.gohugo.io/themes/hugo-clarity/)
- Creating an [Azure Static Web App](https://learn.microsoft.com/en-us/azure/static-web-apps/get-started-portal?tabs=vanilla-javascript&pivots=github) to create a [blog](https://www.seifbassem.com/blogs/unboxing/azure-static-webapps-blog/)
- [Registering](https://www.godaddy.com) a Domain

That's a whole lot of things, and there's quite a few steps in each part, but I'm jumping ahead a bit to the [Map an existing custom DNS name to Azure](https://learn.microsoft.com/en-us/azure/app-service/app-service-web-tutorial-custom-domain?tabs=root%2Cazurecli). Specifically the [Validate](https://learn.microsoft.com/en-us/azure/app-service/app-service-web-tutorial-custom-domain?tabs=subdomain%2Cazurecli#3-validate-and-complete) part of the flow.

I found this step deeply satisfying, as it's one of the many times where a technology/protocol/strategy/other capability has be repurposed for something likely more useful than it's original intent. Let's start by reading a few TXT records.

[dig](https://www.unix.com/man-page/hpux/1m/dig/) is a very useful tool for looking up DNS information about a domain. From unwinding CNAME chains, to troubleshooting resolution issues, this is a great tool to [get familiar](https://jvns.ca/blog/2021/12/04/how-to-use-dig/) with. We'll use it to read some [TXT](https://www.cloudflare.com/learning/dns/dns-records/dns-txt-record/) records for well known domains.  Let's start by looking at the command.
`dig @1.1.1.1 +ignore +short +bufsize=1024 <domain> txt`
- `dig` - this is the command line tool we'll use
- `@1.1.1.1` - this is a DNS server I want to ask about the txt record. This can be omitted and it will use the server configured for your network
- `+ignore` - skip any cached data
- `+short` - give me the good stuff only, just the record. This can be omitted, you'll just see additional details returned
- `+bufsize=1024` - can help with longer messages. This can be omitted, you may get a truncated response, but that is unlikely
- `<domain>` - which domain do I want to query about
- `txt` - the record type to query. You can query other types like `a` or `cname` to see what you get 

### Bing
```
> dig @1.1.1.1 +ignore +short +bufsize=1024 bing.com txt
"facebook-domain-verification=09yg8uzcfnqnlqekzsbwjxyy8rdck7"
"google-site-verification=OkRY8R261shK5B8uEwvsFZp9nQ2gRoHavGlruok1azc"
"v=msv1 t=6097A7EA-53F7-4028-BA76-6869CB284C54"
"v=spf1 include:spf.protection.outlook.com -all"
```

### Google
```
> dig @1.1.1.1 +ignore +short +bufsize=1024 google.com txt
"globalsign-smime-dv=CDYX+XFHUw2wml6/Gb8+59BsH31KzUr6c1l2BPvqKX8="
"docusign=1b0a6754-49b1-4db5-8540-d2c12664b289"
"google-site-verification=wD8N7i1JTNTkezJ49swvWW48f8_9xveREV4oB-0Hf5o"
"apple-domain-verification=30afIBcvSuDV2PLX"
"v=spf1 include:_spf.google.com ~all"
"onetrust-domain-verification=de01ed21f2fa4d8781cbc3ffb89cf4ef"
"docusign=05958488-4752-4ef2-95eb-aa7ba8a3bd0e"
"google-site-verification=TV9-DBe4R80X4v0M4U_bd_J9cpOJM0nikft0jAgjmsQ"
"webexdomainverification.8YX6G=6e6922db-e3e6-4a36-904e-a805c28087fa"
"facebook-domain-verification=22rm551cu4k0ab0bxs
```
Okay, so that's neat, but why is that useful here. In this case I'm using the [TXT](https://www.cloudflare.com/learning/dns/dns-records/dns-txt-record/) record to prove to Azure that I am the true owner of the domain. 
- Azure provides me with a generated key
- I add that to a [TXT](https://www.cloudflare.com/learning/dns/dns-records/dns-txt-record/) record in the [GoDaddy](godaddy.com) Domain Control Admin
- Azure reads the [TXT](https://www.cloudflare.com/learning/dns/dns-records/dns-txt-record/) record and verifies the data
- Azure allows me to point the iguessthatworks.com Domain to the static web app I've already created 

It's this repurposing of a technology that allows technical hobbyists like myself stitch together the various pieces of creating a blog and finding a way to make it eas(ier) to find. In the many years I've been playing at being a developer, it's this kind of innovative "maybe if we just..." type of solutions that bring me the most joy.

Writing software is often repetitive, even with de-boilerplating tools like [Github Copilot](https://github.com/features/copilot), there is a lot of sameness across all of the projects you get to work on. Encountering a short-cut like this [TXT](https://www.cloudflare.com/learning/dns/dns-records/dns-txt-record/) record approach, is like an inside joke, it makes me chuckle, and appreciate the way we're all just trying to make something work.

While this was only a few minutes in the flow of creating this blog, it's definitely something I want to file away. Sometimes we need to look at the tools we have, and maybe at least for this case use that screwdriver as a hammer, despite what we were told by our elders.

### QOTD
“I have never let my schooling interfere with my education.”
― Mark Twain