console.log("This is text");

let sound = "fart";
let otherSound = "swoop";

console.log(sound + " " + otherSound)

window.currentUser = {
  name: "bob"
};

console.log(window.currentUser.name);

!function() {
  console.log(window.currentUser.name);
}();
