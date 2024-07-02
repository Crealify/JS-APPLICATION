const inputFieldEl = document.getElementById("dark-mode");
const bodyEl = document.querySelector("body");

inputFieldEl.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody() {
    if (inputFieldEl.checked) {
        bodyEl.style.backgroundColor = "black";
    } else {
        bodyEl.style.backgroundColor = "white";
    }
}

inputFieldEl.addEventListener("input", () => {
    updateBody();
    updateLocalStorage();
});

function updateLocalStorage() {
    localStorage.setItem("mode", JSON.stringify(inputFieldEl.checked));
}
