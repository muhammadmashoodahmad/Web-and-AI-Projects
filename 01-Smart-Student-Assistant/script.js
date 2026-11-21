
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

    listItem.textContent = taskText;

    taskList.appendChild(listItem);

    input.value = "";

}

