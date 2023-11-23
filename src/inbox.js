// inbox.js

import { addTaskButtonClicked } from "./todolist"; // Importing from todolist.js

const inboxContainer = document.querySelector('.main-content-container');
let inboxInputState = null;

document.getElementById('inboxElement').addEventListener('click', () => {
    if (!inboxInputState) {
        inboxInputState = addTaskButtonClicked(inboxContainer, 'inbox');
    }
});

export function isAddTaskContainerClicked() {
    const inboxElementClicked = inboxBuilder();
    inboxElementClicked.addTaskContainer.addEventListener('click', () => addTaskButtonClicked(inboxContainer, inboxInputState, 'inbox'));
}

export function addProjectButtonClicked() {
    // Calling the imported function from todolist.js
    addTaskButtonClicked(inboxContainer, 'inbox');
}

function inboxBuilder() {
    const inboxTitle = document.createElement('h2');
    inboxTitle.textContent = "INBOX";
    inboxContainer.appendChild(inboxTitle);

    const addTaskContainer = document.createElement('div');
    addTaskContainer.classList.add('add-task-container');

    const addTaskIcon = document.createElement('img');
    addTaskContainer.appendChild(addTaskIcon);

    const addTaskDescription = document.createElement('p');
    addTaskDescription.textContent = "Add Task";
    addTaskContainer.appendChild(addTaskDescription);

    inboxContainer.appendChild(addTaskContainer);

    return { addTaskContainer, inputState: inboxInputState };
}
