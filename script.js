const taskInput = document.querySelector("#task-description");
const taskCategory = document.querySelector("#task-category");
const addTaskButton = document.querySelector("#add-task");
const taskList = document.querySelector("#task-list");

addTaskButton.addEventListener("click", () => {
    if (!taskInput.value) return;
    const task = createTask(taskInput.value, taskCategory.value);
    taskList.appendChild(task);
    taskInput.value = "";
    taskCategory.value = "";
});

    function createTask(description, category) {
        const task = document.createElement("li");
        task.classList.add("task");

        const taskCheckbox = document.createElement("input");
        taskCheckbox.setAttribute("type", "checkbox");
        taskCheckbox.addEventListener("click", () => {
          task.classList.toggle("completed");
        });

        const taskDescription = document.createElement("p");
        taskDescription.innerText = description;

        const taskCategory = document.createElement("span");
        taskCategory.innerText = category;

        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.addEventListener("click", () => {
          task.remove();
        });

        task.appendChild(taskCheckbox);
        task.appendChild(taskDescription);
        task.appendChild(taskCategory);
        task.appendChild(deleteButton);

        return task;
      }