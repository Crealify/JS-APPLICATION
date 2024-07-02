const containerEl = document.querySelector(".container");

const btnEl = document.querySelector(".btn");

const popupContainerEl = document.querySelector(".popup-container");

const closeIcon = document.querySelector(".close-icon");

btnEl.addEventListener("click", () => {
    containerEl.classList.add("active");
    popupContainerEl.classList.remove("active");
});

closeIcon.addEventListener("click", () => {
    containerEl.classList.remove("active");
    popupContainerEl.classList.add("active");
});
