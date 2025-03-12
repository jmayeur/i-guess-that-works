+++
author = 'Jeff Mayeur'
title = 'Go Play'
keywords = ['GOLANG']
description = 'Thoughts on errors in GOLANG.'
tags = ['GOLANG']
categories = ['GOLANG', 'Best Practices']
series = 'GOLANG'
date = 2025-02-25T06:00:00-08:00
draft = false
+++

# What's in a Mistake?

## REPL

[go.dev](https://go.dev/play/p/TaAQ_1Y2f9U) is a pseudo "read, eval, print, loop" (REPL) environment that allows you to quickly jot out some Go and execute it. REPLs can be helpful when you are just starting to work with a new language. They let you experiment with the language itself without the overhead of creating a full project.

True [CoPilot](./go-pilot.md) and it's peers have lessened the burden of creating a new project, but it can still be helpful to just play without having to worry about installing any libraries or packages that you'll later have to unwind. Half the reason I end up getting a new laptop every few years is to avoid having to undo all of the let-me-just-brew this new toy and see what it does.

For the recent Go project I undertook, one of the first things that struck me was the way [Go approaches error handling](https://go.dev/blog/error-handling-and-go). 

>In Go, error handling is important. The language’s design and conventions encourage you to explicitly check for errors where they occur (as distinct from the convention in other languages of throwing exceptions and sometimes catching them).

There are lots of ways I've seen errors be handled but the most common is the above mentioned throw and sometimes catch. Go has vague hints of the Java [throws](https://docs.oracle.com/javase/tutorial/essential/exceptions/declaring.html) pattern where methods would declare their errors. But the approach Go takes is even more straight ahead; you're forced to recon with a failure when it happens rather than letting it bubble.

```go
// You can edit this code!
// Click here and start typing.
package main

import (
	"fmt"
	"log"
	"math/rand"
	"time"
)

func maybeErr() (string, error) {
	r := rand.New(rand.NewSource(time.Now().UnixNano()))
	v := r.Float32()

	if v < 0.5 {
		return "", fmt.Errorf("Random Error: %.2f", v)
	}
	res := fmt.Sprintf("Random Success: %.2f", v)
	return res, nil
}

func main() {
	r, err := maybeErr()

	if nil != err {
		log.Fatal(err)
	} else {
		fmt.Println(r)
	}

}
```

## Is that Good?

I don't know. There's definitely some pros...
1. If the error happens in code you write, it's probably good to determine what to do with it?
2. It should reduce the amount of "escaped" errors
3. It's an explicit pattern - it helps create consistency in the coding style

But what about some of the patterns that have been drilled in my head over the years?
- Don't catch errors unless you know what to do with them, let them bubble to the last responsible moment so the code closest to the caller can figure out what to do next
- Don't catch and re-throw unless you can add valuable information
- Don't insulate callers from mistakes; make it clear if an API/Interface is being misused

Really it's subjective. I like Go's approach but I don't think it's hands down impossibly better than anything I've seen. There's a little nugget in the way Go approaches error handling that fits with one of it's larger "I'd rather this, than that" conceits. Sometimes when writing code it's better to be verbose.

Go as a language is willing to incur the overhead of more verbose conventions in order to ensure consistency and predictability. The key here is that you don't have to guess what a Go Package function will do if it fails. If it returns and Error and it's not nil - deal with it.  Otherwise you don't need to think about it.

Take a logging func. There's really not a reason it would return an error. What would you do with an Error from log.message() if it returned one? Parsing functions or httpRequests or any of the more complex func calls in Go can be explicit, the will return an Error result soyou don't have to cross your fingers. If Error is Nil great continue on, if not figure out what should happen next.

## It's usually this murky

Sometimes I wish coding was an easy "this is 100% correct and no other way will do" vocation. It's not. There a myriad of "it works doesn't it?" scenarios that leave the poor developer in a lurch. Can it be better, Should it? Will I regret it if I don't?

This is probably the biggest hurdle for ML generated software. The n"ot wrong but maybe not rightness" of just about everything. As nice as it was to just type `create a Go project with unit tests` into a chat prompt and get a sample project with a Makefile, I don't yet see a way that even a "reasoning" model will able to think about how code might evolve; how code might read; how when code should or shouldn't handle errors. Mimicry is definitely good at getting something, but sometimes you need to put the code into a REPL, see it, run it, debug it, and decide what the least amount of effort is to get the right-enough answer.

### QOTD
I refuse to join any club that would have me as a member.
― Grouch Marx
