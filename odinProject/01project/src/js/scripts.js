const inputDataArray = new Array; // make empty array
const inputData = document.getElementById('progIn'); // INPUT field
const addItem = document.getElementById('addItem'); // ADD ITEM button
const removeItem = document.getElementById('removeItem'); // ADD ITEM button
const runProg = document.getElementById('runProg'); // RUN PROGRAM button
const ouput = document.getElementById('output'); // OUTPUT field
let out; // HTML formatted array content
addItem.addEventListener('click', addToArray); // onclick add value to array
removeItem.addEventListener('click', remove); // onclick display new array items
runProg.addEventListener('click', showArray); // onclick display new array items

function addToArray () { // add inputData value to Array and clear input field.
  inputDataArray.push(inputData.value);
  inputData.value = '';
}
function showArray () { // format array data into HTML and display in 'output' div.
  out = "<ul>";
  inputDataArray.forEach(addtags)
  out += "</ul>";
  output.innerHTML = out;
}
function addtags(value) { // "CALLED ON EACH ARRAY ITEM" - adds li tags to each item
  out += "<li>" + value + "</li>";
}
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


// Testing

let testArr = ["ting", "bing", "sing", "blorp"];
console.log(`Index Of: ${testArr.indexOf('bin')}`);







