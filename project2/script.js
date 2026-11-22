let header = document.getElementById("header");
header.classList.add("hey");
let container = document.getElementById("container");
container.classList.add("contain");

let red = document.getElementById("red");
let blue = document.getElementById("blue");
let green = document.getElementById("green");

red.addEventListener("click", () => {
  header.style.color = "red";
});
blue.addEventListener("click", () => {
  header.style.color = "blue";
});
green.addEventListener("click", () => {
  header.style.color = "green";
});
