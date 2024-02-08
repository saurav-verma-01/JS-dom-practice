// Challenge 1

const btn1 = document.querySelector(".btn-1");
const header = document.querySelector(".header");

btn1.addEventListener("click", () => {
  if (header.textContent === "What is your name?") {
    header.textContent = "My Name is Saurav Verma!!";
    btn1.textContent = "Question??";
  } else {
    header.textContent = "What is your name?";
    btn1.textContent = "Answer!!";
  }
});

// Challenge 2

const img1 = document.querySelector(".img-1");
const img2 = document.querySelector(".img-2");
const btn2 = document.querySelector(".btn-2");

const imgSwapper = () => {
  const img1Src = img1.src;
  const img2Src = img2.src;

  if (img1.src === img1Src) {
    img1.src = img2Src;
    img2.src = img1Src;
  } else {
    img1.src = img1Src;
    img2.src = img2Src;
  }
};

btn2.addEventListener("click", imgSwapper);
