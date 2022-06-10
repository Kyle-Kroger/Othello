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
