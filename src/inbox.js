// import { CreateTodo } from './todolist.js';

// export function buildInbox(paragraphContent = 'Inbox') {
//   const mainContent = document.querySelector('.main-content-container');
//   mainContent.innerHTML =
//     `<div class="inbox-add-task">
//         <h2>${paragraphContent.toUpperCase()}</h2>
//         <button class="inbox-add-task-button"><span>+</span> Add Task</button>
//         <div class="inbox-task-container"></div>
//         <div class="inbox-task-card-container"></div>
//     </div>`;
//   const addTaskButton = mainContent.querySelector('.inbox-add-task-button');
//   const inboxTaskCard = mainContent.querySelector('.inbox-task-container');
//   const taskCardDisplayDelete = mainContent.querySelector('.inbox-task-card-container');
//   let showTaskForm = false;

//   addTaskButton.addEventListener('click', () => {
//     showTaskForm = !showTaskForm; 
//     renderTaskForm();
//   });

//   inboxTaskCard.addEventListener('click', (event) => {
//     const target = event.target;
//     if (target.classList.contains('addTaskButton')) {
//       CreateTodo.handleAddTask();
//       showTaskForm = !showTaskForm; 
//       renderTaskForm();
//     } else if (target.classList.contains('deleteButton')) {
//         showTaskForm = !showTaskForm; 
//         renderTaskForm();
//     }
//   });

//   taskCardDisplayDelete.addEventListener('click', (event) => {
//     const taskItem = event.target.closest('.task-item');
//     if (taskItem) {
//     CreateTodo.deleteTask(taskItem);
// }})

//   function renderTaskForm() {
//     if (showTaskForm) {
//       inboxTaskCard.innerHTML = `
//         <form id="taskForm">
//           <div class="task-form-container">
//             <label for="name">Name:</label>
//             <input type="text" id="name" required>

//             <label for="description">Description:</label>
//             <textarea id="description" rows="4" required></textarea>

//             <label for="date">Date:</label>
//             <input type="date" id="date" required>

//             <label for="priority">Priority:</label>
//             <select id="priority" required>
//               <option value="low">Low</option>
//               <option value="medium">Medium</option>
//               <option value="high">High</option>
//             </select>

//             <button type="button" class="addTaskButton">Add</button>
//             <button type="button" class="deleteButton">Delete</button>
//           </div>
//         </form>`;
//     } 
//     else {
//       inboxTaskCard.innerHTML = ''; 
//     }
//   }

//   return { mainContent, addTaskButton, inboxTaskCard };
// }