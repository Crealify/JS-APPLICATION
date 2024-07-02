const counterEl = document.querySelector(".counter");
const loadingBarFrontEl = document.querySelector(".loading-bar-front");

let index = 0;

updateNumber();

function updateNumber() {
    counterEl.innerText = `${index}%`;
    loadingBarFrontEl.style.width = `${index}%`;
    index++;

    if (index < 101) {
        setTimeout(updateNumber, 20);
    }
}
