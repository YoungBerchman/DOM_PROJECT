let heading = document.getElementById("heading");
let button = document.getElementById("btn");
let para = document.querySelector("#pr");
let message = document.getElementById("message");

message.classList.add("boy");

button.addEventListener("click", function () {
  heading.textContent = "Welcome to LASU!";
});
heading.style.fontSize = "30px";
heading.style.textAlign = "center";
para.style.color = "limeGreen";
para.style.fontSize = "28px";

button.addEventListener("click", () => {
  alert("Payment successful");
});
button.addEventListener("click", (event) => {
  console.log(event);
});
button.addEventListener("click", (event) => {
  console.log(event.type);
});
let course = document.getElementById("coursera");
course.addEventListener("click", function () {
  course.textContent = "my boy";
});
course.style.textAlign = "center";
