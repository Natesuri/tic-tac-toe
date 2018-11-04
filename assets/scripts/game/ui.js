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
}

const announceTie = function () {
  $('#message').html(`<h4>Tie Game!</h4>`)
}

module.exports = {
  addPlayerMoveValue,
  displayCurrentPlayer,
  askForValidMove,
  clearErrorMessage,
  gameOverErrorMessage,
  announceWinner,
  announceTie
}
