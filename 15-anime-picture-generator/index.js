const btnEl = document.getElementById("btn");
const animeContainerEl = document.querySelector(".anime-container");
const animeImageEl = document.querySelector(".anime-img");
const animeNameEl = document.querySelector(".anime-name");

btnEl.addEventListener("click", async () => {
    try {
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
        animeNameEl.innerText = "Updating...";
        animeImageEl.src = "loader.svg";
        const response = await fetch("https://api.catboys.com/img");
        const data = await response.json();
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime";

        animeContainerEl.style.display = "block";
        animeImageEl.src = data.url;
        animeImageEl.alt = `${data.artist}`;
        animeNameEl.innerText = data.artist;
    } catch (error) {
        btnEl.disabled = false;
        btnEl.innerText = "Get Anime";
        animeContainerEl.style.display = "block";
        animeNameEl.innerText = `${error.message}!`;
    }
});
