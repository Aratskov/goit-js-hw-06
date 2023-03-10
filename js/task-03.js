const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// const addImage = image => {
// return image.map(({url,alt}) => {
//   const firstEl = document.createElement('li');
//   const imageEl = document.createElement('img');
//   firstEl.append(imageEl);
//   imageEl.src = url;
//   imageEl.alt = alt;
//   imageEl.width = 320;
//   return firstEl;
// })
// };

// const img = addImage(images);
// listEl.append(...img);

const listEl = document.querySelector(".gallery");
listEl.classList.add("js-gallery");

const makeImagePortfolioEl = ({ url, alt }) =>
  `<li>
<img src = ${url} alt = "${alt}" class ="photo">
</li>`;

const makeAllImagePortfolio = images.map(makeImagePortfolioEl).join("");

listEl.insertAdjacentHTML("afterbegin", makeAllImagePortfolio);
