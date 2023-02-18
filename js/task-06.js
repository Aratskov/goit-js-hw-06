const input = document.querySelector("#validation-input");
const valid = document.querySelector("#validation-input.valid");

input.addEventListener("blur", blurInput);

function blurInput(event) {
  const value = event.currentTarget.value.length;
  if (value < 6) {
    input.classList.remove("valid");
    input.classList.add("invalid");
  } else {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
}
