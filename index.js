function addTask() {
    const input = document.getElementById("input");
    const taskText = input.value.trim();

    if(taskText != "") {
        //get the ul element where the li will ive
        const ul = document.getElementById("todoList");

        const li = document.createElement("li");
        const span = document.createElement("span");
        span.textContent = taskText;

        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.onclick = () => editTask(span);

        const removeButton = document.createElement("button");
        removeButton.textContent = "Delete";
        removeButton.onclick = () => removeTask(li);

        li.appendChild(span);
        li.appendChild(editButton);
        li.appendChild(removeButton);

        ul.appendChild(li);

        input.value = "";
    }
    else {
        alert("Please enter a valid input.");
    }
}

function editTask(span) {
    const newTask = prompt("Edit: ");

    if(newTask != null && newTask.trim() !== "") {
        span.textContent = newTask.trim();
    }
}

function removeTask(task) {
    const ul = document.getElementById("todoList");
    ul.removeChild(task);
}