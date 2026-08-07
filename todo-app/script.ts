type Todo = {
  text: string;
  disabled: boolean;
};

let saved: string | null = localStorage.getItem("todo");
let safeString: string = saved ?? "[]";

let todo: Todo[] = JSON.parse(safeString);

const todoInput = document.getElementById("todoInput") as HTMLInputElement;
const todoList = document.getElementById("todoList") as HTMLLIElement;
const todoCount = document.getElementById("todoCount") as HTMLSpanElement;
const addButton = document.querySelector(".btn") as HTMLButtonElement;
const deleteButton = document.querySelector(
  ".deleteButton",
) as HTMLButtonElement;

document.addEventListener("DOMContentLoaded", function (): void {
  addButton.addEventListener("click", addTask);

  todoInput.addEventListener("keydown", function (event: KeyboardEvent): void {
    if (event.key === "Enter") {
      event.preventDefault();
      addTask();
    }
  });

  deleteButton.addEventListener("click", deleteAllTasks);

  displayTasks();
});

function addTask(): void {
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

function displayTasks(): void {
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

    const checkbox = p.querySelector(".todo-checkbox") as HTMLInputElement;
    checkbox.addEventListener("change", (): void => {
      toggleTask(index);
    });

    const deleteTaskButton = p.querySelector(
      ".delete-task",
    ) as HTMLButtonElement;

    deleteTaskButton.addEventListener("click", (): void => {
      deleteTask(index);
    });

    todoList.appendChild(p);
  });
  todoCount.textContent = todo.length.toString();
}

function editTask(index: number): void {
  const todoItem = document.getElementById(
    `todo-${index}`,
  ) as HTMLParagraphElement;
  const task = todo[index];
  if (!task) return;
  const existingText = task.text;
  const inputElement = document.createElement("input");

  inputElement.value = existingText;
  todoItem.replaceWith(inputElement);
  inputElement.focus(); // it focuses on the input we clicked on

  function saveEdit(): void {
    const updatedText = inputElement.value.trim();

    if (updatedText) {
      const task = todo[index];
      if (!task) return;
      task.text = updatedText;
      saveToLocalStorage();
    }

    displayTasks();
  }

  inputElement.addEventListener("blur", function (): void {
    const updatedText = inputElement.value.trim();

    if (updatedText) {
      const task = todo[index];
      if (!task) return;
      task.text = updatedText;
      saveToLocalStorage();
    }

    displayTasks();
  });

  inputElement.addEventListener(
    "keydown",
    function (event: KeyboardEvent): void {
      if (event.key === "Enter") {
        saveEdit();
      }
    },
  );
}

function toggleTask(index: number): void {
  const task = todo[index];
  if (!task) return;

  task.disabled = !task.disabled;
  saveToLocalStorage();
  displayTasks();
}

function saveToLocalStorage(): void {
  localStorage.setItem("todo", JSON.stringify(todo));
}

function deleteAllTasks(): void {
  todo = [];
  saveToLocalStorage();
  displayTasks();
}

function deleteTask(index: number): void {
  todo.splice(index, 1);
  saveToLocalStorage();
  displayTasks();
}
