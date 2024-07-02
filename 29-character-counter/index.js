const textAreaEl = document.getElementById("textarea");
const totalCounterEl = document.getElementById("total-counter");
const remainingCounterEl = document.getElementById("remaining-counter");

updateCounter();

textAreaEl.addEventListener("keyup", () => {
    updateCounter();
});

function updateCounter() {
    totalCounterEl.innerText = textAreaEl.value.length;
    remainingCounterEl.innerText = textAreaEl.getAttribute("maxLength") - textAreaEl.value.length;
}
