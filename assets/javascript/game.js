// Create a small array
var letters = ["a", "b", "c"]

//  "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var randomLetter = "";
var wins = 0;
var losses = 0;
var guessesLeft = 0;
var letterGuesses = [];
var defaultGuessesLeft = 9;

// window.addEventListener("keypress", onKeyPress, false);
// newGame();

      // Create an empty array to hold what the user guesses
      var userChoiceText = document.getElementById('userchoice-text');
      var winsText = document.getElementById("wins-text");
      var lossesText = document.getElementById('losses-text');
      var guessesLeftText = document.getElementById('guesses-left-text');
      var guessesSoFarText = document.getElementById('guesses-so-far-text');
      var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", ];

    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    guessesSoFarText.textContent = "Your Guesses So Far: " + guessesSoFar;

// Set a limit for the user guesses left and assign that to a variable.

    document.onkeyup = function(event) {
        // Determines which key was pressed.
        var userGuess = event.key.toLowerCase;
            console.log(userGuess);
        // if (userGuess >= 'a' && userGuess <= 'z') {
        //   return false;
        console.log(computerChoices);
        // }
        // Randomly chooses a choice from the options array. This is the Computer's guess.
        guessesLeftText.textContent = userGuess;

        var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
        // Reworked our code from last step to use "else if" instead of lots of if statements.
        var options = [userGuess >= "a" && userGuess <= "z"];

// We create an if-statement to check if there's a match.
        
      // function.onKeyPress(key) {
      //   if (options.indexOf(userGuess) > -1) {
         
      //    if (userGuess === computerGuess) {
      //     wins ++;
      //     guessesLeftText = 9;
      //     letterGuesses = [];
      //    }
      //    else if (userGuess != computerGuess) {
      //    numGuesses --;
      //    guessChoices.push(userGuess);
          
      //   }

      //   else if (numGuesses === 0) {
      //     guessesLeftText = 9;
      //     losses ++;
      //     letterGuesses = [];
      //   }
      // }

        
          // Display the user and computer guesses, and wins/losses/ties.
          userChoiceText.textContent = "You chose: " + userGuess + "";
          winsText.textContent = "Wins: " + wins + "";
          lossesText.textContent = "Losses: " + losses + "";
          guessesLeftText.textContent = "Guesses left: " + numGuesses + "";
          guessesSoFarText.textContent = "Your guesses so far: "  + guessChoices.Join(", ") + "";
        }
      // };


