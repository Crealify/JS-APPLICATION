const btnEl = document.getElementById("btn");
const bmiResultEl = document.getElementById("bmi-result");
const bmiInfoEl = document.getElementById("weight-condition");

function calculateBMI() {
    const heightValue = document.getElementById("height").value / 100;
    const weightValue = document.getElementById("weight").value;

    const bmiValue = weightValue / Math.pow(heightValue, 2);
    bmiResultEl.value = bmiValue.toFixed(2);

    if (bmiValue < 18.5) {
        bmiInfoEl.innerText = "Under Weight";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
        bmiInfoEl.innerText = "Normal Weight";
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
        bmiInfoEl.innerText = "Over Weight";
    } else if (bmiValue >= 30) {
        bmiInfoEl.innerText = "Obesity";
    }
}

btnEl.addEventListener("click", calculateBMI);
