
// global variables
var wins = 0;
var losses = 0;
var guessesLeft;
var lettersGuessed = [];
var letters = [];
var correctGuess = 0;
var hiddenWord;
var userGuess;
// create words that the computer will select and the user will have to guess
var wordList = ["link", "mario", "luigi", "samus", "kong", "bowser", "kirby", "peach", "falcon", "star fox"];

// start game
function start() {
  correctGuess = 0;
  lettersGuessed = [];
  guessesLeft = 6;
  letters = [];

  document.getElementById("wins").innerHTML = wins;
  document.getElementById("losses").innerHTML = losses;
  document.getElementById("guessesLeft").innerHTML = guessesLeft;
  document.getElementById("userGuessed").innerHTML = "???";
  wordGenerator();
};
start();

// have the computer select one the words from the list/array
function wordGenerator() {
  randomWord = wordList[Math.floor(Math.random() * wordList.length)];
  // console.log("Computer Picked: " + randomWord);
  letters = randomWord.split('');
  console.log(letters);
  // display length of the random word selected as underscores
  hiddenWord = [];
  for (var i = 0; i < randomWord.length; i++) {
    hiddenWord.push("_");
    console.log("computer picked: " + randomWord);
    // push those underscores to an html element so it displays on the page
    document.getElementById("randomWord").innerText = hiddenWord.join(' ');
  };
};

// the user plays the game by typing
document.onkeyup = function(event) {
  userGuess = event.key.toLowerCase();
  // prints user guess and stores it in lettersGuessed array
  console.log("user guessed: " + userGuess);
  lettersGuessed.push(userGuess);
  document.getElementById("userGuessed").innerHTML = lettersGuessed;

  // determine if user guess is in randomly selected word
  if (letters.indexOf(userGuess) >= 0) {
    for (var i = 0; i < randomWord.length; i++) {
      if (userGuess === letters[i]) {
        hiddenWord[i] = userGuess;
        // print correct guesses into random word and replace underscores
        document.getElementById("randomWord").innerText = hiddenWord.join(" ");
      };
    };
    // increment # of correct guesses
    correctGuess++;
    console.log("Correct Guess! " + correctGuess);
    console.log(hiddenWord);
  };

  // if user guesses the entire word correctly they WIN
  if (correctGuess === randomWord.length) {
    // increment win
    wins++;
    document.getElementById("wins").innerHTML = wins;
    console.log("Win Count: " + wins);
    // start a new game
    start();
  };

  // if the user guesses wrong subtract from the number of guesses left
  if (hiddenWord.indexOf(userGuess) < 0) {
    guessesLeft--;
    document.getElementById("guessesLeft").innerHTML = guessesLeft;
    console.log("Guesses Left: " + guessesLeft);
  };

  if (guessesLeft === 0) {
    // increments and records loss
    losses++;
    document.getElementById("losses").innerHTML = losses;
    start();
  };
};
