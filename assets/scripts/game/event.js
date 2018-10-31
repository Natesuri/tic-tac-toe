const gameBoard = []

const initializeBoard = boardLength => {
  for (let i = 0; i < boardLength; i++) {
    gameBoard.push('')
  }
  return gameBoard
}
console.log(gameBoard)

// const onAddX = function () {
//
// }

module.exports = {
  initializeBoard // ,
  // onAddX
}
