import { CreateTodo } from "./todolist";

const inboxElement = document.querySelector('.main-content-container');

function inboxBuilder() {
    // Create inbox title
    const inboxTitle = document.createElement('h2');
    inboxTitle.textContent = "INBOX";
    inboxElement.appendChild(inboxTitle);

    // Create "Add Task" container
    const addTaskContainer = document.createElement('div');
    addTaskContainer.classList.add('add-task-container');

    const addTaskIcon = document.createElement('img');
    addTaskContainer.appendChild(addTaskIcon);

    const addTaskDescription = document.createElement('p');
    addTaskDescription.textContent = "Add Task";
    addTaskContainer.appendChild(addTaskDescription);

    inboxElement.appendChild(addTaskContainer);

    return { addTaskContainer };
}

export function isAddTaskContainerClicked() {
    const inboxElementClicked = inboxBuilder();
    inboxElementClicked.addTaskContainer.addEventListener('click', () => addTaskButtonClicked());
}

function addTaskContainerWhenClicked() {
    // Create form for adding tasks
    const addTaskForm = document.createElement('form');

    // Create input field for task name
    const addTaskInputField = document.createElement('input');
    addTaskInputField.classList.add('add-task-input-field');
    addTaskInputField.placeholder = "Task Name";
    addTaskForm.appendChild(addTaskInputField);

    // Create buttons for adding and canceling tasks
    const addTaskAddButton = document.createElement('button');
    addTaskAddButton.classList.add('add-task-button');
    addTaskForm.appendChild(addTaskAddButton);

    const addTaskCancelButton = document.createElement('button');
    addTaskCancelButton.classList.add('add-task-button');
    addTaskForm.appendChild(addTaskCancelButton);

    inboxElement.appendChild(addTaskForm);

    return { addTaskAddButton, addTaskCancelButton, addTaskInputField, addTaskForm };
}

const addTaskButtonClickedMixin = {
    myTask: [],
};

Object.assign(CreateTodo.prototype, addTaskButtonClickedMixin);

function addTaskButtonClicked() {
    const addTaskButtonListener = addTaskContainerWhenClicked();

    addTaskButtonListener.addTaskAddButton.addEventListener('click', (e) => {
        e.preventDefault();
        addButtonWhenClicked();
    });

    addTaskButtonListener.addTaskCancelButton.addEventListener('click', () => {
        addTaskButtonListener.addTaskForm.style.display = 'none';
    });

    function addButtonWhenClicked() {
        if (addTaskButtonListener.addTaskInputField.value !== '') {
            // Create a new task
            const createTodoTask = new CreateTodo();
            createTodoTask.title = addTaskButtonListener.addTaskInputField.value;
            addTaskButtonListener.addTaskForm.style.display = 'none';
            
            // Add the task to the task list
            addTaskButtonClickedMixin.myTask.push(createTodoTask);
            
            // Display tasks after adding
            displayTasks(addTaskButtonClickedMixin.myTask);
            console.log(addTaskButtonClickedMixin.myTask, 'lib');
        } else {
            alert("ERROR Name is required");
        }
    }

    return { addTaskButtonListener };
}


function displayTasks(taskLibraryStorage) {
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


