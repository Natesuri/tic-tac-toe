const gameStore = require('../gameStore.js')

const addPlayerMoveValue = function (currentPlayer) {
  const clickedId = event.target.id
  $('#' + clickedId).append(currentPlayer.moveValue)
}

const displayCurrentPlayer = function (currentPlayer) {
  console.log(currentPlayer)
  $('#message').html(`<h4> It's ${currentPlayer.name}'s turn </h4>`)
}

const askForValidMove = function () {
  $('#errorMessage').html(`<h5>Please make a valid move</h5>`)
}

const clearErrorMessage = function () {
  $('#errorMessage').html(`<h5></h5>`)
}

const gameOverErrorMessage = function () {
  $('#errorMessage').html(`<h5>Click button to play again!</h5>`)
}

const announceWinner = function (currentPlayer) {
  // console.log(`${currentPlayer.name} Wins!`)
  $('#message').html(`<h4> ${currentPlayer.name} Wins!</h4>`)
  hideShowNewGame()
}

const announceTie = function () {
  $('#message').html(`<h4>Tie Game!</h4>`)
}

const saveGame = function (data) {
  // console.log(data)
  gameStore.game = data
  console.log(gameStore.game)
}

// const displayGameHistory = function (data) {
//   console.log(data)
// }

const hideShowBoard = function () {
  $('#board').toggleClass('hidden')
}

const hideShowNewGame = function () {
  $('#start-game').toggleClass('hidden')
}

// const hideShowPlayAgain = function () {
//   $('#play-again').toggleClass('hidden')
// }

module.exports = {
  addPlayerMoveValue,
  displayCurrentPlayer,
  askForValidMove,
  clearErrorMessage,
  gameOverErrorMessage,
  announceWinner,
  announceTie,
  saveGame,
  // displayGameHistory,
  hideShowBoard,
  hideShowNewGame
  // hideShowPlayAgain
}
