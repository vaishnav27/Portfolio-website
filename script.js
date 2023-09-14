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

const roles = [
  "React Developer |",
  "Frontend Developer |",
  "Blockchain Developer |",
  "Web Developer |",
];
let roleIndex = 0;

const simulateTyping = (roleElement, roleText, delay) => {
  setTimeout(() => {
    typeText(roleElement, roleText);
  }, delay);
};

const typeText = (roleElement, roleText) => {
  const textArray = roleText.split("");
  let index = 0;

  const typingText = setInterval(() => {
    roleElement.textContent += textArray[index];
    index++;

    if (index === textArray.length) {
      clearInterval(typingText);
    }
  }, 80);
};

const displayNextRole = () => {
  const roleText = document.getElementById("element");
  roleText.textContent = "";

  if (roleIndex < roles.length) {
    simulateTyping(roleText, roles[roleIndex], 100);
    roleIndex++;
  } else {
    roleIndex = 0;
    simulateTyping(roleText, roles[roleIndex++], 100);
  }
};

displayNextRole();

setInterval(displayNextRole, 2000);

const name = "Ghanshyam Vaishnav";
let ind = 0;
const simulateName = (element, name, delay) => {
  setTimeout(() => {
    typeNameText(element, name);
  }, delay);
};

const typeNameText = (element, name) => {
  const nameArray = name.split("");
  let index = 0;
  const typeName = setInterval(() => {
    element.textContent += name[index];
    index++;
    if (index === nameArray.length) {
      clearInterval(typeName);
    }
  }, 100);
};

const displayName = () => {
  const element = document.getElementById("nameElement");
  element.textContent = "";
  simulateName(element, name, 1000);
};

displayName();
