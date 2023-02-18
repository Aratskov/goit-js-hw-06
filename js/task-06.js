const input = document.querySelector("#validation-input");

input.addEventListener("blur", blurInput);

function blurInput(event) {
  const lengthData = event.currentTarget.dataset.length;
  const lengthSymbol = event.currentTarget.value.length;

  if (lengthData > lengthSymbol) {
    input.classList.remove("valid");
    input.classList.add("invalid");
  } else {
    input.classList.remove("invalid");
    input.classList.add("valid");
  }
}
