
//
// (2) Theme Changeing START
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
// closeQuestion.addEventListener('click', closeQuest);
function closeQuest () {
  inCont.style.display = 'none';
  outCont.style.display = 'none';
}

function createMainQuestion (mainQ) {
  const questionElement = document.createElement("h4");
  const content = document.createTextNode(mainQ);
  questionElement.appendChild(content);
  inQCont.appendChild(questionElement);
}
function createInput (newInput, inputId) {
  // Create Label and insert before Check Answer Button
  const label = document.createElement("label");
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
  }
}
// (1) currently checks answer only for #1
// checkAnswer.addEventListener('click', checking);
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


// (8) Canvas Play 
// canvas button
const canvasPlay = document.getElementById('canvasPlay');
canvasPlay.addEventListener('click', drawCanvas);
const canvas = document.getElementById('outputCanvas');
// 2d context
const ctx = canvas.getContext('2d');
// newTest.addEventListener('click', demo);
let WIDTH = '5';
let HEIGHT = '200';

//draw Canvas

function drawCanvas() {
  if (outCont.style.display == 'inline-block') {
    outCont.style.display = 'none';
    canvas.style.display = 'none';
  } else if (outCont.style.display == 'none' || outCont.style.display == ""){
    outCont.style.display = 'inline-block';
    canvas.style.display = 'inline-block';
    console.log(outCont.style.display);
  } else {
    console.log(outCont.style.display);
    console.error("Something Went wrong");
  }
  drawInCanvas();
}

// function(number) {
  // return Math.floor(Math.random()*number)
// }

function drawInCanvas() {
  ctx.beginPath();
  ctx.lineWidth = "1";
  ctx.strokeStyle = 'green';
  ctx.moveTo(5, 50);
  ctx.lineTo(200, 50);
  ctx.stroke();

  console.log('This function should draw in the canvas')
}







// (000) CONSOLE CODE START
function tenNum () {
  let cnt = 0;
  while (cnt < 5) {
    let base = Math.random()*10;
    let floor = Math.floor(base + 1);
    let round= Math.round(base);
    console.log(`%c-----${cnt + 1}-----`, 'background-color:red')
    console.log(`Without floor: ${base}`);
    console.log(`%cWith floor: ${floor}`, 'background-color:yellow');
    console.log(`With round: ${round}`);
    // console.log('-----------')
    cnt ++;
  }
}

tenNum();

