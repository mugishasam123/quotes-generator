/**
 * @jest-environment jsdom
 */
import GetNewQuote from "../js/helpers/GetNewQuote.js";

describe("test get new quote function", () => {
  test("test if GetNewQuote function is called properly", () => {
    document.body.innerHTML = `
    <div class="wrapper">
    <header>Quote of the Day</header>
    <div class="content">
      <div class="quote-area">
        <i class="fas fa-quote-left"></i>
        <p class="quote">
          Never give up because you never know if the next try is going to be
          the one that works.
        </p>
        <i class="fas fa-quote-right"></i>
      </div>
      <div class="author">
        <span>__</span>
        <span class="name">Mary Kay Ash</span>
      </div>
    </div>
    <div class="buttons">
      <div class="features">
        <ul>
          <li class="speech"><i class="fas fa-volume-up"></i></li>
          <li class="copy"><i class="fas fa-copy"></i></li>
          <li class="twitter"><i class="fab fa-twitter"></i></li>
        </ul>
        <button>New Quote</button>
      </div>
    </div>
  </div>
  `;
    const text = document.querySelector(".quote");

    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0;
    global.Math = mockMath;
    GetNewQuote();

    expect(text.textContent).toBe(
      "Genius is one percent inspiration and ninety-nine percent perspiration."
    );
  });
});
