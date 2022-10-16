console.log("test");
const ageOutput = document.getElementById('ageOutput');
// const age = document.getElementById('age');

const old = age > 550
  ? self = "you're old!"
  : self = "You're not old";

ageOutput.innerText = old;