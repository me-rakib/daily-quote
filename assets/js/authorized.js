
// button
const countClick = document.getElementById("count-click");
const btn = document.getElementById("get-more-btn");
const quote = document.querySelector(".quote-body");
const authorName = document.querySelector(".author-name");


// fetch data and display
let count = 1;
btn.addEventListener("click", function () {
  count++;
  countClick.textContent = count;

  fetch("./assets/data/data.json")
    .then((response) => response.json())
    .then((data) => {
      const randomNum = getRandomNumber(0, data.quotes.length);
      quote.textContent = data.quotes[randomNum].quote;
      authorName.textContent = data.quotes[randomNum].author;
    });
});

//will return a number in min<= number < max
function getRandomNumber(min, max) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}
