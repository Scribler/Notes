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
let colors = {
  blue: "blue",
  green: "green",
  yellow: "yellow"
};
let rimSizes = {
  twenty1: '21"',
  twenty2: '22"',
  twenty3: '23"'
};
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
let spinners = {
  color: colors,
  size: rimSizes
};





// AGE CHECK
function checkAge(age) {
  if (age >= 18) {
    return true;
  } else if (age == true) {
    return true;
  } else if (age == false){
    return;
  } else {
    return confirm('Do you have permission from your parents?');
  }
}
function showMovie(age) {
  if ( !checkAge(age) ) {
    return;
  }
  alert( "Showing you the movie" );
}

// let age = prompt('How old are you?'); // prompt for age
// if ( checkAge(age) ) { // check for age (deny if too young or no permission)
//   age = true;
//   alert( 'Access granted' );
// } else {
//   age = false;
//   alert( 'Access denied' );
// }
// showMovie(age) // show if of age, ask if has permission if not.

// CAR AND COLORS (rest parameters >>> ex. '...possibleColors' )
function car(carName, ...possibleColors) { // '...possibleColors' makes an array out of every additional argument
  console.log(`Car: ${carName}`);          //  called 'possibleColors'.
  console.log(`possibleColors: ${possibleColors.length}`)
  possibleColors.map(color => console.log(`Car Color ${possibleColors.indexOf(color) + 1}: ${color}`));
}
car("Mustang", "blue", "green", "yellow", "orange", "purple"); // print car name, # of possible colors, and colors

function numSort(...nums) {
  let sorted = nums.sort((a, b) => a - b);
  console.log(sorted);
}

numSort(1, 5, 3, 88, 23, 4, 77, 3, 44);

function argSort() {
  argArr = []
  for(let i=0; i < arguments.length; i++) {
    argArr.push(arguments[i]);
  }
  let sorted = argArr.sort((a,b) => a - b);
  sorted.map(element => console.log(`Element ${sorted.indexOf(element) + 1}: ${element}`));
}
function t(car, name, thing) {
  console.log(car, name, thing);
}
argSort(1, 99, 34, 2, 8, 37);
console.log(argSort.length);
console.log(car.length);
t("this", "that", "the other");
console.log(t.length); 
let c = [55];
let a, b, rest;
[a, b, ...rest] = [1, 2, 3, 5, 6, 22, 656, 44, 2];
console.log(a);
console.log(b);
console.log(rest);

let [u, y, carr, ...rando] = [86, 96, "ford probe", "apple", 76, "bello"];
console.log(u);
console.log(y);
console.log(carr);
rando.map(x => console.log(`rando # ${rando.indexOf(x) + 1}: ${x}`));

const employee = {
  name: "Joe",
  age: 33,
  occupation: "Plumber",
  father: {
    fafirstName: "Dale",
    falastName: "Carpenter"
  }
}

const {
  name: empName,
  age,
  occupation,
  father: {fafirstName, falastName}
} = employee;

console.log(empName, age, occupation, `, Father's first name: ${fafirstName} ,`, `Father's last name: ${falastName}`);
// console.log(employee.name);

console.log(`Rando: ${rando}`);
console.log(`rest: ${rest}`);
const together = [...rando, ...rest]; // concatonate two arrays using 'spread' syntax
console.log(together);
together.map(x => console.log(`together array item #${together.indexOf(x)+1}: ${x}`));

let newUser;
const users = [
  {id: 1, name: 'Dod'},
  {id: 2, name: 'Dale'},
  {id: 3, name: 'Frank'}
]
newUser = {id: 4, name: 'Marigold'}
let updatedUsers = [...users, newUser]
users.map(x => console.log(`User Id: ${x.id}, User Name: ${x.name}`));
updatedUsers.map(x => console.log(`User Id: ${x.id}, User Name: ${x.name}`));

let list = [1, 2, [3, 4], 5];
let secList = [...list];
console.log(list);
secList.pop();
console.log(list);
console.log(secList);

console.log(employee);
let emp2 = {...employee};
console.log(emp2);



