console.log("test");
const ageOutput = document.getElementById('ageOutput');
var age;
window.onkeyup = keypress;
const html = document.querySelector('html');
const body = document.querySelector('body');
const mynav = document.getElementsByName('a');
const hone = document.querySelector('h1');

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

function themeChange (bcolor, tcolor) {
  html.style.backgroundColor = bcolor;
  body.style.backgroundColor = bcolor;
  mynav.each.style.backgroundColor = bcolor;

  // mynav.style.color = tcolor;
  body.style.color = tcolor;
  hone.style.color = tcolor;
}
themeChange('black', 'green');
