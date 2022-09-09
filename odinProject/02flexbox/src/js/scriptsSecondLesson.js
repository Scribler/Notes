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
  alert("Your possible greetings are,\n 1\) Hello, 'name'!\n2\) Greetings, 'name'!\n3\)Salutations, 'name'!") // Give possible greeting choices
  const greetingChoice = prompt('Which Greeting would you like? 1, 2, or 3?'); // store choice
  if (greetingChoice == 1) { // insert name into chosen greeting and display in an alert.
    alert(`Hello, ${name}!`);
  } else if (greetingChoice == 2) {
    alert(`Greetings, ${name}!`)
  } else if (greetingChoice == 3) {
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

console.log('This is appostrophy\'s test....yes I know that doesn\'t have one :P.');













