const containerEl = document.getElementById("container");
const ratingEls = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");

let selectedRating = "";

ratingEls.forEach((ratingEl) => {
    ratingEl.addEventListener("click", (e) => {
        removeActive();
        selectedRating = e.target.innerText || e.target.parentNode.innerText;
        e.target.classList.add("active");
        e.target.parentNode.classList.add("active");
    });
});

function removeActive() {
    ratingEls.forEach((ratingEl) => {
        ratingEl.classList.remove("active");
        ratingEl.parentNode.classList.remove("active");
    });
}

btnEl.addEventListener("click", () => {
    if (selectedRating) {
        containerEl.innerHTML = `
        <strong>Thank you!</strong>
        <br/>
        <br/>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our costomer support.</p>
        `;
    }
});
