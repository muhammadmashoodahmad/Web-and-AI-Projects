
// Welcome Message

function showWelcomeMessage() {

    alert("Welcome to Smart Student Assistant!");

}


// Show Current Date

function showDate() {

    const today = new Date();

    alert("Today's Date: " + today.toDateString());

}


// Load Saved Data

function loadData(key) {

    try {

        return JSON.parse(localStorage.getItem(key)) || [];

    } catch (error) {

        return [];

    }

}


// Save Data

function saveData(key, data) {

    localStorage.setItem(key, JSON.stringify(data));

}


// Study Planner Data

let tasks = loadData("studentTasks");


// Display Tasks

function renderTasks() {

    const taskList = document.getElementById("taskList");

    taskList.innerHTML = "";

    tasks.forEach(function(task) {

        const listItem = document.createElement("li");

        const checkbox = document.createElement("input");

        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        const taskName = document.createElement("span");

        taskName.textContent = task.text;
        taskName.className = "task-name";

        if (task.completed) {

            taskName.classList.add("completed");

        }

        checkbox.addEventListener("change", function() {

            task.completed = checkbox.checked;

            saveData("studentTasks", tasks);

            renderTasks();

        });

        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";

        deleteButton.addEventListener("click", function() {

            tasks = tasks.filter(function(item) {

                return item.id !== task.id;

            });

            saveData("studentTasks", tasks);

            renderTasks();

        });

        listItem.appendChild(checkbox);
        listItem.appendChild(taskName);
        listItem.appendChild(deleteButton);

        taskList.appendChild(listItem);

    });

}


// Add New Task

function addTask() {

    const input = document.getElementById("taskInput");

    const taskText = input.value.trim();

    if (taskText === "") {

        alert("Please enter a study task!");

        return;

    }

    const newTask = {

        id: Date.now(),

        text: taskText,

        completed: false

    };

    tasks.push(newTask);

    saveData("studentTasks", tasks);

    input.value = "";

    renderTasks();

}


// Notes Manager Data

let notes = loadData("studentNotes");


// Display Notes

function renderNotes() {

    const notesList = document.getElementById("notesList");

    notesList.innerHTML = "";

    notes.forEach(function(note) {

        const noteCard = document.createElement("div");

        noteCard.className = "note-card";

        const title = document.createElement("h3");

        title.textContent = note.title;

        const content = document.createElement("p");

        content.textContent = note.content;

        const deleteButton = document.createElement("button");

        deleteButton.textContent = "Delete";
        deleteButton.className = "delete-button";

        deleteButton.addEventListener("click", function() {

            notes = notes.filter(function(item) {

                return item.id !== note.id;

            });

            saveData("studentNotes", notes);

            renderNotes();

        });

        noteCard.appendChild(title);

        noteCard.appendChild(content);

        noteCard.appendChild(deleteButton);

        notesList.appendChild(noteCard);

    });

}


// Add New Note

function addNote() {

    const titleInput = document.getElementById("noteTitle");

    const contentInput = document.getElementById("noteContent");

    const title = titleInput.value.trim();

    const content = contentInput.value.trim();

    if (title === "" || content === "") {

        alert("Please enter both note title and content!");

        return;

    }

    const newNote = {

        id: Date.now(),

        title: title,

        content: content

    };

    notes.push(newNote);

    saveData("studentNotes", notes);

    titleInput.value = "";

    contentInput.value = "";

    renderNotes();

}


// Load Saved Tasks and Notes

renderTasks();

renderNotes();
