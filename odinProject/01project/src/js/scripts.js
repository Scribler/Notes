const oput = document.getElementById('output');
const rtiIn = document.getElementById('rtiIn');
const rti = document.getElementById('romanToInt');
rti.addEventListener('click', romantoInt);

function splitString(input) {
  let inUpper = input.value.toUpperCase();
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
  oput.innerHTML = `<p>${inArr} = ${conVal}</p>`; // print output on page
}

// I = 1
// V = 5
// X = 10
// L = 50
// C = 100
// D = 500
// M = 1000
//
// CM = 900
