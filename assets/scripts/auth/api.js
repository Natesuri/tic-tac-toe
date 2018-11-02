const userStore = require('../userStore.js')

const signUp = function (data) {
  userStore.user = data
  console.log(userStore.user)
}

module.exports = {
  signUp
}
