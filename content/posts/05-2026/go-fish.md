+++
author = 'Jeff Mayeur'
title = "Go Fish: TDD and Agentic Code"
keywords = ['TDD', 'testing', 'agent', 'development']
description = "Reflections on test-driven development and agent-created code patterns."
tags = ['testing', 'TDD', 'agents']
categories = ['engineering', 'best-practices']
date = 2026-05-28T09:00:00-07:00
draft = false
+++

I’m not a TDD devotee, but throughout my career there have been times when I’ve found it to be an effective pattern—not only to ensure that code does what I expect, but also because it allows me to think about program structure in discrete chunks. The focus on testability has helped me dissect the functional layers of an application in ways I didn’t when focusing on sequence diagrams or flowcharts.

The classic [Bowling Game Kata](http://butunclebob.com/ArticleS.UncleBob.TheBowlingGameKata) is still an incredibly useful exercise, even in the age of agent-driven development. While I think it’s critical to ensure that any agent-created code has unit tests—and that code reviews should start with those tests—I wasn’t sure whether using TDD would materially affect the code’s structure or provide enough benefit to justify the overhead, at least from my perspective.

To start thinking about this, I asked Sonnet 4.6 to give me high-level class-and-function designs using pseudocode. For one, I asked it to use the [TDD Kata Methodology](./go-fish-design-tdd.md), and for the other I asked it to provide a [pseudocode design](./go-fish-design-non-tdd.md).

Go Fish is a very simple game, and unsurprisingly both designs take a similar approach. One area that did catch my eye was the `TurnResult` pseudo-class.


## TDD

### `TurnResult` (value type)
Returned by `TakeTurn` to keep test assertions readable without inspecting internal state.

| Field          | Type   | Notes                                  |
|----------------|--------|----------------------------------------|
| `GotCards`     | bool   | true if target had the rank            |
| `FishedCard`   | *Card  | the card drawn, if Go Fish occurred    |
| `FishMatched`  | bool   | true if the drawn card matched a held rank |
| `BooksScored`  | int    | books laid down this turn              |
| `TurnChanged`  | bool   | false when player earns another turn   |

## Non-TDD

For the non-TDD design, `TurnResult` carries both outcome data and turn metadata.

```text
TurnResult
  properties:
    asker          : Player
    target         : Player
    rankAsked      : Rank
    cardsReceived  : list of Card   -- cards transferred from target → asker
    wentFishing    : boolean        -- true if target had no matching cards
    drawnCard      : Card or null   -- card drawn when fishing (null if deck empty)
    booksScored    : list of Rank   -- any books completed this turn
    turnEnds       : boolean        -- false means asker gets to go again
```

These fields overlap, but the designs express different responsibilities.

| TDD | Non-TDD | Purpose |
|-----|---------|---------|
| `TurnChanged` | `turnEnds` | should the next player go |
| `BooksScored` | `booksScored` | any matches made |

The difference is that TDD keeps `TurnResult` focused on the turn outcome, while the non-TDD version also includes who asked, who was asked, and what they asked for. The non-TDD approach puts that data on the `TurnResult`, but that doesn't really make a ton of sense: it's not the result of the turn, that's part of the turn itself. That feels like clutter or leakage. The TDD-influenced design produced code that could become more easily testable. The `TurnResult` is isolated to its basic logical states, requiring less test setup and validation.

These are just design docs, and either approach could evolve into better or worse code when handed over to a fleet of agents to build out. There's no guarantee that Sonnet would create the same designs if I kicked off a new session. I'll run through some build-outs over the next few days to see where it leads, but it was a good reminder that even though the critical piece is verifying outputs, it might not hurt to drive the creation by building on the learnings of the last 50+ years of software development.