import { isToday, isThisWeek, startOfDay, endOfWeek, isWithinInterval } from 'date-fns';

export class CreateTodo {
    constructor(title, dueDate, description, priority) {
        this.title = title;
        this.dueDate = dueDate;
        this.description = description;
        this.priority = priority;
        this.id = CreateTodo.generateUniqueId();
        // console.log(`New Todo created with ID: ${this.id}`);
    }

    static generateUniqueId() {
        if (!this.uniqueIdCounter) {
            this.uniqueIdCounter = 1;
        } else {
            this.uniqueIdCounter += 1;
        }
        return this.uniqueIdCounter;
    }

    static appendTodoToDisplay(paragraphContent) {
        const inboxTaskCard = document.querySelector('.inbox-task-card-container');
        const inboxTasks = CreateTodo.taskCategories[paragraphContent];
    
        inboxTaskCard.innerHTML = '';
    
        inboxTasks.forEach(todo => {
            const taskId = todo.id;
    
            const taskContent = `
                <div class="task-item" data-task-id="${taskId}">
                    <p><strong>Task Name:</strong>${todo.title}</p>
                    <p><strong>Description:</strong>${todo.description}</p>
                    <p><strong>Due Date:</strong> ${todo.dueDate}</p>
                    <p><strong>Priority:</strong>${todo.priority}</p>
                    <button class="deleteButton">Delete</button>
                </div>`;
            inboxTaskCard.insertAdjacentHTML('beforeend', taskContent);
    
            // Log the task information
            console.log(`Task "${todo.title}" with ID ${taskId} displayed in ${paragraphContent}`);
            console.log('Actual Due Date:', new Date(todo.dueDate));
            console.log('Today:', startOfDay(new Date()));
            console.log('Is Today Task:', isToday(new Date(todo.dueDate)));
        });
    
        // Check if the task is scheduled for Today or This Week
        const today = startOfDay(new Date());
        const endOfWeekDate = endOfWeek(new Date());
    
        inboxTasks.forEach(todo => {
            const taskId = todo.id;
    
            const isTodayTask = isToday(startOfDay(new Date(todo.dueDate)));
            const isThisWeekTask = isWithinInterval(startOfDay(new Date(todo.dueDate)), { start: today, end: endOfWeekDate });
    
            if ((paragraphContent === 'Today' && isTodayTask) || (paragraphContent === 'This Week' && isThisWeekTask)) {
                const taskContent = `
                    <div class="task-item" data-task-id="${taskId}">
                        <p><strong>Task Name:</strong>${todo.title}</p>
                        <p><strong>Description:</strong>${todo.description}</p>
                        <p><strong>Due Date:</strong> ${todo.dueDate}</p>
                        <p><strong>Priority:</strong>${todo.priority}</p>
                        <button class="deleteButton">Delete</button>
                    </div>`;
                inboxTaskCard.insertAdjacentHTML('beforeend', taskContent);
    
                // Log the task information for Today or This Week
                console.log(`Task "${todo.title}" with ID ${taskId} displayed in ${paragraphContent}`);
                console.log('Actual Due Date:', new Date(todo.dueDate));
                console.log('Today:', startOfDay(new Date()));
                console.log('Is Today Task:', isToday(new Date(todo.dueDate)));
            } else {
                // Add this log to check if the task is not being added to "Today" or "This Week"
                console.log(`Task "${todo.title}" with ID ${taskId} NOT displayed in ${paragraphContent}`);
            }
        });
    }
    
    
    
    
    static taskCategories = {
        'Inbox': [],
        'Today': [],
        'This Week': [],
      };

    static handleAddTask(paragraphContent) {
        const nameElement = document.getElementById('name');
        const descriptionElement = document.getElementById('description');
        const dateElement = document.getElementById('date');
        const priorityElement = document.getElementById('priority');
    
        if (nameElement && descriptionElement && dateElement && priorityElement) {
            const name = nameElement.value;
            const description = descriptionElement.value;
            const date = dateElement.value;
            const priority = priorityElement.value;
    
            if (name !== '' && date !== '') {
                const todo = new CreateTodo(name, date, description, priority);
    
                if (CreateTodo.taskCategories.hasOwnProperty(paragraphContent)) {

                    CreateTodo.taskCategories[paragraphContent].push(todo);
                } else {
                    CreateTodo.taskCategories[paragraphContent] = [todo];
                }
                CreateTodo.appendTodoToDisplay(paragraphContent);
    
                document.getElementById('taskForm').reset();
            } else {
                alert("You will at least need a name and due date");
            }
            // CreateTodo.myArr.forEach(todo => {
            //     console.log(todo.title, todo.dueDate, todo.description, todo.priority);
            // });
            // console.log(CreateTodo.taskCategories['Inbox']);
            // console.log(CreateTodo.taskCategories[paragraphContent],`paragraphContent is ${paragraphContent}`);
            // // console.log(CreateTodo.myArr[CreateTodo.myArr.length - 1],`paragraphContent is ${paragraphContent}`, 'todo');
            // console.log(CreateTodo.taskCategories,'check');
        }
    }
    static deleteTask(taskItem, paragraphContent) {
        // const inboxTaskCard = document.querySelector('.inbox-task-card-container');
        const taskId = taskItem.dataset.taskId;
    

        taskItem.remove();
    

        CreateTodo.taskCategories[paragraphContent] = CreateTodo.taskCategories[paragraphContent].filter(
            task => task.id !== parseInt(taskId)  
        );
    }
    
    

    static buildProjectOrInbox(paragraphContent = 'Inbox') {
        const mainContent = document.querySelector('.main-content-container');
        if(paragraphContent === 'Today' || paragraphContent === 'This Week'){
            mainContent.innerHTML =
            `<div class="inbox-add-task">
                <h2>${paragraphContent}</h2>
                <div class="inbox-task-container"></div>
                <div class="inbox-task-card-container"></div>
            </div>`;
        }
        else{
            mainContent.innerHTML =
            `<div class="inbox-add-task">
                <h2>${paragraphContent}</h2>
                <button class="inbox-add-task-button"><span>+</span> Add Task</button>
                <div class="inbox-task-container"></div>
                <div class="inbox-task-card-container"></div>
            </div>`;
        }
        const inboxTaskCard = mainContent.querySelector('.inbox-task-container');
        const taskCardDisplayDelete = mainContent.querySelector('.inbox-task-card-container');
        let showTaskForm = false;
      
        const addTaskButton = mainContent.querySelector('.inbox-add-task-button');

        if (addTaskButton) {
          addTaskButton.addEventListener('click', () => {
            showTaskForm = !showTaskForm; 
            renderTaskForm();
          });
        }
        
        inboxTaskCard.addEventListener('click', (event) => {
          const target = event.target;
          if (target.classList.contains('addTaskButton')) {
            CreateTodo.handleAddTask(paragraphContent);
            showTaskForm = !showTaskForm; 
            renderTaskForm();
          } else if (target.classList.contains('deleteButton')) {
              showTaskForm = !showTaskForm; 
              renderTaskForm();
          }
        });
      
        taskCardDisplayDelete.addEventListener('click', (event) => {
            const target = event.target;
            if (target.classList.contains('deleteButton')) {
                const taskItem = target.closest('.task-item');
                if (taskItem) {
                    const paragraphContent = mainContent.querySelector('h2').textContent;
                    CreateTodo.deleteTask(taskItem, paragraphContent);
                }
            }
        });
        
        
      
        function renderTaskForm() {
          if (showTaskForm) {
            inboxTaskCard.innerHTML = `
              <form id="taskForm">
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
          } 
          else {
            inboxTaskCard.innerHTML = ``
        }
        }
      
        return { mainContent, addTaskButton, inboxTaskCard };
      }

    static createProject(){
        const addProject = document.querySelector('.add-project');
        const addProjectContainer = document.querySelector('.add-project-container');
        let showProjectForm = false;
        addProject.addEventListener('click',(event) => {
            showProjectForm = !showProjectForm;
            // console.log(showProjectForm,'add project')
            event.stopPropagation();
            renderAddProject()})
        addProjectContainer.addEventListener('click',(event) => {
            const target = event.target;
            event.stopPropagation();
            if(target.classList.contains('add-project-button')){
                CreateTodo.handleAddProject();
                showProjectForm = !showProjectForm;
                // console.log(showProjectForm,'add') 
                renderAddProject()
            } else if(target.classList.contains('cancel-project-button')){
                showProjectForm = !showProjectForm;
                // console.log(showProjectForm, 'cancel') 
                renderAddProject()
            }
        });       

        function renderAddProject(){
            if(showProjectForm){
                addProjectContainer.innerHTML = `
                <div class="project-form-container">
                <input type="text" id="project-name" placeholder="Project Name">
                <button class="add-project-button">Add</button>
                <button class="cancel-project-button">Cancel</button>
                </div>`;
            }
            else {
                addProjectContainer.innerHTML = ''; 
              }
        }
    }
    static handleAddProject() {
        const newProjectContainer = document.querySelector('.project-name-container');
        let addProjectInput = document.getElementById('project-name').value;
    
        if (addProjectInput === '') {
            alert('You will need a Project Name');
        } else {
            const newProjectElement = document.createElement('p');
            newProjectElement.textContent = addProjectInput;
            newProjectElement.classList.add('page-title'); 
            newProjectContainer.appendChild(newProjectElement);
        }
    }
    
    
}