// ##### CHALLENGE 1 #####
// Given an array of forecasted maximum temperatures,
// the thermometer displays a string with given
// temperatures.
// Example: [17, 21, 23] will print
// "... 17˚C in 1 days... 21˚C in 2 days... 23˚C in 3 days..."
// TASKS:
//       1. Create a function 'printForecast' which
//          takes an array 'arr' and logs a string
//          like the above to the console. Try with
//          both test datasets.
//       2. Use the porblem-solving framework:
//          a) UNDERSTAND THE PROBLEM
//          b) BREAK IT UP INTO SUB-PROBLEMS

// TEST DATA:
//       - DATA 1: [17, 21, 23]
//       - DATA 2: [12, 5, -5, 0, 4]

// 1) Understanding the problem
// -  Array transformed to string, separated by ...
// -  What is the X days? Answer: index + 1

// 2) Breaking up into sub-problems
// -  Transform an array to string
// -  Transfrom each element to string with ˚C
// -  Strings needs to contain day (index + 1)
// -  Add ... between elements and start and end of string
/*
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];
function printForecast(arr) {
	// debugger;
    let str = "... ";
	for (let i = 0; i < arr.length; i++) {
		str += `${arr[i]}˚C in ${i + 1} days ... `;
	}
	console.log(str);
}
printForecast(data2);
*/