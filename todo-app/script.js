"use strict";
let saved = localStorage.getItem("todo");
let safeString = saved ?? "[]";
let todo = JSON.parse(safeString);
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const todoCount = document.getElementById("todoCount");
const addButton = document.querySelector(".btn");
const deleteButton = document.querySelector(".deleteButton");
document.addEventListener("DOMContentLoaded", function () {
    addButton.addEventListener("click", addTask);
    todoInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            event.preventDefault();
            addTask();
        }
    });
    deleteButton.addEventListener("click", deleteAllTasks);
    displayTasks();
});
function addTask() {
    const newTask = todoInput.value.trim();
    if (newTask !== "") {
        todo.push({
            text: newTask,
            disabled: false,
        });
        saveToLocalStorage();
        todoInput.value = "";
        displayTasks();
    }
}
function displayTasks() {
    todoList.innerHTML = "";
    todo.forEach((item, index) => {
        const p = document.createElement("p");
        p.innerHTML = `
            <div class="todo-container">
                <input type="checkbox" class="todo-checkbox" id="input-${index}" ${item.disabled ? "checked" : ""}
                >

                <p id="todo-${index}" class="${item.disabled ? "disabled" : ""}" onclick="editTask(${index})">
                ${item.text}
                </p>
                <button class="delete-task">Delete</button>
                
            </div>
        `;
        const checkbox = p.querySelector(".todo-checkbox");
        checkbox.addEventListener("change", () => {
            toggleTask(index);
        });
        const deleteTaskButton = p.querySelector(".delete-task");
        deleteTaskButton.addEventListener("click", () => {
            deleteTask(index);
        });
        todoList.appendChild(p);
    });
    todoCount.textContent = todo.length.toString();
}
function editTask(index) {
    const todoItem = document.getElementById(`todo-${index}`);
    const task = todo[index];
    if (!task)
        return;
    const existingText = task.text;
    const inputElement = document.createElement("input");
    inputElement.value = existingText;
    todoItem.replaceWith(inputElement);
    inputElement.focus(); // it focuses on the input we clicked on
    function saveEdit() {
        const updatedText = inputElement.value.trim();
        if (updatedText) {
            const task = todo[index];
            if (!task)
                return;
            task.text = updatedText;
            saveToLocalStorage();
        }
        displayTasks();
    }
    inputElement.addEventListener("blur", function () {
        const updatedText = inputElement.value.trim();
        if (updatedText) {
            const task = todo[index];
            if (!task)
                return;
            task.text = updatedText;
            saveToLocalStorage();
        }
        displayTasks();
    });
    inputElement.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            saveEdit();
        }
    });
}
function toggleTask(index) {
    const task = todo[index];
    if (!task)
        return;
    task.disabled = !task.disabled;
    saveToLocalStorage();
    displayTasks();
}
function saveToLocalStorage() {
    localStorage.setItem("todo", JSON.stringify(todo));
}
function deleteAllTasks() {
    todo = [];
    saveToLocalStorage();
    displayTasks();
}
function deleteTask(index) {
    todo.splice(index, 1);
    saveToLocalStorage();
    displayTasks();
}
//# sourceMappingURL=script.js.map