const apiKey = "vjEZOa6dazytj94RBkOUWA==jUA3oafvoYLZnuAO";
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";
const btnEl = document.getElementById("btn");
const jokeEl = document.getElementById("joke");

const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },
};

async function getJoke() {
    try {
        jokeEl.innerHTML = "<h3>Updating...</h3>";
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";

        const response = await fetch(apiURL, options);
        const data = await response.json();

        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
        const joke = data[0].joke;
        jokeEl.innerText = joke;
    } catch (error) {
        jokeEl.innerText = "Network Failed!";
        btnEl.disabled = false;
        btnEl.innerText = "Tell me a joke";
        console.log(error.message);
    }
}

btnEl.addEventListener("click", getJoke);
