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










