# Othello

I created the board game othello using react! The game will show you avalible places a player can place pieces as well as automatically flip pieces for you. A game log on the side keeps track of each players moves.

**Link to project:** http://recruiters-love-seeing-live-demos.com/

![alt tag](http://placecorgi.com/1200/650)

## How It's Made:

**Tech used:** HTML, CSS, JavaScript, React, Styled Components

Here's where you can go to town on how you actually built this thing. Write as much as you can here, it's totally fine if it's not too much just make sure you write _something_. If you don't have too much experience on your resume working on the front end that's totally fine. This is where you can really show off your passion and make up for that ten fold.

## Optimizations

A better way to show that the game has ended
A start a new game button
The ablity to play against a computer AI.

## Lessons Learned:

This project really helped me to better understand how 2d arrays works as that is how I went about building the board for the game.

###Game Flow

Create the game board as a component
Have each square be a component
visually pieces are in square but have an opacity of 0 until black or white is placed
Initialize board state for start of game

###Game Loop Starts

Validate Moves
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

###Ending Game Loop

Game ends where their are no valid moves
Check if a player had no vaild moves in a variable
If this value is true and the next player also has no valid moves end game
Otherwise end game after 60 tiles have been placed (aka game board is filled)
