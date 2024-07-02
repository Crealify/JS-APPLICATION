const containerEl = document.querySelector(".container");

const careers = ["YouTuber", "Web Developer", "Instructor", "Freelancer"];

let careersIndex = 0;

let characterIndex = 0;

updateText();

function updateText() {
    characterIndex++;
    containerEl.innerHTML = `<h1>I'm ${
        careers[careersIndex].slice(0, 1) === "I" ? "an" : "a"
    } ${careers[careersIndex].slice(0, characterIndex)}</h1>`;

    if (characterIndex === careers[careersIndex].length) {
        careersIndex++;
        characterIndex = 0;
    }
    if (careersIndex === careers.length) {
        careersIndex = 0;
    }
    setTimeout(updateText, 400);
}
