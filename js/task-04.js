const decrementListenerButton = document.querySelector(
  '[data-action = "decrement"]'
);
const incrementListenerButton = document.querySelector(
  '[data-action = "increment"]'
);
const valueData = document.querySelector("#value");

decrementListenerButton.addEventListener("click", handlerTargetButtonclick);
incrementListenerButton.addEventListener("click", onClickTargetButtonclick);

const counterValue = {
  value: 0,
  decrement() {
    this.value -= 1;
  },
  increment() {
    this.value += 1;
  },
};

function handlerTargetButtonclick(event) {
  counterValue.decrement();
  valueData.textContent = counterValue.value;
  if (valueData.textContent == 0) {
    counterValue.value = 0;
  }
}

function onClickTargetButtonclick(event) {
  counterValue.increment();
  valueData.textContent = counterValue.value;
}
