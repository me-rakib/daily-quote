// button
const countClick = document.getElementById("count-click");
const btn = document.getElementById("get-more-btn");
const quote = document.querySelector(".quote-body");
const authorName = document.querySelector(".author-name");


// fetch data and display
let countnum = 1;
btn.addEventListener("click", function () {
  countnum++;
  countClick.textContent = countnum;

       const randomNum = getRandomNumber(0, quoteData.length);
      quote.textContent = quoteData[randomNum].content;
      authorName.textContent = quoteData[randomNum].author;
});

//will return a number in min<= number < max
function getRandomNumber(min, max) {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
}
