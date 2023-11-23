// todolist.js

let taskIdCounter = 0; // Counter to generate unique IDs for tasks

export class CreateTodo {
    constructor(title, dueDate, status) {
        this.id = ++taskIdCounter;
        this.title = title;
        this.dueDate = dueDate;
        this.status = Boolean(status);
    }
}
