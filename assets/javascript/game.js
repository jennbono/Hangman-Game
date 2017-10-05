var words = [
	"basketball", 
	"football",
	"soccer",
	"basket",
	"touchdown",
	"goal",
	"tennis",
	"coach",
	"helmet",
	"baseball",
	"player",
	"batter",
	];
var validKeys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var guesses = 10;
var allChosenLetters = [];


function startGame(){

//Pick Random Word from Array
var word = words[Math.floor(Math.random() * words.length)];
var remainingLetters = word.length;

//Set up Answer Array
var answer = [];
for (var i = 0; i < word.length; i++) {
	answer[i] = "_";
}

function updateHTML() { // Functions should come after all variables are defined
	document.getElementById("winCount").innerHTML = wins;
	document.getElementById("displayWord").innerHTML = answer.join (' ');
	document.getElementById("guessesLeft").innerHTML = guesses;
	document.getElementById("guessedLetters").innerHTML = allChosenLetters.join(', ');
}
document.onload = updateHTML // When the page has fully loaded, call this function!

document.getElementById("playAgain").onclick = function () {
	guesses = 10;
	allChosenLetters = [];
}

document.onkeyup = function(event) {
  	if (guesses == 0) { return; }
	
		//get the letter they entered
	var letterGuess = String.fromCharCode(event.keyCode).toLowerCase();
		//make sure they haven't guessed it before 
	if (allChosenLetters.indexOf(letterGuess) > -1) {
		//already guessed
		alert("You've already guessed this letter.");
	} else { //not already guessed
		for (var i = 0; i < validKeys.length; i++){
			if (validKeys[i] == letterGuess) {
                allChosenLetters.push(letterGuess);

                if (word.indexOf(letterGuess) > -1) {
                    //letter guessed is in word
                    for (var i = 0; i < word.length; i++) {
                        if (word.charAt(i) == letterGuess) {
                            answer[i] = letterGuess;
                            remainingLetters--;
                        }
                        if (remainingLetters == 0) {
                        	wins++;
                        }
                    }
                } else {
                  	//letter guessed is not in word
                 	guesses--;
                }
                updateHTML();
              	return;
                if (guesses == 0) {
                   	alert("You've run out of guesses! Game Over."); 
                }
              
              	return;

              	
            }
		}
        alert("Please choose a letter between a and z.");
	}
}
}



startGame();




