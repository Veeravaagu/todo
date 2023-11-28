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

    // static buildProjectOrInbox(paragraphContent) {
    //     const mainContent = document.querySelector('.main-content-container');
    //     mainContent.innerHTML =
    //       `<div class="inbox-add-task">
    //           <h2>${paragraphContent.toUpperCase()}</h2>
    //           <button class="inbox-add-task-button"><span>+</span> Add Task</button>
    //           <div class="inbox-task-container"></div>
    //           <div class="inbox-task-card-container"></div>
    //       </div>`;
    //     const addTaskButton = mainContent.querySelector('.inbox-add-task-button');
    //     const inboxTaskCard = mainContent.querySelector('.inbox-task-container');
    //     const taskCardDisplayDelete = mainContent.querySelector('.inbox-task-card-container');
    //     let showTaskForm = false;
      
    //     addTaskButton.addEventListener('click', () => {
    //       showTaskForm = !showTaskForm; 
    //       renderTaskForm();
    //     });
      
    //     inboxTaskCard.addEventListener('click', (event) => {
    //       const target = event.target;
    //       if (target.classList.contains('addTaskButton')) {
    //         CreateTodo.handleAddTask();
    //         showTaskForm = !showTaskForm; 
    //         renderTaskForm();
    //       } else if (target.classList.contains('deleteButton')) {
    //           showTaskForm = !showTaskForm; 
    //           renderTaskForm();
    //       }
    //     });
      
    //     taskCardDisplayDelete.addEventListener('click', (event) => {
    //       const taskItem = event.target.closest('.task-item');
    //       if (taskItem) {
    //       CreateTodo.deleteTask(taskItem);
    //   }})
      
    //     function renderTaskForm() {
    //       if (showTaskForm) {
    //         inboxTaskCard.innerHTML = `
    //           <form id="taskForm">
    //             <div class="task-form-container">
    //               <label for="name">Name:</label>
    //               <input type="text" id="name" required>
      
    //               <label for="description">Description:</label>
    //               <textarea id="description" rows="4" required></textarea>
      
    //               <label for="date">Date:</label>
    //               <input type="date" id="date" required>
      
    //               <label for="priority">Priority:</label>
    //               <select id="priority" required>
    //                 <option value="low">Low</option>
    //                 <option value="medium">Medium</option>
    //                 <option value="high">High</option>
    //               </select>
      
    //               <button type="button" class="addTaskButton">Add</button>
    //               <button type="button" class="deleteButton">Delete</button>
    //             </div>
    //           </form>`;
    //       } 
    //       else {
    //         inboxTaskCard.innerHTML = ''; 
    //       }
    //     }
      
    //     return { mainContent, addTaskButton, inboxTaskCard };
    //   }
    
}
