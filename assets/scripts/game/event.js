const ui = require('./ui.js')
const gameApi = require('./api.js')

// js gameboard starts as empty array
let gameBoard = []

// temporary hardcoded boardlength
const boardLength = 9

// sets starting game variables
let rowLength = null
// let playerXWin = null
// let playerOWin = null
let gameOver = false

// player objects (could become editable later)
const playerX = {
  name: 'Player X',
  moveValue: 'x'
}

const playerO = {
  name: 'Player O',
  moveValue: 'o'
}

let currentPlayer = playerX

let playerWin

// toggles players from player_x to player_o or vice versa
const togglePlayer = () => {
  // ternary statement to see who is the currentPlayer and toggle accordingly
  currentPlayer === playerX ? currentPlayer = playerO : currentPlayer = playerX
  // passes currentPlayer object to ui
  ui.displayCurrentPlayer(currentPlayer)
  playerWin = currentPlayer.moveValue.repeat(rowLength)
}

const initializeBoard = boardLength => {
  // resetting board on restart
  // creates gameBoard array with value of empty strings
  gameBoard = new Array(boardLength).fill('')
  // defining current player on start game
  currentPlayer = playerX
  // clears tiles of player moves
  $('.tile').text('')
  // displays current player's turn
  $('#message').html(`<h4> It's ${currentPlayer.name}'s turn </h4>`)
  // defines a row length, which can also be used for victory length
  rowLength = Math.sqrt(gameBoard.length)
  // assigns victory length for currentPlayer
  // for example, if playerX's moveValue is x, and the rowLength is three,
  // the winningArray must have 'xxx' as a value for playerX to win.
  playerWin = currentPlayer.moveValue.repeat(rowLength)
  // sets gameOver to false after resetting the game
  gameOver = false
  return gameBoard
}

// after currentPlayer adds a valid move, checks first to see if currentPlayer has won, before checking for a tie.
const checkForOver = () => {
  checkForPlayerWin()
  if (!gameOver) { checkForPlayersTie() }
}

const checkForPlayerWin = () => {
  checkForColumnWin()
  checkForRowWin()
  checkForLRDiagWin()
  checkForRLDiagWin()
}

// Checks to see if a player has its moveValue in columns
const checkForColumnWin = () => {
  // iterates through the indices in the top row
  for (let x = 0; x < rowLength; x++) {
    // sets a new variable to represent the starting index
    let y = x
    // captures the values of the column
    const winColumnChecker = []
    // iterate through the columns by skipping row length
    for (y; y < gameBoard.length; y += rowLength) {
      // push tile value to winColumnChecker
      winColumnChecker.push(gameBoard[y])
      // if winColumnChecker can be reduced to three x or three o,
      // then the player wins.
      checkForWinningMatch(winColumnChecker)
    }
  }
}

// Checks to see if a player has its moveValue in valid rows
const checkForRowWin = () => {
  // iterates through the first index in each row
  for (let x = 0; x < gameBoard.length; x += rowLength) {
    // sets a new variable to represent the starting index
    let y = x
    // captures the values of the column
    const winRowChecker = []
    // iterate through the row 1-by-1 for a row length
    for (y; y < x + rowLength; y++) {
      // push tile value to winColumnChecker
      winRowChecker.push(gameBoard[y])
      // if winRowChecker can be reduced to three x or three o,
      // then the player wins.
      checkForWinningMatch(winRowChecker)
    }
  }
}

const checkForLRDiagWin = () => {
  const winDiagChecker = []
  // iterate through the array by skipping diagonally left to right
  for (let y = 0; y < gameBoard.length; y += (rowLength + 1)) {
    // push tile value to winDiagChecker
    winDiagChecker.push(gameBoard[y])
    // if winDiagChecker can be reduced to three x or three o,
    // then the player wins.
    checkForWinningMatch(winDiagChecker)
  }
}

const checkForRLDiagWin = () => {
  const winDiagChecker = []
  // iterate through the array by skipping diagonally left to right
  for (let y = (rowLength - 1); y < gameBoard.length; y += (rowLength - 1)) {
    // push tile value to winDiagChecker
    winDiagChecker.push(gameBoard[y])
    // if winDiagChecker can be reduced to three x or three o,
    // then the player wins.
    checkForWinningMatch(winDiagChecker)
  }
}

// checks to see if the winningArray matches a player's winning scenarios
const checkForWinningMatch = winningArray => {
  const accumulator = (acc, val) => acc + val
  if (winningArray.reduce(accumulator) === playerWin) { // playerXWin || winningArray.reduce(accumulator) === playerOWin) {
    gameOver = true
    ui.announceWinner(currentPlayer)
  }
}

const checkForPlayersTie = () => {
  // function checks to see if all game tiles are not empty strings (or, a playermove in every tile).
  const checkForEmptyTile = val => val !== ''
  // Checks gameboard for any empty strings before and if game has already been won before announcing a tie.
  if (!gameOver && gameBoard.every(checkForEmptyTile)) {
    gameOver = true
    ui.announceTie()
  }
}

// function triggered when a play clicks on a tile
const onAddMoveValue = event => {
  ui.clearErrorMessage()
  // if game is over, tells player to restart the game
  if (gameOver) {
    ui.gameOverErrorMessage()
    return
  }
  // iterate through the gameBoard array
  for (let i = 0; i < gameBoard.length; i++) {
  // turns tile id into a number
    const tileSelected = Number(event.target.id)
    // compares tile id to the current iteration. If tile has already been selected,
    // ask for a valid move
    if (i === tileSelected && gameBoard[i] !== '') {
      ui.askForValidMove()
    }
    // compares tile id to the current iteration
    if (i === tileSelected && gameBoard[i] === '') {
    // adds the player's value to the array at the index of the selected tile
      gameBoard[i] = currentPlayer.moveValue
      ui.addPlayerMoveValue(currentPlayer)
      checkForOver()
      gameApi.updateGame(currentPlayer, gameOver, tileSelected)
      if (!gameOver) {
        togglePlayer()
      }
    }
  }
}

const onGetGameHistory = () => {
  gameApi.getGameHistory()
    .then(ui.displayGameHistory)
}

const onStartGame = () => {
  // creates a remote version of the game
  gameApi.createGame()
    .then(ui.saveGame)
    .then(initializeBoard(boardLength))
  ui.hideNewGame()

  if ($('#board').hasClass('hidden')) {
    ui.hideShowBoard()
  }
}

const clearUserHistory = function () {
  $('#user-history').html('')
}

module.exports = {
  initializeBoard,
  onAddMoveValue,
  onGetGameHistory,
  onStartGame,
  clearUserHistory
}

// Addtional resources:
// for changing value types https://javascript.info/type-conversions
