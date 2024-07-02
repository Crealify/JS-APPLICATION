const valueEl = document.querySelector(".value");
const btnEls = document.querySelectorAll("button");

let number = 0;

btnEls.forEach((btnEl) => {
    btnEl.addEventListener("click", (e) => {
        const styles = e.currentTarget.classList;
        if (styles.contains("decrease")) {
            number--;
        } else if (styles.contains("increase")) {
            number++;
        } else {
            number = 0;
        }
        valueEl.textContent = number;
        if (number > 0) {
            valueEl.style.color = "green";
        } else if (number < 0) {
            valueEl.style.color = "red";
        } else {
            valueEl.style.color = "black";
        }
    });
});
