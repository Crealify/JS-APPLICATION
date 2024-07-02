const celsiusInputEl = document.getElementById("celsius");
const fahrenheitInputEl = document.getElementById("fahrenheit");
const kelvinInputEl = document.getElementById("kelvin");

function computeTemp(event) {
    const currentValue = Number(event.target.value);

    switch (event.target.name) {
        case "celsius":
            kelvinInputEl.value = (currentValue + 273.32).toFixed(2);
            fahrenheitInputEl.value = (currentValue * 1.8 + 32).toFixed(2);
            break;

        case "fahrenheit":
            celsiusInputEl.value = ((currentValue - 32) / 1.8).toFixed(2);
            kelvinInputEl.value = ((currentValue - 32) / 1.8 + 273.32).toFixed(2);
            break;

        case "kelvin":
            celsiusInputEl.value = (currentValue - 273.32).toFixed(2);
            fahrenheitInputEl.value = ((currentValue - 273.32) * 1.8 + 32).toFixed(2);
            break;
    }
}
