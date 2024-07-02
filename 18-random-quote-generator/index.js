const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const apiURL = "https://api.quotable.io/random";

async function getQuote() {
    try {
        quoteEl.innerText = "Loading...";
        authorEl.innerText = "";
        btnEl.disabled = true;

        const response = await fetch(apiURL);
        const data = await response.json();

        const quoteContent = data.content;
        const quoteAuthor = data.author;

        quoteEl.innerHTML = `&ldquo; <span>${quoteContent}</span> &rdquo;`;
        authorEl.innerText = `~ ${quoteAuthor} ~`;

        btnEl.disabled = false;
    } catch (error) {
        quoteEl.innerText = error.message;
        authorEl.innerText = "Try Again!";
        btnEl.disabled = false;
    }
}

getQuote();

btnEl.addEventListener("click", getQuote);
