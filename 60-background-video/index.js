const btnEl = document.querySelector(".btn");
const videoEl = document.querySelector(".background-video");
const preloaderEl = document.querySelector(".preloader");

btnEl.addEventListener("click", () => {
    if (btnEl.classList.contains("pause")) {
        btnEl.classList.remove("pause");
        videoEl.play();
        btnEl.innerHTML = "&#10074;&#10074;";
    } else {
        btnEl.classList.add("pause");
        videoEl.pause();
        btnEl.innerHTML = "&#9654;";
    }
});

window.addEventListener("load", () => {
    preloaderEl.style.zIndex = "-999";
});
