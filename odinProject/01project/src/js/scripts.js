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
  }); // test
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
  // let argArr = [];
  // for(let i=0; i < arguments.length; i++) {
  //   argArr.push(arguments[i]);
  // }
  // const argArr = [].slice.call(arguments); // this does the same as the above code
  const argArr = Array.from(arguments); // this does the same as the above code

  let sorted = argArr.sort((a,b) => a - b);
  sorted.map(element => console.log(`\"argSort\" Element ${sorted.indexOf(element) + 1}: ${element}`));
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

//
// objects and prototypes
//

const personProto = { // THIS IS A 'prototype'
  greet() {
    console.log(`Hello, ${this.name}. How are you today?`);
  },
  statusCheck() {
    console.log(this.stats);
  }
};

function Person(name, stats) { // THIS IS A 'constructor'
  this.name = name;
  this.stats = stats;
}

Object.assign(Person.prototype, personProto); // Assign 'Person', the 'personProto' prototype.

const joe = new Person("Joe", "A lil' gassy"); // initialize a new person
joe.greet();
joe.statusCheck();
console.log(Object.hasOwn(joe, "name")); // true
console.log(Object.hasOwn(joe, "greet")); // false



// let runNum = []
//
// var runningSum = function(nums) {
//   for 
//
// }

let zeroNums = [0,0,0,0,0,0,0]; // = 0
let nums = [1, 7, 3, 6, 5, 6]; // = '3'
let wrongNums = [1, 7, 3, 6, 7, 6]; // = '-1' (fail)
let negNums = [-1, -1, 0, 1, 1, 1]; // = '5'
let twoOneNums = [2, 1, -1] // = '0'
let negOne = [-1, -1, 1, 1, 0, 0]; // = 4
let negTwo = [-1, -1, 1, 1, 0, 0, 0]; // = 4
let negThree = [-1, -1, -1, 1, 0, 1, 1, 0, 0, 0]; // = 7
let negFour = [-1, -1, 1, 1, 0, 1]; // = 5

var pivotIndex = function(array) {
  let total = 0;
  let totalStart = 0;
  let totalEnd = 0;
  let rollingTotal = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i];
    if(i >= 1) {
      totalEnd += array[i];
    }
    if(i < array.length - 1) {
      totalStart += array[i];
    }
  }

  for (let i = 0; i < array.length; i++) {
    rollingTotal += array[i];
    if(totalEnd == 0) {
      return 0;
    } else if(totalStart == 0) {
      if(array[array.length -2] != 0) {
        return array.length - 1;
      }
      for (let i = array.length - 1; i >= 0; i--) {
        const element = array[i];
        if(element != 0) {
          if(i == array.length - 1) {
            return i;
          }
          return i + 1;
        }
      }
    } else {
      if(rollingTotal == (total - (array[i+1] + rollingTotal))) {
        return i + 1;
      } else if(i == array.length - 1) {
          return -1;
      }
    }
  }
};

console.log(`nums(3) = ${pivotIndex(nums)}`);
console.log(`zeroNums(0) = ${pivotIndex(zeroNums)}`);
console.log(`wrongNums(-1) = ${pivotIndex(wrongNums)}`);
console.log(`negNums(5) = ${pivotIndex(negNums)}`);
console.log(`twoOneNums(0) = ${pivotIndex(twoOneNums)}`);
console.log(`negOne(4) = ${pivotIndex(negOne)}`);
console.log(`negTwo(4) = ${pivotIndex(negTwo)}`);
console.log(`negThree(7) = ${pivotIndex(negThree)}`);
console.log(`negFour(5) = ${pivotIndex(negFour)}`);


// var pivotIndex = function(array) {
//       let total = 0;
//       let rollingTotal = 0;
//       array.map(x => total += x);
//
//       for (let i = 0; i < array.length; i++) {
//         rollingTotal += [i];
//         // console.log(i + 1);
//         if(rollingTotal == (total - array[i+1]) / 2) {
//           console.log(i + 1);
//           if(i == array.length) {
//             return i;
//           } else {
//           return i + 1;
//           }
//         } else if ((i == array.length - 1) && (rollingTotal != (total - array[i+1]) / 2)) {
//           console.log(-1);
//         } 
//       }
// };
let names = ["Mary","John","Emma"];
let heights = [180,165,170];
let paired = [];
let sorted = [];

var sortPeople = function(names, heights) {
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const height = heights[i];
    paired.push({name: name, height: height});
  }
  // sorted = paired.sort((a, b) => {return a.height - b.height});
  paired.sort((a, b) => {return b.height - a.height});
  console.log(paired);
  return(paired.map(x => x.name));
};

sortPeople(names, heights);



















