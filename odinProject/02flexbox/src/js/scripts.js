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




// !!!NEXT PROJECT!!!

//
//
//

// BUILD - a text-area where you can input a number

// BUILD - a button to click to check the number.

//
//
//




























