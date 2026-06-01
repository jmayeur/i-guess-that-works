+++
author = 'Jeff Mayeur'
title = "POLP"
keywords = ['security', 'cloud', 'design', 'agents', 'ai']
description = "Thoughts on the Principle of Least Privilege and agentic design choices."
tags = ['security', 'design', 'agentic', 'ai']
categories = ['engineering']
date = 2026-06-01T07:00:00-07:00
draft = false
+++

One of the useless things I spend time on is [mtn-aqi.com](https://mtn-aqi.com/) and a bunch of its siblings. I have a few air quality monitors and I occasionally like to play with the data they collect. The data itself isn’t incredibly accurate, the temperatures are off from the official record. The humidity data is worse, I’m not really sure how you get 104% Humidity (it’s actually the compensation math).  The PM2.5 data is probably the most accurate. The PMS5003 sensor itself is pretty reliable, and surprisingly durable. For me that’s good enough, I’m not running a scientific study, nor looking to manage indoor air quality. Mostly I just want to know if it’s really bad more mostly good outdoor air quality; in other words should I open the windows or not.

{{% centerimage src="/images/polp/aqi.jpg" alt="AQI health score screenshot" title="Health score" width="70%" %}}

This visualization of the data is purely agentic code. It’s the type of experience I’m happy to farm off. The parts I was interested in was the setup and configuration in Cloudflare. The day summaries are JSON blobs that are pushed from the sensor at 12:01AM PDT for the prior 24 hours. The UI is a simple Astro page. There’s a worker that proxies the R2 bucket, serving JSON files. Straightforward stuff; but here’s the tangent for the day.

When setting this experience up in Cloudflare I was struck by a few choices Claude Sonnet 4.6 made. One of them was the architectural decision to make the R2 bucket publicly accessible. When I asked Claude to explain its design choice, Claude responded with something I might have said in my early-mid career. The justification was that the data was going to be public, so why not simplify the design, less configuration, less code, no worker. Solid points, just what I might have said.

There’s this interesting line I think a lot of developers cross. Early on you’re relying on others, either co-workers, or if you’re of a certain age maybe a trip to the former Powell’s Technical Books [Powell's Technical Books](https://www.librarything.com/venue/3813/Powells-Technical-Books) to guide system design. At some point you cross this threshold where not only do you have enough confidence in your skill base to drive decisions, you’ve likely also encountered some of the downstream risks of over-engineered rigidly designed systems.  

With the volatility of technical teams, maybe you have inherited a system that’s been through many hands. The original design has diverged in several places, becoming a muddled burden to maintain. With this experience, you might think it prudent to drive simplicity in the hopes that those who inherit what you build will have an easier path for maintenance.  If you do follow this path you might come out the other side and realize that despite or maybe because of your good intentions the project has become a winding mass of incongruous code just like an over-engineered project. 

Going back to Claude’s choice, the justification wasn’t wrong. It smells like a violation of the [Principle of Least Privilege](https://learn.microsoft.com/en-us/entra/identity-platform/secure-least-privileged-access), but it’s not giving read/write access to sensitive data. So, why did it bother me, and why didn’t I just click okay and make the R2 bucket public? Why create a proxy worker? 

There’s a few technical reasons, it makes local development easier, it reduces the need to manage CORS, it’s allows flexibility in the data storage and it lets me standardize O11y.  However it’s not really the technical reasons that made me push back. This project is a little side quest to fill a few hours, I don’t have to worry about someone inheriting this code, but after 20+ years of creating systems, I’ve come to realize it’s better to choose a path where you know the risks are less even if it’s more work. Yes over-engineering is a risk but when I asked the question, “Is there any benefit to the user with Claude’s choice?” The answer was no. My experience told me that reducing risk by reducing surface area was more important that doing something less complicated.

Even in the world of agentic coding, I think I’m arguing that books like Bob Martin’s ["Clean Code"](https://www.oreilly.com/library/view/clean-code-a/9780136083238/) still matter. It’s important to think about design, to question things like [this bit of code](https://github.com/jmayeur/aqi-impact/blob/6c86d7dbb63a17de901fb21c46ebfca1d77670a7/functions/scores/%5B%5Bpath%5D%5D.js#L14) that would have let people crawl around the R2 bucket.  

A principle like Single Entry, Single Exit may not be supremely important in the age of agentic coding, but if you’re going to rely on agent loops to prevent bad code or design choices, you have to know why it’s sometimes better to do the harder things. You need to know how to configure your agents, and you have to assume that you can’t always rely on them to follow instructions. You need to know where to spend your precious human review time. I think this is something we’re going to struggle with as in industry, we’re going to need a new compendium of thought - “The Agentic Developers Guide to Strategic Validation” that captures the wisdom of generations of craft, and turns it into a functional approach to manage mountains of questionable output.
