let taskIdCounter = 0; // Counter to generate unique IDs for tasks

export class CreateTodo {
    constructor(title, dueDate, status) {
        this.id = ++taskIdCounter;
        this.title = title;
        this.dueDate = dueDate;
        this.status = Boolean(status);
    }
}

export function displayTasks(taskLibraryStorage) {
    let taskDisplayContainer = document.querySelector('.task-display-container');

    // Check if the container exists, create it if not
    if (!taskDisplayContainer) {
        taskDisplayContainer = document.createElement('div');
        taskDisplayContainer.classList.add('task-display-container');
        document.body.appendChild(taskDisplayContainer);
    }

    // Clear existing content
    taskDisplayContainer.innerHTML = '';

    // Iterate through each task in taskLibraryStorage
    taskLibraryStorage.forEach((task) => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        // Create a checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.status;
        checkbox.addEventListener('change', () => handleCheckboxChange(checkbox, task.id));
        taskDiv.appendChild(checkbox);

        // Display the title
        const titleElement = document.createElement('p');
        titleElement.textContent = task.title;
        taskDiv.appendChild(titleElement);

        // Create a date picker
        const datePicker = document.createElement('input');
        datePicker.type = 'date';
        datePicker.value = task.dueDate;
        taskDiv.appendChild(datePicker);

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(task.id));
        taskDiv.appendChild(deleteButton);

        // Append the task div to the display container
        taskDisplayContainer.appendChild(taskDiv);
    });
}

function handleCheckboxChange(checkbox, taskId) {
    const index = addTaskButtonClickedMixin.myTask.findIndex((task) => task.id === taskId);

    if (index !== -1) {
        // Update the task status based on checkbox state
        addTaskButtonClickedMixin.myTask[index].status = checkbox.checked;

        // If checkbox is checked, remove the task from the array
        if (checkbox.checked) {
            addTaskButtonClickedMixin.myTask.splice(index, 1);
        }

        // Update display after checkbox change
        displayTasks(addTaskButtonClickedMixin.myTask);
        console.log(addTaskButtonClickedMixin.myTask, 'lib');
    }
}

function deleteTask(taskId) {
    const index = addTaskButtonClickedMixin.myTask.findIndex((task) => task.id === taskId);

    if (index !== -1) {
        // Remove the task from the task list
        addTaskButtonClickedMixin.myTask.splice(index, 1);
        
        // Update display after deletion
        displayTasks(addTaskButtonClickedMixin.myTask);
        console.log(addTaskButtonClickedMixin.myTask, 'lib');
    }
}
