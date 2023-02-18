const createEl = document.querySelector("[data-create]");
const destroyEl = document.querySelector("[data-destroy]");
const boxesEl = document.querySelector("#boxes");
const inputEl = document.querySelector("input");

createEl.addEventListener("click", createBoxes);
inputEl.addEventListener("blur", inputNumber);
destroyEl.addEventListener("click", destroyBoxes);

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}
let number = 0;

function inputNumber(event) {
  number = event.currentTarget.value;
}

function createBoxes(amount) {
  amount = number;
  let total = 30;

  for (let i = 0; i < amount; i++) {
    const div = document.createElement("div");
    boxesEl.append(div);
    div.style.width = `${total}px`;
    div.style.height = `${total}px`;
    total += 10;
    div.style.backgroundColor = `${getRandomHexColor()}`;
  }
}

function destroyBoxes(event) {
  boxesEl.innerHTML = "";
}
