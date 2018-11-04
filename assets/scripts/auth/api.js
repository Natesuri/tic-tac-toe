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
  const userToken = userStore.user.user.token
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {Authorization: `Token token=${userToken}`}
  })
}

const changePassword = function (data) {
  const userToken = userStore.user.user.token
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {Authorization: `Token token=${userToken}`},
    data: data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
