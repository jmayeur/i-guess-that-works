# Go Fish — TDD Class Design

Inspired by the Bowling Game Kata approach: let the tests drive you toward the simplest structure
that works. Start with the `Game` and let `Card`, `Deck`, `Hand`, and `Player` emerge only when
the tests demand them.

---

## Design Philosophy (Kata-Style)

Just like the Bowling Kata resists the temptation to model `Frame` as a class, resist modeling
every Go Fish noun up front. The test sequence below reveals which structs earn their existence.

---

## Structs

### `Card`
Represents a single playing card.

| Field  | Type   | Notes                            |
|--------|--------|----------------------------------|
| `Suit` | string | "Hearts", "Diamonds", etc.       |
| `Rank` | string | "2"–"10", "J", "Q", "K", "A"    |

**Methods**
- `String() string` — human-readable label, e.g. `"A of Spades"`
- `Equals(other Card) bool` — rank equality (suit is irrelevant for matching)

---

### `Deck`
An ordered collection of cards that can be drawn from.

**Methods**
- `NewDeck() Deck` — builds a standard 52-card deck
- `Shuffle()` — randomizes card order
- `Draw() (Card, bool)` — removes and returns the top card; bool signals empty deck
- `IsEmpty() bool`
- `Size() int`

---

### `Hand`
The cards held by one player.

**Methods**
- `AddCard(card Card)`
- `HasRank(rank string) bool`
- `TakeCardsOfRank(rank string) []Card` — removes and returns all matching cards
- `CollectBook() int` — scans for sets of 4; lays them down and returns how many books were scored
- `IsEmpty() bool`
- `Size() int`
- `Ranks() []string` — distinct ranks currently held (used to validate asks)

---

### `Player`
Wraps a `Hand` with identity and a book count.

**Methods**
- `NewPlayer(name string) Player`
- `Ask(target *Player, rank string) bool` — asks `target` for a rank; returns true if cards were received
- `GoFish(deck *Deck) bool` — draws one card; returns true if it matched a rank already held
- `Books() int` — total books scored so far
- `Name() string`

---

### `Game`
Orchestrates the full game. This is where the tests drive almost all the logic.

**Methods**
- `NewGame(playerNames []string) Game` — creates players, builds and shuffles the deck
- `Deal()` — distributes opening hand (7 cards for 2 players, 5 cards for 3+)
- `CurrentPlayer() *Player`
- `TakeTurn(targetPlayerName string, rank string) TurnResult` — core kata method; executes one
  complete turn: ask → receive or go fish → collect books → advance turn
- `IsOver() bool` — true when deck is empty AND at least one player has an empty hand
- `Winner() *Player` — player with the most books; nil if game is not over
- `Scores() map[string]int` — snapshot of all players' book counts

---

### `TurnResult` (value type)
Returned by `TakeTurn` to keep test assertions readable without inspecting internal state.

| Field          | Type   | Notes                                  |
|----------------|--------|----------------------------------------|
| `GotCards`     | bool   | true if target had the rank            |
| `FishedCard`   | *Card  | the card drawn, if Go Fish occurred    |
| `FishMatched`  | bool   | true if the drawn card matched a held rank |
| `BooksScored`  | int    | books laid down this turn              |
| `TurnChanged`  | bool   | false when player earns another turn   |

---

## Suggested Test Sequence (Kata Order)

Following the kata spirit, write tests in this order so each one forces exactly one new concept:

1. **New game has correct number of players** → drives `NewGame`
2. **Deal gives each player the right hand size** → drives `Deal` and `Hand.Size`
3. **Ask a player who has the rank — receive cards** → drives `Ask` and `Hand.TakeCardsOfRank`
4. **Ask a player who lacks the rank — Go Fish** → drives `GoFish` and `Deck.Draw`
5. **Four of a kind forms a book** → drives `Hand.CollectBook`
6. **Fish card that matches held rank scores a book immediately** → drives `FishMatched`
7. **Player who asks successfully goes again** → drives `TurnResult.TurnChanged`
8. **Game ends when deck is empty and a hand is empty** → drives `IsOver`
9. **Player with most books wins** → drives `Winner`
10. **Tie is handled gracefully** → hardens `Winner`

---

## What Deliberately Has No Class

| Temptation     | Why to resist it                                                  |
|----------------|-------------------------------------------------------------------|
| `Book`         | Just an int counter on `Player`; no behavior of its own          |
| `Turn`         | Fully captured by `TurnResult`; no persistent state needed       |
| `RuleEngine`   | Rules belong in `Game.TakeTurn`; extract only if tests demand it |
| `CardPair`/`CardSet` | Over-modeling rank groupings before tests require it        |
