console.log("test");
const ageOutput = document.getElementById('ageOutput');
var age;
window.onkeyup = keypress;

function keypress () {
  age = document.getElementById('age').value;
  var old;
  
  // const old = age > 50
  //   ? `You're ${age} years old! You're old!`
  //   : "You're not old";
  // ageOutput.innerText = old;
  if (age >= 80) {
    old = `You're ${age}. You're very old.`;
  } else if (age >= 70 && age < 80) {
    old = `You're ${age}. You're old.`;
  } else if (age >= 60 && age < 70) {
    old = `You're ${age}. You're a little old.`;
  } else if (age >= 50 && age < 60) {
    old = `You're ${age}. You're barely old.`;
  } else if(age >=47 && age < 50) {
    old = `You're ${age}. You're not old.`;
  } else {
    old = `You're $(age), You're Young!`;
  }
  ageOutput.innerText = old;
}

