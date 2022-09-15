// / const { default: createDependencyGraph } = require("postcss-cli/lib/DependencyGraph");

str = "This string is embeded.";
firstStr = `The following string is embeded: '${str}'`; // USE backtics to EMBED!!! 

//
// NULL VS UNDEFINED START
let age = null; // null is used for unknown
console.log(age); // evaluates to 'null'.
let name; // undefined is for things that havn't been set(DO NOT SET THINGS TO UNDEFINED)
console.log(name); // evaluates to 'undefined'.
// NULL VS UNDEFINED END
//

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

let firstName = "Daryl";
console.log(`Hello ${1}.`);
console.log(`Hello ${"firstName"}.`);
console.log(`Hello ${firstName}.`);
const longString = "This needs to wrap \n and I wonder if it will work \n I guess we are going to find out!";
console.log(longString);


//
// CHECK MY NUMBER --START--
//

// assigning variables
const yesButton = document.getElementById('yesCheckMyNumber');
const noButton = document.getElementById('noCheckMyNumber');
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


let probAnswer = document.getElementById("problemAnswer");
let probAnswerInner = "My writen answer".toString().padStart(22, 'x')+" " + "This: character at '2': " + "This".charAt(2);
let problemTwo = document.getElementById("problemTwo");
let problemTwoInner = "This: character at 1: " + "This".charAt(1);
let problemTwoInnerTwo = "This: character code at 1: " + "This".charCodeAt(1);

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