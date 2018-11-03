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

const signOut = function () {
  console.log(userStore.user.user.token)
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {Authorization: `Token token=${userStore.user.user.token}`}
  })
}

const changePassword = function (data) {
  console.log(userStore.user.user.token)
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {Authorization: `Token token=${userStore.user.user.token}`},
    data: data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
