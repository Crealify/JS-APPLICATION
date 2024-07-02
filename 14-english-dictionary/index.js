const inputEl = document.getElementById("input");
const infoEl = document.getElementById("info");
const wordInfoEl = document.querySelector(".word-info");
const wordEl = document.getElementById("word");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");

async function fetchWord(word) {
    try {
        infoEl.style.display = "block";
        wordInfoEl.style.display = "none";

        infoEl.innerText = `Searching the meaning of "${word}"`;
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const data = await fetch(url).then((response) => response.json());

        if (data.title) {
            infoEl.style.display = "none";
            wordInfoEl.style.display = "block";
            wordEl.innerText = word;
            meaningEl.innerText = "N/A";
            audioEl.style.display = "none";
        } else {
            infoEl.style.display = "none";
            wordInfoEl.style.display = "block";
            audioEl.style.display = "inline-flex";
            wordEl.innerText = data[0].word;
            meaningEl.innerText = data[0].meanings[0].definitions[0].definition;
            audioEl.src = data[0].phonetics[0].audio;
        }
    } catch (error) {
        infoEl.innerText = `Sorry, ${error.message.toLowerCase()}!`;
    }
}

inputEl.addEventListener("keyup", (e) => {
    if (e.target.value && e.key === "Enter") {
        fetchWord(e.target.value);
    }
});
