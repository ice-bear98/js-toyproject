const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
const button = document.querySelector("button");

button.addEventListener("click", addTask);

function addTask() {
    if (inputBox.value === "") {
        alert("텍스트를 작성하세요");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "x";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveDate();
}

listContainer.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveDate();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveDate();
    }
});

function saveDate() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showlist() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showlist();
