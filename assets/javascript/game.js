var words = [
	"alf", 
	"doogie howser md",
	"er",
	"family matters",
	"friends",
	"full house",
	"home imporvement",
	"married with children",
	"roseanne",
	"saved by the bell",
	"seinfeld",
	"wings",
	];
var Answeranswer = [];
var remainingLetters = word.length;
var validKeys = "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z";
var wins = 0;
var guesses = 10;
var misses = [];

//Pick Random Word from Array
var word = words[Math.floor(Math.random() * words.length)];

//Set up Answer Array
for (var i = 0; i < word.length; i++) {
	answer[i] = "_";
}

document.onkeyup = function(guessOne) {
	for (var i = 0; i < word.length; i++) {
		words.push("_");
		// put letter in blank && put letter in box with chosen letters
	}
	else {
		// take away a guess && put letter in box with chosen letters
	}
}

document.onkeyup = function(event) {
	for (var j = 0; j < word.length; j++) {
		if (word.charAt(j) === words) {
			// increase win total && put up pic of TV show
		}
	}
}