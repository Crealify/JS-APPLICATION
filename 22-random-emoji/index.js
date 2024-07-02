const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");
const apiKey = "14a0bc00080db11545b21da71a3436ccfe8b7d17";

const emoji = [];

getEmoji();

async function getEmoji() {
    const response = await fetch(`https://emoji-api.com/emojis?access_key=${apiKey}`);
    const data = await response.json();

    for (let i = 0; i < data.length; i++) {
        emoji.push({
            emojiCharacter: data[i].character,
            emojiName: data[i].unicodeName.split(" ").slice(1).join(" "),
        });
    }
}

btnEl.addEventListener("click", () => {
    const randomNumber = Math.round(Math.random() * emoji.length);
    btnEl.innerHTML = emoji[randomNumber].emojiCharacter;
    emojiNameEl.innerText = emoji[randomNumber].emojiName;
});
