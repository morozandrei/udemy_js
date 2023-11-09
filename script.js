'use strict';

// SCOPE AND SCOPE CHAIN: LESSON 92
/*
function calcAge(birthYear) {
  const age = 2037 - birthYear;

  function printAge() {
    let output = `You are ${firstName}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;

      // Creating NEW variable with same name as outer scope's variable
      const firstName = 'Steven';

      // Reassigning outer scope's variable
      output = 'NEW OUTPUT';

      const str = `Oh, and you're a millenial, ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    // console.log(add(2, 3));
    console.log(output);
  }
  printAge();

  return age;
}

const firstName = 'Jonas';
calcAge(1991);
*/





/*
// HOISTING AND TDZ IN PRACTICE: LESSON 95

// VARIABLES
// console.log(me);
// console.log(job);
// console.log(year);
var me = 'Jonas';
let job = 'teacher';
const year = 1991;

// FUNCTIONS
// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow);
// console.log(addArrow(2, 3));

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

// EXAMPLE
// console.log(numProducts);
if (!numProducts) deleteShopingCart();
var numProducts = 10;

function deleteShopingCart() {
  // console.log('All products deleted!');
}

var x = 1;
let y = 2;
const z = 3;

// console.log(x === window.x);
// console.log(y === window.y);
// console.log(z === window.z);

// console.log(this);
const calcAge = function (birthYear) {
  // console.log(2037 - birthYear);
  // console.log(this);
};
calcAge(1991);

const calcAgeArrow = birthYear => {
  // console.log(2037 - birthYear);
  // console.log(this);
};
calcAgeArrow(1980);

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  }
};
jonas.calcAge();

// console.log(process.env.PWD);




const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge;
matilda.calcAge();

const f = jonas.calcAge;
// f();
*/





/*
// LESSON 98: Regular Functions vs. Arrow Functions

// var firstName = "Matilda";

const jonas = {
  firstName: "Jonas",
  year: 1991,
  calcAge: function () {
    // console.log(this);
    // console.log(2037 - this.year);

    // SOLUTION 1
    // const self = this;
    // const isMillenial = function() {
    //   console.log(self); // self or that
    //   console.log(self.year >= 1981 && self.year <= 1996);
    // }

    // SOLUTION 2
    const isMillenial = () => {
      console.log(this); // self or that
      console.log(this.year >= 1981 && this.year <= 1996);
    }

    isMillenial();
  },
  greet: function() {
    // console.log(this);
    // console.log(`Hey ${this.firstName}`);
  }
};

// jonas.greet();
jonas.calcAge();



// 'arguments' keyword
const addExpr = function(a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(2, 5);
addExpr(2, 5, 8, 12);


var addArrow = (a, b) => {
  console.log(arguments);
  return a + b;
}
addArrow(2, 5, 8);
// console.log(addArrow(2, 5, 8));
*/






// LESSON 99: PRIMITIVES vs. OBJECTS
/*
// primitive types
let age = 30;
let oldAge = age;
age = 31;
console.log(oldAge);
console.log(age);



// reference types
const me = {
  name: "Jonas",
  age: 30
};

const friend = me;
friend.age = 27;
console.log("Friend: ", friend);
console.log("Me: ", me);
*/





/*
// LESSON 100: PRIMITIVES vs. OBJECTS IN PRACTICE

// primitive types
let lastName = "Williams";
let oldLastName = lastName;
lastName = "Davis";
console.log(lastName);
console.log(oldLastName);


// reference types
const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log(jessica);
console.log(marriedJessica);

// marriedJessica = {};
*/
/*
// Copying objects
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob']
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';
// console.log(jessica2);
// console.log(jessicaCopy);

jessicaCopy.family.push('Mary');
jessicaCopy.family.push('John');
console.log(jessica2);
console.log(jessicaCopy);
*/















