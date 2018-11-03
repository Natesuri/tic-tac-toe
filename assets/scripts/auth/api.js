const config = require('../config.js')

const userStore = require('../userStore.js')

const signUp = function (data) {
  userStore.user = data
  console.log(userStore.user)
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data: data
  })
  // userStore.user = data
  // console.log(userStore.user)
}

module.exports = {
  signUp,
  signIn
}
