const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const listEl = document.querySelector("#ingredients");

const makeIngridient = (array) => {
  return array.map((ingridient) => {
    const firstEl = document.createElement("li");
    firstEl.classList.add("item");
    firstEl.textContent = ingridient;
    return firstEl;
  });
};

const element = makeIngridient(ingredients);
listEl.append(...element);
