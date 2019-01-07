const userStore = require('../userStore.js')
// const gameApi = require('../game/api.js')
const gameUi = require('../game/ui.js')

const clearUserErrorMessage = function () {
  $('#userAltMessage').html(`<h5></h5>`)
}

const hideShowAuth = function () {
  $('#login').toggle()
  $('#sign-out').toggle()
  $('#change-password').toggle()
  $('#get-history').toggle()
}

const signUpSuccess = apiData => {
  userStore.user = apiData
  $('#user').html(`<h4>Sign Up succesful.</h4><h5>Please Sign in Above.</h5>`)
  clearUserErrorMessage()
  $('.sign-up-form').val('')
  // hideShowAuth()
  // console.log('signUpSuccess ran. Data is:', apiData)
  // $('#message').removeClass()
  // $('#message').addClass('success border')
}

const signUpFailure = apiData => {
  $('#user').html(`<h4>Please try again</h4>`)
  $('#userAltMessage').html(`<h5>Sign up Failed, ${apiData.statusText}</h5>`)
  // console.error('signUpFailiure ran. Data is:', apiData)
}

const signInSuccess = apiData => {
  userStore.user = apiData
  const userName = userStore.user.user.email
  $('#user').html(`<h4>Welcome ${userName}</h4>`)
  $('#start-game').toggleClass('hidden')
  clearUserErrorMessage()
  hideShowAuth()
  $('.sign-in-form').val('')
  // console.log('signInSuccess ran. Data is:', apiData)
}

const signInFailure = apiData => {
  $('#user').html(`<h4>Please try again</h4>`)
  $('#userAltMessage').html(`<h5>Sign in Failed, ${apiData.statusText}</h5>`)
  // console.error('signInFaliure ran. Data is:', apiData)
}

const signOutSuccess = function (apiData) {
  $('#user').html(`<h4>Sign Out Succesful</h4>`)
  clearUserErrorMessage()
  hideShowAuth()
  gameUi.hideShowBoard()
  if (!$('#start-game').hasClass('hidden')) {
    $('#start-game').toggleClass('hidden')
  }
  if (!$('#board').hasClass('hidden')) {
    $('#board').toggleClass('hidden')
  }
  $('#message').html('')

  // console.log('signOutSuccess ran. Data is:', apiData)
  userStore.user = {}
}

const signOutFailure = function (apiData) {
  $('#userAltMessage').html(`<h5>Sign out Failed.</h5><h5>Please check your Internet connection</h5>`)
  // console.error('signOutFaliure ran. Data is:', apiData)
  // $('#user').text('Sign Out Succesful')
  // userStore.user = {}
}

const changePasswordSuccess = function (apiData) {
  $('#userAltMessage').html(`<h5>Change Password Successful</h5>`)
  $('.pass-form').val('')
  // console.log('changePasswordSuccess ran. Data is:', apiData)
}

const changePasswordFailure = function (apiData) {
  $('#userAltMessage').html(`<h5>Change password failed ${apiData.statusText}</h5>`)
  $('.pass-form').val('')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signOutSuccess,
  changePasswordSuccess,
  signInFailure,
  signOutFailure,
  changePasswordFailure
}
