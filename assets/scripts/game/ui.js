const addPlayerMoveValue = function (currentPlayer) {
  const clickedId = event.target.id
  $('#' + clickedId).append(currentPlayer.moveValue)
}

const displayCurrentPlayer = function (currentPlayer) {
  console.log(currentPlayer)
  $('#message').html(`<h4> It's ${currentPlayer.name}'s turn </h4>`)
}
module.exports = {
  addPlayerMoveValue,
  displayCurrentPlayer
}
