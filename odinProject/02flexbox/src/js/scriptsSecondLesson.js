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


