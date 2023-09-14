burger = document.querySelector(".burger-menu");
navbar = document.querySelector(".navbar");
navlist = document.querySelector(".right");
leftdiv = document.querySelector(".left");
hidden = document.querySelector(".navbar");

burger.addEventListener("click", () => {
  navlist.classList.toggle("v-hidden");
  navbar.classList.toggle("h-navbar");
  // leftdiv.classList.toggle("v-hidden");
  hidden.classList.toggle("hide-height");
});
