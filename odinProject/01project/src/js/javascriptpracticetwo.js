//
// (0) RE-USABLE SCRIPTS
//
let inputQuestionContainer = document.getElementById('inputQuestionContainer');

function drawQuestion(question) {
  let inputContainer = document.getElementById('inCont');
  let inputQuestionContainer = document.getElementById('inputQuestionContainer');
  if (inputContainer.style.display == 'flex') {
    inputContainer.style.display = 'none';
    inputQuestionContainer.innerHTML = "";
  } else {
    inputContainer.style.display = 'inline-block';
    // inputContainer.style.flexDirection = 'column';
    inputQuestionContainer.innerHTML = `<p>${question}</p>`;
  }

}

function drawInput(inNum, buttonPresent) {
  // draw inputs
  for (i = 0; i < inNum; i++) {
    let input = document.createElement('input');
    input.style.display = 'block';
    input.style.margin = '10px';
    inputQuestionContainer.appendChild(input);
    input.innerHTML = "testing";
  }
  // draw button
  let button = document.getElementById('checkAnswer');
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
ageTest.addEventListener('click', agism);

function agism() { // optional methods commented out.
  const question = "What is your age?"
  drawQuestion(question);
  drawInput(1, 'yes') 
  
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
  // console.log(runNum++);
}


