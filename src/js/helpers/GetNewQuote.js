import { quotes } from "../../Data/quotes.js";

const GetNewQuote = () => {
  const text = document.querySelector(".quote");
  const author = document.querySelector(".name");
  const quoteIndex = Math.floor(Math.random() * quotes.length);

  const quoteText = quotes[quoteIndex].text;
  let quoteAuthor = quotes[quoteIndex].author;
  if (quoteAuthor == null) {
    quoteAuthor = "Anonymous";
  }

  text.innerHTML = quoteText;
  author.innerHTML = "~ " + quoteAuthor;
};

export default GetNewQuote;
