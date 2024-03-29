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

// Challenge 3

const inputs = document.querySelectorAll("input");
const submitBtn = document.querySelector(".submit");
const errorHeader = document.querySelector(".form-error");

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  for (let i = 0; i <= inputs.length; i++) {
    if (inputs[i].value.trim() === "") {
      errorHeader.textContent =
        "Error, Please check if all fields are filled appropriately";
      break;
    } else {
      errorHeader.textContent = "";
    }
  }
});

// Challenge 4

const ul = document.querySelector(".list");
const itemInp = document.querySelector(".item-input");
const addBtn = document.querySelector(".add-btn");
const removeBtn = document.querySelector(".remove-btn");

let li;

addBtn.addEventListener("click", () => {
  if (itemInp.value.trim() === "") return;
  else {
    li = document.createElement("li");
    li.textContent = itemInp.value.trim();
    ul.appendChild(li);
    itemInp.value = "";
  }
});

removeBtn.addEventListener("click", () => {
  ul.removeChild(li);
});

// Challenge 5

const start = document.getElementById("start");
const stop = document.getElementById("stop");
const counter = document.querySelector(".counter-heading");

let count = 0;
let interval;

start.addEventListener("click", () => {
  interval = setInterval(() => {
    counter.textContent = count;
    count++;
  }, 600);
});

stop.addEventListener("click", () => {
  clearInterval(interval);
  count = "0";
  counter.textContent = count;
});
