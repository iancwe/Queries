$(document).ready(function () {
  console.log('jQuery up and running!')
  // keydown limiter
  var trig1 = false
  var trig2 = false
  var p1ChoTrig = false
  var p2ChoTrig = false

  // rolls(0-100) to see who starts first
  var p1Rolls = 0
  var p2Rolls = 0

  // answer for question
  var ans = ''
  var playerChoice1 = ''
  var playerChoice2 = ''

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
      ans = ourQn[qnPick].answ
                        // console.log(ourQn)
                        // console.log(qnPick)
                        // console.log(ourQn[qnPick])
      console.log(ans)
      $('.question').text('Question:' + ourQn[qnPick].question)

      // removing question from chosen genre
      var chosen = ourQn.splice(qnPick, 1)[0]

      // randomize the choices for each question
      choiceRandom(chosen)

      // set timer or music
      getKeys()
    }  /* onload functon ends here */
    ourRequest.send()
  }) /* end of button click function */

  function getKeys () {
    $(document).on('keydown', function (e) {
      if (e.keyCode === 87 || e.keyCode === 81 || e.keyCode === 69 || e.keyCode === 82) {
        if (e.keyCode === 81) { choice1 = $('#c1') }
        if (e.keyCode === 87) { choice1 = $('#c2') }
        if (e.keyCode === 69) { choice1 = $('#c3') }
        if (e.keyCode === 82) { choice1 = $('#c4') }
        if (!trig1) {
          trig1 = true
          p1ChoTrig = true
          playerChoice1 = choice1.text()
          console.log(choice1.text())
          choiceCheck(p1ChoTrig, p2ChoTrig)
        }
      }
    })
    $(document).off('keyup', function (e) {})

  // player 2 picking the answer(,./Lshift)
    $(document).on('keydown', function (e) {
      if (e.keyCode === 16 || e.keyCode === 191 || e.keyCode === 190 || e.keyCode === 188) {
        if (e.keyCode === 188) { choice2 = $('#cp1') }
        if (e.keyCode === 190) { choice2 = $('#cp2') }
        if (e.keyCode === 191) { choice2 = $('#cp3') }
        if (e.keyCode === 16) { choice2 = $('#cp4') }
        if (!trig2) {
          trig2 = true
          p2ChoTrig = true
          playerChoice2 = choice2.text()
          console.log(choice2.text())
          choiceCheck(p1ChoTrig, p2ChoTrig)
        }
      }
    })
    $(document).off('keyup', function (e) {})
  }
  // function for checking if both players made their choices
  function choiceCheck (c1, c2) {
    if (c1 && c2) {
      console.log('both player made their choices')
      comparAns(playerChoice1, playerChoice2, ans)
    } else { console.log('one of the player has yet to make a choice') }
  }

  // comparing player choices to answer
  function comparAns (p1, p2, sol) {
    if (p1 === sol && p2 === sol) {
      console.log('Draw! everyone got it right')
    } else if (p1 === sol) {
      console.log('player 1 got it right')
    } else if (p2 === sol) {
      console.log('player 2 got it right')
    } else if (!(p1 === sol && p2 === sol)) {
      console.log('both player got it wrong')
    }
  }

// function for randomizing choices
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

  // go back to landing page after quiz
  $('#backItUp').click(function () {
    $('.genres').show()
    $('.field').show()
    $('.quizArea').hide()
    $('#roll').hide()
    trig1 = false
    trig2 = false
    p1ChoTrig = false
    p2ChoTrig = false
    var playerChoice1 = ''
    var playerChoice2 = ''
    console.log('refreshed')
  })
})
