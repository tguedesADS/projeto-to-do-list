const addButton = document.getElementById("addTask");
const input = document.getElementById("taskInput");
const tasksList = document.getElementById("tasksList");

addButton.onclick = () => {
  const taskText = input.value.trim();
  if (taskText !== "") {
    const li = document.createElement("li");
    const taskCheckbox = document.createElement("input");
    taskCheckbox.type = "checkbox";
    taskCheckbox.onchange = function () {
      if (this.checked) {
        li.classList.add("task-completed");
      } else {
        li.classList.remove("task-completed");
      }
    };

    const taskContent = document.createElement("span");
    taskContent.textContent = taskText;
    taskContent.style.flexGrow = "1";

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remover";
    removeButton.onclick = function () {
      tasksList.removeChild(li);
    };

    li.appendChild(taskCheckbox);
    li.appendChild(taskContent);
    li.appendChild(removeButton);
    tasksList.appendChild(li);

    input.value = "";
    input.focus();
  }
};
