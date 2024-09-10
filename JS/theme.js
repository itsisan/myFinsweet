
// variables
const toggle_btn = document.querySelector("#toggle_btn");
const toggle_txt = document.querySelector("#toggle_txt");
const toggle_circle = document.querySelector("#toggle_circle");
const toggle_sun = document.querySelector(".toggle_sun");
const toggle_moon = document.querySelector(".toggle_moon");


// click event 
toggle_txt.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (toggle_txt.textContent === "Light") {
    toggle_txt.textContent = "Dark";
    toggle_txt.style.textAlign = "left";
    toggle_circle.style.left = "45px";
    toggle_sun.style.display = "none";
    toggle_moon.style.display = "block";
  } else {
    toggle_txt.textContent = "Light";
    toggle_circle.style.left = "3px";
    toggle_txt.style.textAlign = "right";
    toggle_sun.style.display = "block";
    toggle_moon.style.display = "none";
  }
});
