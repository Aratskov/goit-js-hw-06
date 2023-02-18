const body = document.querySelector('body');
const button = document.querySelector('.change-color');
const span = document.querySelector('.color')

button.addEventListener('click', randomColor)

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function randomColor(event){
  body.style.backgroundColor = `${getRandomHexColor()}`;
  span.textContent = `${getRandomHexColor()}`
}

