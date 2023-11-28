import { CreateTodo } from "./todolist";

function buildInbox() {
    const mainContent = document.querySelector('.main-content-container');
    mainContent.innerHTML = 
    `<div class="inbox-add-task">
        <h2>INBOX</h2>
        <div class="inbox-task-container"></div>
        <button class="inbox-add-task-button"><span>+</span> Add Task</button>
    </div>`;
    const addTaskButton = mainContent.querySelector('.inbox-add-task-button');
    const inboxTaskCard = mainContent.querySelector('.inbox-task-container');
    return { mainContent, addTaskButton, inboxTaskCard };
}

export function buildTask() {
    const inboxTask = buildInbox();
    inboxTask.addTaskButton.addEventListener('click', () => {
        inboxTask.inboxTaskCard.innerHTML =
        `<form id="taskForm">
            <div class="task-form-container">
                <label for="name">Name:</label>
                <input type="text" id="name" required>

                <label for="description">Description:</label>
                <textarea id="description" rows="4" required></textarea>

                <label for="date">Date:</label>
                <input type="date" id="date" required>

                <label for="priority">Priority:</label>
                <select id="priority" required>
                    <option value="low">Low</option>
                    <option value="medium">Medium</option>
                    <option value="high">High</option>
                </select>

                <button type="button" class="addTaskButton">Add</button>
                <button type="button" class="deleteButton">Delete</button>
            </div>
        </form>`;
    });


    inboxTask.inboxTaskCard.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('addTaskButton')) {
            addTask();
        } else if (target.classList.contains('deleteButton')) {

        }
    });

    return { inboxTask };
}

function addTask() {
    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const date = document.getElementById('date').value;
    const priority = document.getElementById('priority').value;

    const todo = new CreateTodo(name, date, description, priority);

    console.log('New Todo:', todo);
}
