const dayEl = document.getElementById("day");
const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minute");
const secondEl = document.getElementById("second");

const newYearTime = new Date("Jan 1, 2024 00:00:00").getTime();

updateCountdown();

function updateCountdown() {
    const now = new Date().getTime();
    const gap = newYearTime - now;

    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const remainingDay = Math.floor(gap / day);
    const remainingHour = Math.floor((gap % day) / hour);
    const remainingMinute = Math.floor((gap % hour) / minute);
    const remainingSecond = Math.floor((gap % minute) / second);

    dayEl.innerText = remainingDay;
    hourEl.innerText = remainingHour;
    minuteEl.innerText = remainingMinute;
    secondEl.innerText = remainingSecond;

    setTimeout(updateCountdown, 1000);
}
