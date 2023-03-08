// // 205 Isomorphic Strings
//
// // Accessing HTML
// const runProg = document.getElementById("runProg");
// runProg.addEventListener('click', isIsomorphic);
//
// // TEST CASES START
// const casesMap = new Map();
// casesMap.set('foo', 'bar');
// casesMap.set('bazc', 'baba');
// casesMap.set('paper', 'title');
// // TEST CASES END
//
// function loadPairs(k, v, map) { // to use with 'map.forEach' to enter cases into html
//   // console.log(`string1: ${k}, value: ${v}`);
//   for (let i = 1; i < map.size; i++) {
//     let name = 'case' + i;
//     // name = String(name);
//     console.log(name);
//     let c = document.getElementById(name);
//     c.innerHTML = (`First String: ${k}, Second String: ${v}`);
//   }
// }
//
// function isIsomorphic() { // check test cases to see if they are isomorphic
//   // console.log(casesMap);
//   casesMap.forEach(loadPairs);
// };
//
//
// console.log("Isomorphic ???");
// // isIsomorphic();
// //
//


// FIZZ BUZZ
// Write a program that takes a user’s input and prints the numbers from one to the number the user entered. However, for multiples of three print Fizz instead of the number and for the multiples of five print Buzz. For numbers which are multiples of both three and five print FizzBuzz

// Print numbers from 1 > USER_INPUT

// sub multiples of 3 for 'Fizz'.

// sub multiples of 5 for 'Buzz'.

// sub multiples of 5 & 3 for 'FizzBuzz'.

// Sudo Code
// When 'Run Program' button pressed >>
  // get input and store in userIn AS INTEGER
  // initiate loop from 1 > 'userIn'
    // use individual functions to run the checks? or Switch statement?
    // run fizbuzz check,
    // run fizz check,
    // run buzz check,
    // print answer

const input = document.getElementById('progIn');
const button = document.getElementById('runProg');
const result = document.getElementById('output');
button.addEventListener('click', fizzBuzz);

function fbCheck (fb) { // check if divisible by 5 & 3
  let answer;
  if (fb % 5 == 0 && fb % 3 == 0) {
    answer = 'fizzbuzz';
  } else if (fb % 3 == 0) {
    answer = 'fizz';
  } else if (fb % 5 == 0) {
    answer = 'buzz';
  } else {
    answer = fb;
  };
  return answer;
};


function fizzBuzz() { // application function
  const userVal = parseInt(input.value);
  for (let i = 1; i <= userVal; i++) {
    result.innerHTML += `<h4>Loop #${i}: ${fbCheck(i)}</h4>`;
  };
};


let eS = 6;
let ns = [3, 2, 4];
let a = [1, 2];

function findLoc(nums, endsum) {
  // let answer = [];
  let answer;
  for(i = 0; i < nums.length; i++){
    answer = checkpair(i, nums, endsum);
  };
  console.log(answer);
}
function checkPairs(startIndex, array, totalNum) {
  for (let i = 0; i < array.length; i++) {
    const element = array[i];
    return element;
  }
}

findLoc(ns, eS);





