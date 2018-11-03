'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/authEvent.js')
const events = require('./game/event.js')

const boardLength = 9

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  // Later, will load on sign in
  events.initializeBoard(boardLength)
  // later will load on sign in
  // events.loadStartingPlayer()
  // $('#1').on('submit', events.onAddMoveValue)
  $('.tile').on('click', events.onAddMoveValue)
})
