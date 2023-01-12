// TODO items 
//    * ADD: 'clear program' button to reset site.
  //      Question
    //      - clear question
    //      - clear question input
    //      - clear question button
  //        - clear question area outline
  //      Outputt
    //      - clear outPutt area
    //      - reprint default list
    //      - log finished if complete.
    //      - attempt to log previous information (alert: FAILURE)> if previous info present.
//    * AUTOMATE the adding of the underline span to the first word of each string.
//    * STYLE goal list

const infoArea = document.getElementById('infoArea');
const outPutt = document.getElementById('outPutt');
const goalsArr = [
  // TODO automate the adding of the underline span to the first word of each string.
  "<span class='ul'>ADD</span> 'RESET' button.",
  "<span class='ul'>STORE</span> goals in a 'JS OBJECT' with the 'KEY' as the 'HEADING &nbsp; CHECKBOX' and 'VALUES' the 'lower lvl checkboxes",
  "<span class='ul'>CASCADING</span> CHECK LIST - when all items 'CHECKED' check &nbsp; &nbsp; the heading checkbox.",
  "<span class='ul'>Clear</span> Question",
  "<span class='ul'>Clear</span> Inputs",
  "<span class='ul'>Clear</span> Question Button",
  "<span class='ul'>Clear</span> Run / Start Button",
  "<span class='ul'>Clear</span> Question Box Contents(& border?)"
]

// RESET FUNCTION
window.onload = resetAll(); 
function resetAll() {
  infoArea.innerHTML = '<div class="question">Question</div>'
  outPutt.innerHTML = `Page Reset Placeholder Ran`;
  console.log("Page Reset Ran");
}

// Project Goals Check List
// window.onload = projGoals(goalsArr);
const checkButt = document.getElementById('checklistButton'); 
                                    // storing the function below in another function or the 'click' event will fire on page load
checkButt.addEventListener("click", function() {projGoals(goalsArr)});
function projGoals(goalsArr) {
  // INSERT '<h3>' TAG 
  outPutt.insertAdjacentHTML("beforeend", `<h3 class="clFuncGoals">Check List Functionality Goals</h3>`)

  // INSERT OPENING '<form>' TAG
  outPutt.insertAdjacentHTML("beforeend", `<form class="goal-list" name="goal-list">`)
  for (let i = 0; i < goalsArr.length; i ++) {
    let goalNum = i + 1; // for setting id and class name numbers (so each line has a unique identifier)
    let goal = goalsArr[i];
    // console.log(`${goalNum}) ${goal}`);
    outPutt.insertAdjacentHTML("beforeend", `
      <input id="check${goalNum}" class="lvl-2-goal-item" type="checkbox" name="goal${goalNum}" value="${goal}">
      <label id="goal${goalNum}" class="lvl-2-goal-item-label" for="goal${goalNum}">${goal}</label><br>`);
      // <label id="goal${goalNum}" class="lvl-2-goal-item-label" for="goal${goalNum}">${goalNum}.) - ${goal}</label><br>
    let lvl2goal = document.querySelector(`#goal${goalNum}`);
    let checkBox = document.querySelector(`#check${goalNum}`);
    let goalHeight = lvl2goal.offsetHeight;
    // let checkHeight = checkBox.offsetHeight;
    // console.log(`Goal Height: ${goalHeight}`);
    // console.log(`Checkbox Height: ${checkHeight}`);

    // fix alignment of checkbox to first line of goal. (default pushes checkbox to the bottom line if it has multiple lines)
    if (goalHeight > 19) {
      let offset = -(goalHeight - 19)
      checkBox.setAttribute('style', `transform:translateY(${offset}px);`); 
    }
  }
  // INSERT CLOSING '</form>' TAG
  outPutt.insertAdjacentHTML("beforeend", `</form>`);
}

// TESTING AREA


