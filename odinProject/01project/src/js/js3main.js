// const { init } = require("browser-sync");

// set variables
const infoArea = document.getElementById('infoArea');
const outPutt = document.getElementById('outPutt');
const goalsArr = [
  "<span class='ul'>STORE</span> goals in a 'JS OBJECT' with the 'KEY' as the 'HEADING &nbsp; CHECKBOX' and 'VALUES' the 'lower lvl checkboxes",
  "<span class='ul'>CASCADING</span> CHECK LIST - when all items 'CHECKED' check &nbsp; &nbsp; the heading checkbox.",
]

//
// RESET FUNCTION
//
window.onload = projGoals(); 
function resetAll() {
  infoArea.style.display = 'none';
  outPutt.innerHTML = ''
  console.log("Page Reset Ran");
}
const resetButt = document.getElementById('reset'); 
resetButt.addEventListener('click', resetAll);

//
// PROJECT GOALS CHECK LIST
//
// *** NOTE > try using separate objects for setting goals as Main, or Sub goal ***
//
//
//
const checkButt = document.getElementById('checklistButton'); 
checkButt.addEventListener("click", projGoals);

//print out 'project goals' form 'goalsArr'
function projGoals() {
  // Reset question and result area.
  resetAll();
  // insert '<h3>' tag 
  outPutt.insertAdjacentHTML("beforeend", `<h3 class="clFuncGoals">Check List Functionality Goals</h3>`)

  // insert opening '<form>' tag
  outPutt.insertAdjacentHTML("beforeend", `<form class="goal-list" name="goal-list">`)
  for (let i = 0; i < goalsArr.length; i ++) {
    let goalNum = i + 1; // for setting id and class name numbers (so each line has a unique identifier)
    let goal = goalsArr[i];
    // console.log(`${goalNum}) ${goal}`);
    outPutt.insertAdjacentHTML("beforeend", `
      <input id="check${goalNum}" class="lvl-2-goal-item" type="checkbox" name="goal${goalNum}" value="${goal}">
      <label id="goal${goalNum}" class="lvl-2-goal-item-label" for="goal${goalNum}">${goal}</label><br>`);
    let lvl2goal = document.querySelector(`#goal${goalNum}`);
    let checkBox = document.querySelector(`#check${goalNum}`);
    let goalHeight = lvl2goal.offsetHeight;

    // fix alignment of checkbox to first line of goal. (default pushes checkbox to the bottom line if it has multiple lines)
    if (goalHeight > 19) {
      let offset = -(goalHeight - 19)
      checkBox.setAttribute('style', `transform:translateY(${offset}px);`); 
    }
  }
  // insert closing '</form>' tag
  outPutt.insertAdjacentHTML("beforeend", `</form>`);
}

//
// FAVICON MAKER AREA
//
const faviconMaker = document.getElementById('faviconMaker');
faviconMaker.addEventListener('click', favicon);
function random(number) {
    return Math.floor(Math.random()*number);
}
function favicon() {
  resetAll();
  outPutt.innerHTML = `<canvas id="canvasArea"></canvas>`
  // let WIDTH = document.documentElement.clientWidth;
  // let HEIGHT = document.documentElement.clientHeight;
  const canvas = document.querySelector('canvas');
  let WIDTH = canvas.width;
  let HEIGHT = canvas.height;
  const ctx = canvas.getContext('2d');
  ctx.clearRect(0,0,WIDTH,HEIGHT);
  for (let i = 0; i < 10; i++) {
    ctx.beginPath();
    ctx.fillStyle = 'rgba(255,0,0,0.5)';
    ctx.arc(random(WIDTH), random(HEIGHT), random(10), 0, 2*Math.PI);
    ctx.fill();
    ctx.fillStyle = 'rgba(0,255,0,0.5)';
    ctx.arc(random(WIDTH), random(HEIGHT), random(30), 0, 2*Math.PI);
    ctx.fill();
    ctx.fillStyle = 'rgba(0,0,255,0.5)';
    ctx.arc(random(WIDTH), random(HEIGHT), random(30), 0, 2*Math.PI);
    ctx.fill();
    console.log(ctx);
  }
}

//
// TESTING AREA
//

// divide testing content from main
console.log("*\n*\n*\nTESTING AREA\n*\n*\n*");

//
// RANDOM NUMBER GENERATION START
//
function randomNum(isFloat, min, max) {
  max = max + 1;
  let floatStatus;
  if(isFloat < 0 || isFloat > 1) {
    console.log('Invalid input!');
  } else if(isFloat == 1) {
    console.log('Is float');
    floatStatus = true;
  } else {
    console.log('Not a float');
    floatStatus = false;
  }
  console.log(`lowest number: ${min}, highest number: ${max}`);
  for(i=0; i<3; i++){
    if(floatStatus) {
      console.log(`Cycle ${i + 1}: `, Math.random() * (max - min) + min);
    } else {
      console.log(`Cycle ${i + 1}: `, Math.floor(Math.random() * (max - min) + min));
    }
  }
    return Math.random() * (max + 1);
}
//
// RANDOM NUMBER GENERATION END
//

//
// PLAYING WITH NESTED OBJECTS >>>> USE THIS FOR MAKING NESTED LISTS FOR REFERENCE SITE START
//
const gitTasks = {
  objectTitle: "GIT",
  checkout: "<code>git checkout <name of repository branch></code>",
  commit: `<code>git commit -m "<message for commit>"</code>`
}
const nvim = {
  // exitInsert: 'jk',
  nvimTree: {
    openVsplit: "<C-v>",
    openHsplit: "<C-x>"
  },
  // something: "test",
  // otherthg: "another Test"
}
let Honda3 = ["cb350", "st1300", "cb500"];
let Yamaha3 = ["yama1", "yama2", "R7"];
let Suzuki3 = ["Katana", "Busa", "SV650"];

let soup3 = ["potato", "pumpkin", "French Onion"];
let salad3 = ["romaine", "chicken", "egg"];
let pizza3 = ["Hawaian", "4cheese", "Peperoni"];

let big3 = ["St. Bernard", "Rotwieler", "Mastif"];
let medium3 = ["husky", "German Shephard", "Golden Retriever"];
let small3 = ["Chiwawa", "Pomeranian", "Bichon"];

let bikes2 = [Honda3, Yamaha3, Suzuki3];
let foods2 = [soup3, salad3, pizza3];
let dogs2 = [big3, medium3, small3];

let lvl1 = [bikes2, foods2, dogs2]


//
// PLAYING WITH NESTED OBJECTS >>>> USE THIS FOR MAKING NESTED LISTS FOR REFERENCE SITE END
//


//
// TESTING RUN
//
console.log(randomNum(0, 3, 15));
console.log("TEST");
console.log(nvim.nvimTree.openVsplit);

for (const key in nvim) {
  console.log(`key: ${key}`)
  let value = nvim[key];
  for (const key in value) {
    if (value.hasOwnProperty(key)) {
      const element = value[key];
      console.log(`second key: ${key}`)
    }
  }
  console.log(`value: ${value}`)
  // console.log(`value: ${value}`)
}


console.log(lvl1);







