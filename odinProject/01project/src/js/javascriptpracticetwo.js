//
// Variables
//

console.log("test");
var age;
var old;
window.onkeyup = youOld;
const ageOutput = document.getElementById('ageOutput');
const html = document.querySelector('html');
const body = document.querySelector('body');
const mynav = document.getElementsByName('a');
const hone = document.querySelector('h1');

//
// Age checking scripts
//

function youOld () {
  age = document.getElementById('age').value;
  
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
    old = `You're ${age}, You're Young!`;
  }
  ageOutput.innerText = old;
}

//
// theme changeing
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
// GOALS FOR THIS SECTION
//
// *** Make everything beautiful ***
// *** USE HSL COLORS ***
//
// 1) button that toggles part of theme
// 2) dropdown that selects different themes
// 3) radio button that selects themes
// 4) check boxes that select themes




































