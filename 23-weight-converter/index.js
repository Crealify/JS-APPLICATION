const inputEl = document.getElementById("input");
const errorEl = document.getElementById("error");
const weightEl = document.getElementById("weight");

let errorTime;
let weightTime;

function updateResults() {
    if (inputEl.value <= 0 || isNaN(inputEl.value)) {
        errorEl.innerText = "Please enter a valid number";
        clearTimeout(errorTime);
        errorTime = setTimeout(() => {
            errorEl.innerText = "";
            inputEl.value = "";
        }, 2000);
    } else {
        weightEl.innerText = (+inputEl.value / 2.2).toFixed(4);
        clearTimeout(weightTime);
        weightTime = setTimeout(() => {
            weightEl.innerText = "";
            inputEl.value = "";
        }, 3000);
    }
}

inputEl.addEventListener("input", updateResults);
