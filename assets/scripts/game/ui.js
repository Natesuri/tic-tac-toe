const addPlayerMoveValue = function (currentPlayer) {
  const clickedId = event.target.id
  $('#' + clickedId).append(currentPlayer.moveValue)
}
module.exports = {
  addPlayerMoveValue
}
