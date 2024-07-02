const kits = ["crash", "kick", "snare", "tom"];
const containerEl = document.querySelector(".container");

kits.forEach((kit) => {
    const btnEl = document.createElement("button");
    btnEl.classList.add("btn");
    btnEl.innerText = kit;
    btnEl.style.backgroundImage = `url("images/${kit}.png")`;
    containerEl.appendChild(btnEl);

    const audioEl = document.createElement("audio");
    containerEl.appendChild(audioEl);
    audioEl.src = `sounds/${kit}.mp3`;

    btnEl.addEventListener("click", () => {
        audioEl.play();
    });

    window.addEventListener("keypress", (e) => {
        if (e.key === kit.slice(0, 1)) {
            audioEl.play();
            btnEl.style.transform = "scale(1.05)";
            setTimeout(() => {
                btnEl.style.transform = "scale(1)";
            }, 200);
        }
    });
});
