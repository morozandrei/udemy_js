"use strict"
/*
// ##### CHALLENGE 1 ##########

// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.

// Each team competes 3 times, and then the average of the 3 scores is calculated(so one average score per team).

// !!!!! A team ONLY wins if it has at LEAST DOUBLE the average score of the other team.Otherwise, no team wins!



// Your tasks:
//     1. Create an arrow function calcAverage to calculate the average of 3 scores.This function should have three parameters and return a single number(the average score).
//     2. Create two new variables — scoreDolphins and scoreKoalas, and assign the value returned from the calcAverage function to them(you will need to call this function, and pass scores as arguments).
//     3. Create a function checkWinner that takes the average score of each team as parameters (avgDolphins and avgKoalas), and then logs the winner to the console, together with the victory points, according to the rule above.Example: Koalas win(30 vs. 13)(use avgDolphins and avgKoalas instead of hard - coded values).
//     4. Use the checkWinner function to determine the winner for both DATA 1 and DATA 2.
//     5. Ignore draws this time. Instead, log "No team wins..."" to the console if there is no winner.

// TEST DATA 1: Dolphins scored 44, 23, and 71. Koalas scored 65, 54, and 49.
// TEST DATA 2: Dolphins scored 85, 54, and 41. Koalas scored 23, 34, and 27.

// HINT: To calculate average of 3 values, add them all together and divide by 3
// HINT: To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores.


const calcAverage = (a, b, c) => (a + b + c) / 3;
let scoreDolphins = calcAverage(44, 23, 71);
let scoreKoalas = calcAverage(65, 54, 49);

checkWinner(scoreDolphins, scoreKoalas);

function checkWinner(avgDolphins, avgKoalas) {
	// console.log(avgDolphins, avgKoalas); // check the average score of each team
	if (avgDolphins >= avgKoalas * 2) {
		console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
	} else if (avgKoalas >= avgDolphins * 2) {
		console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
	} else {
		console.log("No team wins...");
	}
}

scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
checkWinner(scoreDolphins, scoreKoalas);
*/





/*
// ##### CHALLENGE 2 ##########
// Steven wants you to improve his tip calculator, using the same rules as before — tip 15 % of the bill if the bill value is between 50 and 300, and if the value is different, the tip is 20 %.

// Your tasks:

//    1. Write a function calcTip that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above(you can check out the code from the first tip calculator challenge if you need to). Use the function type you like the most.Test the function using a bill value of 100.

//    2. And now let's use arrays! So, create an array called bills containing the test data below.

//    3. Create an array called tips containing the tip value for each bill, calculated from the function you created before.

// 	  4. BONUS: Create an array totals containing the total values, so the bill + tip.

// TEST DATA: 125, 555, and 44

// GENERIC FUNCTION DECLARATION
// function calcTip(bill) {
// 	if (bill >= 50 && bill <= 300) {
// 		return bill / 100 * 15;
// 	} else {
// 		return bill / 100 * 20;
// 	}
// }

// EXPRESSION FUNCTION DECLARATION
// const calcTip = function(bill) {
// 	return bill >= 50 && bill <= 300 ? bill / 100 * 15 : bill / 100 * 20;
// }

// ARROW FUNCTION
const calcTip = bill => bill >= 50 && bill <= 300 ? bill / 100 * 15 : bill / 100 * 20;

// const tip = calcTip(prompt());
// console.log(tip);

const bills = [125, 555, 44];
// console.log(bills);

// let tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(tips);

// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);

const tips = [];
const totals = [];
for (let i = 0; i < bills.length; i++) {
	tips[i] = calcTip(bills[i]);
	totals[i] = bills[i] + tips[i];
}
console.log(bills);
console.log(tips);
console.log(totals);
*/





/*
// ##### CHALLENGE 3 #####
// PURPOSE: Comparing BMI's of Mark and John
//          Use objects to implement the calculations
//          HINT: BMI = mass / (height * height) (kg / m * m)

// STEPS OF EXECUTION:
//   1. For each of them, create an object with properties for their full name, mass, and height(Mark Miller and John Smith). Name these objects as mark and john, and their properties exactly as fullName, mass and height.

//   2. Create a calcBMI method on each object to calculate the BMI(the same method on both objects).Assign the BMI value to a property, and also return it from the method.

//   3. Log to the console who has the higher BMI, together with the full name and the respective BMI.Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!".

// TEST DATA: Marks weighs 78 kg and is 1.69 m tall.John weighs 92 kg and is 1.95 m tall.

const mark = {
	fullName: "Mark Miller",
	mass: 78,
	height: 1.69,
	calcBMI: function () {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	}
}

const john = {
	fullName: "John Smith",
	mass: 92,
	height: 1.95,
	calcBMI: function () {
		this.bmi = this.mass / (this.height * this.height);
		return this.bmi;
	}
}

console.log(mark, john);

if (mark.calcBMI() > john.calcBMI()) {
	console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
} else {
	console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
}

console.log(mark, john);
*/





/*
// ##### CHALLENGE 4 #####
// Your tasks:
//     1. Create an array called bills containing all 10 test bill values.
//     2. Create empty arrays for the tips and the totals(tips and totals)
//     3. Use the calcTip function we wrote before(included in the starter code) to  calculate tips and total values(bill + tip) for every bill value in the bills array.Use a for loop to perform the 10 calculations!

// TEST DATA: 22, 295, 176, 440, 37, 105, 10, 1100, 86, and 52.

const calcTip = function (bill) {
	return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}

const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i < bills.length; i++) {
	tips[i] = calcTip(bills[i]);
	totals[i] = bills[i] + tips[i];
}

console.log(bills, tips, totals);

// ##### BONUS #####
// PURPOSE: Create a function 'calcAverage' and calculate 
//          the average of the array passed as argment.

const calcAverage = function (arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum / arr.length;
}
console.log(calcAverage(totals));
*/