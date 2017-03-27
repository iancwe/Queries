$(document).ready(function () {
  console.log('jQuery up and running!')

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
  // when click on any of the gengres of question maybe can use .on here
  $('#musBtn').click(function () {
    $('.genres').hide()
    $('.field').hide()
    $('.quizArea').show()
  })

  // go back to landing page after quiz
  $('#backItUp').click(function () {
    $('.genres').show()
    $('.field').show()
    $('.quizArea').hide()
  })
  // extracting questions from another js file (cant use external file yet)
  $.getJSON('math.json',function() {
      console.log('name');
  })
})
