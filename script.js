// ##### PROJECT 1: Guess My Number
"use strict";

let secretNum = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
document.querySelector(".guess").value = "";

// function displays a message in '.message'
// class HTML element
function displayMessage(message) {
	document.querySelector(".message").textContent = message;
}

document.querySelector(".check").addEventListener("click", function() {
	const guess = Number(document.querySelector(".guess").value);
	
	// wrong input
	if(!guess || guess < 1 || guess > 20) {
		displayMessage("No valid number");
		
	// number is guessed
	} else if (guess === secretNum) {
		displayMessage("Correct Number");
        document.querySelector("body").style.backgroundColor = "#60b347";
		document.querySelector(".number").style.width = "100%";
		document.querySelector(".number").textContent = secretNum;
        // highscore functionality
		if (highscore < score) {
		document.querySelector(".highscore").textContent = highscore = score;
		}
	
	// guess is wrong
	} else if (guess !== secretNum) {
		document.querySelector(".score").textContent = score -= 1;
		if (score === 0) {
			displayMessage("Scores are over. You loose the game");
			return;
		}
		displayMessage(guess > secretNum ? "Too high" : "Too low");
	}
});
///////////////////////////////////
// Coding Challenge #1
/*
Implemnet a game rest functionality, so that the player
can make a new guess! Here is how:

1. Select the element with the 'again' class and attack a 
click event handler.
2. In the handler function, restore initial values of 
the score and secretNum variables.
3. Restore the initial conditions of the message,
secretNum, score and guess input field.
4. Also restore the original background color (#222)
and number width (15rem).
*/

document.querySelector(".again").addEventListener("click", function() {
	score = 20;
	document.querySelector(".score").textContent = score;
	secretNum = Math.trunc(Math.random() * 20) + 1;
	document.querySelector(".number").textContent = "?";
	document.querySelector(".number").style.width = "15rem";
    displayMessage("Start guessing...");
	document.querySelector(".guess").value = "";
	document.querySelector("body").style.backgroundColor = "#222";
});