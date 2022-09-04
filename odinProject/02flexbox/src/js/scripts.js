// variables 

const mbtn = document.getElementById("machineButton");
const abtn = document.getElementById("animatedButton");
const abtnTwo = document.getElementById("animatedButtonTwo");
const mstatus = document.getElementById("machineStatus");
const counter = document.getElementById("counter");


mbtn.addEventListener('click', updateBtn);
abtn.addEventListener('click', updateCounter);
abtnTwo.addEventListener('click', resetCounter);

function updateBtn() {
    // mstatus.innerHTML = ("Box Shadow");
  if(mbtn.style.boxShadow === "white 0px 0px 10px") {
    mbtn.style.boxShadow = "0px 0px 10px black";
    mstatus.innerHTML = ("Box Shadow");
  } else {
    mbtn.style.boxShadow = "0px 0px 10px white"
    mstatus.innerHTML = ("No Box Shadow");
    console.log(mbtn.style.boxShadow);
  }
}

function updateCounter() {
  ++counter.innerHTML;
}
function resetCounter() {
  counter.innerHTML = 0;
}

// TESTING EQUALITY

let first = 2;
let second = 2;

const result = first === second ? 'first is same as second' : 'First is different than second';
console.log(result);

numToTest= 563;

function checkNum(numToCheck) {
  let result;
  let reduced = (numToCheck % 2);
  console.log(reduced);
  result = reduced === 0 ? "It's EVEN!!!" : "It's odd....";
  console.log(result);
}

evenOrOdd = 0 === 0 ? 'It is even' : 'It is odd';
console.log(evenOrOdd);

console.log('Running number testing script');
checkNum(numToTest);

// Unary plus '+'
console.log("'true': evaluates to...");
console.log(true);
console.log("'+true': evaluates to...");
console.log(+true);
console.log("'+false': evaluates to...");
console.log(+false);
console.log("'\"\"': evaluates to...");
console.log(+"");
console.log("this is the same as using 'Number(...)'");
console.log("ex...'number(\"\")' equals...");
console.log(Number(""));
console.log(" ");
console.log(" ");
console.log("This can be used for shortening the notation for adding numbers in string form")
console.log(" ");
let numStringOne = "45";
let numStringTwo= "55";
console.log("adding the variables without '+'.")
console.log("console.log(numStringOne + numStringTwo); // =4555")
console.log(numStringOne + numStringTwo); // =4555
console.log(" ");
console.log("adding the variables with 'Number();'.")
console.log("console.log(Number(numStringOne) + Number(numStringTwo)); // = 100");
console.log(Number(numStringOne) + Number(numStringTwo)); // = 100
console.log(" ");
console.log("adding the variables with '+'.")
console.log("console.log(+numStringOne + +numStringTwo); // =4555")
console.log(+numStringOne + +numStringTwo); // = 100
console.log(" ");
let anum = +numStringOne;
console.log(anum);
++anum;
++anum;
anum++;
// ++ anum ++; < This doesn't work.
let numTwo = 0;
exponent = 1;
console.log(2 * numTwo++**exponent++);
console.log(2 * numTwo++**exponent++);
console.log(2 * numTwo++**exponent++);
console.log(2 * numTwo++**exponent++);
console.log(2 * numTwo++**exponent++);
console.log(2 * numTwo++**exponent++);
console.log(2 * numTwo++**exponent++);
console.log(2 * numTwo++**exponent++);
console.log(2 * numTwo++**exponent++);
console.log(2 * numTwo++**exponent++);
console.log(2 * numTwo++**exponent++);
console.log(null +1);
console.log((4+6+9)/77);
let a = 10;
console.log(a);
9 * a;
let b = 7 * a;
console.log(b);
let max = 57.0000;
let actual = max - 13.0000;
let percentage = actual / max;
console.log(percentage);


console.log(1/0); // Infinity
// !!!NEXT PROJECT!!!

//
//
//

// BUILD - a text-area where you can input a number

// BUILD - a button to click to check the number.

//
//
//




























