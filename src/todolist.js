// todolist.js

export class CreateProject {
    constructor(name) {
        this.id = ++projectIdCounter;
        this.name = name;
        this.tasks = [];
    }
}

export class CreateTodo {
    constructor(title, dueDate, status, projectName) {
        this.id = ++taskIdCounter;
        this.title = title;
        this.dueDate = dueDate;
        this.status = Boolean(status);
        this.projectName = projectName || 'inbox'; // Default to 'inbox' if no project name is provided
    }
}

export function displayTasks(project, container) {
    let taskDisplayContainer = container.querySelector('.task-display-container');

    if (!taskDisplayContainer) {
        taskDisplayContainer = document.createElement('div');
        taskDisplayContainer.classList.add('task-display-container');
        container.appendChild(taskDisplayContainer);
    }

    taskDisplayContainer.innerHTML = '';

    project.tasks.forEach((task) => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.status;
        checkbox.addEventListener('change', () => handleCheckboxChange(checkbox, task.id, project, container));
        taskDiv.appendChild(checkbox);

        const titleElement = document.createElement('p');
        titleElement.textContent = task.title;
        taskDiv.appendChild(titleElement);

        const datePicker = document.createElement('input');
        datePicker.type = 'date';
        datePicker.value = task.dueDate;
        taskDiv.appendChild(datePicker);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(task.id, project, container));
        taskDiv.appendChild(deleteButton);

        taskDisplayContainer.appendChild(taskDiv);
    });
}

export function addTaskContainerWhenClicked(container, projectName = 'inbox') {
    if (!container || typeof container.appendChild !== 'function') {
        console.error("Invalid container provided to addTaskContainerWhenClicked");
        return {};
    }

    const addTaskForm = document.createElement('form');
    const addTaskInputField = document.createElement('input');
    addTaskInputField.classList.add('add-task-input-field');
    addTaskInputField.placeholder = "Task Name";
    addTaskForm.appendChild(addTaskInputField);

    const addTaskAddButton = document.createElement('button');
    addTaskAddButton.textContent = 'Add Task';
    addTaskForm.appendChild(addTaskAddButton);

    const addTaskCancelButton = document.createElement('button');
    addTaskCancelButton.textContent = 'Cancel';
    addTaskForm.appendChild(addTaskCancelButton);

    container.appendChild(addTaskForm);

    // Ensure each container has its own inputState
    if (!container.inputState) {
        container.inputState = [];
    }

    return { addTaskAddButton, addTaskCancelButton, addTaskInputField, addTaskForm, projectName };
}

export function addTaskButtonClicked(container, projectName = 'inbox') {
    const addTaskButtonListener = addTaskContainerWhenClicked(container, projectName);

    addTaskButtonListener.addTaskAddButton.addEventListener('click', (e) => {
        e.preventDefault();
        addButtonWhenClicked(addTaskButtonListener, container);
    });

    addTaskButtonListener.addTaskCancelButton.addEventListener('click', () => {
        addTaskButtonListener.addTaskForm.style.display = 'none';
    });
}

export function addProjectButtonClicked(container) {
    const addProjectForm = document.createElement('form');
    const addProjectInputField = document.createElement('input');
    addProjectInputField.classList.add('add-project-input-field');
    addProjectInputField.placeholder = "Project Name";
    addProjectForm.appendChild(addProjectInputField);

    const addProjectAddButton = document.createElement('button');
    addProjectAddButton.textContent = 'Add Project';
    addProjectForm.appendChild(addProjectAddButton);

    const addProjectCancelButton = document.createElement('button');
    addProjectCancelButton.textContent = 'Cancel';
    addProjectForm.appendChild(addProjectCancelButton);

    container.appendChild(addProjectForm);

    addProjectAddButton.addEventListener('click', (e) => {
        e.preventDefault();
        const projectName = addProjectInputField.value;
        if (projectName) {
            const project = findProjectByName(projectName);
            addTaskButtonClicked(container, 'inbox', projectName); // Pass the project name
        } else {
            alert("ERROR: Project Name is required");
        }
    });

    addProjectCancelButton.addEventListener('click', () => {
        landingPage('inbox');
    });
}

function addButtonWhenClicked(addTaskButtonListener, container) {
    if (addTaskButtonListener.addTaskInputField.value !== '') {
        const createTodoTask = new CreateTodo(
            addTaskButtonListener.addTaskInputField.value
            // Add other parameters as needed
        );

        addTaskButtonListener.addTaskForm.style.display = 'none';

        const projectName = addTaskButtonListener.projectName;
        const project = findProjectByName(projectName);
        project.tasks.push(createTodoTask);
        displayTasks(project, container);
    } else {
        alert("ERROR: Name is required");
    }
}

function findProjectByName(projectName) {
    let project = projects.find((p) => p.name === projectName);

    if (!project) {
        // Create a new project if not found
        project = new CreateProject(projectName);
        projects.push(project);
    }

    return project;
}

export function handleCheckboxChange(checkbox, taskId, project, container) {
    const index = project.tasks.findIndex((task) => task.id === taskId);

    if (index !== -1) {
        project.tasks[index].status = checkbox.checked;

        if (checkbox.checked) {
            project.tasks.splice(index, 1);
        }

        displayTasks(project, container);
    }
}

export function deleteTask(taskId, project, container) {
    const index = project.tasks.findIndex((task) => task.id === taskId);

    if (index !== -1) {
        project.tasks.splice(index, 1);
        displayTasks(project, container);
    }
}

let projectIdCounter = 0;
let taskIdCounter = 0;

// Initialize projects array
const projects = [];
