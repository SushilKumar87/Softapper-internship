function addTask() {
    var taskInput = document.getElementById("task-input");
    var task = taskInput.value.trim();
    
    if (task !== "") {
        var ul = document.getElementById("tasks");
        var li = document.createElement("li");
        li.textContent = task;
        ul.appendChild(li);
        taskInput.value = "";
    }
}

function deleteTask(event) {
    if (event.target.tagName === "LI") {
        event.target.remove();
    }
}
