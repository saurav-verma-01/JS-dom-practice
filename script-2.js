// const homeTab = document.getElementById("home-tab");
// const aboutTab = document.getElementById("about-tab");
// const contactTab = document.getElementById("contact-tab");

// const homeText = document.getElementById("home-text");
// const aboutText = document.getElementById("about-text");
// const contactText = document.getElementById("contact-text");

// const removeAllText = () => {
//   document
//     .querySelectorAll(".text")
//     .forEach((item) => (item.style.display = "none"));
// };

// removeAllText();

// homeTab.addEventListener("click", () => {
//   removeAllText();
//   homeText.style.display = "block";
// });
// aboutTab.addEventListener("click", () => {
//   removeAllText();
//   aboutText.style.display = "block";
// });
// contactTab.addEventListener("click", () => {
//   removeAllText();
//   contactText.style.display = "block";
// });

// const tabs = ["home", "about", "contact"];

// document
//   .querySelectorAll(".text")
//   .forEach((item) => (item.style.display = "none"));

// tabs.forEach((tab) => {
//   const tabElement = document.getElementById(`${tab}-tab`);
//   const textElement = document.getElementById(`${tab}-text`);

//   tabElement.addEventListener("click", () => {
//     document
//       .querySelectorAll(".text")
//       .forEach((item) => (item.style.display = "none"));
//     textElement.style.display = "block";
//   });
// });

const bar = document.querySelector(".download-bar");
const h3 = document.getElementById("download-Heading");

let widthPercent = 0;

const interval = setInterval(() => {
  if (widthPercent === 100) {
    h3.style.opacity = 1;
    clearInterval(interval);
  }

  widthPercent++;
  bar.style.width = `${widthPercent}%`;
}, 50);
