// FUNCTION🟡
// CREATE TODO
function createNewPosts() {
    if (inputText.value === "") {
        alert("To create an new todo, you must write a text 📝")
    } else {
        let list = document.createElement("li");
        list.innerHTML = inputText.value;
        list.classList = "lists";
        listContainer.appendChild(list);
        const clear = document.createElement("span");
        clear.classList = "clear";
        list.appendChild(clear);
        console.log(list);

        let allLists = document.querySelectorAll("li.lists");
        const copyOFLists = [...allLists];
        for (let i = 0; i < copyOFLists.length; i++) {
            copyOFLists[i].style.display = "flex";
            document.querySelector("#all").checked = true;
        }
        listsEmpty();
    }
    inputText.value = "";
    slist(listContainer);
    todoCounteur("li.lists");
    saveTodoList();
}

// COUNTEUR REMOVE
function todoCounteur(todo) {
    const counteur = document.querySelector("#todoCounteur");
    counteur.innerHTML = document.querySelectorAll(todo).length;
    saveCounteur();
}

// LISTS EMPTY
function listsEmpty() {
    const allLists = document.querySelectorAll("li.lists");
    const listsEmptyDisplay = document.querySelector("#lists_empty");
    if (allLists.length === 0) {
        listsEmptyDisplay.style.display = "flex";
    } else {
        listsEmptyDisplay.style.display = "none";
    }
}

// DRAG AND DROP LIST
function slist() {
    let items = listContainer.getElementsByTagName("li"), current = null;

    for (let item of items) {
        item.draggable = true;

        item.ondragstart = e => {
            current = item;
        };

        item.ondragover = e => e.preventDefault();

        item.ondrop = e => {
            e.preventDefault();
            if (item != current) {
                let currentpos = 0, droppedpos = 0;
                for (let i = 0; i < items.length; i++) {
                    if (current == items[i]) { currentpos = i; }
                    if (item == items[i]) { droppedpos = i; }
                }
                if (currentpos < droppedpos) {
                    item.parentNode.insertBefore(current, item.nextSibling);
                } else {
                    item.parentNode.insertBefore(current, item);
                }
            }
        }
    }
}

// -------------------------------------------
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
    saveDarkMode();
})

// CREATE TODO
const listContainer = document.querySelector("#listContainer");
const inputText = document.querySelector("#inputText");

document.querySelector(".create_title").addEventListener("keypress", (e) => {
    if (e.key === 'Enter') {
        createNewPosts();
    }
})
document.querySelector("#submit").addEventListener("click", () => createNewPosts())

// CHECKBOX AND CLEAR
listContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        e.target.classList.remove("not_checked");
        saveTodoList();
    } else if (e.target.tagName === "SPAN") {
        if (confirm(`Are you sure to delete this post 🚮`)) {
            e.target.parentElement.remove();
            todoCounteur("li.lists");
            saveTodoList();
        }
        listsEmpty();
    }
})

// CLEAR COMPLETED
document.querySelector(".clear_completed").addEventListener("click", () => {
    if (confirm("Are you sure to remove all completed lists ✅ => 🚮")) {
        const checked = document.getElementsByClassName("checked");
        const copyOfChecked = [...checked];
        for (let i = 0; i < copyOfChecked.length; i++) {
            copyOfChecked[i].remove();
            saveTodoList();
        }
        todoCounteur("li.lists");
        listsEmpty();
    }
})

// ALL, ACTIVE AND COMPLETED
const all = document.querySelector("#all").addEventListener("click", () => {
    const allLists = document.querySelectorAll("li.lists");
    const copyOFLists = [...allLists];
    for (let i = 0; i < copyOFLists.length; i++) {
        copyOFLists[i].style.display = "flex";
        todoCounteur("li.lists");
        saveCounteur();
    }
})

const active = document.querySelector("#active").addEventListener("click", () => {
    const listsChecked = document.querySelectorAll("li.lists:not(.checked)");
    const listsActive = document.getElementsByClassName("checked");
    const copyOfNotChecked = [...listsActive];
    const copyOfChecked = [...listsChecked];
    for (let i = 0; i < copyOfNotChecked.length; i++) {
        copyOfNotChecked[i].style.display = "none";
    }
    for (let i = 0; i < copyOfChecked.length; i++) {
        copyOfChecked[i].style.display = "flex";
    }
    todoCounteur("li.lists:not(.checked)");
    saveCounteur();
})

const completed = document.querySelector("#completed").addEventListener("click", () => {
    let listsChecked = document.querySelectorAll("li.lists:not(.checked)");
    let listsActive = document.getElementsByClassName("checked");
    const copyOfNotChecked = [...listsActive];
    const copyOfChecked = [...listsChecked];
    for (let i = 0; i < copyOfChecked.length; i++) {
        copyOfChecked[i].style.display = "none";
    }
    for (let i = 0; i < copyOfNotChecked.length; i++) {
        copyOfNotChecked[i].style.display = "flex";
    }
    todoCounteur("li.checked");
    saveCounteur();
})

// Local Storage
function saveTodoList() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function saveDarkMode() {
    localStorage.setItem("darkMode", document.body.dataset["theme"]);
    localStorage.setItem("darkModeLogo", DarkOrLight.style.backgroundImage);
    localStorage.setItem("header", header.style.backgroundImage);
}

function saveCounteur() {
    localStorage.setItem("counteur", document.querySelector("#todoCounteur").innerHTML);
}

function slowData() {
    listContainer.innerHTML = localStorage.getItem("data");
    document.body.dataset["theme"] = localStorage.getItem("darkMode");
    DarkOrLight.style.backgroundImage = localStorage.getItem("darkModeLogo");
    header.style.backgroundImage = localStorage.getItem("header");
    document.querySelector("#todoCounteur").innerHTML = localStorage.getItem("counteur");
}
slowData();