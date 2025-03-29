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
        removeButton.onClick = () => removeTask(li);

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