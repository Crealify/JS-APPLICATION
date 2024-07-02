const apiKey = "52108bee2af1236701ea258c3f98f61a";
const weatherDataEl = document.getElementById("weather-data");
const cityInputEl = document.getElementById("city-input");
const formEl = document.querySelector("form");

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    const cityValue = cityInputEl.value;
    getWeatherData(cityValue);
});

async function getWeatherData(cityValue) {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`
        );
        if (!response.ok) {
            throw new Error("Failed To Fetch!");
        }
        const data = await response.json();

        const temperature = Math.round(data.main.temp);
        const description = data.weather[0].description;
        const icon = data.weather[0].icon;

        const details = [
            `Feels like: ${Math.round(data.main.feels_like)}°C`,
            `Humidity: ${data.main.humidity}%`,
            `Wind speed: ${data.wind.speed} m/s`,
        ];

        weatherDataEl.querySelector(
            ".icon"
        ).innerHTML = `<img src="http://openweathermap.org/img/wn/${icon}.png" alt="${description}" />`;

        weatherDataEl.querySelector(".temperature").textContent = `${temperature}°C`;

        weatherDataEl.querySelector(".description").textContent = description;

        weatherDataEl.querySelector(".details").innerHTML = details
            .map((detail) => `<div>${detail}</div>`)
            .join("");
    } catch (error) {
        weatherDataEl.querySelector(".icon").innerHTML = "";
        weatherDataEl.querySelector(".temperature").textContent = "";
        weatherDataEl.querySelector(".description").innerHTML = `<h3>${error.message}</h3>`;
        weatherDataEl.querySelector(".details").innerHTML = "";
    }
}
