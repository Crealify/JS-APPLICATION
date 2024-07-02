const barEl = document.querySelector(".fa-bars");
const sidebarEl = document.querySelector(".sidebar");
const closingButtonEl = document.querySelector(".fa-times");

barEl.addEventListener("click", () => {
    sidebarEl.classList.toggle("show-sidebar");
});

closingButtonEl.addEventListener("click", () => {
    sidebarEl.classList.remove("show-sidebar");
});
