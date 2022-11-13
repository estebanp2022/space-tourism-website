import data from "./data.json" assert { type: "json" };

// destination variables
const moon = document.querySelector(".moon-tab");
const mars = document.querySelector(".mars-tab");
const europa = document.querySelector(".europa-tab");
const titan = document.querySelector(".titan-tab");

moon.addEventListener("click", () => {
  document.querySelector(
    ".planet-picture"
  ).innerHTML = `<img src="${data.destinations[0].images.png}"/>`;
  document.querySelector(".planet-name").textContent =
    data.destinations[0].name;
  document.querySelector(".planet-description").textContent =
    data.destinations[0].description;
  document.querySelector(".planet-distance").textContent =
    data.destinations[0].distance;
  document.querySelector(".planet-travel").textContent =
    data.destinations[0].travel;
  moon.setAttribute("aria-selected", "true");
  mars.setAttribute("aria-selected", "false");
  europa.setAttribute("aria-selected", "false");
  titan.setAttribute("aria-selected", "false");
});

mars.addEventListener("click", () => {
  document.querySelector(
    ".planet-picture"
  ).innerHTML = `<img src="${data.destinations[1].images.png}"/>`;
  document.querySelector(".planet-name").textContent =
    data.destinations[1].name;
  document.querySelector(".planet-description").textContent =
    data.destinations[1].description;
  document.querySelector(".planet-distance").textContent =
    data.destinations[1].distance;
  document.querySelector(".planet-travel").textContent =
    data.destinations[1].travel;
  moon.setAttribute("aria-selected", "false");
  mars.setAttribute("aria-selected", "true");
  europa.setAttribute("aria-selected", "false");
  titan.setAttribute("aria-selected", "false");
});

europa.addEventListener("click", () => {
  document.querySelector(
    ".planet-picture"
  ).innerHTML = `<img src="${data.destinations[2].images.png}"/>`;
  document.querySelector(".planet-name").textContent =
    data.destinations[2].name;
  document.querySelector(".planet-description").textContent =
    data.destinations[2].description;
  document.querySelector(".planet-distance").textContent =
    data.destinations[2].distance;
  document.querySelector(".planet-travel").textContent =
    data.destinations[2].travel;
  moon.setAttribute("aria-selected", "false");
  mars.setAttribute("aria-selected", "false");
  europa.setAttribute("aria-selected", "true");
  titan.setAttribute("aria-selected", "false");
});

titan.addEventListener("click", () => {
  document.querySelector(
    ".planet-picture"
  ).innerHTML = `<img src="${data.destinations[3].images.png}"/>`;
  document.querySelector(".planet-name").textContent =
    data.destinations[3].name;
  document.querySelector(".planet-description").textContent =
    data.destinations[3].description;
  document.querySelector(".planet-distance").textContent =
    data.destinations[3].distance;
  document.querySelector(".planet-travel").textContent =
    data.destinations[3].travel;
  moon.setAttribute("aria-selected", "false");
  mars.setAttribute("aria-selected", "false");
  europa.setAttribute("aria-selected", "false");
  titan.setAttribute("aria-selected", "true");
});
