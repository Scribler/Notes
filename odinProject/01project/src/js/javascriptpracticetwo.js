console.log("test");
const ageOutput = document.getElementById('ageOutput');
const age = document.getElementById('age').innerText;

const old = age > 50
  ? self = `You're ${age} years old! You're old!`
  : self = "You're not old";

ageOutput.innerText = old;
