/*
// ##### Coding Challenge #1 ##########
// Because the multiline comment sybols can't contain themselves,
// below comments are uncommented.
// To uncomment this block you should comment the description of the tasks.
	Tasks:
	1. Store Mark's and John's mass and height in variables.
	2. Calculate both their BMIs using the formula
	   BMI = mass / height ** 2 = mass / (height * height)
	   (mass in kg and height in meters)
	3. Create a Boolean variable 'markHigherBMI' containing information
	   about whether Mark has a higher BMI than John.

	Test data:
	Data 1: Marks weights 78 kg and is 1.69 m tall.
			John weights 92 kg and is 1.95 m tall.

	Data 2: Marks weights 95 kg and is 1.88 m tall.
			John weights 85 kg and is 1.76 m tall.

const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;
const markHigherBMI = BMIMark > BMIJohn;
// const markHigherBMI = massMark / heightMark ** 2 > massJohn / heightJohn ** 2;

console.log(BMIMark, BMIJohn);
console.log("Mark's BMI higher than John's: ", markHigherBMI);
*/





/*
// ##### Coding Challenge #2 ##########
// Hint: Use the BMI example from Challenge #1, and the code you
// already wrote, and improve it:
// 1. Print output to the console, telling the user who has a higher BMI.
//    The message can be either "Mark's BMI is higher than John's!" or
//    "John's BMI is higher thatn Mark's!".
// 2. Modify the outputs above to use template literals to include the BMI
//    values in the outputs.
// Example: "Mark's BMI (28.3) is higher than John's (23.9)!" or
//    "John's BMI (29.1) is higher than Mark's (27)!".
// Note: Don't round the BMI values. Leave them as they are.
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;

// const massMark = 95;
// const heightMark = 1.88;
// const massJohn = 85;
// const heightJohn = 1.76;

const BMIMark = massMark / heightMark ** 2;
const BMIJohn = massJohn / heightJohn ** 2;

console.log(BMIMark, BMIJohn);

if (BMIMark > BMIJohn) {
	// console.log("Mark's BMI is higher than John's!");
	console.log(`Mark's BMI (${BMIMark}) is higher than John's (${BMIJohn})!`);
} else {
	// console.log("John's BMI is higher than Mark's!");
	console.log(`John's BMI (${BMIJohn}) is higher than Mark's (${BMIMark})!`);
}
*/





/*
// ##### Coding Challenge #3 ##########
// init data
// const scoreDolphins = (96 + 108 + 89) / 3;
// const scoreKoalas = (96 + 108 + 89) / 3;
// const scoreKoalas = (88 + 91 + 110) / 3;

// BONUS_1 data
// const scoreDolphins = (97 + 112 + 101) / 3;
// const scoreKoalas = (109 + 95 + 123) / 3;

// BONUS_2 data
const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;

const minScore = 100;

console.log(scoreDolphins, scoreKoalas, minScore);
// if (scoreDolphins > scoreKoalas) {
// 	console.log("Dolphins win the trophy");
// } else if (scoreKoalas > scoreDolphins) {
// 	console.log("Koalas win the trophy");
// } else {
// 	console.log("Both win the trophy");
// }



if (scoreDolphins > scoreKoalas && scoreDolphins >= minScore) {
	console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins && scoreKoalas >= minScore) {
	console.log("Koalas win the trophy");
} else if (scoreDolphins === scoreKoalas && scoreDolphins >= minScore && scoreKoalas >= minScore) {
	console.log("Both wint the trophy");
} else {
	console.log("No teams win the trophy");
}
*/





/*
// ##### Coding Challenge #4 ###########
// Task: 
// Steven needs a very simple tip calculator for whenever he goes to eat in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 
// 50 and 300. If the value is different, the tip is 20%.

// Your tasks:
// 1. Calculate the tip, depending on the bill value.Create a variable called tip
// for this. It's not allowed to use an if...else statement (if it's easier for 
// you, you can start with an if...else statement, and then try to convert it to 
// a ternary operator).

// 2. Print a string to the console containing the bill value, the tip, and the
// final value(bill + tip).

// Example: The bill was 275, the tip was 41.25, and the total value 316.25.

// Note: Use the values of the bill and tip variables to construct this string.
// Don't hard-code them 🙂

// TEST DATA: Test with different bill values: 275, 40, and 430

// tip is 15% if bill in range of 50 and 300
// otherwise tip is 20%
const bill = Number(prompt("Enter the bill value"));
// let tip;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
*/