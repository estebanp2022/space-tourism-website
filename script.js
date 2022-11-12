import data from "./starter-code/data.json" assert { type: "json" };

const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

// destination variables
const moon = document.querySelector(".moon-tab");
const mars = document.querySelector(".mars-tab");
const europa = document.querySelector(".europa-tab");
const titan = document.querySelector(".titan-tab");

navToggle.addEventListener("click", () => {
  const visiblity = nav.getAttribute("data-visible");
  if (visiblity === "false") {
    nav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else {
    nav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

console.log(data);

moon.addEventListener("click", () => {
  document.querySelector(".png").src = `${data.destinations[0].images.png}`;
  document.querySelector(".name").textContent = data.destinations[0].name;
  document.querySelector(".description").textContent =
    data.destinations[0].description;
  document.querySelector(".distance").textContent =
    data.destinations[0].distance;
  document.querySelector(".travel").textContent = data.destinations[0].travel;
});

mars.addEventListener("click", () => {
  document.querySelector("#png").src = document.querySelector(
    ".name"
  ).textContent = data.destinations[1].name;
  document.querySelector(".description").textContent =
    data.destinations[1].description;
  document.querySelector(".distance").textContent =
    data.destinations[1].distance;
  document.querySelector(".travel").textContent = data.destinations[1].travel;
});

europa.addEventListener("click", () => {
  document.querySelector(".png").src = `${data.destinations[2].images.png}`;
  document.querySelector(".name").textContent = data.destinations[2].name;
  document.querySelector(".description").textContent =
    data.destinations[2].description;
  document.querySelector(".distance").textContent =
    data.destinations[2].distance;
  document.querySelector(".travel").textContent = data.destinations[2].travel;
});

titan.addEventListener("click", () => {
  document.querySelector(".png").src = `${data.destinations[3].images.png}`;
  document.querySelector(".name").textContent = data.destinations[3].name;
  document.querySelector(".description").textContent =
    data.destinations[3].description;
  document.querySelector(".distance").textContent =
    data.destinations[3].distance;
  document.querySelector(".travel").textContent = data.destinations[3].travel;
});
