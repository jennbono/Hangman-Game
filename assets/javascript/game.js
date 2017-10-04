var words = [
	"BASKETBALL", 
	"FOOTBALL",
	"SOCCER",
	"BASKET",
	"TOUCHDOWN",
	"GOAL",
	"TENNIS",
	"COACH",
	"HELMET",
	"BASEBALL",
	"PLAYER",
	"BATTER",
	];
var answer = [];
var validKeys = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var guesses = 10;
var allChosenLetters = [];

//Pick Random Word from Array
var word = words[Math.floor(Math.random() * words.length)];
var remainingLetters = word.length;

//Set up Answer Array
for (var i = 0; i < word.length; i++) {
	answer[i] = "_";
}

document.onkeyup = function(event) {
	// for (var i = 0; i < word.length; i++) {
		// words.push("_");
		//get the letter they entered
	var letterGuess = String.fromCharCode(event.keyCode).toUpperCase();
		//make sure they haven't guessed it before 
	if (allChosenLetters.indexOf(letterGuess) > -1) {
		//already guessed
		alert("You've already guessed this letter.");
		
	}
	else { //not already guessed
		allChosenLetters.push(letterGuess);

		if (word.indexOf(letterGuess) > -1) {
			//letter guessed is in word
			for(var i = 0; i < word.length; i++) {
				word.charAt(i) == letterGuess;
			}
		}
		else { //letter guessed is not in word

		}
	}


		 
		
		//if it's right replacing underscore with letter 
		//always put letter with entered letters 
		//alaways check to see if they win or lose

		//only if it's not in chosen letters will it take away a guess
		
}


		// if its a win increase win total 
			// put up image of sport word