const config = require('../config.js')
const userStore = require('../userStore.js')

const createGame = function () {
  const userToken = userStore.user.user.token
  return $.ajax({
    url: config.apiUrl + '/games',
    method: 'POST',
    headers: {Authorization: `Token token=${userToken}`}
  })
}

module.exports = {
  createGame
}
