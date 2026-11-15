let heading = document.getElementById("head");
let cont = document.getElementById("content");
let main = document.getElementById("mainBox");
let main1 = document.getElementById("mainBox1");
let main2 = document.getElementById("mainBox2");

heading.classList.add("bold");
cont.classList.add("second");
main.classList.add("colors");
main1.classList.add("colors1");
main2.classList.add("colors2");

main.addEventListener("click", () => {
  cont.style.color = "blue";
});
main1.addEventListener("click", () => {
  cont.style.color = "red";
});
main2.addEventListener("click", () => {
  cont.style.color = "green";
});
