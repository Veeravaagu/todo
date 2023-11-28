export class CreateTodo {
    constructor(title, dueDate, description, priority) {
        this.title = title;
        this.dueDate = dueDate;
        this.description = description;
        this.priority = priority;
    }

    static appendTodoToDisplay(todo) {
        const inboxTaskCard = document.querySelector('.inbox-task-card-container');

        const taskContent = `
            <div class="task-item">
                <p><strong>Task Name:</strong> ${todo.title}</p>
                <p><strong>Description:</strong> ${todo.description}</p>
                <p><strong>Due Date:</strong> ${todo.dueDate}</p>
                <p><strong>Priority:</strong> ${todo.priority}</p>
                <button class="deleteButton">Delete</button>
            </div>`;

        inboxTaskCard.insertAdjacentHTML('beforeend', taskContent);
    }

    static handleAddTask() {
        const name = document.getElementById('name').value;
        const description = document.getElementById('description').value;
        const date = document.getElementById('date').value;
        const priority = document.getElementById('priority').value;
        if(name !== '' && date !== ''){
            const todo = new CreateTodo(name, date, description, priority);
            console.log('New Todo:', todo);
            CreateTodo.appendTodoToDisplay(todo);
            document.getElementById('taskForm').reset();
        }
        else{
            alert("You will at least need a name and due date");
        }
    }

    static deleteTask(taskItem) {
        taskItem.remove();
    }
}
