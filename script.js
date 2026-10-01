function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    li.addEventListener("click", function () {
        li.style.textDecoration = "line-through";
        li.style.opacity = "0.5";
    });

    document.getElementById("taskList").appendChild(li);

    taskInput.value = "";
}