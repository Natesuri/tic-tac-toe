const config = require('../config.js')
const userStore = require('../userStore.js')
const gameStore = require('../gameStore.js')

const createGame = function () {
  const userToken = userStore.user.user.token
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {Authorization: `Token token=${userToken}`}
  })
}

const updateGame = function (currentPlayer, gameOver, tileSelected) {
  const userToken = userStore.user.user.token
  // console.log(gameStore.game)
  const currentGame = gameStore.game.game.id
  return $.ajax({
    url: `${config.apiUrl}/games/${currentGame}`,
    method: 'PATCH',
    data: { game: {
      cell: {
        index: tileSelected,
        value: currentPlayer.moveValue
      },
      over: gameOver
    }
    },
    headers: {Authorization: `Token token=${userToken}`}
  })
}

const getGameHistory = function () {
  const userToken = userStore.user.user.token
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'GET',
    headers: {Authorization: `Token token=${userToken}`}
  })
}

module.exports = {
  createGame,
  updateGame,
  getGameHistory
}
