str = "This string is embeded.";
firstStr = `The following string is embeded: '${str}'`; // USE backtics to EMBED!!! 

//
// NULL VS UNDEFINED START
let age = null; // null is used for unknown
console.log(age); // evaluates to 'null'.
let name; // undefined is for things that havn't been set(DO NOT SET THINGS TO UNDEFINED)
console.log(name); // evaluates to 'undefined'.
// NULL VS UNDEFINED END
//

console.log(firstStr);
console.log(`double embeding!!! ${firstStr}`);
console.log(`The following is \${1+2} embedded which should display '3': ${1 + 2}`);

console.log( typeof(undefined) ); // parenthesis can be used, BUT it is only for 
                                  // visual preferance
                                  // IT IS NOT A FUNCTION!
console.log(typeof undefined); // undefined
console.log(typeof 0);  // number
console.log(typeof 'a'); // string
console.log(typeof true); // boolean
console.log(typeof Math); // object
console.log(typeof null); // object < This is a recognized error in 'typof' it is a
                          // special value with a separate type of it's own. The behavior
                          // of 'typof' is WRONG here. 
                          // credit for quote > javascript.info/types
console.log(typeof alert); // function
console.log(" ");

let firstName = "Daryl";
console.log(`Hello ${1}.`);
console.log(`Hello ${"firstName"}.`);
console.log(`Hello ${firstName}.`);
const longString = "This needs to wrap \n and I wonder if it will work \n I guess we are going to find out!";
console.log(longString);

const getTele = document.getElementById('tele');

getTele.innerHTML = "Figure out how to put emoji's in html using utf-16 surrogate pairs.";
