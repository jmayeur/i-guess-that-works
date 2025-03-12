+++
author = 'Jeff Mayeur'
title = 'Go-Pilot?'
keywords = ['GOLANG']
description = 'Thoughts on learning new programming languages.'
tags = ['GOLANG']
categories = ['GOLANG']
series = 'GOLANG'
date = 2025-02-23T06:00:00-08:00
draft = false
+++

# Okay GO

## Finding Footing
I was recently given the opportunity to [create a Go Module](https://go.dev/doc/tutorial/create-module). Go, is one of those languages I've encountered enough to be able to read and debug if I need to but I've never had to put together something from an empty folder.

Early in my career, with this kind of challenge I would have turned to a trusty friend like ["Sams Teach Yourself Java in 21 Days"](https://workbench.cadenhead.org/go/java21days/). Then, as search engines became more prominent I would have cobbled together code examples and articles like ["Example T-SQL Stored Procedures"](https://learn.microsoft.com/en-us/sql/relational-databases/stored-procedures/create-a-stored-procedure?view=sql-server-ver16) to scrape together enough knowledge. When GitHub started it's rise to the behemoth that it is today, I would have found example repos that I could model mine after; as well as how to do "y" in language "z" examples.

This time I had CoPilot. A quick chat asking for "a basic Go Module project with unit testing and linting." Then a quick prompt, "create a function that posts JSON & parses the response with error handling."  Another prompt few prompts; "how to map/reduce in Go", "create UUIDv4", so on and so forth. In this case because I was porting a Node library to Go I could just wholesale paste functions, start editing, and CoPilot would churn out GOLANG equivalents. A few hours later and I was up an running with a fully functional module.

Of course, anyone who is a Go Developer, or at least has a passing understanding of how Go is supposed to be written and what problems it was intended to solve can already point out a bevy of errors in my approach without even seeing any code.

## You Do Care, Don't You?
The dilemma this brings me to isn't a deep-seeded concern that some Algorithm is coming for my job, it's that over the last 20+ years as I've sought faster ways to get-busy-building in a new language I've lost any sense of why I would use that language. 

The ability to produce something functional has become so trivial that I no longer spare a thought to why I would even choose to create something in Go or C, or Java or Kotlin or COBOL. I'm also not enough of a purist to lament the "misuse" of a language. Code for me is only a means to an end. 

What I really care about is whether the code I write is something that will run reliably. Something that will be maintainable, both operationally and be forward facing enough to evolve as requirements change. I don't want to spend the wee-hours of some Sunday night panic-debugging a production issue. I like my me-time.

## Be Your Best Self
With Go, some of my assumptions about languages led me to try to port conventions that made little sense. Linting vs [gofmt](https://pkg.go.dev/cmd/gofmt), or Error Handling via Try Catch vs ["graceful" error management](https://go.dev/blog/error-handling-and-go). I also bristled at having to create buckets of [structs](https://go.dev/tour/moretypes/2) to marshal JSON in and out of API calls, instead of just trusting the JSON blob to be what I wanted. Death to BoilerPlate!

In the end it felt a bit like Go was trying to ensure I did the right thing, but I just wanted to press F5 in [Visual InterDev](https://en.wikipedia.org/wiki/Visual_InterDev). To be blunt, without CoPilots ability to generate Code I think I would have given up on the overhead of defining struct after struct.

That's the rub, I don't think I would have the focus to work through a new language's peccadillos without CoPilot, but I also was left with a lingering doubt about the validity of what CoPilot and I had created. Partly because CoPilot suggested deprecated libraries, and partly because it was clean I hadn't taken the time to understand why GOLANGgo returns Errors versus throw/try/catch.

It's like reading the title and first few sentences of each chapter in a book. You may have some sense of what happened, but you're not likely to understand why, how, or have a meaningful connect to the story that unfolded. But Go.

Go was interesting. There was something a bit different to how it made me work. Yes I did dislike the BoilerPlate. I also felt a little put off by scoping and the structure of packages/imports. But it seemed that despite my willful belligerence, Go was going to make me conform. It was going to make me do the right thing. It was going to drag me kicking and screaming to a good(ish) place.

Because of it's intrinsic design, I was going to be force to be thoughtful about passing errors up the stack. I was going to be very specific about the Typing and Structure of my DAOs. I was going to have very simple files, not a lot of nesting, private functions or other the magic constructs to "just make it work".

## But Really
It's true I am no where near competent in Go. There's no way I can assert that the module I created is high-quality. But I can say that despite my best efforts, Go made me think about what I was doing, and why I was doing it. I think this is a good thing, mostly. But it does leave me with a few dangling questions.

I'm reading the book [FilterWorld](https://www.penguinrandomhouse.com/books/695902/filterworld-by-kyle-chayka/) and there are parallels around the flattening of languages, and the stagnation of development practices. When the predominate algorithms are trained on what's already been written, and developers are pressing tab with alacrity. There's the risk of re-enforcing the suboptimal, the stale or the otherwise limited approaches of the past.

All of this leaves me with questions:
- Are Programming Languages going to stagnate?
- Will the value each language intrinsically has be reduced by the ability to churn out working code without understanding the what how why it does what it does?
- With the push for productivity above all else, how do I remain curious enough to ask why?

It's not that I don't feel good about being able to create a solution, it's that I'm less sure I've solved something, and that rather I've just pasted over it until something breaks. I seems like I need to dig a little deeper into all of this. Next time I suppose.


### QOTD
"A little copying is better than a little dependency.”
― [Go Proverbs](https://go-proverbs.github.io)
