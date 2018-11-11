const express = require('express')
const app = express()
const port = 9000

const server = app.listen(port, function () {
  console.log(`server running on port ${port}`)
})

var scores = []
var connections = new Map()
var players = []
var pscores = []
var users = new Map()
var gameEnd = false

function endGame () {
  if(!gameEnd) {
    gameEnd = true
    //io.emit('END_GAME', {'winners': findWinner()})
    let board = new Map([...users.entries()].sort((a, b) => a[1].score - b[1].score))
    io.emit('END_GAME', {board})
    resetScores()
  }
}

function findWinner () {
  var ranking = scores.sort(function (a, b) {
    return a.score - b.score
  })

  var winners = []
  var past = 0

  // for (var i = 0; i < 1; i++) {
  //   if (connections[ranking[i + past].con] != null) {
  //     winners.push(ranking[i + past])
  //   } else {
  //     i = i - 1
  //     past++
  //   }
  // }

  // return winners
  return ranking
}

function resetScores () {
  scores = []
  users = new Map()
  gameEnd = false
}

const io = require('socket.io')(server)

io.on('connection', function (socket) {
  connections.set(socket.id, socket)

  console.log(socket.id)
  socket.on('MASTER_START', function () {
    // console.log('this is')
    io.emit('GAME_START')
    setInterval(function() {
      let board = new Map([...users.entries()].sort((a, b) => a[1].score - b[1].score))
      io.emit('UPDATE', board)
    }, 500)
  })

  socket.on('MASTER_RESET', function () {
    io.emit('RESET')
  })

  socket.on('CLICK_EVENT', function(data) {
    var nickname = data.user
    // if(!players.includes(nickname)) {
    //     players.push(nickname)
    //     pscores.push(0)
    // } else {
    //     var index = players.indexOf(nickname)
    //     pscores[index] = pscores[index] + 1
    // }

    if(users[socket.id] == null) {
      users.set(socket.id, {name: nickname, score: 0})
    } else {
      users[socket.id].score++
    }
  })

  socket.on('REPORT_SCORE', function (data) {
    var score = data.score
    var nickname = data.user
    scores.push({'con': socket.id, 'score': score, 'name': nickname})

    console.log('Game finished in server')
    console.log(scores)

    // if (scores.length == connections.size) {
    endGame()

    // }
  })

  socket.on('disconnect', function () {
    connections.delete(socket.id)
  })
})
