//
// (0) RE-USABLE SCRIPTS
//

// RE-USABLE VARIABLES DECLARATION *** START ***
// RE-USABLE VARIABLES DECLARATION *** END ***
function drawQuestion(question) {
  let inputContainer = document.getElementById('inCont');
  let inputQuestionContainer = document.getElementById('inputQuestionContainer');
  let outputContainer = document.getElementById('outCont');
  if (inputContainer.style.display == 'inline-block') {
    inputContainer.style.display = 'none';
    inputQuestionContainer.innerHTML = "";
    outputContainer.innerHTML = "";
    outputContainer.style.display = 'none';
  } else {
    inputContainer.style.display = 'inline-block';
    // inputContainer.style.flexDirection = 'column';
    inputQuestionContainer.innerHTML = `<p>${question}</p>`;
  }

}


let button = document.getElementById('checkAnswer');
function drawInput(inNum, buttonPresent) {
  let inputQuestionContainer = document.getElementById('inputQuestionContainer');
  // draw inputs
  for (i = 0; i < inNum; i++) {
    let input = document.createElement('input');
    input.style.display = 'block';
    input.style.margin = '10px';
    input.setAttribute('id', `in${i}`);
    inputQuestionContainer.appendChild(input);
    input.innerHTML = "testing";
  }
  // draw button
  if (buttonPresent == 'button' || buttonPresent == 'yes' || buttonPresent == 1 || buttonPresent == '1') { // any second input will display button.
    button.style.display = 'inline-block';
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
  drawQuestion(question);
  drawInput(1, 'yes');
  // agismSolve();
}
button.addEventListener('click', agismSolve);
function agismSolve() {
  let outputContainer = document.getElementById('outCont');
  outputContainer.style.display = 'block';
  let userIn = document.getElementById('in0');
  let age = userIn.value;
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

// TESTING

function array5num() {
  let myArr = [5, 4, 3, 1]
  return myArr;
}

console.log(array5num()[2]);
