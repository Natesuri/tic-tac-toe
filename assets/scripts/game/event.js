const gameBoard = []

const initializeBoard = boardLength => {
  for (let i = 0; i < boardLength; i++) {
    gameBoard.push('')
  }
  return gameBoard
}
console.log(gameBoard)

const onAddX = function (event) {
  event.preventDefault()
  console.log(gameBoard)
}

module.exports = {
  initializeBoard,
  onAddX
}
