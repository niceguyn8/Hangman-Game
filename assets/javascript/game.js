// create scorekeeping variables
var wins = 0;
var losses = 0;
var guessesLeft = 6;
var lettersGuessed = [];
var correctGuess = 0;

document.getElementById("wins").innerHTML = wins;
document.getElementById("losses").innerHTML = losses;
document.getElementById("guessesLeft").innerHTML = guessesLeft;
document.getElementById("userGuessed").innerHTML = "???";
// create words that the computer will select and the user will have to guess
var wordList = ["link", "mario", "luigi", "samus", "kong", "bowser", "kirby", "peach", "falcon", "fox"];
// have the computer select one the words from the list/array
var randomWord = wordList[Math.floor(Math.random() * wordList.length)];
// console.log("Computer Picked: " + randomWord);

// start game??
function gameStart() {
  lettersGuessed = [];
  guessesLeft = 0;
  randomWord
}
// display length of the random word selected as underscores
var hiddenWord = [];
  for (var i = 0; i < randomWord.length; i++) {
    hiddenWord.push("_");
    console.log("computer picked: " + randomWord);
  }

  // var letter = randomWord.split("");
// push those underscores to an html element so it displays on the page
var display = document.getElementById('randomWord');
display.innerText = hiddenWord.join(' ');

// the user plays the game by typing
document.onkeyup = function(event) {
//
var userGuess = event.key;
// lettersGuessed.push(userGuess);
// display.innerText = lettersGuessed.join(' ');

// prints user guess and stpres it in lettersGuessed array
console.log("user guessed: " + userGuess);
lettersGuessed.push(userGuess);
document.getElementById("userGuessed").innerHTML = lettersGuessed;



if (userGuess.length > 0) {
  // var indexesMatched = []
  for (var i = 0; i < randomWord.length; i++) {
    if (randomWord[i] === userGuess) {
      // wins++;
      // console.log("Your win count is: " + wins);
      // lettersGuessed[i] = userGuess;
      hiddenWord[i] = userGuess;
      display.innerText = hiddenWord.join(' ');
    }
  }
  // correctGuess++;

  console.log("Correct Guess! " + correctGuess);
  console.log(hiddenWord);
  // console.log(indexesMatched);
}

// if user guesses the entire word correctly they WIN
if (hiddenWord.indexOf(userGuess) === 0) {
  wins++;

}
  document.getElementById("wins").innerHTML = wins;
  console.log("Win Count: " + wins);
  // reset the game
  // guessesLeft = 6;
  // randomWord = wordList[Math.floor(Math.random() * wordList.length)];

// if the user guesses wrong subtract from the number of guesses guesses guesses left
if (hiddenWord.indexOf(userGuess) < 0) {
  guessesLeft--;
  document.getElementById("guessesLeft").innerHTML = guessesLeft;
  console.log("Guesses Left: " + guessesLeft);
}

if (guessesLeft === 0) {
  // reset the game NOT WORKING
  guessesLeft = 6;
  randomWord = wordList[Math.floor(Math.random() * wordList.length)];
  hiddenWord = [];
  lettersGuessed = [];
  console.log("computer picked: "+ randomWord);
  // increments and records loss
  losses++;
  document.getElementById("losses").innerHTML = losses;


}
}
