'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('./game/event.js')

const boardLength = 9

$(() => {
  $('#sign-up').on('submit', events.onSignUp)
  // Later, will load on sign in
  events.initializeBoard(boardLength)
  // later will load on sign in
  // events.loadStartingPlayer()
  // $('#1').on('submit', events.onAddMoveValue)
  $('.tile').on('click', events.onAddMoveValue)
})
