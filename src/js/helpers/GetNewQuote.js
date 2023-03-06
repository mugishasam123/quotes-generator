import { quotes } from "../../Data/quotes.js";

const text = document.getElementById("quote");
const author = document.getElementById("author");
const tweetButton = document.getElementById("tweet");

const GetNewQuote = () => {
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quoteText = quotes[quoteIndex].text;
  let quoteAuthor = quotes[quoteIndex].author;
  if (quoteAuthor == null) {
    quoteAuthor = "Anonymous";
  }
  text.innerHTML = quoteText;
  author.innerHTML = "~ " + quoteAuthor;

  tweetButton.href =
    "https://twitter.com/intent/tweet?text=" + quoteText + " ~ " + quoteAuthor;
};

export default GetNewQuote;
