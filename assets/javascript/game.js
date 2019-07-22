// Create a small array
var letterChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var letterGuesses = [];
var guessesMade = 0;

// computer guess a letter
var computerGuess = letterChoices [Math.floor(Math.random() * 25)];
console.log("Computer guess is " + computerGuess);


// ------------------------------Main Update Loop  --------------
//  while person still has guess left
//    that means GuessesLeft > 0 


  
  
  document.onkeyup = function(event) {
    console.log("Key Pressed = " + event.key);
    console.log("GuessesLeft = " + guessesLeft);

  
    if (event.key === computerGuess) {
      
      wins++;
      letterGuesses = letterGuesses + event.key;
      computerGuess = letterChoices [Math.floor(Math.random() * 25)];
      console.log("Computer guess is " + computerGuess);
    
    }
    else {
    
      losses++;
      letterGuesses = letterGuesses + event.key;
      computerGuess = letterChoices [Math.floor(Math.random() * 25)];
      console.log("Computer guess is " + computerGuess);
      
    }


  guessesLeft--;

  ScreenUpdate();

  if (guessesLeft === 0) {
    reset();
    ScreenUpdate();
  } 


}



// ------------Screen view-------------------------




// ----Draw Screen Updated View -----

function ScreenUpdate() {


$("#guesses-so-far-text").text("Your Guesses so far: " + letterGuesses);
$("#wins-text").text("Wins: " + wins);
$("#guesses-left-text").text("Guesses Left: " + guessesLeft);
$("#losses-text").text("Losses: " + losses);

}


function reset() {

  computerGuess = letterChoices [Math.floor(Math.random() * (25 - 0)) + 0];

  // reset all variable

letterChoices;
wins = 0;
losses = 0;
guessesLeft = 9;
letterGuesses = [];
guessesMade = 0;


}





