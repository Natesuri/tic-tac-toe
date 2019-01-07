const gameStore = require('../gameStore.js')

const addPlayerMoveValue = function (currentPlayer) {
  // takes the id of the clicked
  const clickedId = event.target.id
  $('#' + clickedId).html(`<p class='player-move'>${currentPlayer.moveValue}</p>`)
}

const displayCurrentPlayer = function (currentPlayer) {
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
  showNewGame()
}

const announceTie = function () {
  $('#message').html(`<h4>Tie Game!</h4>`)
  showNewGame()
}

const saveGame = function (data) {
  gameStore.game = data
}

const displayGameHistory = function (data) {
  for (const i in data.games) {
    // console.log('made it here')
    const twoDGame = []
    const oldGame = data.games[i].cells
    // console.log(oldGame)
    const fixStrings = function (val) {
      // console.log(typeof val)
      // console.log(val)
      if (val === '') { val = '[]' }
      gameDisplay.push(val)
    }
    const gameDisplay = []
    oldGame.forEach(fixStrings)
    // console.log(oldGame)
    for (let x = 0; x < gameDisplay.length; x += Math.sqrt(gameDisplay.length)) {
      const newRow = gameDisplay.slice(x, x + Math.sqrt(gameDisplay.length))
      // console.log(newRow)
      twoDGame.push(newRow)
      // console.log(twoDGame)
      // data.game[i].cells[x]
    }
    const rowZero = twoDGame[0]
    const rowOne = twoDGame[1]
    const rowTwo = twoDGame[2]
    $('#user-history').append(`<p>Game ID: ${data.games[i].id}</p>
      <div>Game Board:
        <p>${rowZero}</p>
        <p>${rowOne}</p>
        <p>${rowTwo}</p>
      </div>
      <p> Game Finished: ${data.games[i].over}</p>`)
  }
}

const hideShowBoard = function () {
  $('#board').toggleClass('hidden')
  $('#game-message').toggleClass('hidden')
}

const showNewGame = function () {
  if ($('#start-game').hasClass('hidden')) {
    $('#start-game').toggleClass('hidden')
  }
}

const hideNewGame = function () {
  if (!$('#start-game').hasClass('hidden')) {
    $('#start-game').toggleClass('hidden')
  }
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
  displayGameHistory,
  hideShowBoard,
  hideNewGame,
  showNewGame
  // hideShowPlayAgain
}
