+++
author = 'Jeff Mayeur'
title = 'Go Play'
keywords = ['Java', 'C#', 'Patterns', 'Software Architecture']
description = 'Thoughts on playing, trusting and being a team member or leader that amplifies both.'
tags = ['Software Architecture']
categories = ['Software Architecture', 'Best Practices']
series = 'Software Architecture'
date = 2025-03-11T06:00:00-08:00
draft = false
+++
# I'm Right until I'm Not

## Binders of Interfaces
The provider pattern, at least what used to be the provider pattern was an approach that consumed far t0o many of the limited key strokes that I will press in my life. Mountains of `IDBProvider`, `IConnectionProvider`, `IIOProvider`, `ILoggingProvider` and other unnecessarily redundant boilerplate files that one had to key in before the magic of CoPilot generated projects.

The idea was sound, I mean what if we wanted to switch from Oracle to MSSQL, think of all the refactoring we would have to do. This is classic [premature optimization](https://wiki.c2.com/?PrematureOptimization). There were exactly 0 times in my professional career where I needed to shift a DB without also incurring other major refactors.

To be clear, there are modern takes on a Provider Pattern that are definitely much more useful because they are trying to solve very different problems. The [React Provider](https://www.patterns.dev/vanilla/provider-pattern/) is designed to solve the challenge of making data available down the component stack, preventing the need to pass values down one by one. And this [DotNet Provider](https://learn.microsoft.com/en-us/dotnet/standard/events/how-to-implement-a-provider) is an approach to broker volatile data changes between the source and consumers that need to react to those changes. These types of concerns could fall into the pit of premature optimization if the application is incredibly simple, but once you have a moderately complex experience these patterns both can pay dividends.

A key point in my opposition to the classic `IProvider` versus these alternate Provider Patterns is that I have had direct use cases for the React & DotNet patterns before I adopted them. With the `IProvider` I followed convention without an actual driving case.

## I'm Probably Wrong to Think I was Wrong
The real fault was not the design pattern; it was that I didn't consider the use case I was solving. The likelihood that even a relatively large in-house experience or application is going to need major infrastructure changes frequently enough to justify building in that type of flexibility approaches zero.

If perhaps I was building a package that would be offered as a third party solution that could be bolted onto a customer's existing solution stack. Or if I wanted to create an SDK that would operate in multiple contexts. Maybe if I wanted to create some course material for an important sounding 300 level Software Engineering course?

So, yeah, what I'm saying is; I now actually have a case where I wish I would have started with an IProvider pattern. Thankfully I'm not too far down the path where the refactor is going to cause a ton of rework, but I'm a little embarrassed how thoroughly I derided the use of Interfaces everywhere.

## The Unicorn Case
Here's the thing. I'll stand by my fierce opposition to premature optimization even though I'm now in full re-think/refactor mode. There are a few reasons that I didn't see this coming; but lets start with the actual challenge.

...I love JavaScript. It was the first language where I felt totally unconstrained (despite it being incredibly limited in [early versions](https://webreference.com/javascript/basics/versions/#ecma-script-1-1997)). It was just fun making a tweak, reloading a page and seeing what it would do. Of course, there were challenges and there was [a very important solution](https://en.wikipedia.org/wiki/JQuery#:~:text=jQuery%20was%20originally%20created%20in,being%20led%20by%20Richard%20Gibson) that smoothed those rough edges.

The bumps of those early days are mostly long gone, but theres a few that remain, and that's the quagmire I'm now swimming in. Despite the vast majority of [execution environments](https://developer.mozilla.org/en-US/docs/Glossary/Engine/JavaScript) landing on the V8. There are still a surprising number of edge cases where basic things like like [`crypto`](https://developer.mozilla.org/en-US/docs/Web/API/Crypto) may not be what you think they are.

Without going too far into details I found myself needing to have different Logging, HTTP, IO, Crypto, and a few other capabilities available across a handful of execution environments. I actually needed an `IFetchProvider`.

Worse still I found myself without some of the advantages of the pre-semi-compiled would of DotNet or Java where I could generate an SDK per environment. True I could mimic some of that with WebPack, but I'd be going off the ranch. Besides my goal was to have 1 SDK that could work in every target environment to keep the version mgmt/ops overhead low.

## Life Finds a Way
Beauty is a curse, at least with something like JavaScript. It's not JavaScript doesn't have a way to solve this; rather it's that JS has infinite ways to solve this. WebPack to multiple outputs, or Dynamic Imports or yes even an `IProvider`+Init Config approach. Despite my general aversion to Interfaces I ended up going with that approach. We'll see if I end up regretting it, but like most things in JavaScript it works if you let it.

## Maybe I Learned
That's the thing with building stuff. You might have learned something but you won't know unless you hit that exact right scenario where that - oh yeah I've seen this - strikes again. The kick in the pants for me was to remember that the best you can do is something along the lines of [PDCA](https://asq.org/quality-resources/pdca-cycle)|[OODA](https://en.wikipedia.org/wiki/OODA_loop). Do your thing, ask how it's going and make a plan to make it better.


### QOTD
I'm not half as wrong as I think I am.
― Jeff -the grump- Mayeur
