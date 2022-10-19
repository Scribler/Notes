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
    old = "You're old";
  } else if (age >= 60 && age < 80) {
  }
  ageOutput.innerText = old;
}

