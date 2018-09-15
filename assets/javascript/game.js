// create array of letters list
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

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
var computerChoice = alphabet[
  Math.floor(Math.random() * alphabet.length)
];
  
console.log("Computer chose " + computerChoice);





// function to reset guesses
function guessReset() {
  // reset guesses left to 10 and display
  guessesLeft = 10;
  guessesLeftHTML.textContent = guessesLeft;

  // erase guesses so far list
  guessesSoFarHTML.textContent = "";

  // computer to choose next letter
  computerChoice = alphabet[
    Math.floor(Math.random() * alphabet.length)
  ];
  
  console.log("Computer chose " + computerChoice);
};




//user input to guess
document.onkeyup = function(event) {
  var keyPress = event.key;

  // compare key press to letter chosen by computer
  // if guess correct, increase wins by 1 and reset
  if (keyPress === computerChoice) {
    alert("You got it! The letter was " + computerChoice)
    wins++;
    winsHTML.textContent = wins;
    guessReset();
  } else { 

    // if incorrect, decrease guesses left counter and display
    guessesLeft--;
    guessesLeftHTML.textContent = guessesLeft;
    
    console.log("There are " + guessesLeft + " tries left");

    // display guesses so far from user
    var userGuess = document.createTextNode(keyPress + ", ");
    guessesSoFarHTML.appendChild(userGuess);

  };
  


  // if guesses left is 0, out of guesses and increase loss and reset
  if (guessesLeft === 0) {
    alert("Out of Guesses! The letter was " + computerChoice);
    losses++;
    lossesHTML.textContent = losses;
    guessReset();
  }
  
  
};



