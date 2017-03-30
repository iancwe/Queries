# Quizzical Hustle

When knowledge mingles with gambling.

What happens when you get a cultured game like a quiz and taint it with some vices...Eh quizzes can't really drink but it sure can be the new hot bed for renaissance people to gamble at! Well on the facade it just a normal wholesome trivia quiz game, but in the deep bowls of it lurks the hustler that the quiz always wanted to be. Just remember **Hustle** hard!

## Where to Play
So what is this game or how does one even play this game, one might ask themselves. Fret not. Its easy as 1 tequila, 2 tequila, 3 tequila...
[Quizzical Huster](https://wdi-sg.github.io/wdi-project-1-iancwe/)

## Getting Started
Wanna help out create a larger question bank for the quiz? Solid.
1. Head on over to my [github](https://github.com/wdi-sg/wdi-project-1-iancwe)
2. Fork it or clone it to your computer/github
3. Open up the assets folder and write up your own `.json` files of your chosen category!
4. Rinse and repeat, PROFIT!

## How to Play

Alright, you must be thinking enough with this fluff, I just want to know what is going on here. Fear not, got your back on this case. Firstly lets set off at the landing page of the game, you get two options read the instructions and start the quiz! Upon pressing the start button, you and your dire opponent will be randomly sorted to choose the category for the quiz. May RNGesus have mercy on you.

![Start/roll to choosing category](https://media.giphy.com/media/qFMtqnsqFacdG/giphy.gif)

After that just read or listen to the question and figure out what is the answer! Well at the fundamental level this game is essentially just a quiz with an added feature of wagering points on your answer. The amount you bet on is totally up to you from a range of 1 to 3 depending on how confident you are with your answer.

![Placing wagers on answers](https://media.giphy.com/media/jB67gChiLTmqA/giphy.gif)

After you and your dreaded opponent have placed your and their bets, you press a key in to submit your answer. The choices you see on screen are corresponded to each player keys, namely (*_Player one_* keys = **Q** for the first choice, **W** for the second, **E** for the third and **R** for the fourth. While *_Player two_* key = **<** for the first, **>** for the second, **/** for the third and lastly **Lshift** for the fourth.) Why must I submit my answer through keypress you ask? Well _not_ just for the oooh factor but its all meant to shroud your answer that you chosen in secrecy. Where's the joy in betting or playing a quiz when you already know the answers? Its like going to the World Poker Series but everyone is playing with their hands face up? How is one suppose to hustle and get all that monies?!

![Scoring and updating new question](https://media.giphy.com/media/8lUz41yBkDoSA/giphy.gif)

Once you guys submitted your answer in stealthily you and your frightful opponent will receive an alert stating which of the two got it right or if both of you got it wrong...Judgement free zone....But as you can see the total tally of points will dwindle when you answer it wrongly and when your shuddersome opponent gets it right. So in this example it would be Player 1 losing his/her bet of 2 points and an additional 3 points due to the hustling player 2. So this goes on until someone withers to 0 points and is eventually the LOSER. Game over man, GAME OVER!

![Winner alert](https://media.giphy.com/media/FYozoqi8HBcIw/giphy.gif)

## Development

#### How I came about this idea
I had this idea of having a quiz with this scoring mechanics since college. We had bi-monthly quiz nights that was hosted by a club that I was in. When taking over the reins of the club I thought to myself what can I do to spice up this quiz nights but keep it close to the roots since everyone was really into this tradition. So sitting at the poker table while bleeding money, I had this inspiration to involve betting into the quiz point system. Had a trial run during our next quiz night and was pretty well received by the masses. However I still had to fine tune some scoring mechanics and quiz questions that seemed to easy for everyone.

![Quiz questions](https://media.giphy.com/media/y1JYvLe9fFfpK/giphy.gif)

![Wagering](https://media.giphy.com/media/8Vc7jfEx8Wtz2/giphy.gif)

So this game really appealed to me since I do enjoy learning more general knowledge that has not came handy yet in my life...Still waiting on when to use the knowledge that *_Sometimes sloths mistake their own arms for tree branches and fall._* One day.

#### Workflow
1. Quiz game at then most fundamental stage
2. Figure out how to store questions in a separate file (question bank) and can always be expanded
3. Finally decided on JSON to store the questions and each file will be a different category
4. Read up on how to use AJAX and to deal with the asynchronous issue of the script loading at two different speed
5. Had to figure out after extracting the question from `.json` to run them in a script that is able to accept any other similarly organized `.json` files so more categories can be added in the future
6. How to make it into a two player game who can play it simultaneously without waiting on the other player turn like most quiz games  
7. Add in a music category that just plays a snippet of a song
8. Added in the betting mechanics and the scoring system
9. Styled up the game from the sad looking html that I tested it on

#### Notable Milestones

1. Had to read up on how to store data into a `json` file and how to use AJAX to extract it to be used in my quiz.
```[{
    [{"question": "How many weasely kids where there in the harry potter movies?",
  "choices":["6","7","5","8"],
  "answ":"7"
},
{
  "question": "What was Harry Potter first broom in the movie series?",
  "choices":["Firebolt","Nimbus 2001","Thunderbolt","Nimbus 2000"],
  "answ":"Nimbus 2000"
},
{
  "question": "What movie did Robin Williams win the 1997 academy award for best supporting actor?",
  "choices":["Good Will Hunting","Aladdin","Patch Adams","Jumanji"],
  "answ":"Good Will Hunting"
},
{
  "question": "What actress starred in Star Wars and in Léon: The Professional?",
  "choices":["Carrie Fisher","Jennifer Lawrence","Natalie Portman","Bryce Dallas Howard"],
  "answ":"Natalie Portman"
},
{
  "question": "What was the world wide box office for The Lord of the Rings: The Return of the King?",
  "choices":["1 Billion","1.120 Billion","547 Million","377 Million"],
  "answ":"1.120 Billion"
}]
```
2. Realized that AJAX actually stands for **A** synchronous **J** avascript **A** nd **X** ml so the whole thing about my script getting read at two different speed and having to sync it together so I am able to use the data I extracted for my game logic.
![The feels while doing AJAX](http://i2.kym-cdn.com/photos/images/original/000/234/739/fa5.jpg)

3. Trying to keep my HTML page cleaner without needing to having to link any of my `.json` or audio files as tags since it's good practice in the future for others to be able to see your stored data. So in this case the path to the stored `.m4a` files in my media file are stored in `.json` to be called out by the same script that runs the above `.json` for normal text question as well.
```[{
  [{"song":"assets/media/adele.m4a",
  "choices":["Someone Like You","Rolling in the Deep", "Hello", "Chasing Pavements"],
  "answ":"Someone Like You"
},
{
  "song":"assets/media/killers.m4a",
  "choices":["Mr Brightside","Somebody Told Me", "When You Were Young", "Humans"],
  "answ":"Mr Brightside"
},
{
  "song":"assets/media/eminem.m4a",
  "choices":["Lose Yourself","'Till I Collapse", "Without Me", "The Real Slim Shady"],
  "answ":"Lose Yourself"
},
{
  "song":"assets/media/queen.m4a",
  "choices":["We Are the Champions","Another One Bites the Dust", "Bohemian Rhapsody", "Under Pressure"],
  "answ":"We Are the Champions"
},
{
  "song":"assets/media/gaga.m4a ",
  "choices":["Poker Face","Just Dance", "Bad Romance", "Paparazzi"],
  "answ":"Poker Face"
}]
```
4. Wanted to keep my script that actually ran the `.onload` to be shorter and more efficient so I tried refactor as many codes into functions as I can to be called by the `.onload` script.

5. Formulate a way to allow 2 players to key in their answer in secrecy and play at the same time. For this case the code on how to get the 2 different player answers is that we only allow each user to `keydown` on the 4 buttons that are only allowed to click on. So it means that by clicking any other buttons besides the 8 that is registered would be not accepted and each specific key is bind to the corresponding choices. The `trig1` is a trigger to make sure that the player is allowed to submit a key per question and `p1ChoTrig` is another trigger to make sure that players are not able to flip flop and change answer once they key it in.  

```[(
function getKeys () {
  $(document).unbind('keydown')
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
}
```
 Lastly it leads to the function `choiceCheck` which is safeguard to make sure that both players has submitted their answer before checking it against the solution and updating the score.

```  // function for checking if both players made their choices
  function choiceCheck (c1, c2) {
    if (c1 && c2) {
      console.log('both player made their choices')
      comparAns(playerChoice1, playerChoice2, ans)
    } else {
      console.log('One of the player has yet to make a choice')
    }
  }
  ```

The other notable section would be randomizing the question that is to be given and randomizing the choices so that it deters one from memorizing the question number and the answer choice position.
![choice randomizing](http://i.imgur.com/0Yp2t8W.jpg)

![Question randomizing](http://i.imgur.com/r3v87Mj.jpg)

### Prototype vs Final

![Prototype webpage](http://i.imgur.com/n3ZuKUK.jpg)
Image above was the landing page for the website when players get to read the instructions and get into the quiz. Whereas the second image below shows playing area of the quiz game. Some changes that were made was that I did not have a health bar as I felt that it does not match the theme of a quiz game with some elements of RPG in it. And I did away with the mirrored choices buttons as the players still would have to take turn using the mouse. Lastly having two of the same sets of choices on screen makes it messier and as taught we were supposed to keep the game cleaner and more simple. K.I.S.S.

### To Improve

1. When on the last question of a category the alert to notify players to change genre pops out too fast and players are unable to see their score before that and see a winner of that round notification.

2. Wager safeguard is not in placed and players are able to answer question before placing bet.

3. Wanted to add in a video/gif category to the game.

4. Code can still be refactored better.

5. More bell and whistle could have been added such as a BGM to play during the quiz section when players are thinking of an answer.

6. Getting better with the CSS elements

![CSS feels](https://i.imgur.com/OUkLi.gif)

## Built With

* Javascript
* jQuery
* HTML
* CSS

![magic](https://media.giphy.com/media/12NUbkX6p4xOO4/giphy.gif)

## Author
* [Ian Chong](https://github.com/iancwe)

## References
* **Unsplash**- For the background image
* **Overstack Flow**- All the little question I had
* **SweetAlert**- For the sweet alerts
* **[Mitchell Hudson](https://www.youtube.com/watch?v=WDsXdYvzLXc)**-For modal dialog box help
* **[Event Handler](https://www.youtube.com/watch?v=BEuWjaHWk4I)**-For audio tag in HTML
* **[Adam Khoury](https://www.youtube.com/watch?v=hsSXzdn_0Gg&t=5s)**-Multitude of stuff
* **Google Fonts**-For dem fonts

## Credits
* [Yisheng](https://github.com/yisheng90)
* [Sharona](https://github.com/sharona1610)

Sorry for bugging you two so much.

**HUSTLE HARD**

![Money](https://media.giphy.com/media/3o6Yg063yIbA7HWehG/giphy.gif)

Sorry for spamming you guys with gifs
