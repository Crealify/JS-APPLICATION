const questionEl = document.getElementById("question");
const formEl = document.getElementById("form");
const scoreEl = document.getElementById("score");
const inputEl = document.getElementById("input");

const numOne = Math.round(Math.random() * 10);
const numTwo = Math.round(Math.random() * 10);
const correctAns = numOne * numTwo;
let score = JSON.parse(localStorage.getItem("score"));

if (!score) score = 0;

scoreEl.innerText = `score: ${score}`;

questionEl.innerText = `What is ${numOne} multiply by ${numTwo}?`;

formEl.addEventListener("submit", () => {
    const userAns = +inputEl.value;
    if (userAns === correctAns) {
        score++;
        updateLocalStorage();
    } else {
        score--;
        updateLocalStorage();
    }
});

function updateLocalStorage() {
    localStorage.setItem("score", JSON.stringify(score));
}
