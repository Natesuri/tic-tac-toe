const gameBoard = []

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
  return gameBoard
}
console.log(gameBoard)

const checkForOver = function () {
  checkForPlayersTie()
}

const checkForPlayerWin = false

const checkForPlayersTie = function () {
  // console.log('checking to see if its over')
  // console.log(playerWin)
  const checkForEmptyTile = val => val !== ''
  if (!checkForPlayerWin && gameBoard.every(checkForEmptyTile)) {
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
      console.log(currentPlayer)
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
