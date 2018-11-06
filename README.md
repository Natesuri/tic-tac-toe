suri-tic-tac-toe-client

A GA WDI portfolio project

Deployed Here: https://natesuri.github.io/tic-tac-toe/

Technologies Used: HTML, CSS, JS
  Used flexbox and bootstrap for creating the document and styling
  game logic is dynamic and can be used to play and check wins on any sized board.
  Uses jQuery to update game ui and to commuincate with a ruby API via AJAX calls.

Planning and Execution
  Set out to make a dynamic game logic for tic tac toe that could handle any square game board size.
  This required a iterating through a game board and checking for winning and tieing situations using dynamic variables.
  Using the sqrt of the gameboard length, or row length,
  winning scenarios could be calculated by the patterns they exhibit relative to the row length.
  For example, a column victory is a string of Xs or Os that is equal to the row length, and
  that occurs in the gameboard array every rowLength.
  Creating this dynamic game logic was the main goal along with finishing the other MVP requirements.

Unsolved and unfinished content
  Not the final page structure, and needs styling.
  Will replace sign in, sign up, and change password with modals that appear on clicking a button.
  Will also add a rules button and information and improve the data styling
  of the user game history.
  Also want to make the board size dynamic. The game logic can handle any sized square board.
  Will use jquery to created board on game start and add ids to all the tile divs on creation.

Wireframes and User Stories:
  https://www.dropbox.com/sh/5jcibyd95t1z2la/AAAEpA_zZJ2FTOXLYh0TQykVa?dl=0
