// DARK MODE
const header = document.querySelector("header");
const DarkOrLight = document.querySelector(".DarkOrLight");
let isDarkLight = true;
DarkOrLight.addEventListener("click", () => {
    if (isDarkLight) {
        DarkOrLight.style.backgroundImage = "url(public/icon-sun.svg)";
        header.style.backgroundImage = "url('../public/bg-desktop-dark.jpg')";
        document.body.dataset["theme"] = "dark";
        isDarkLight = false;
    } else {
        DarkOrLight.style.backgroundImage = "url(public/icon-moon.svg)";
        header.style.backgroundImage = "url('../public/bg-desktop-light.jpg')";
        document.body.dataset["theme"] = "light";
        isDarkLight = true;
    }
})

// CREATE TODO
const listContainer = document.querySelector("#listContainer");
const inputText = document.querySelector("#inputText");
const submit = document.querySelector("#submit");
const todoCounteur = document.querySelector("#todoCounteur");
const zeroPosts = document.querySelector(".zero_posts");

submit.addEventListener("click", () => {
    if (inputText.value === "") {
        alert("To create an new todo, you must write a text 📝")
    } else {
        let newPoste = document.createElement("li");
        newPoste.className = "posts";
        listContainer.appendChild(newPoste);
        newPoste.innerHTML = inputText.value;
        todoCounteur.innerText++;
        if (todoCounteur.innerText !== 0) {
            zeroPosts.style.display = "none";
        }
    }
    inputText.value = "";
})



// TODO LIST

// CLEAR

// MAIN FOOTER