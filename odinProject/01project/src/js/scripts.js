const oput = document.getElementById('output');
const rtiIn = document.getElementById('rtiIn');
const rti = document.getElementById('romanToInt');
rti.addEventListener('click', romantoInt);

function splitString(input) {
  // let inUpper = input.value.toUpperCase();
  let inUpper = input.value;
  return inUpper.split('');
}

function conNumType(array) {
  let returnArray = [];
  array.forEach(element => { // check number values and store in array
    switch (element) {
      case "I":
        returnArray.push(1);
        break;
      case "V":
        returnArray.push(5);
        break;
      case "X":
        returnArray.push(10);
        break;
      case "L":
        returnArray.push(50);
        break;
      case "C":
        returnArray.push(100);
        break;
      case "D":
        returnArray.push(500);
        break;
      case "M":
        returnArray.push(1000);
        break;
      default:
        console.error("Invalid Entry");
        break;
    }
  });
  console.log(returnArray);
  return returnArray;
}
function romantoInt(){
  let inArr = splitString(rtiIn);
  let outArr = [];
  let conVal = 0;
  console.log(`inArr = ${inArr}`);
  outArr = conNumType(inArr); // convert Roman letters to Integers and store in 'inArr' array
  
  outArr.forEach(element => { // add up numbers and store in 'conVal'
    conVal += element;
  });
  oput.innerHTML = `<p>MERGE THIS WITH MAIN THEN START NEW BRANCH FOR LEETCODE PROJECT<br>${inArr} = ${conVal}</p>`; // print output on page
}


// Sorting test START
// MMCDXXXIV
let ordered;
let unOrdered = [1000, 100, 1000, 500, 50, 600, 10, 121, 5];
ordered = unOrdered.sort(function(a, b) {return b - a});
console.log(`numbers in order: `, ordered);
// Sorting test END

let runSum = document.getElementById('runningSum');
runSum.addEventListener('click', runSumGenerator);

function runSumGenerator() {
  let nums = splitString(rtiIn);
  let generated = [];
  let numNext = 0;
  for (let index = 0; index < nums.length; index++) {
    const element = nums[index];
    numNext = numNext + parseInt(element);
    generated.push(numNext);
  }
  oput.innerHTML = `<p>${generated}</p>`
  console.log(nums);
  console.log(generated);
}


// MMCDXXXIV = 2434
// 1000, 1000, 100, 500, 10, 10, 10, 1, 5

// let total = 0;
// let sub = 0;
// X >= (anything in array)
// yes? add to total if (sub == 0) else total += (X - sub), sub = 0;
// no? sub = X;
//




// I = 1
// V = 5
// X = 10
// L = 50
// C = 100
// D = 500
// M = 1000
//
// CM = 900




// TESTING AREA
let taurusDetails = {
  colorOptions: ["red", "green", "yellow"],
  trims: ["sport", "regular", "power"],
  wheelOptions: ["alloy", "steel", "forged"]
};
let fmodels = {
  taurus: taurusDetails,
  // mustang: colors
};
let cars = {
  ford: fmodels,
};

// TESTING RUN
console.log(cars.ford.taurus.trims[2]);
cars.ford.taurus.trims.push("sho");
console.log(cars.ford.taurus.trims[3]);
cars.ford.taurus.wheelOptions.map((x, index) => console.log(`wheel option ${index + 1}: ${x}`))
cars.ford.taurus.wheelOptions.push("spinners");
console.log(" ");
cars.ford.taurus.wheelOptions.map((x, index) => console.log(`wheel option ${index + 1}: ${x}`))
