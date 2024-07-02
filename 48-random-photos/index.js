const imageContainerEl = document.querySelector(".image-container");
const btnEl = document.getElementById("btn");

let imageNumber = 10;

btnEl.addEventListener("click", () => {
    addNewImage();
});

function addNewImage() {
    for (let index = 0; index < imageNumber; index++) {
        const imgEl = document.createElement("img");
        imgEl.src = `https://picsum.photos/300?random=${Math.round(Math.random() * 2000)}`;
        imgEl.alt = "Img";
        imageContainerEl.appendChild(imgEl);
    }
}
