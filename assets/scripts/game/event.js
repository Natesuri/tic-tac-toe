const gameBoard = []

const initializeBoard = boardLength => {
  for (let i = 0; i < boardLength; i++) {
    gameBoard.push('')
  }
  return gameBoard
}
console.log(gameBoard)

// button that is simulating a click on a given tile
const onAddX = function (event) {
  event.preventDefault()
  // iterate through the gameBoard array
  for (let i = 0; i < gameBoard.length; i++) {
    // turns tile id into a number
    const tileSelected = Number(event.target.id)
    // compares tile id to the current iteration
    if (i === tileSelected) {
      // adds the player's value to the array at the index of the selected tile
      gameBoard[i] = 'playerValue'
      console.log(gameBoard)
    }
  }
  // console.log(gameBoard)
}

module.exports = {
  initializeBoard,
  onAddX
}

// Addtional resources:
// for changing value types https://javascript.info/type-conversions
