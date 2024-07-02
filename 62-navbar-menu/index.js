const barEl = document.querySelector(".fa-bars");
const menuEl = document.querySelector(".menu");

barEl.addEventListener("click", () => {
    menuEl.classList.toggle("show-menu");
});
