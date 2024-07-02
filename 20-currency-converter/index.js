const currencyFirstEl = document.getElementById("currency-first");
const worthFirstEl = document.getElementById("worth-first");
const currencySecondEl = document.getElementById("currency-second");
const worthSecondEl = document.getElementById("worth-second");
const exchangeRateEl = document.getElementById("exchange-rate");
const apiKey = "202c30cfe000523ad65769d1";

updateRate();

function updateRate() {
    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/${currencyFirstEl.value}`)
        .then((response) => response.json())
        .then((data) => {
            const rate = data.conversion_rates[currencySecondEl.value];
            exchangeRateEl.innerText = `1 ${currencyFirstEl.value} = ${rate} ${currencySecondEl.value}`;

            worthSecondEl.value = (worthFirstEl.value * rate).toFixed(2);
        });
}

currencyFirstEl.addEventListener("change", updateRate);
currencySecondEl.addEventListener("change", updateRate);
worthFirstEl.addEventListener("input", updateRate);
worthSecondEl.addEventListener("input", updateRate);
