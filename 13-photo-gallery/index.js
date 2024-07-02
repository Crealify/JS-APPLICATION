const accessKey = "Fhzl7qHs_EUurH2H_TcKb4vobxA1ZKm_CvnaEnEcLWc";
const inputEl = document.getElementById("input");
const errorMessageEl = document.getElementById("error-message");
const btnEl = document.getElementById("btn");
const galleryEl = document.getElementById("gallery");

async function fetchImage() {
    const inputValue = inputEl.value;

    if (inputValue > 10 || inputValue < 1) {
        errorMessageEl.style.display = "block";
        errorMessageEl.innerText = "Number should be between 1 and 10";
        return;
    }

    let pictures = "";

    try {
        btnEl.style.display = "none";
        const loading = `<img src="loader.svg" alt="loader" />`;
        galleryEl.innerHTML = loading;
        await fetch(
            `https://api.unsplash.com/photos?per_page=${inputValue}&page=${Math.round(
                Math.random() * 1000
            )}&client_id=${accessKey}`
        )
            .then((response) => response.json())
            .then((data) => {
                if (data) {
                    data.forEach((picture) => {
                        pictures += `<img src=${picture.urls.small} alt="${picture.alt_description}" />`;
                        galleryEl.style.display = "block";
                        galleryEl.innerHTML = pictures;
                        btnEl.style.display = "block";
                        errorMessageEl.style.display = "none";
                    });
                }
            });
    } catch (error) {
        errorMessageEl.style.display = "block";
        errorMessageEl.innerText = `An error happened, ${error.message}!`;
        btnEl.style.display = "block";
        galleryEl.style.display = "none";
    }
}

btnEl.addEventListener("click", fetchImage);
