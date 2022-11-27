//
// (0) RE-USABLE SCRIPTS
//
function clearDefault() {
  const defArea = document.getElementById('default');
  defArea.style.display = 'none';
}
function showDefault() {
  const defArea = document.getElementById('default');
  defArea.style.display = 'block';
}
// drawQuestion
function initProgArea(initialContent) {
  let inputContainer = document.getElementById('inCont');
  let inputQuestionContainer = document.getElementById('inputQuestionContainer');
  let outputContainer = document.getElementById('outCont');
  if (inputContainer.style.display == 'inline-block') {
    inputContainer.style.display = 'none';
    inputQuestionContainer.innerHTML = "";
    outputContainer.innerHTML = "";
    outputContainer.style.display = 'none';
    showDefault();
  } else {
    clearDefault();
    inputContainer.style.display = 'inline-block';
    inputQuestionContainer.innerHTML = `<p>${initialContent}</p>`;
  }

}
//
let button = document.getElementById('checkAnswer');
//
function drawInput(inNum, buttonPresent, buttonText, buttID) {
  //
  let inputQuestionContainer = document.getElementById('inputQuestionContainer');
  //
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
  if (buttonPresent == 'button' || buttonPresent == 'yes' || buttonPresent == 1 || buttonPresent == '1') { // any second input will display button.
    button.style.display = 'inline-block';
    if(buttonText != undefined) {
      button.innerHTML = buttonText;
      buttID ? button.setAttribute('id', buttID) : console.log('no button id set');
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

function agismInitialize() { // optional methods commented out.
  let button = document.getElementById('checkAnswer');
  const question = "What is your age?"
  initProgArea(question);
  drawInput(1, 'yes');
  // agismSolve();
}
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
  `);
  drawInput(0,'yes','Change Theme');
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
