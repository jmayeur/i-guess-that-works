# Go Fish — Design Document (Pseudocode)

## Overview

The game is split into four logical modules: **Card**, **Player**, **Game**, and **Main**. Each module owns a clear slice of responsibility. The design supports 2–6 players (human and/or AI) in a CLI environment.

---

## Module: Card

Owns the raw building blocks — suits, ranks, individual cards, the deck, and a player's hand.

---

### Enum: Suit
```
Suit = { Spades, Hearts, Diamonds, Clubs }
```

### Enum: Rank
```
Rank = { Ace, Two, Three, Four, Five, Six, Seven,
         Eight, Nine, Ten, Jack, Queen, King }
```

---

### Object: Card
```
Card
  properties:
    rank : Rank
    suit : Suit

  methods:
    toString() → "Ace of Spades"
    toShortString() → "A♠"
```

---

### Object: Deck
```
Deck
  properties:
    cards : list of Card

  methods:
    create()
      -- build one Card for every (Rank, Suit) combination → 52 cards total

    shuffle()
      -- randomize card order in place

    deal(n) → list of Card
      -- remove and return the top n cards
      -- error if fewer than n cards remain

    drawOne() → Card or null
      -- remove and return the top card
      -- return null if deck is empty

    size() → number
    isEmpty() → boolean
```

---

### Object: Hand
```
Hand
  properties:
    cards : list of Card

  methods:
    add(cards)
      -- append one or more cards to the hand

    hasRank(rank) → boolean
      -- return true if at least one card of this rank exists

    takeByRank(rank) → list of Card
      -- remove and return all cards matching rank

    collectBooks() → list of Rank
      -- find every rank that appears exactly 4 times
      -- remove those cards from the hand
      -- return the list of completed ranks

    size() → number
    isEmpty() → boolean
    toString() → human-readable card list
```

---

## Module: Player

Manages player identity, their hand, their completed books, and AI decision-making.

---

### Object: Player
```
Player
  properties:
    id       : number
    name     : string
    hand     : Hand
    books    : list of Rank    -- completed four-of-a-kind sets
    isHuman  : boolean

  methods:
    bookCount() → number
      -- return length of books list

    recordBook(rank)
      -- append rank to books

    score() → number
      -- same as bookCount, used at end of game

    -- AI only --

    chooseRank() → Rank
      -- pick the rank in hand with the most copies
      -- (ties broken randomly)

    chooseTarget(otherPlayers) → Player
      -- pick a random opponent who still has cards
```

---

## Module: Game

The rules engine. Controls turn flow, enforces Go Fish rules, and tracks overall game state.

---

### Enum: Phase
```
Phase = { Ask, GoFish, GameOver }
```

### Object: TurnResult
```
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

---

### Object: Game
```
Game
  properties:
    players       : list of Player
    deck          : Deck
    currentIndex  : number    -- index of the active player
    phase         : Phase
    history       : list of TurnResult

  methods:
    create(playerNames, humanFlags)
      -- validate 2–6 players
      -- build Player objects
      -- create and shuffle the Deck

    start()
      -- deal 7 cards each for 2 players, 5 cards each for 3–6 players
      -- collect any opening books from starting hands
      -- set phase = Ask

    currentPlayer() → Player
      -- return players[currentIndex]

    ask(targetIndex, rank) → TurnResult
      -- validate phase is Ask
      -- validate targetIndex is a different, eligible player
      -- validate rank exists in asker's hand

      -- if target has rank:
         cards = target.hand.takeByRank(rank)
         asker.hand.add(cards)
         books = asker.hand.collectBooks()
         record any new books on asker
         set turnEnds = false   (asker goes again)

      -- if target does not have rank:
         set phase = GoFish
         set wentFishing = true
         set turnEnds = true

      -- build and store TurnResult
      -- if turnEnds: call advanceTurn()
      -- return TurnResult

    goFish() → TurnResult
      -- validate phase is GoFish
      -- draw one card from deck
      -- add card to asker's hand
      -- check for new book
      -- set phase = Ask
      -- advanceTurn()
      -- return TurnResult

    advanceTurn()
      -- move currentIndex to the next player who still has cards
      -- if no eligible players remain: set phase = GameOver

    isOver() → boolean
      -- return true when deck is empty AND all hands are empty

    winners() → list of Player
      -- return the player(s) with the highest book count

    scores() → map of name → bookCount

    eligiblePlayers() → list of Player
      -- return players who still have cards in hand
```

---

## Module: Main

Entry point and CLI loop. Handles input/output, leaving all rule logic to Game.

---

### Functions
```
main()
  game = setupGame()
  game.start()
  runGameLoop(game)

setupGame() → Game
  -- prompt for number of players
  -- prompt for each player's name and whether they are human or AI
  -- return Game.create(names, humanFlags)

runGameLoop(game)
  -- loop until game.isOver():
       printState(game)
       takeTurn(game)
  -- printFinalScores(game)

takeTurn(game)
  -- if currentPlayer is human: humanTurn(game)
  -- else: aiTurn(game)

humanTurn(game)
  -- display hand to the player
  -- prompt: choose a target player
  -- prompt: choose a rank to ask for
  -- result = game.ask(targetIndex, rank)
  -- printResult(result)
  -- if result.wentFishing:
       result = game.goFish()
       printResult(result)

aiTurn(game)
  -- target = currentPlayer.chooseTarget(otherPlayers)
  -- rank   = currentPlayer.chooseRank()
  -- result = game.ask(target, rank)
  -- printResult(result)
  -- if result.wentFishing:
       result = game.goFish()
       printResult(result)

printState(game)
  -- show current player's name
  -- show human player's hand (hide AI hands)
  -- show book counts for all players
  -- show cards remaining in deck

printResult(result)
  -- narrate what happened: who asked whom, for what, and the outcome

printFinalScores(game)
  -- display winner(s) and full score table
```

---

## Data Flow Summary

```
main
 └── setupGame()       → creates Game
 └── game.start()      → shuffle + deal
 └── runGameLoop()
      └── takeTurn()
           ├── humanTurn()  or  aiTurn()
           │    └── game.ask(target, rank)
           │         ├── success → cards transferred, check books
           │         │             turnEnds = false → ask again
           │         └── "Go Fish" → phase = GoFish
           │              └── game.goFish() → draw card, check book
           │                                  advanceTurn()
           └── (repeat until game.isOver())
```

---

## Key Design Decisions

**Turn continuation.** When a player receives cards they ask again immediately. `TurnResult.turnEnds` signals whether the turn passes, keeping this logic inside Game rather than in the UI.

**Book detection.** `hand.collectBooks()` is called automatically after any cards are added, so the hand is always in a valid state.

**AI extensibility.** `chooseRank` and `chooseTarget` live on Player, making it easy to swap in a smarter strategy (e.g. memory of past asks) without touching Game.

**Phase gating.** `ask` and `goFish` validate the current phase before executing, preventing invalid sequences of calls regardless of how the UI is built.
