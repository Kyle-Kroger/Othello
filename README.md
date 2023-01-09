# Othello

I created the board game othello using react! The game will show you avalible places a player can place pieces as well as automatically flip pieces for you. A game log on the side keeps track of each players moves.

**Link to project:** http://recruiters-love-seeing-live-demos.com/

![alt tag](http://placecorgi.com/1200/650)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, React, Styled Components

A friend had to build Othello as an interview question and I thought it was such an interesting and fun question I decided to see if I could do it myself. Once I had an idea for the logic I thought I might as well work on my react skills at the same time and thats how this project came to be.

First, I had never played Othello before or knew any of the rules so I had to learn all of those. In college I had built a chess game in C# using 2d arrays and struggled with it a lot. Given that Othello also uses a game board with pieces I thought that starting with a 2d array to hold the state of the game would be a good idea. I was surprised at how well it actually worked and how much easier it was to do then the Chess game. This was one of the first times that I really felt that I had made major improvements with programming.

### Initial logic

Here is what I initally layed out for the logic of the project

**Game Flow**

- Create the game board as a component
- Have each square be a component
- visually pieces are in square but have an opacity of 0 until black or white is placed
- Initialize board state for start of game

**Game Loop Starts**

**Validate Moves**
Not vaild if filled
Not valid if no neighboring pieces
Create functions to check vertical, horizontal, diagonal sandwichs
If nearby piece is opposite color run function matching direction piece is in
functions should return opposite 'bread' piece if there is one or -1 if no match (Where to store ???)
Highlight all valid moves
Highlighted spots become clickable

User clicks on a highlighted spot
Spot is filled with current player's color
flip tiles that are between the clicked tile and the returned tile from the from the function

Switch player

**Ending Game Loop**

Game ends where their are no valid moves
Check if a player had no vaild moves in a variable
If this value is true and the next player also has no valid moves end game
Otherwise end game after 60 tiles have been placed (aka game board is filled)

## Optimizations

- A better way to show that the game has ended
- ~~ A button to start a new game ~~
- The ablity to play against a computer AI.

## Lessons Learned:

This project really helped me to better understand how 2d arrays works as that is how I went about building the board for the game.
