const userStore = require('../userStore.js')

const signUpSuccess = data => {
  $('#user').text('Sign up Succesful')
  console.log('signUpSuccess ran. Data is:', data)
  // $('#message').removeClass()
  // $('#message').addClass('success border')
}

const signUpFailure = data => {
  $('#user').text('Sign up Succesful')
  console.error('signUpFailiure ran. Data is:', data)
  // $('#message').removeClass()
  // $('#message').addClass('success border')
}

const signInSuccess = data => {
  $('#user').text('Sign in Succesful')
  console.log('signInSuccess ran. Data is:', data)
  userStore.user = data
}

const signOutSuccess = function () {
  $('#user').text('Sign Out Succesful')
  userStore.user = {}
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signOutSuccess
}
