// variables 

const mbtn = document.getElementById("machineButton");
const abtn = document.getElementById("animatedButton");
const abtnTwo = document.getElementById("animatedButtonTwo");
const mstatus = document.getElementById("machineStatus");
const counter = document.getElementById("counter");


mbtn.addEventListener('click', updateBtn);
abtn.addEventListener('click', updateCounter);
abtnTwo.addEventListener('click', resetCounter);

function updateBtn() {
    // mstatus.innerHTML = ("Box Shadow");
  if(mbtn.style.boxShadow === "white 0px 0px 10px") {
    mbtn.style.boxShadow = "0px 0px 10px black";
    mstatus.innerHTML = ("Box Shadow");
  } else {
    mbtn.style.boxShadow = "0px 0px 10px white"
    mstatus.innerHTML = ("No Box Shadow");
    console.log(mbtn.style.boxShadow);
  }
}

function updateCounter() {
  ++counter.innerHTML;
}
function resetCounter() {
  counter.innerHTML = 0;
}
