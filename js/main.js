// DARK MODE
const body = document.querySelector("body");
const header = document.querySelector("header");
const DarkOrLight = document.getElementById("DarkOrLight");
const bDark = document.getElementById("bDark");
const bLight = document.getElementById("bLight");
let isDarkLight = true;
DarkOrLight.addEventListener("click", () => {
    if (isDarkLight) {
        bDark.style.display = "none";
        bLight.style.display = "block";
        header.style.backgroundImage = "url('../public/bg-desktop-dark.jpg')";
        body.style.backgroundColor = "#171823";
        // body.style.color = "#FFF";
        isDarkLight = false;
    } else {
        bDark.style.display = "block";
        bLight.style.display = "none";
        header.style.backgroundImage = "url('../public/bg-desktop-light.jpg')";
        body.style.backgroundColor = "#FAFAFA";
        // body.style.color = "#000";
        isDarkLight = true;
    }
})

// CREATE TODO

// TODO LIST
const checkbox = document.getElementById("checkbox");
const titleTodo = document.getElementById("titleTodo");
// const checkboxActive = document.getElementsByClassName("checkboxActive");
checkbox.addEventListener("click" , () => {
    if (checkbox.checked === true) {
        titleTodo.style.color = "#9495A5";
        titleTodo.style.textDecorationLine = "line-through";
    } else {
        titleTodo.style.color = "#000";
        titleTodo.style.textDecorationLine = "none";
    }
})

// MAIN FOOTER
const all = document.getElementById("all");
const active = document.getElementById("active");
const completed = document.getElementById("completed");
const allM = document.getElementById("allM");
const activeM = document.getElementById("activeM");
const completedM = document.getElementById("completedM");
all.addEventListener("click", () => {
    all.style.color = "#3A7CFD";
    active.style.color = "#9495A5";
    completed.style.color = "#9495A5";
    allM.style.color = "#3A7CFD";
    activeM.style.color = "#9495A5";
    completedM.style.color = "#9495A5";
})
active.addEventListener("click", () => {
    all.style.color = "#9495A5";
    active.style.color = "#3A7CFD";
    completed.style.color = "#9495A5";
    allM.style.color = "#9495A5";
    activeM.style.color = "#3A7CFD";
    completedM.style.color = "#9495A5";
})
completed.addEventListener("click", () => {
    all.style.color = "#9495A5";
    active.style.color = "#9495A5";
    completed.style.color = "#3A7CFD";
    allM.style.color = "#9495A5";
    activeM.style.color = "#9495A5";
    completedM.style.color = "#3A7CFD";
})
allM.addEventListener("click", () => {
    all.style.color = "#3A7CFD";
    active.style.color = "#9495A5";
    completed.style.color = "#9495A5";
    allM.style.color = "#3A7CFD";
    activeM.style.color = "#9495A5";
    completedM.style.color = "#9495A5";
})
activeM.addEventListener("click", () => {
    all.style.color = "#9495A5";
    active.style.color = "#3A7CFD";
    completed.style.color = "#9495A5";
    allM.style.color = "#9495A5";
    activeM.style.color = "#3A7CFD";
    completedM.style.color = "#9495A5";
})
completedM.addEventListener("click", () => {
    all.style.color = "#9495A5";
    active.style.color = "#9495A5";
    completed.style.color = "#3A7CFD";
    allM.style.color = "#9495A5";
    activeM.style.color = "#9495A5";
    completedM.style.color = "#3A7CFD";
})