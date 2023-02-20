// 205 Isomorphic Strings

// "foo", "bar" >> false
// "paper", "title" >> true
//
// foo
// bar
//
// paper
// title

const first = "foo";
const second = "bar";

// const first = "bazc";
// const second = "baba";
// const first = "paper";
// const second = "title";

function buildMap(map, a1, a2) { // build map from two strings and store in given empty map
  for (let i = 0; i < a1.length; i++) {
    let element1 = a1[i];
    if(map.has(element1)) {
      element1 = element1 + `${i}`;
    }
    let element2 = a2[i];
    map.set(element1, element2);
  }
};

function checkDuplicates(key, value, map) {
  if (key.length > 1) { // if not the first occurance, compare values
    let keyToCheck = key[0];
    console.log(`value to check against: ${value}`);
    console.log(`key to check: ${keyToCheck}`);
    console.log(`key : ${key}`);
    console.log(`key's value to compare: ${map.get(keyToCheck)}`);
    if(value != map.get(keyToCheck) && key[0] == keyToCheck) {
      console.log("false");
      return false;
    }
    return true;
  };
  // pairsMap.forEach(checkPrevValues);
}
function checkPrev(value, key, map) {
  console.log(map);
  console.log(value, key);
}

function checkPrevValues(k, v, map, key, t, f) {
  map.forEach(checkPrev);
  result = true;
  let key2 = key;
  if (map.get(key2) == map.get(k) && key2 != k) {
    console.log("false result");
    f ++;
    answer = false;
    console.log(`value main: ${map.get(key2)}`)
    console.log(`value checking: ${v}`)
    console.log(`key main: ${key2}`)
    console.log(`key checking: ${map.get(k)}`)
    return false;
  }
  console.log("true result");
  t ++;
}

var isIsomorphic = function(s, t) { // s and t are strings we are checking to see if they're isomorphic.
  const pairsMap = new Map(); // declare empty map
  buildMap(pairsMap, s, t); // build pairsMap with given strings.
  let answer = "unsolved"; // set default answer
  let keyIter = pairsMap.keys(); // set iterator for keys
  let valueIter = pairsMap.values(); // set iterator for values
  let fcount = 0; // set count of false answers.
  let tcount = 0; // set count of true answers.


  for (let i = 0; i < pairsMap.size; i++) {
    const key = keyIter.next().value; // take next key from iterator
    const value = valueIter.next().value; // take next value from iterator
    answer = checkDuplicates(key, value, pairsMap);
    answer = checkPrevValues(key, value, pairsMap, key, tcount, fcount);
  };

  // final answer
  console.log(answer);
  return answer;
};


console.log("Isomorphic ???");
isIsomorphic(first, second);


















// console.log(" ");
// console.log("Testing Map");
// const testMap = new Map();
// buildMap(testMap, first, second);
// console.log(`get value for key 'e': ${testMap.get('e')}`);
//
// console.log(testMap);
// console.log(`testMap has e?: ${testMap.has('e')}`);
// console.log(`testMap e: ${testMap.get('e')}`);
//
// let iter = testMap.keys()
// console.log(iter.next().value);
// console.log(iter.next().value);
// console.log(iter.next().value[0]);






