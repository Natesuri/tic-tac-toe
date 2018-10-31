'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')

const events = require('./game/event.js')

const boardLength = 9

$(() => {
  events.initializeBoard(boardLength)
  $('#1').on('submit', events.onAddX)
})
