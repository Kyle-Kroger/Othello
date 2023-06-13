# Othello

I created the board game othello using react! The game will show you avalible places a player can place pieces as well as automatically flip pieces for you. A game log on the side keeps track of each players moves.

**Link to project:** http://recruiters-love-seeing-live-demos.com/

![alt tag](http://placecorgi.com/1200/650)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, React, Styled Components

A friend had to build Othello as an interview question and I thought it was such an interesting and fun question I decided to see if I could do it myself. Once I had an idea for the logic I thought I might as well work on my react skills at the same time and thats how this project came to be.

First, I had never played Othello before or knew any of the rules so I had to learn all of those. In college I had built a chess game in C# using 2d arrays and struggled with it a lot. Given that Othello also uses a game board with pieces I thought that starting with a 2d array to hold the state of the game would be a good idea. I was surprised at how well it actually worked and how much easier it was to implement and understand then when I had build chess. This was one of the first times that I really felt that I had made major improvements in my understanding of programming concepts.

### Initial logic

Here is what I initally layed out for the logic of the project

**Game Flow**

- Create the game board as a component
- Have each square be a component
- visually pieces are in square but have an opacity of 0 until black or white is placed
- Initialize board state for start of game

**Game Loop Starts**

**Validate Moves**

- Not vaild if filled
- Not valid if no neighboring pieces
- Create functions to check vertical, horizontal, diagonal sandwiches
- If nearby piece is opposite color run function matching direction piece is in
- functions should return opposite 'bread' piece if there is one or -1 if no match (Where to store ???)
- Highlight all valid moves
- Highlighted spots become clickable

**User Makes Move**

- User clicks on a highlighted spot
- Spot is filled with current player's color
- flip tiles that are between the clicked tile and the returned tile from the from the function
- Switch player

**Ending Game Loop**

- Game ends where their are no valid moves
- Check if a player had no vaild moves in a variable
- If this value is true and the next player also has no valid moves end game
- Otherwise end game after 60 tiles have been placed (aka game board is filled)

### Using styled components

This was the first project that I really used styled components in and I learned so much. One of the big things that I learned and really liked was having the ablity to change styles based on JavaScript variables. It made implementing the logic I had come up with into the CSS very easy. Instead of constantly having to change and add classes I could do something simple like this:

```
background-color: ${(p) =>
    p.enabled ? "var(--color-highlight-700)" : "var(--color-primary)"};
```

So whenever in the logic of the code a square is flagged as enabled the color of it's square is changed.

### React and Memoization

When I had started this project I had never heard of Memoization before, or if I had I didn't remember about it. I quickly ran into a problem that was causing my code to unlessly loop. I later found out that this was because every time a component renders the functions are rebuilt so are "different" even if the function code would be the same. This caused the app to think that a change had been made and a new render was needed. This new render recreated the function so a "new" change had happened causing another new render. This means an infinite loop had been created.

After some reading and trying to figure out and understand the problem I came across memoization and the useCallback function of react.

## Optimizations

- A better way to show that the game has ended
- ~~A button to start a new game~~
- The ablity to play against a computer AI.

## Lessons Learned:

This project was a really great way for me to learn and better understand a few new technologies as well as greatly improve my understanding of how to use 2d arrays. I learned the purpose of memoization and why it is important. I also learned an alternative to traditional css along with some of its strengths and weaknesses.
