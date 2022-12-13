//
// (0) RE-USABLE SCRIPTS
//
let programIdentifier = 'default';

// (0-1) CLEAR DEFAULT TEXT
function clearDefault() {
  const defArea = document.getElementById('default');
  defArea.style.display = 'none';
}
// (0-2) SHOW DEFAULT TEXT
function showDefault() {
  programIdentifier = 'default';
  const defArea = document.getElementById('default');
  defArea.style.display = 'block';
}
// (0-3) PROGRAM BUTTON ACTION (CLEAR - if program present) (INITIALIZE - if default area shown)
function initProgArea(initialContent, progIdent) {
  let inputContainer = document.getElementById('inCont');
  let inputQuestionContainer = document.getElementById('inputQuestionContainer');
  let outputContainer = document.getElementById('outCont');
  let button = document.getElementById('checkAnswer');
  // if (inputContainer.style.display == 'inline-block') {
  console.log(progIdent);
  console.log(programIdentifier);
  if (progIdent == programIdentifier) {
    inputContainer.style.display = 'none';
    inputQuestionContainer.innerHTML = "";
    outputContainer.innerHTML = "";
    outputContainer.style.display = 'none';
    button.innerHTML = "default";
    programIdentifier = 'default';
    showDefault();
    console.log(progIdent + " 2");
    console.log(programIdentifier + " 2");
  } else if (programIdentifier != 'default'){
    inputContainer.style.display = 'none';
    inputQuestionContainer.innerHTML = "";
    outputContainer.innerHTML = "";
    outputContainer.style.display = 'none';
    button.innerHTML = "default";
    // showDefault();
    clearDefault();
    programIdentifier = progIdent;
    inputContainer.style.display = 'inline-block';
    inputQuestionContainer.innerHTML = `<p>${initialContent}</p>`;
  } else {
    clearDefault();
    programIdentifier = progIdent;
    console.log(programIdentifier);
    inputContainer.style.display = 'inline-block';
    inputQuestionContainer.innerHTML = `<p>${initialContent}</p>`;
  }

}
// (0-4) DRAW INPUTS [(1)How many?,(2)Is there a button?,(3)Button text,(4)Button ID]
function drawInput(inNum, buttonPresent, buttonText) {
  let button = document.getElementById('checkAnswer');
  let inputQuestionContainer = document.getElementById('inputQuestionContainer');
  // DRAWING INPUTS
  for (i = 0; i < inNum; i++) {
    let input = document.createElement('input');
    input.style.display = 'block';
    input.style.margin = '10px';
    input.setAttribute('id', `in${i}`);
    inputQuestionContainer.appendChild(input);
    input.innerHTML = "testing";
  }
  // DRAW BUTTON
  // any second input will display button.
  if (buttonPresent == 'button' || buttonPresent == 'yes' || buttonPresent == 1 || buttonPresent == '1') { 
    button.style.display = 'inline-block';
    if(buttonText != undefined) {
      button.innerHTML = buttonText;
    } else {
      button.innerHTML = 'Check Answer';
    }
  } else if (buttonPresent == '0' || buttonPresent == 0 || buttonPresent == 'no'){
    button.style.display = 'none';
  } else {
    console.error("I don't understand that input")
  }
}



//
// (1) Age checking script START
//
const ageTest = document.getElementById('ageTest');
ageTest.addEventListener('click', agismInitialize);

// INITIALIZE SCRIPT(1)
function agismInitialize() { // optional methods commented out.
  const question = "What is your age?";
  initProgArea(question, 'agism');
  drawInput(1, 'yes', 'Age Assessment');
  programIdentifier = 'agism';
}
// SOLVE SCRIPT(1)
let button = document.getElementById('checkAnswer');
button.addEventListener('click', agismSolve);
function agismSolve() {
  //
  let outputContainer = document.getElementById('outCont');
  let userIn = document.getElementById('in0');
  let age = userIn.value;
  //
  outputContainer.style.display = 'block';
  if (age >= 80) {
    answer = `You're ${age}. You're very old.`;
  } else if (age >= 70 && age < 80) {
    answer = `You're ${age}. You're old.`;
  } else if (age >= 60 && age < 70) {
    answer = `You're ${age}. You're a little old.`;
  } else if (age >= 50 && age < 60) {
    answer = `You're ${age}. You're barely old.`;
  } else if(age >=47 && age < 50) {
    answer = `You're ${age}. You're not old.`;
  } else {
    answer = `You're ${age}, You're Young!`;
  }
  outputContainer.innerHTML = `<p>${answer}</p>`;
}

//
// (2) Change Theme
//
const chgTheme= document.getElementById('changeTheme');
let themeSwapCurrent = 'light'
chgTheme.addEventListener('click', themeswap);

function themeswap() {
  initProgArea(`
  <h2>Heading</h2>
  <p>Sit beatae nihil fuga corporis odio Quibusdam aliquid deleniti veritatis recusandae in Nostrum totam quidem sint quasi nulla. Repellat fugit id eius possimus nemo Cumque expedita illo quos architecto cum</p>
  <p>Sit beatae nihil fuga corporis odio Quibusdam aliquid deleniti veritatis recusandae in Nostrum totam quidem sint quasi nulla. Repellat fugit id eius possimus nemo Cumque expedita illo quos architecto cum</p>
  `, 'themeSwap');
  drawInput(0,'yes','Change Theme');
  programIdentifier = 'themeSwap';
}
button.removeEventListener('click', agismSolve);
button.addEventListener('click', themeChange);
function themeChange(){
  if(themeSwapCurrent == 'light') {
    console.log("Light Theme. Changing to Dark");
    themeSwapCurrent = 'dark';
  } else {
    console.log("Dark Theme. Changing to Light");
    themeSwapCurrent = 'light';
  }
}


// TESTING

// function array5num() {
  // let myArr = [5, 4, 3, 1]
  // return myArr;
// }
//
// console.log(array5num()[2]);
//

function count5() {
  let i = 0;
  while(i < 5){
    i++;
    console.log("'i' is currently: " + i);
    if(i == 5){
      console.log("This is the last itteration");
    } else {
      console.log("Next...");
    }
  }
}
count5();
