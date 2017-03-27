$(document).ready(function () {
  console.log('jQuery up and running!')

  // keydown limiter
  var trig1 = false
  var trig2 = false

  // rolls(0-100) to see who starts first
  var p1Rolls = 0
  var p2Rolls = 0

  //  to check who starts first(chooses the question)
  function rolls () {
    p1Rolls = Math.random()
    p2Rolls = Math.random()
    if (p1Rolls > p2Rolls) {
      console.log('player 1 starts first! Please choose the genres of question.') /* gotta change these 2 logs to alerts */
      return 1
    } else {
      console.log('player 2 starts first! Please choose the genres of question.')
      return 2
    }
  }

  // Roll to see who starts and show button of genres
  $('#roll').click(function () {
    rolls()
    $('.genres').show()
  })
  // when click on any of the genres (put class for button and switch case for button id)
  $('#movBtn').click(function () {
    // new page layout for quiz section
    $('.genres').hide()
    $('.field').hide()
    $('.quizArea').show()
    // extracting json data from another webpage
    var ourRequest = new XMLHttpRequest()
    ourRequest.open('GET', 'https://wdi-sg.github.io/wdi-project-1-iancwe/assets/movieqn.json')
    ourRequest.onload = function () {
      var ourQn = JSON.parse(ourRequest.responseText)
      var qnPick = Math.floor(Math.random() * ourQn.length)
      var ans = ourQn[qnPick].answ
      // console.log(ourQn)
      // console.log(qnPick)
      // console.log(ourQn[qnPick])
      console.log(ans)
      $('.question').text('Question:' + ourQn[qnPick].question)
      // removing question from chosen genre
      var chosen = ourQn.splice(qnPick, 1)[0]
      // console.log(chosen)
      // randomize the choices for each question
      choiceRandom(chosen)
      function choiceRandom (cho) {
        var choiceList = [
          [cho.choices[0]],
          [cho.choices[1]],
          [cho.choices[2]],
          [cho.choices[3]]
        ]
        for (var i = 4; i >= 0; i--) {
          var rnC = Math.floor(Math.random() * i)
          $('#c' + [i]).text(choiceList[rnC])
          $('#cp' + [i]).text(choiceList[rnC])
          var remCho = choiceList.splice(rnC, 1)
        }
      }
      // console.log(ourQn)
    }
    // player1 picking the answer (qwer)
    var playerChoice1 = 0
    $(document).keydown(function (e) {
      if (e.keyCode === 87 || e.keyCode === 81 || e.keyCode === 69 || e.keyCode === 82) {
        if (!trig1) {
          trig1 = true
          playerChoice1 = e.keyCode
          alert('player 1')
          console.log(playerChoice1)
        }
      }
    })
    // player 2 picking the answer(,./Lshift)
    var playerChoice2 = 0
    $(document).keydown(function (e) {
      if (e.keyCode === 16 || e.keyCode === 191 || e.keyCode === 190 || e.keyCode === 188) {
        if (!trig2) {
          trig2 = true
          playerChoice2 = e.keyCode
          alert('player 2 ')
          console.log(playerChoice2)
        }
      }
    })
    // comparing player choices to answers
    ourRequest.send()
  })

  // go back to landing page after quiz
  $('#backItUp').click(function () {
    $('.genres').show()
    $('.field').show()
    $('.quizArea').hide()
    $('#roll').hide()
  })
  // extracting questions from another js file (cant use external file yet)
})
