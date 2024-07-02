const formEl = document.querySelector(".form");
const inputFieldEl = document.querySelector(".input");
const ulEl = document.querySelector(".list");

let list = JSON.parse(localStorage.getItem("list")) || [];

list.forEach((task) => toDoList(task));

formEl.addEventListener("submit", (e) => {
    e.preventDefault();
    toDoList();
});

function toDoList(task) {
    const liEl = document.createElement("li");
    let newTask = inputFieldEl.value;

    if (task) newTask = task.name;
    if (task && task.checked) liEl.classList.add("checked");

    liEl.innerText = newTask;
    ulEl.appendChild(liEl);

    inputFieldEl.value = "";

    const checkBtnEl = document.createElement("div");
    checkBtnEl.innerHTML = `<i class="fas fa-check-square"></i>`;
    liEl.appendChild(checkBtnEl);

    const trashBtnEl = document.createElement("div");
    trashBtnEl.innerHTML = `<i class="fas fa-trash"></i>`;
    liEl.appendChild(trashBtnEl);

    checkBtnEl.addEventListener("click", () => {
        liEl.classList.toggle("checked");
        updateLocalStorage();
    });

    trashBtnEl.addEventListener("click", () => {
        liEl.remove();
        updateLocalStorage();
    });
    updateLocalStorage();
}

function updateLocalStorage() {
    const liEls = document.querySelectorAll("li");
    let list = [];
    liEls.forEach((liEl) => {
        list.push({
            name: liEl.innerText,
            checked: liEl.classList.contains("checked"),
        });
    });
    localStorage.setItem("list", JSON.stringify(list));
}
