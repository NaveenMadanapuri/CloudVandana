// Function to add a new task to the list
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();

    // If the input is empty, do nothing
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    // Create a new list item (li) element for the task
    const li = document.createElement('li');

    // Add the task text to the list item
    const textNode = document.createTextNode(taskText);
    li.appendChild(textNode);

    // Create the remove button
    const removeButton = document.createElement('button');
    removeButton.textContent = "Remove";
    removeButton.classList.add('removeButton');

    // Remove task when the button is clicked
    removeButton.onclick = function () {
        li.remove();
    };

    // Append the remove button to the list item
    li.appendChild(removeButton);

    // Append the list item to the task list (ul)
    const taskList = document.getElementById('taskList');
    taskList.appendChild(li);

    // Clear the input field after adding the task
    taskInput.value = "";
}

// Add event listener to the 'Add Task' button
document.getElementById('addTaskButton').addEventListener('click', addTask);

// Allow pressing "Enter" to add a task
document.getElementById('taskInput').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        addTask();
    }
});
