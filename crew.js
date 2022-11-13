import data from "./data.json" assert { type: "json" };

// crew variables
const commander = document.querySelector(".commander-btn");
const specialist = document.querySelector(".specialist-btn");
const pilot = document.querySelector(".pilot-btn");
const engineer = document.querySelector(".engineer-btn");

commander.addEventListener("click", (e) => {
  console.log(e);
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

// export default crewData;
