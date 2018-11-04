const ui = require('./ui.js')

const gameBoard = []

let rowLength = null

let playerXWin = null
let playerOWin = null
let gameOver = false

// dummy data for testing
const playerX = {
  name: 'Player X',
  id: 1,
  email: 'me@email.com',
  moveValue: 'x'
}

const playerO = {
  name: 'Player O',
  id: 2,
  email: 'you@email.com',
  moveValue: 'o'
}

// defining current player on page load
let currentPlayer = playerX

// toggles players from player_x to player_o or vice versa
const togglePlayer = function () {
  // ternary if statement to see who is the currentPlayer and toggle accordingly
  currentPlayer === playerX ? currentPlayer = playerO : currentPlayer = playerX
  ui.displayCurrentPlayer(currentPlayer)
}

const initializeBoard = boardLength => {
  for (let i = 0; i < boardLength; i++) {
    gameBoard.push('')
  }
  rowLength = Math.sqrt(gameBoard.length)
  playerXWin = playerX.moveValue.repeat(rowLength)
  playerOWin = playerO.moveValue.repeat(rowLength)
  // ui.displayCurrentPlayer(currentPlayer)
  return gameBoard
}

const checkForOver = function () {
  checkForPlayerWin()
  checkForPlayersTie()
  // console.log('playerXWin is ' + playerXWin)
  // console.log(rowLength)
  // console.log(currentPlayer.moveValue)
}

const checkForPlayerWin = function () {
  checkForColumnWin()
  checkForRowWin()
  checkForLRDiagWin()
  checkForRLDiagWin()
  // if ()
  // console.log('playerXWin is ' + playerXWin)
  // console.log(checkForRowWin())
  // console.log(checkForColumnWin())
}

// Checks to see if a player has its moveValue in columns
const checkForColumnWin = function () {
  const accumulator = (acc, val) => acc + val
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
      // console.log('y is ' + y)
      // console.log('column checker', winColumnChecker)
      // if winColumnChecker can be reduced to three x or three o,
      // then the player wins.
      if (winColumnChecker.reduce(accumulator) === playerXWin || winColumnChecker.reduce(accumulator) === playerOWin) {
        console.log(`${currentPlayer.name} wins`)
        gameOver = true
        ui.announceWinner(currentPlayer)
      }
    }
    // console.log('column checker ' + x + ' is ', winColumnChecker)
  }
}

// Checks to see if a player has its moveValue in valid rows
const checkForRowWin = function () {
  const accumulator = (acc, val) => acc + val
  // iterates through the first index in each row
  for (let x = 0; x < gameBoard.length; x += rowLength) {
    // console.log(x)
    // sets a new variable to represent the starting index
    let y = x
    // captures the values of the column
    const winRowChecker = []
    // iterate through the columns by skipping row length
    for (y; y < x + rowLength; y++) {
      // push tile value to winColumnChecker
      winRowChecker.push(gameBoard[y])
      // console.log('y is ' + y)
      // console.log('row checker', winRowChecker)
      // if winColumnRowChecker can be reduced to three x or three o,
      // then the player wins.
      if (winRowChecker.reduce(accumulator) === playerXWin || winRowChecker.reduce(accumulator) === playerOWin) {
        console.log(`${currentPlayer.name} wins`)
        gameOver = true
        ui.announceWinner(currentPlayer)
      }
    }
    // console.log('row checker ' + x + ' is ', winRowChecker)
  }
}

const checkForLRDiagWin = function () {
  const accumulator = (acc, val) => acc + val
  const winDiagChecker = []
  // iterate through the array by skipping diagonally left to right
  for (let y = 0; y < gameBoard.length; y += (rowLength + 1)) {
    // push tile value to winDiagChecker
    winDiagChecker.push(gameBoard[y])
    // if winDiagChecker can be reduced to three x or three o,
    // then the player wins.
    if (winDiagChecker.reduce(accumulator) === playerXWin || winDiagChecker.reduce(accumulator) === playerOWin) {
      console.log(`${currentPlayer.name} wins`)
      gameOver = true
      ui.announceWinner(currentPlayer)
    }
  }
}

const checkForRLDiagWin = function () {
  const accumulator = (acc, val) => acc + val
  const winDiagChecker = []
  // iterate through the array by skipping diagonally left to right
  for (let y = (rowLength - 1); y < gameBoard.length; y += (rowLength - 1)) {
    // push tile value to winDiagChecker
    winDiagChecker.push(gameBoard[y])
    // console.log(winDiagChecker)
    // if winDiagChecker can be reduced to three x or three o,
    // then the player wins.
    if (winDiagChecker.reduce(accumulator) === playerXWin || winDiagChecker.reduce(accumulator) === playerOWin) {
      console.log(`${currentPlayer.name} wins`)
      gameOver = true
      ui.announceWinner(currentPlayer)
    }
  }
}

const checkForPlayersTie = function () {
  // console.log('checking to see if its over')
  // console.log(playerWin)
  const checkForEmptyTile = val => val !== ''
  // getting double console logs because check for tie runs the checkForPlayerWin function
  if (!gameOver && gameBoard.every(checkForEmptyTile)) {
    console.log('It\'s a tie!')
    gameOver = true
    ui.announceTie()
  }
}

// button that is simulating a click on a given tile
const onAddMoveValue = function (event) {
  // console.log('you clicked' + event.target.id)
  ui.clearErrorMessage()
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
      console.log(gameBoard)
      // console.log(currentPlayer)
      checkForOver()
      if (!gameOver) {
        togglePlayer()
      }
    }
  }
}

module.exports = {
  initializeBoard,
  onAddMoveValue
}

// Addtional resources:
// for changing value types https://javascript.info/type-conversions
