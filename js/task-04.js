const decrementListenerButton = document.querySelector('[data-action = "decrement"]');
const incrementListenerButton = document.querySelector('[data-action = "increment"]');
const valueData = document.querySelector('#value');

decrementListenerButton.addEventListener('click', handlerTargetButtonclick);
incrementListenerButton.addEventListener('click', onClickTargetButtonclick);

const counterValue = {
value:0,
step: 1,
decrement(){
this.value -= this.step;
},
increment(){
this.value += this.step;
}
}

function handlerTargetButtonclick(event){
   valueData.textContent = counterValue.value;
   counterValue.decrement();
   if(valueData.textContent == 0){
    counterValue.value = 0;
    };
};

function onClickTargetButtonclick(event){
    valueData.textContent = counterValue.value;
    counterValue.increment();
};