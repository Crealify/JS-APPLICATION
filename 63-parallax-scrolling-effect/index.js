const firstDivEl = document.getElementsByTagName("div")[0];

window.addEventListener("scroll", function () {
    let position = window.scrollY;
    firstDivEl.style.backgroundPositionY = `${position * 0.7}px`;
});
