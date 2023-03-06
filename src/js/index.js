import "../css/index.css";
import GetNewQuote from "./helpers/GetNewQuote";

const nextButton = document.querySelector(".next");

nextButton.addEventListener("click", GetNewQuote);
GetNewQuote();
