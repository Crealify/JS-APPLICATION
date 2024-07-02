const btnEl = document.getElementById("btn");
const inputFieldEl = document.getElementById("input");
const copyIconEl = document.getElementById("copy-icon");
const alertContainerEl = document.getElementById("alert-container");

btnEl.addEventListener("click", () => {
    createPassword();
});

copyIconEl.addEventListener("click", () => {
    copyPassword();
    if (!inputFieldEl.value) return;
    alertContainerEl.classList.remove("active");
    setTimeout(() => {
        alertContainerEl.classList.add("active");
    }, 1500);
});

function createPassword() {
    const characters = "01234567890abcdefghijklmnopqrstuvwxyz!@#$%^&*-+ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const passwordLength = 14;
    let password = "";
    for (let index = 0; index < passwordLength; index++) {
        const randomNumber = Math.floor(Math.random() * characters.length);
        password += characters.substring(randomNumber, randomNumber + 1);
        inputFieldEl.value = password;
    }
}

function copyPassword() {
    inputFieldEl.select();
    inputFieldEl.setSelectionRange(0, 9999);

    navigator.clipboard.writeText(inputFieldEl.value);
    alertContainerEl.innerText = "Password Copied!";
}
