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
    // console.log(typeof event.target.id)
    // console.log('target id is' + event.target.id)
    // console.log('current iteration is' + i)

    // turns tile id into a number
    const tileSelected = Number(event.target.id)
    // console.log(tileSelected)

    // compares tile id to the current iteration
    if (i === tileSelected) {
      //
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
