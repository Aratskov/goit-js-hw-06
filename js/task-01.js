const itemEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${itemEl.length}`);
console.log("");

for (let i = 0; i < itemEl.length; i++) {
  const firstEl = itemEl[i].querySelectorAll("li").length;
  const firstTitle = itemEl[i].firstElementChild.textContent;

  console.log(`Category: ${firstTitle}`);
  console.log(`Elements: ${firstEl}`);
  console.log("");
}
