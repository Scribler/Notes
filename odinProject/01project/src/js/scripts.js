const inputDataArray = new Array; // make empty array
const inputData = document.getElementById('progIn'); // INPUT field
const addItem = document.getElementById('addItem'); // ADD ITEM button
const removeItem = document.getElementById('removeItem'); // ADD ITEM button
const runProg = document.getElementById('runProg'); // RUN PROGRAM button
const ouput = document.getElementById('output'); // OUTPUT field
let out; // HTML formatted array content
addItem.addEventListener('click', addToArray); // onclick add value to array

// Add ability to press 'ENTER keycode:13' to add items


removeItem.addEventListener('click', remove); // onclick display new array items
runProg.addEventListener('click', showArray); // onclick display new array items
const resetInput = function () {
  inputData.value = '';
}
function addToArray () { // add inputData value to Array and clear input field.
  inputDataArray.push(inputData.value);
  resetInput();
  // inputData.value = '';
}
function showArray () { // format array data into HTML and display in 'output' div.
  out = "<ul>";
  inputDataArray.forEach(addtags)
  out += "</ul>";
  output.innerHTML = out;
  resetInput();
}
function addtags(value) { // "CALLED ON EACH ARRAY ITEM" - adds li tags to each item
  out += "<li>" + value + "</li>";
}

// TODO - make sure this functions removes ALL instances of duplicate items in the array.
function remove () { // run when 'Remove Item' button clicked 
  let itemLoc = inputDataArray.indexOf(inputData.value);
  if (inputData.value == '') { // if no input, pop item off array
    inputDataArray.pop();
  } else {
    if (itemLoc == -1) {
      alert("That is not an item in the array");
    } else {
      inputDataArray.splice(itemLoc, 1);
    }
  }
}
// 1) pressing 'Add Item' button will add whatever is in the text box to the array and clear the textbox.
// 2) pressiong 'Run Program' Will display the array items below.
  // - add an opening ul tag
  // - add each item with an <li> before, and </li> after
  // - add a closing /ul tag
// 3)(optional) displayed items will be in a chart with columns and rows.


// JAVASCRIPT 30 STUFF (DRUM KIT)
const divs = document.querySelectorAll('div');

const logText = function (e) {
  console.log(this.classList.value);
}

divs.forEach(div => div.addEventListener('click', logText))


// Testing

let testArr = ["ting", "bing", "sing", "blorp"];
console.log(`Index Of: ${testArr.indexOf('bin')}`);







