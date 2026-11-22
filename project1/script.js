let heading = document.getElementById("head");
let cont = document.getElementById("content");
let main = document.getElementById("mainBox");
let main1 = document.getElementById("mainBox1");
let main2 = document.getElementById("mainBox2");

heading.classList.add("bold");
cont.classList.add("second");
main.classList.add("blue");
main1.classList.add("red");
main2.classList.add("green");

main.addEventListener("click", () => {
  cont.style.color = "blue";
});

main1.addEventListener("click", () => {
  cont.style.color = "red";
});
main2.addEventListener("click", () => {
  cont.style.color = "green";
});

let header1 = document.createElement("h1");
header1.textContent = "Welcome to LASU!";
document.body.append(header1);
header1.remove();

let paragraph = document.createElement("h2");
paragraph.textContent = "Akunamatata";
document.body.append(paragraph);

let btn = document.getElementById("btt");
btn.addEventListener("click", () => {
  let newHeading = document.createElement("h1");

  newHeading.textContent = "Welcome to LASU!";
  document.body.append(newHeading);
  newHeading.classList.add("new");
});
btn.style.padding = "12px";
btn.classList.add("but1");
let heading1 = document.createElement("h1");
heading1.textContent = "I am coming home right now";
document.body.append(heading1);

const bounce = document.getElementById("click");
const mes = document.getElementById("message1");

bounce.addEventListener("click", () => {
  mes.remove();
});

const well = document.getElementById("wel");
const btt1 = document.getElementById("bt");
btt1.addEventListener("click", () => {
  well.remove();
});
// let container = document.getElementById("container");
// console.log(container.lastElementChild);

let contain1 = document.getElementById("container");
let que = document.querySelector("h1");
que.parentElement.style.backgroundColor = "purple";
que.parentElement.style.color = "white";
contain1.children.style.backgroundColor = "purple";

// firstElementChild
// lastElementChild
// nextElementSibling
// previousElementSibling

// let container1 = document.getElementById("container1");
// let paragraph = document.querySelector("p");

// console.log(container1.firstElementChild);
// console.log(container1.lastElementChild);
// console.log(paragraph.nextElementSibling);
// console.log(paragraph.previousElementSibling);
