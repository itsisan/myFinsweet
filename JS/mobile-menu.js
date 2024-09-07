let bars = document.querySelector(".bars");
let times = document.querySelector(".times");
let mobile_menu = document.querySelector(".mobile__menu");
bars.addEventListener("click", function () {
  mobile_menu.style.top = "0px";
});
times.addEventListener("click", function () {
  mobile_menu.style.top = "-100%";
});
