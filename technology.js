import data from "./data.json" assert { type: "json" };

// technology variables
const vehicle = document.querySelector(".vehicle-btn");
const spaceport = document.querySelector(".spaceport-btn");
const capsule = document.querySelector(".capsule-btn");

vehicle.addEventListener("click", () => {
  document.querySelector(".tech-name").textContent = data.technology[0].name;
  document.querySelector(".tech-description").textContent =
    data.technology[0].description;
  document.querySelector(
    ".portrait"
  ).src = `${data.technology[0].images.portrait}`;
  document.querySelector(
    ".landscape"
  ).src = `${data.technology[0].images.landscape}`;

  vehicle.setAttribute("aria-selected", "true");
  spaceport.setAttribute("aria-selected", "false");
  capsule.setAttribute("aria-selected", "false");
});

spaceport.addEventListener("click", () => {
  document.querySelector(".tech-name").textContent = data.technology[1].name;
  document.querySelector(".tech-description").textContent =
    data.technology[1].description;
  document.querySelector(
    ".portrait"
  ).src = `${data.technology[1].images.portrait}`;
  document.querySelector(
    ".landscape"
  ).src = `${data.technology[1].images.landscape}`;

  vehicle.setAttribute("aria-selected", "false");
  spaceport.setAttribute("aria-selected", "true");
  capsule.setAttribute("aria-selected", "false");
});

capsule.addEventListener("click", () => {
  document.querySelector(".tech-name").textContent = data.technology[2].name;
  document.querySelector(".tech-description").textContent =
    data.technology[2].description;
  document.querySelector(
    ".portrait"
  ).src = `${data.technology[2].images.portrait}`;
  document.querySelector(
    ".landscape"
  ).src = `${data.technology[2].images.landscape}`;

  vehicle.setAttribute("aria-selected", "false");
  spaceport.setAttribute("aria-selected", "false");
  capsule.setAttribute("aria-selected", "true");
});
