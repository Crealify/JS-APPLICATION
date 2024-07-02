const tabEls = document.querySelector(".tabs");
const btnEls = document.querySelectorAll(".button");
const articleEls = document.querySelectorAll(".content");

tabEls.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
        btnEls.forEach(function (btnEl) {
            btnEl.classList.remove("live");
        });
        e.target.classList.add("live");
        articleEls.forEach((articleEl) => {
            articleEl.classList.remove("live");
        });
        const element = document.getElementById(id);
        element.classList.add("live");
    }
});
