const questionEls = document.querySelectorAll(".question");

questionEls.forEach((questionEl) => {
    const btnEl = questionEl.querySelector(".question-btn");
    btnEl.addEventListener("click", () => {
        questionEl.classList.toggle("show-text");
    });
});
