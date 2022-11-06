//
// CONSOLE CODE START
//


// 'string 0' vs 'num 0'
// "0" is true, because it is a string
if ("0") {
  console.log("'0' as a string")
}
// 0 as a number is falsy so since if statements only evaluate if the condition is true, it does not run.
if (0) {
  console.log("Should not print");
} else {
  console.log("This runs because 0 is falsy");
}

//
// CONSOLE CODE END
//


//
// Variables
//
// General Variables
const ageOutput = document.getElementById('ageOutput');
const html = document.querySelector('html');
const body = document.querySelector('body');
const mynav = document.getElementsByName('a');
const hone = document.querySelector('h1');
let runNum = 1;

// Age Test Variables
var age;
var old;
var ageTest = document.getElementById('ageTest');
ageTest.addEventListener('click', youOld);

// Button Area Variables
const inCont = document.getElementById('inCont');
const inLabel = document.getElementById('inLabel');
const outCont= document.getElementById('outCont');
const outLabel = document.getElementById('outLabel');
const inArea = document.getElementById('buttonAreaInput');
const out = document.getElementById('out');
const checkAnswer = document.getElementById('checkAnswer');
const closeQuestion = document.getElementById('closeQuestion');



//
// Age checking script START
//
function youOld () { // optional methods commented out.
  age = document.getElementById('age').value;
 
  // USING A TERNARY OPPERATION
  // const old = age > 50
  //   ? `You're ${age} years old! You're old!`
  //   : "You're not old";
  // ageOutput.innerText = old;

  // USING 'else if' STATEMENTS (PREFERED)
  // if (age >= 80) {
    // old = `You're ${age}. You're very old.`;
  // } else if (age >= 70 && age < 80) {
    // old = `You're ${age}. You're old.`;
  // } else if (age >= 60 && age < 70) {
    // old = `You're ${age}. You're a little old.`;
  // } else if (age >= 50 && age < 60) {
    // old = `You're ${age}. You're barely old.`;
  // } else if(age >=47 && age < 50) {
    // old = `You're ${age}. You're not old.`;
  // } else {
    // old = `You're ${age}, You're Young!`;
  // }
  // ageOutput.innerText = old;
  
  // USING CHAINED TERNARY OPPERATIONS (don't do this)
  const oldness = age < 5
    ? `You're ${age}, only a baby.`
    : age < 10
    ? `You're ${age}, still VERY young.`
    : age < 20
    ? `You're ${age}, still young.`
    : age < 47
    ? `You're ${age}. You're in your prime!`
    : age < 55
    ? `You're ${age}. You're well primed! :P`
    : age < 70
    ? `You're ${age}. You're very well primed! :P`
    : age < 95
    ? `You're ${age}. Ok... now you're a bit old`
    : "you're old.";
  ageOutput.innerText = oldness;
  console.log(runNum++);
}
//
// Age checking script END
//

//
// Theme Changeing START
//

const changeTheme_button = document.getElementById('changeTheme');
const changeTheme_container = document.getElementById('themeChangerContainer');
let clicknum = 0;

changeTheme_button.addEventListener('click', changeTheme);
function changeTheme () {
  if (changeTheme_container.style.backgroundColor === 'var(--dark-grey)') {
    changeTheme_container.style.backgroundColor = 'var(--light-grey)';
    changeTheme_container.style.padding = '20px';
  } else {
    changeTheme_container.style.backgroundColor = 'var(--dark-grey)';
    changeTheme_container.style.padding = '40px';
  }
  console.log("Button 'clicked' " + ++clicknum + " times.");
  let numAtFive = clicknum % 5 === 0;
  if (numAtFive) {
    console.log("You have clicked the button 5 times!");
  }
}
//
// Theme Changeing END
//

//
//
// *** BUTTONS AREA (START) ***
//
// Ask User For Input and Check it.
//
//
//

//
// (0) REUSABLE FUNCTIONS
//

// CURRENT QUESTION PLACEHOLDER (ACTIVATED BY CLICKING BUTTON)
let currentQuestion = null;

// Close 'Question area' & 'Answer Area'
closeQuestion.addEventListener('click', closeQuest);
function closeQuest () {
  inCont.style.display = 'none';
  outCont.style.display = 'none';
}
var names = ['hat', 'cat', 'sat'];

for(name of names){
  console.log(name);
}

// SHOW Question Area
function showQuestion (...question) {
  inCont.style.display = 'block';
  for (q of question) {
    document.createElement("label");
    inLabel.innerHTML = question;
  }
}
// (1) currently checks answer only for #1
checkAnswer.addEventListener('click', checking);
function checking () {
  if (currentQuestion == 1) {
    afterFive();
  } else if (currentQuestion == 2) {
    nameCheck();
  } else if (currentQuestion == 3) {
    posNegNue();
  } else if (currentQuestion == 4) {
    checkLevel();
  } else {
    console.error("No Question Selected")
  }
}

//
// (1) check for numbers over 5 START
//
const askNumButton = document.getElementById('askNum');
askNumButton.addEventListener('click', numberCheckButton);
function numberCheckButton() {
  currentQuestion = 1;
  showQuestion("What number comes after 5?");
}
// Question One
function afterFive() {
  if (inArea.value < 6 || isNaN(inArea.value)) {
    outCont.style.display = 'none';
    inArea.value = "Try again";
  } else {
    outCont.style.display = 'block';
    out.innerHTML = "That's right!";
  }
}
//
// (2)check for proper name of javascript START
//
const askJsButton = document.getElementById('askJs');
askJsButton.addEventListener('click', nameCheckButton);
function nameCheckButton () {
  currentQuestion = 2;
  showQuestion("What is the official name of javascript?")
}
function nameCheck () {
  if (inArea.value.toLowerCase() == "ECMAscript".toLowerCase()) {
    outCont.style.display = 'block';
    out.innerHTML = "That's Correct!";
  } else {
    outCont.style.display = 'none';
    inArea.value = "NOPE! :P";
  }
}
//
// (3) Check if a number is positive, negative, or 0. START
//
const numTestButton = document.getElementById('numTest');
numTestButton.addEventListener('click', posNegNueButton);
function posNegNueButton () {
  currentQuestion = 3;
  showQuestion("Enter any number for testing");
}
function posNegNue () {
  if (inArea.value < 0) {
    outCont.style.display = 'block';
    out.innerHTML = "-1";
  } else if (inArea.value  > 0) {
    outCont.style.display = 'block';
    out.innerHTML = "+1";
  } else {
    outCont.style.display = 'block';
    out.innerHTML = "0";
  }
}
//
// (4) Check if the two numbers given add up 'to', 'above', or 'below' the number 4 START
//

const numLevel = document.getElementById('numLevel');
numLevel.addEventListener('click', checkLevelButton);
function checkLevelButton () {
  currentQuestion = 4;
  const q = "Give two numbers that will be added and tested to see if combined they are more, less, or equal to the number '4'.";

  const qOne = "What is your first number";
  const qTwo = "What is your second number";
  showQuestion(q, qOne, qTwo);
}

function checkLevel () {
  // PROPER WAY
  // let result;
  // if (combined < 4) {
    // result = 'Below';
  // } else if (combined > 4) {
    // result = 'Above';
  // } else {
    // result = 'Same';
  // }
  // QUESTION MARK NOTATION WAY (DON'T DO THIS FOR MORE THAN 2 NEEDED RESULTS)
  let result = combined < 4
    ? 'Below'
    : combined > 4
    ? 'Above'
    : 'Equal'
  alert(result);
}

console.log(`%c ${new Date().getDate()}`, 'background-color:red');






// GOALS FOR THIS SECTION
//
// *** Make everything beautiful ***
// *** USE HSL COLORS ***
//
// 1) button that toggles part of theme
// 2) dropdown that selects different themes
// 3) radio button that selects themes
// 4) check boxes that select themes
