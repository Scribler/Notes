// Machine and button animations

const mbtn = document.getElementById("machineButton");
const abtn = document.getElementById("animatedButton");
const abtnTwo = document.getElementById("animatedButtonTwo");
const mstatus = document.getElementById("machineStatus");
const counter = document.getElementById("counter");
let first = 2;
let second = 2;
const result = first === second ? 'first is same as second' : 'First is different than second';
let numToTest = 563;
let evenOrOdd = 0 === 0 ? 'It is even' : 'It is odd';
let numStringOne = "45";
let numStringTwo= "55";
let anum = +numStringOne;
let numTwo = 0;
let exponent = 1;
let a = 10;
let b = 7 * a;
let max = 57.0000;
let actual = max - 13.0000;
let percentage = actual / max;
let str = "This string is embeded.";
let firstStr = `The following string is embeded: '${str}'`; // USE backtics to EMBED!!! 
//
// NULL VS UNDEFINED START
let age = null; // null is used for unknown
let nameo; // undefined is for things that havn't been set(DO NOT SET THINGS TO UNDEFINED)
// NULL VS UNDEFINED END
//
let firstName = "Daryl";
const longString = "This needs to wrap \n and I wonder if it will work \n I guess we are going to find out!";
const yesButton = document.getElementById('yesCheckMyNumber');
const noButton = document.getElementById('noCheckMyNumber');
let theage = 92;
let mybool = !!true;
let myboolOne = !!false;
let myboolTwo= !!"string";
let daynum = 0;
let fruits = ["apple", "plum", "orange"];
let probAnswer = document.getElementById("problemAnswer");
let probAnswerInner = "My writen answer".toString().padStart(22, 'x')+" " + "This: character at '2': " + "This".charAt(2);
let problemTwo = document.getElementById("problemTwo");
let problemTwoInner = "This: character at 1: " + "This".charAt(1);
let problemTwoInnerTwo = "This: character code at 1: " + "This".charCodeAt(1);

// evaluated variables Section
console.log("'true': evaluates to...");
console.log(true);
console.log("'+true': evaluates to...");
console.log(+true);
console.log("'+false': evaluates to...");
console.log(+false);
console.log("'\"\"': evaluates to...");
console.log(+"");
console.log(evenOrOdd);
console.log("this is the same as using 'Number(...)'");
console.log("ex...'number(\"\")' equals...");
console.log(Number(""));
console.log(" ");
console.log(" ");
console.log("This can be used for shortening the notation for adding numbers in string form")
console.log(" ");
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
console.log(anum);
++anum;
++anum;
anum++;
// ++ anum ++; < This doesn't work.
// Unary plus '+'
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
console.log(a);
console.log(b);
console.log(percentage);
console.log(1/0); // Infinity
console.log(age); // evaluates to 'null'.
console.log(nameo); // evaluates to 'undefined'.
console.log(result);
console.log(firstStr);
console.log(`double embeding!!! ${firstStr}`);
console.log(`The following is \${1+2} embedded which should display '3': ${1 + 2}`);

console.log( typeof(undefined) ); // parenthesis can be used, BUT it is only for 
                                  // visual preferance
                                  // IT IS NOT A FUNCTION!
console.log(typeof undefined); // undefined
console.log(typeof 0);  // number
console.log(typeof 'a'); // string
console.log(typeof true); // boolean
console.log(typeof Math); // object
console.log(typeof null); // object < This is a recognized error in 'typof' it is a
                          // special value with a separate type of it's own. The behavior
                          // of 'typof' is WRONG here. 
                          // credit for quote > javascript.info/types
console.log(typeof alert); // function
console.log(" ");
console.log(`Hello ${1}.`);
console.log(`Hello ${"firstName"}.`);
console.log(`Hello ${firstName}.`);
console.log(longString);
console.log(mybool + myboolOne + myboolTwo); // 2 (mybool + myboolTwo = 2, myboolOne = 0)
console.log(mybool); // true
console.log(myboolOne); // false
console.log(myboolTwo); // true



//
// FUNCTIONS AND OTHER STUFF
//
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
function checkNum(numToCheck) {
  let result;
  let reduced = (numToCheck % 2);
  console.log(reduced);
  result = reduced === 0 ? "It's EVEN!!!" : "It's odd....";
  console.log(result);
}
console.log('Running number testing script');
checkNum(numToTest);

//
// CHECK MY NUMBER --START--
//

// add click event pointing to functions
function greeting() {
  const name = prompt('What is your name?'); // get name
  alert(`Your name is ${name}.`);
  // alert("Your possible greetings are,\n 1\) Hello, 'name'!\n2\) Greetings, 'name'!\n3\)Salutations, 'name'!") // Give possible greeting choices
  // The below template literal keeps formatting so you don't need escaped line breaks like above.
  alert(`Your possible greetings are,
    1\) Hello, 'name'!
    2\) Greetings, 'name'!
    3\)Salutations, 'name'!`) // Give possible greeting choices
  const greetingChoice = Number(prompt('Which Greeting would you like? 1, 2, or 3?')); // store choice AFTER converting it to a number.
  if (greetingChoice === 1) { // insert name into chosen greeting and display in an alert.
    alert(`Hello, ${name}!`);
  } else if (greetingChoice === 2) {
    alert(`Greetings, ${name}!`)
  } else if (greetingChoice === 3) {
    alert(`Salutations, ${name}!`)
  } else {
    alert('Invalid Choice!')
    greeting();
  }
}
function displayExitMessage() {
  alert("You Chose 'NO'.")
}
yesButton.addEventListener('click', greeting);
noButton.addEventListener('click', displayExitMessage);
//
// CHECK MY NUMBER --END--
//
// index of and slice
console.log("This is the lesson's version of the assignment....");
const tagline = 'MDN - Resources for developers, by developers';
console.log(tagline.indexOf('developers')); // 20
console.log(tagline.indexOf('x')); // -1
const firstOccurrence = tagline.indexOf('developers');
const secondOccurrence = tagline.indexOf('developers', firstOccurrence + 1);
console.log(firstOccurrence); // 20
console.log(secondOccurrence); // 35


console.log(" ");
console.log("This is my Version of the assignment....");
console.log("Instances of bob should be located at: 14,31,63,78");
const taglineTwo = 'This sentance bob has the word bob in it a few different times bob as you can bob see.';
console.log(taglineTwo);
console.log(taglineTwo.indexOf('bob')); // 14
console.log(taglineTwo.indexOf('x')); // -1 If the string is not present 'indexOf()' returns '-1'
const firstTime = taglineTwo.indexOf('bob');
const secondTime = taglineTwo.indexOf('bob', firstTime + 1);
const thirdTime = taglineTwo.indexOf('bob', secondTime + 1);
const fourthTime = taglineTwo.indexOf('bob', thirdTime + 1);
const fifthTime = taglineTwo.indexOf('bob', fourthTime + 1);
console.log(`First occurance: ${firstTime}`); // 14
console.log(`Second occurance: ${secondTime}`); // 31
console.log(`Third occurance: ${thirdTime}`); // 63
console.log(`Fourth occurance: ${fourthTime}`); // 78
console.log(`Fifth occurance?: ${fifthTime}`); // -1 (doesn't exist)
console.log(" ");
console.log(`
That required all of this code!
const taglineTwo = 'This sentance bob has the word bob in it a few different times bob as you can bob see.';
const firstTime = taglineTwo.indexOf('bob');
const secondTime = taglineTwo.indexOf('bob', firstTime + 1);
const thirdTime = taglineTwo.indexOf('bob', secondTime + 1);
const fourthTime = taglineTwo.indexOf('bob', thirdTime + 1);
console.log(\`First occurance: ${firstTime}\`); // 14
console.log(\`Second occurance: ${secondTime}\`); // 31
console.log(\`Third occurance: ${thirdTime}\`); // 63
console.log(\`Fourth occurance: ${fourthTime}\`); // 78
`);
console.log(" ");
console.log("Now to write a function that will do all that work automatically");
console.log(" ");

function searching (string, findme) { // Search given string:'string', for given word:'findme'.
  indexNum = string.indexOf(findme);  // Set indexNum to first occurance of 'findme'.
  sliceArray = [];
  while (indexNum != -1) {
    console.log(indexNum); // log the current location of given word.
    sliceArray.push(`${string.slice(indexNum, indexNum+findme.length)}`);
    indexNum = string.indexOf(findme, indexNum + 1); // Store next location of 'findme' in 'indexNum'.
  }
  console.log(sliceArray);
}

searching(taglineTwo, 'bob');
searching(taglineTwo, 'se');

let sliceable = "ThingToSlice";
console.log(sliceable.length);
let sliceOne = sliceable.slice(5, 7);
let subOne = sliceable.substring(5,7);
// console.log(sliceable.slice(5,7));
console.log("Thing to slice: " + sliceable);
console.log("This is the slice: " + sliceOne);
console.log("This is the substring: " + subOne);

let mystring = "This is your name: yourname";
console.log(mystring.replace("yourname", "Thomas"));
console.log(taglineTwo.replace(/bob/g, "David")); // '/bob/g' > THIS IS REGEX hence it doesn't use quotes

console.log(" ");
console.log("testing");
console.log("THIS".toLowerCase());
console.log(mystring.toUpperCase());

let conOne = "This";
let conTwo = "That";
let conStart = "Concatonating three strings:";

console.log(conStart.concat(" ", conOne, " ", conTwo)); // concatonation is the same as using  the '+' opperator.
console.log(conStart + " " + conOne + " " + conTwo);

// NOTE - 'strings' are IMMUTABLE, ie. they cannot be changed ONLY replaced.

// 'trim' removes white space

let spacedOut = "     To be trimmed       ";
console.log(spacedOut);
console.log(spacedOut.trim()); // both front and back whitespace trimmed (not white space between words)
console.log(spacedOut.trim().length);
console.log(spacedOut.trimStart()); // only white space at start trimmed
console.log(spacedOut.trimStart().length);
console.log(spacedOut.trimEnd()); // only white space at end trimmed
console.log(spacedOut.trimEnd().length);
console.log(spacedOut.padStart(5, "0"));

padded = "padded".padEnd(2,"x");
console.log(padded);



function setProblemAnswer (myidtag, mycontent, mycontentTwo) {
  let answer = undefined;
  if (mycontentTwo != undefined) {
    answer = mycontent + " " + mycontentTwo;
  } else {
    answer = mycontent;
  }
  myidtag.innerHTML = answer;
}
setProblemAnswer(probAnswer, probAnswerInner);
setProblemAnswer(problemTwo, problemTwoInner, problemTwoInnerTwo);

// switch statements
console.log("switch statements >>");
let day;
let num = 11;

switch (num) {
  case 10:
    console.log("num is 10");
    break;
  case 0:
    console.log("num is not 10");
    break;
  default:
    console.log("No cases match");
}

switch (new Date().getDay()) {
  case 0:
    day = "Sunday";
    break;
  case 6:
    day = "Saturday";
    break;
  default:
    day = "Looking forward to the weekend!";
}

console.log(day);
console.log(new Date().getDay());
switch (daynum) {
  case 4: // will return the same as case 5
  case 5:
    console.log("It's almost the weekend!");
    break;
  case 6: // will return the same as case 0
  case 0:
    console.log("It's the Weekend!");
    break;
  default:
    console.log("Not the weekend yet. :("); // will run if none of the other cases run
}
for (x in fruits) {
  console.log(x);
  console.log(fruits[x])
}
for (x of fruits) {
  console.log(x);
}
if (theage >= 14 && theage <= 90) {
  console.log("You are of age.");
} else {
  console.log("You are NOT of age.");
}


// let youranswer = prompt("What is your name?");
// let password = "1234"

// switch (youranswer) {
//   case "bob":
//     alert("I know you!");
//     let userpass = prompt("What is your password?")
//     switch (userpass) {
//       case password:
//         alert("Welcome");
//         break;
//       default:
//         alert("Wrong Password");
//     }
//     break;
//   default:
//     alert("You monster! Go away!");
// }

// if (youranswer == "bob") {
//   alert("I know you!");
// } else {
//   alert("You monster! Go away!");
// }








