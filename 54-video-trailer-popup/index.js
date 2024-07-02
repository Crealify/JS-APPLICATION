const btnEl = document.querySelector(".btn");
const trailerContainerEl = document.querySelector(".trailer-container");
const timesEl = document.getElementById("times");
const videoEl = document.querySelector("video");

btnEl.addEventListener("click", () => {
    trailerContainerEl.classList.remove("active");
});

timesEl.addEventListener("click", () => {
    trailerContainerEl.classList.add("active");
    videoEl.pause();
    videoEl.currentTime = 0;
});
