const gameBoard = []

let rowLength = null

// dummy data for testing
const player_x = {
  id: 1,
  email: 'me@email.com',
  moveValue: 'x'
}

const player_o = {
  id: 2,
  email: 'you@email.com',
  moveValue: 'o'
}

// defining current player on page load
let currentPlayer = player_x

// toggles players from player_x to player_o or vice versa
const togglePlayer = function () {
  // ternary if statement to see who is the currentPlayer and toggle accordingly
  currentPlayer === player_x ? currentPlayer = player_o : currentPlayer = player_x
}

const initializeBoard = boardLength => {
  for (let i = 0; i < boardLength; i++) {
    gameBoard.push('')
  }
  rowLength = Math.sqrt(gameBoard.length)
  return gameBoard
}

// const playerXWin = player_x.moveValue.repeat(rowLength)
// const playerOWin = player_o.moveValue.repeat(rowLength)

const checkForOver = function () {
  checkForPlayerWin()
  checkForPlayersTie()
  // console.log(playerXWin)
  // console.log(rowLength)
  // console.log(currentPlayer.moveValue)
}

const checkForPlayerWin = function () {
  checkForColumnWin()
  checkForRowWin()
  checkForLRDiagWin()
  checkForRLDiagWin()
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
      if (winColumnChecker.reduce(accumulator) === 'xxx') {
        console.log('Player X wins')
        return true
      }
      if (winColumnChecker.reduce(accumulator) === 'ooo') {
        console.log('Player O wins')
        return true
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
      if (winRowChecker.reduce(accumulator) === 'xxx') {
        console.log('Player X wins')
      }
      if (winRowChecker.reduce(accumulator) === 'ooo') {
        console.log('Player O wins')
      }
    }
    // console.log('row checker ' + x + ' is ', winRowChecker)
  }
}

const checkForLRDiagWin = function () {
  const accumulator = (acc, val) => acc + val
  const winDiagChecker = []
  // iterate through the array by skipping diagonally left to right
  for (let y = 0; y < gameBoard.length; y += rowLength + 1) {
    // push tile value to winDiagChecker
    winDiagChecker.push(gameBoard[y])
    // if winDiagChecker can be reduced to three x or three o,
    // then the player wins.
    if (winDiagChecker.reduce(accumulator) === 'xxx') {
      console.log('Player X wins')
    }
    if (winDiagChecker.reduce(accumulator) === 'ooo') {
      console.log('Player O wins')
    }
  }
}

const checkForRLDiagWin = function () {
  const accumulator = (acc, val) => acc + val
  const winDiagChecker = []
  // iterate through the array by skipping diagonally left to right
  for (let y = 0; y < gameBoard.length; y += rowLength - 1) {
    // push tile value to winDiagChecker
    winDiagChecker.push(gameBoard[y])
    // if winDiagChecker can be reduced to three x or three o,
    // then the player wins.
    if (winDiagChecker.reduce(accumulator) === 'xxx') {
      console.log('Player X wins')
    }
    if (winDiagChecker.reduce(accumulator) === 'ooo') {
      console.log('Player O wins')
    }
  }
}

const checkForPlayersTie = function () {
  // console.log('checking to see if its over')
  // console.log(playerWin)
  const checkForEmptyTile = val => val !== ''
  if (!checkForPlayerWin() && gameBoard.every(checkForEmptyTile)) {
    console.log('It\'s a tie!')
  }
}

// button that is simulating a click on a given tile
const onAddMoveValue = function (event) {
  // console.log('you clicked' + event.target.id)
  event.preventDefault()
  // iterate through the gameBoard array
  for (let i = 0; i < gameBoard.length; i++) {
  // turns tile id into a number
    const tileSelected = Number(event.target.id)
    // compares tile id to the current iteration
    if (i === tileSelected && gameBoard[i] === '') {
    // adds the player's value to the array at the index of the selected tile
      gameBoard[i] = currentPlayer.moveValue
      console.log(gameBoard)
      togglePlayer()
      // console.log(currentPlayer)
      checkForOver()
    }
  }
}

module.exports = {
  initializeBoard,
  onAddMoveValue
}

// Addtional resources:
// for changing value types https://javascript.info/type-conversions
