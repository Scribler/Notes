//
// CONSOLE CODE START
//
const myarr = [1, 2, 3];
console.log(myarr.shift());
console.log(myarr.shift());
console.log(myarr.shift());

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
const inQCont = document.getElementById('inputQuestionContainer');
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
function createMainQuestion (mainQ) {
  const questionElement = document.createElement("h4");
  const content = document.createTextNode(mainQ);
  questionElement.appendChild(content);
  inQCont.appendChild(questionElement);
}
function createInput (newInput, inputId) {
  // Create Label and insert before Check Answer Button
  const label= document.createElement("label");
  label.setAttribute("id", inputId);
  label.setAttribute("for", `buttonAreaInput${inputId}`);
  label.innerText = newInput;
  inQCont.appendChild(label);
  // Create Label and insert before Check Answer Button
  const input = document.createElement("input");
  input.setAttribute("id", `buttonAreaInput${inputId}`);
  input.setAttribute("type", "text");
  input.setAttribute("onfocus", "this.value=''");
  input.setAttribute("name", `buttonAreaInput${inputId}`);
  inQCont.appendChild(input);
  console.log(input.id);
  const inArea = document.getElementById('buttonAreaInput');
}

// SHOW Question Area
function showQuestion (...question) {
  inCont.style.display = 'block';
  const inputIdNames = ["One", "Two", "Three"];
  for (q of question) {
    if (q.includes("?")) {
      console.log(`Input Label is: ${q}`);
      createInput(q, inputIdNames.shift());
    } else {
      console.log(`Question is: ${q}`);
      createMainQuestion(q);
    }
    document.createElement("label");
    // inLabel.innerHTML = question;
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
  let question = "What number comes after 5?"
  showQuestion(question);
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
  let question = "What is the official name of javascript?";
  showQuestion(question);
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
  let question = "Enter any number for testing";
  showQuestion(question);
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
// Show question
function checkLevelButton () {
  currentQuestion = 4;
  // Define Main question
  const question = "Give two numbers that will be added and tested to see if combined they are more, less, or equal to the number '4'.";
  // Define input labels
  const firstLabel = "What is your first number?";
  const secondLabel = "What is your second number?";
  showQuestion(question, firstLabel, secondLabel);
  // showQuestion(question, firstLabel);
}
// Question Logic
function checkLevel () {
  // PROPER WAY
  const first = document.getElementById('buttonAreaInputOne');
  const second = document.getElementById('buttonAreaInputTwo');
  console.log(first.value);
  console.log(second.value);
  const combined = +first.value + +second.value;
  console.log(combined);
  let result;
  if (combined < 4) {
    result = 'Below';
  } else if (combined > 4) {
    result = 'Above';
  } else {
    result = 'Same';
  }
  outCont.style.display = "block"
  out.innerHTML = result;
}

console.log(`%c ${new Date().getDate()}`, 'background-color:red');

//
// Calculator
//

// CALCULATOR VARIABLES
const firstInput = document.getElementById('firstIn');
const secondInput = document.getElementById('secondIn');
const opperator = document.getElementById('opperator');
const equalsButton = document.getElementById('equals');
const calcAnswer = document.getElementById('calcAnswer');
const calcClear = document.getElementById('calcClear');
const calcOut = document.getElementById('calcout');
calcClear.addEventListener('click', calculatorClear);
equalsButton.addEventListener('click', calculator); 
//

// CALCULATOR CLEAR FUNCTION
function calculatorClear () {
  calcAnswer.innerHTML = "";
  firstInput.value = "";
  secondInput.value = "";
  opperator.value = "";
  calcAnswer.style.display = 'none';
}

// CALCULATOR FUNCTION
function calculator() {
  const first = +firstInput.value;
  const second = +secondInput.value;
  const opp = opperator.value;
  let result;
  // addition
  if (opp== '+' || opp== 'plus') {
    result = first + second;
  // multiplication
  } else if (opp == 'x' || opp == '*' || opp == 'X' || opp == 'multiply') {
    result = first * second;
  // division
  } else if (opp == '/' || opp == 'divide') {
    result = first / second;
  // error log
  } else {
    console.error("That isn't a recognized mathimatical opperator")
  }

  // SHOW ANSWER
  calcout.style.display = "inline-block"
  calcAnswer.style.display = "inline-block";
  calcAnswer.innerHTML = result;
  console.log(result);
}


// GOALS FOR THIS SECTION
//
// *** Make everything beautiful ***
// *** USE HSL COLORS ***
//
// 1) button that toggles part of theme
// 2) dropdown that selects different themes
// 3) radio button that selects themes
// 4) check boxes that select themes






