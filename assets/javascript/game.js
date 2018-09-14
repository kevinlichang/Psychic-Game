// create array of letters list
var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// var to keep score of wins/loss
var wins = 0;
var losses = 0;

// var for guesses left
var guessesLeft = 10;

// var to hold HTML/DOM elements
var winsHTML = document.getElementById("wins");
var lossesHTML = document.getElementById("losses");
var guessesLeftHTML = document.getElementById("guesses-left");
var guessesSoFarHTML = document.getElementById("guesses-so-far");


// computer choose letter from letters list array
var computerGuess = computerChoices[
  Math.floor(Math.random() * computerChoices.length)
];

console.log("Computer guessed " + computerGuess);



// function for computer to choose next guess

// function to reset guesses
function guessReset() {
  // reset guesses left to 10
  guessesLeft = 10;
  guessesLeftHTML.textContent = guessesLeft;

  // erase guesses so far list
  guessesSoFarHTML.textContent = "";

};




//user input to guess
document.onkeyup = function(event) {
  var keyPress = event.key;

  // compare key press to letter chosen by computer
  if (keyPress === computerGuess) {
    wins++;
    winsHTML.textContent = wins;
    guessReset();
  } else {
    guessesLeft--;
    guessesLeftHTML.textContent = guessesLeft;
  };
  
  console.log(guessesLeft);

  // display guesses so far
  var userGuess = document.createTextNode(keyPress + ", ");
  guessesSoFarHTML.appendChild(userGuess);

  // check to see if there are any guesses remaining
  if (guessesLeft <= 0) {
    alert("Out of Guesses");
    losses++;
    lossesHTML.textContent = losses;
    guessReset();
  }
  

  
};



