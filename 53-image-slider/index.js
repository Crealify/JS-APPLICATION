const imageContainerEl = document.querySelector(".image-container");
const nextEl = document.querySelector(".fa-angle-double-right");
const prevEl = document.querySelector(".fa-angle-double-left");
const images = document.querySelectorAll("img");

let currentImage = 1;
let timeout;

prevEl.addEventListener("click", () => {
    currentImage--;
    clearTimeout(timeout);
    updateImage();
});

nextEl.addEventListener("click", () => {
    currentImage++;
    clearTimeout(timeout);
    updateImage();
});

updateImage();

function updateImage() {
    if (currentImage > images.length) {
        currentImage = 1;
    } else if (currentImage < 1) {
        currentImage = images.length;
    }

    imageContainerEl.style.transform = `translateX(-${(currentImage - 1) * 500}px)`;

    timeout = setTimeout(() => {
        currentImage++;
        updateImage();
    }, 2000);
}
