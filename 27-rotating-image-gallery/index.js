const imageContainerEl = document.querySelector(".image-container");
const prevBtnEl = document.getElementById("prev");
const nextBtnEl = document.getElementById("next");

let x = 0;
let timer;

prevBtnEl.addEventListener("click", () => {
    x += 45;
    clearTimeout(timer);
    updateGallery();
});

nextBtnEl.addEventListener("click", () => {
    x -= 45;
    clearTimeout(timer);
    updateGallery();
});

function updateGallery() {
    imageContainerEl.style.transform = `perspective(1000px) rotateY(${x}deg)`;
    timer = setTimeout(() => {
        x -= 45;
        updateGallery();
    }, 3000);
}

updateGallery();
