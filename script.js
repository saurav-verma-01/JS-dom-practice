// Challenge 1

const btn = document.querySelector(".btn");
const header = document.querySelector(".header");

btn.addEventListener("click", () => {
  if (header.textContent === "What is your name?") {
    header.textContent = "My Name is Saurav Verma!!";
    btn.textContent = "Question??";
  } else {
    header.textContent = "What is your name?";
    btn.textContent = "Answer!!";
  }
});
