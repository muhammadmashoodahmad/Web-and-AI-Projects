
// Welcome Message
function showWelcomeMessage() {
    alert("Welcome to Smart Student Assistant!");
}

// Display Current Date
function showDate() {
    const today = new Date();

    alert("Today's Date: " + today.toDateString());
}

// Add Study Task

function addTask() {

    const input = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    const taskText = input.value.trim();

    if (taskText === "") {
        alert("Please enter a study task!");
        return;
    }

    const listItem = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    const taskName = document.createElement("span");
    taskName.textContent = taskText;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    checkbox.addEventListener("change", function () {
        taskName.style.textDecoration =
            checkbox.checked ? "line-through" : "none";
    });

    deleteButton.addEventListener("click", function () {
        listItem.remove();
    });

    listItem.appendChild(checkbox);
    listItem.appendChild(taskName);
    listItem.appendChild(deleteButton);

    taskList.appendChild(listItem);

    input.value = "";
}

