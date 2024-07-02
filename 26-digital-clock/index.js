const hourEl = document.getElementById("hours");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
    let hour = new Date().getHours();
    let minute = new Date().getMinutes();
    let second = new Date().getSeconds();
    let ampm = "AM";

    hour = hour < 10 ? `0${hour}` : hour;
    minute = minute < 10 ? `0${minute}` : minute;
    second = second < 10 ? `0${second}` : second;

    if (hour > 12) {
        hour -= 12;
        ampm = "PM";
    }

    hourEl.innerText = hour;
    minuteEl.innerText = minute;
    secondEl.innerText = second;
    ampmEl.innerText = ampm;

    setTimeout(() => {
        updateClock();
    }, 1000);
}

updateClock();
