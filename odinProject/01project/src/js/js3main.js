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
function favicon() {
  resetAll();
  outPutt.innerHTML = `<canvas id="canvasArea"></canvas>`
  const canvas = document.querySelector('canvas');
  const ctx = canvas.getContext('2d');
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









