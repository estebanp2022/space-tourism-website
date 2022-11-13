import data from "./starter-code/data.json" assert { type: "json" };

const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

// destination variables
const moon = document.querySelector(".moon-tab");
const mars = document.querySelector(".mars-tab");
const europa = document.querySelector(".europa-tab");
const titan = document.querySelector(".titan-tab");

// crew variables
const commander = document.querySelector(".commander-btn");
const specialist = document.querySelector(".specialist-btn");
const pilot = document.querySelector(".pilot-btn");
const engineer = document.querySelector(".engineer-btn");

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

commander.addEventListener("click", () => {
  document.querySelector(".crew-name").textContent = data.crew[0].name;
  document.querySelector(
    ".crew-picture"
  ).innerHTML = `<img src="${data.crew[0].images.png}"/>`;
  document.querySelector(".crew-role").textContent = data.crew[0].role;
  document.querySelector(".crew-bio").textContent = data.crew[0].bio;
});

specialist.addEventListener("click", () => {
  document.querySelector(".crew-name").textContent = data.crew[1].name;
  document.querySelector(
    ".crew-picture"
  ).innerHTML = `<img src="${data.crew[1].images.png}"/>`;
  document.querySelector(".crew-role").textContent = data.crew[1].role;
  document.querySelector(".crew-bio").textContent = data.crew[1].bio;
});

pilot.addEventListener("click", () => {
  document.querySelector(".crew-name").textContent = data.crew[2].name;
  document.querySelector(
    ".crew-picture"
  ).innerHTML = `<img src="${data.crew[2].images.png}"/>`;
  document.querySelector(".crew-role").textContent = data.crew[2].role;
  document.querySelector(".crew-bio").textContent = data.crew[2].bio;
});

engineer.addEventListener("click", () => {
  document.querySelector(".crew-name").textContent = data.crew[3].name;
  document.querySelector(
    ".crew-picture"
  ).innerHTML = `<img src="${data.crew[3].images.png}"/>`;
  document.querySelector(".crew-role").textContent = data.crew[3].role;
  document.querySelector(".crew-bio").textContent = data.crew[3].bio;
});
