//
// ASSIGNING VARIABLES
//

// assigning with the global(window) to make it clear that it is a global
window.currentUser = {
  name: "bob",
  age: 20
};

let vancouverWeather = "cloudy";
let albertaWeather;
albertaWeather = "sunny";
const myName = "Steven";
const yourName = "Joe";

// numbers
let num1 = 10;
let num2 = 20;

//
// TESTING VARIABLES GLOBAL VS LOCAL
//

!function() { // '!' allows the function to run without being called.
              // (not usually necessary anymore)
  console.log(window.currentUser.name);
}();
console.log(window.currentUser.name);
console.log(window.currentUser.age);

console.log("Vancouver's weather is: " + vancouverWeather);
console.log("Alberta's weather is: " + albertaWeather);
console.log("My name is: " + myName);
console.log("Your name is: " + yourName);

//
// ARITHMETIC
//

document.getElementById("card1Text").innerHTML = 20;
document.getElementById("card2Text").innerHTML = "plus";
document.getElementById("card3Text").innerHTML = 50
document.getElementById("card4Text").innerHTML = "equals";
document.getElementById("card5Text").innerHTML = 20 + 50;



console.log(num1++); // 10 (the "++" comes after the console.log opperation.)
console.log(num1++); // 11
console.log(num1); // 12
console.log(--num1); // 11
console.log(--num1); // 10
console.log(--num1); // 9

console.log(.2 + .1);
console.log((.2 * 10 + .1 * 10)/10);


// As long as the arithmetic is NOT addition it WILL WORK with 'string numbers' Since '+' is ALSO used for concatonation, you can't use it to add numbers stored in strings;
let numString1 = "5";
let numString2 = "7";
console.log("First number: " + numString1);
console.log("Second number: " + numString2);
let numStringResult1 = numString1 + numString2;
let numStringResult2 = numString1 - numString2;
let numStringResult3 = numString1 * numString2;
let numStringResult4 = numString1 / numString2;
console.log("num1 + num2 in console.log: " + numString1 + numString2);
console.log("Result of num1 + num2: " + numStringResult1);
console.log("Result of num1 - num2: " + numStringResult2);
console.log("Result of num1 * num2: " + numStringResult3);
console.log("Result of num1 / num2: " + numStringResult4);








