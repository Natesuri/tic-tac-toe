'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const authEvents = require('./auth/authEvent.js')
const events = require('./game/event.js')

$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#sign-out').on('click', authEvents.onSignOut)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#start-game').on('click', events.onStartGame)
  // $('#play-again').on('click', events.onStartGame)
  // $('#get-history').on('click', events.onGetGameHistory)
  $('.tile').on('click', events.onAddMoveValue)
})
