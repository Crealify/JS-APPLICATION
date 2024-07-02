const progressBarFrontEl = document.querySelector(".progress-bar-front");
const stepEls = document.querySelectorAll(".step");
const nextBtnEl = document.getElementById("next");
const prevBtnEl = document.getElementById("prev");

let currentChecked = 1;

nextBtnEl.addEventListener("click", () => {
    currentChecked++;
    if (currentChecked > stepEls.length) {
        currentChecked = stepEls.length;
    }
    updateStepProgress();
});

prevBtnEl.addEventListener("click", () => {
    currentChecked--;
    if (currentChecked < 1) {
        currentChecked = 1;
    }
    updateStepProgress();
});

function updateStepProgress() {
    stepEls.forEach((stepEl, index) => {
        if (index < currentChecked) {
            stepEl.classList.add("checked");
            stepEl.innerHTML = `
      <i class="fas fa-check"></i>
      <small>${
          index === 0 ? "Start" : index === stepEls.length - 1 ? "Final" : `Step: ${index}`
      }</small>
      `;
        } else {
            stepEl.classList.remove("checked");
            stepEl.innerHTML = `
      <i class="fas fa-times"></i>
      `;
        }
    });

    const checkedNumber = document.querySelectorAll(".checked");

    progressBarFrontEl.style.width = `${
        ((checkedNumber.length - 1) / (stepEls.length - 1)) * 100
    }%`;

    if (currentChecked === 1) {
        prevBtnEl.disabled = true;
    } else if (currentChecked === stepEls.length) {
        nextBtnEl.disabled = true;
    } else {
        prevBtnEl.disabled = false;
        nextBtnEl.disabled = false;
    }
}
