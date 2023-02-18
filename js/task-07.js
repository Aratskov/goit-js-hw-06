const input = document.querySelector("#font-size-control");
const span = document.querySelector("#text");

input.addEventListener("input", rangeButtonFontSize);

function rangeButtonFontSize(event) {
  const range = event.currentTarget.value;
  span.style.fontSize = `${range}px`;
}
