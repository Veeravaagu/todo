/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/todolist.js":
/*!*************************!*\
  !*** ./src/todolist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CreateTodo: () => (/* binding */ CreateTodo)
/* harmony export */ });
class CreateTodo {
    constructor(title, dueDate, description, priority, projectName) {
        this.title = title;
        this.dueDate = dueDate;
        this.description = description;
        this.priority = priority;
        this.projectName = projectName;
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

    static buildProjectOrInbox(paragraphContent = 'Inbox') {
        const mainContent = document.querySelector('.main-content-container');
        mainContent.innerHTML =
          `<div class="inbox-add-task">
              <h2>${paragraphContent}</h2>
              <button class="inbox-add-task-button"><span>+</span> Add Task</button>
              <div class="inbox-task-container"></div>
              <div class="inbox-task-card-container"></div>
          </div>`;
        const addTaskButton = mainContent.querySelector('.inbox-add-task-button');
        const inboxTaskCard = mainContent.querySelector('.inbox-task-container');
        const taskCardDisplayDelete = mainContent.querySelector('.inbox-task-card-container');
        let showTaskForm = false;
      
        addTaskButton.addEventListener('click', () => {
          showTaskForm = !showTaskForm; 
          renderTaskForm();
        });
      
        inboxTaskCard.addEventListener('click', (event) => {
          const target = event.target;
          if (target.classList.contains('addTaskButton')) {
            CreateTodo.handleAddTask();
            showTaskForm = !showTaskForm; 
            renderTaskForm();
          } else if (target.classList.contains('deleteButton')) {
              showTaskForm = !showTaskForm; 
              renderTaskForm();
          }
        });
      
        taskCardDisplayDelete.addEventListener('click', (event) => {
          const taskItem = event.target.closest('.task-item');
          if (taskItem) {
          CreateTodo.deleteTask(taskItem);
      }})
      
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
            inboxTaskCard.innerHTML = ''; 
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
            newProjectElement.classList.add('page-title'); // Add the 'page-title' class
            newProjectContainer.appendChild(newProjectElement);
        }
    }
    
    
}


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _todolist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todolist.js */ "./src/todolist.js");
// import {buildInbox} from './inbox.js';
// import {buildProject} from './project.js';


function isInboxOrProject() {
    // console.log('isInboxOrProject function called');
    const isInboxOrProjectNames = document.querySelectorAll('.page-title');
    _todolist_js__WEBPACK_IMPORTED_MODULE_0__.CreateTodo.buildProjectOrInbox()
    isInboxOrProjectNames.forEach((element) => {
        element.addEventListener('click', (event) => {
            const target = event.target;
            const paragraphContent = target.textContent;
            if(paragraphContent === 'Today' || paragraphContent === 'This Week'){
                console.error("not valid mofo")
            }
            else {
                _todolist_js__WEBPACK_IMPORTED_MODULE_0__.CreateTodo.buildProjectOrInbox(paragraphContent)
            }
            // console.log('Content inside <p>:', paragraphContent)
            return {paragraphContent};
        });
    });
    _todolist_js__WEBPACK_IMPORTED_MODULE_0__.CreateTodo.createProject()
}

isInboxOrProject()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBaUQsV0FBVztBQUM1RCxtREFBbUQsaUJBQWlCO0FBQ3BFLGdEQUFnRCxhQUFhO0FBQzdELGdEQUFnRCxjQUFjO0FBQzlEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUTtBQUNSO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSwyREFBMkQ7QUFDM0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDdEtBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQSxXQUFXLFlBQVk7QUFDdkIsV0FBVyxjQUFjO0FBQ2tCOztBQUUzQztBQUNBO0FBQ0E7QUFDQSxJQUFJLG9EQUFVO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixvREFBVTtBQUMxQjtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFNBQVM7QUFDVCxLQUFLO0FBQ0wsSUFBSSxvREFBVTtBQUNkOztBQUVBLGtCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90b2RvbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgQ3JlYXRlVG9kbyB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGR1ZURhdGUsIGRlc2NyaXB0aW9uLCBwcmlvcml0eSwgcHJvamVjdE5hbWUpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICAgICAgdGhpcy5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lO1xuICAgIH1cblxuICAgIHN0YXRpYyBhcHBlbmRUb2RvVG9EaXNwbGF5KHRvZG8pIHtcbiAgICAgICAgY29uc3QgaW5ib3hUYXNrQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveC10YXNrLWNhcmQtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHRhc2tDb250ZW50ID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2staXRlbVwiPlxuICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+VGFzayBOYW1lOjwvc3Ryb25nPiAke3RvZG8udGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+RGVzY3JpcHRpb246PC9zdHJvbmc+ICR7dG9kby5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5EdWUgRGF0ZTo8L3N0cm9uZz4gJHt0b2RvLmR1ZURhdGV9PC9wPlxuICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+UHJpb3JpdHk6PC9zdHJvbmc+ICR7dG9kby5wcmlvcml0eX08L3A+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZUJ1dHRvblwiPkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+YDtcblxuICAgICAgICBpbmJveFRhc2tDYXJkLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGFza0NvbnRlbnQpO1xuICAgIH1cblxuICAgIHN0YXRpYyBoYW5kbGVBZGRUYXNrKCkge1xuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWU7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XG4gICAgICAgIGlmKG5hbWUgIT09ICcnICYmIGRhdGUgIT09ICcnKXtcbiAgICAgICAgICAgIGNvbnN0IHRvZG8gPSBuZXcgQ3JlYXRlVG9kbyhuYW1lLCBkYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkpO1xuICAgICAgICAgICAgQ3JlYXRlVG9kby5hcHBlbmRUb2RvVG9EaXNwbGF5KHRvZG8pO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tGb3JtJykucmVzZXQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgYWxlcnQoXCJZb3Ugd2lsbCBhdCBsZWFzdCBuZWVkIGEgbmFtZSBhbmQgZHVlIGRhdGVcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZGVsZXRlVGFzayh0YXNrSXRlbSkge1xuICAgICAgICB0YXNrSXRlbS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYnVpbGRQcm9qZWN0T3JJbmJveChwYXJhZ3JhcGhDb250ZW50ID0gJ0luYm94Jykge1xuICAgICAgICBjb25zdCBtYWluQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQtY29udGFpbmVyJyk7XG4gICAgICAgIG1haW5Db250ZW50LmlubmVySFRNTCA9XG4gICAgICAgICAgYDxkaXYgY2xhc3M9XCJpbmJveC1hZGQtdGFza1wiPlxuICAgICAgICAgICAgICA8aDI+JHtwYXJhZ3JhcGhDb250ZW50fTwvaDI+XG4gICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJpbmJveC1hZGQtdGFzay1idXR0b25cIj48c3Bhbj4rPC9zcGFuPiBBZGQgVGFzazwvYnV0dG9uPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5ib3gtdGFzay1jb250YWluZXJcIj48L2Rpdj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluYm94LXRhc2stY2FyZC1jb250YWluZXJcIj48L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gbWFpbkNvbnRlbnQucXVlcnlTZWxlY3RvcignLmluYm94LWFkZC10YXNrLWJ1dHRvbicpO1xuICAgICAgICBjb25zdCBpbmJveFRhc2tDYXJkID0gbWFpbkNvbnRlbnQucXVlcnlTZWxlY3RvcignLmluYm94LXRhc2stY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHRhc2tDYXJkRGlzcGxheURlbGV0ZSA9IG1haW5Db250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveC10YXNrLWNhcmQtY29udGFpbmVyJyk7XG4gICAgICAgIGxldCBzaG93VGFza0Zvcm0gPSBmYWxzZTtcbiAgICAgIFxuICAgICAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgIHNob3dUYXNrRm9ybSA9ICFzaG93VGFza0Zvcm07IFxuICAgICAgICAgIHJlbmRlclRhc2tGb3JtKCk7XG4gICAgICAgIH0pO1xuICAgICAgXG4gICAgICAgIGluYm94VGFza0NhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZFRhc2tCdXR0b24nKSkge1xuICAgICAgICAgICAgQ3JlYXRlVG9kby5oYW5kbGVBZGRUYXNrKCk7XG4gICAgICAgICAgICBzaG93VGFza0Zvcm0gPSAhc2hvd1Rhc2tGb3JtOyBcbiAgICAgICAgICAgIHJlbmRlclRhc2tGb3JtKCk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGVCdXR0b24nKSkge1xuICAgICAgICAgICAgICBzaG93VGFza0Zvcm0gPSAhc2hvd1Rhc2tGb3JtOyBcbiAgICAgICAgICAgICAgcmVuZGVyVGFza0Zvcm0oKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgXG4gICAgICAgIHRhc2tDYXJkRGlzcGxheURlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgIGNvbnN0IHRhc2tJdGVtID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWl0ZW0nKTtcbiAgICAgICAgICBpZiAodGFza0l0ZW0pIHtcbiAgICAgICAgICBDcmVhdGVUb2RvLmRlbGV0ZVRhc2sodGFza0l0ZW0pO1xuICAgICAgfX0pXG4gICAgICBcbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyVGFza0Zvcm0oKSB7XG4gICAgICAgICAgaWYgKHNob3dUYXNrRm9ybSkge1xuICAgICAgICAgICAgaW5ib3hUYXNrQ2FyZC5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgIDxmb3JtIGlkPVwidGFza0Zvcm1cIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1mb3JtLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5OYW1lOjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiByZXF1aXJlZD5cbiAgICAgIFxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb246PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImRlc2NyaXB0aW9uXCIgcm93cz1cIjRcIiByZXF1aXJlZD48L3RleHRhcmVhPlxuICAgICAgXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGF0ZVwiPkRhdGU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiIHJlcXVpcmVkPlxuICAgICAgXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5Qcmlvcml0eTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPHNlbGVjdCBpZD1cInByaW9yaXR5XCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3dcIj5Mb3c8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1lZGl1bVwiPk1lZGl1bTwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGlnaFwiPkhpZ2g8L29wdGlvbj5cbiAgICAgICAgICAgICAgICAgIDwvc2VsZWN0PlxuICAgICAgXG4gICAgICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImFkZFRhc2tCdXR0b25cIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZGVsZXRlQnV0dG9uXCI+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZm9ybT5gO1xuICAgICAgICAgIH0gXG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpbmJveFRhc2tDYXJkLmlubmVySFRNTCA9ICcnOyBcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIFxuICAgICAgICByZXR1cm4geyBtYWluQ29udGVudCwgYWRkVGFza0J1dHRvbiwgaW5ib3hUYXNrQ2FyZCB9O1xuICAgICAgfVxuXG4gICAgc3RhdGljIGNyZWF0ZVByb2plY3QoKXtcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hZGQtcHJvamVjdCcpO1xuICAgICAgICBjb25zdCBhZGRQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0LWNvbnRhaW5lcicpO1xuICAgICAgICBsZXQgc2hvd1Byb2plY3RGb3JtID0gZmFsc2U7XG4gICAgICAgIGFkZFByb2plY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChldmVudCkgPT4ge1xuICAgICAgICAgICAgc2hvd1Byb2plY3RGb3JtID0gIXNob3dQcm9qZWN0Rm9ybTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNob3dQcm9qZWN0Rm9ybSwnYWRkIHByb2plY3QnKVxuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICByZW5kZXJBZGRQcm9qZWN0KCl9KVxuICAgICAgICBhZGRQcm9qZWN0Q29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgaWYodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWRkLXByb2plY3QtYnV0dG9uJykpe1xuICAgICAgICAgICAgICAgIENyZWF0ZVRvZG8uaGFuZGxlQWRkUHJvamVjdCgpO1xuICAgICAgICAgICAgICAgIHNob3dQcm9qZWN0Rm9ybSA9ICFzaG93UHJvamVjdEZvcm07XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2hvd1Byb2plY3RGb3JtLCdhZGQnKSBcbiAgICAgICAgICAgICAgICByZW5kZXJBZGRQcm9qZWN0KClcbiAgICAgICAgICAgIH0gZWxzZSBpZih0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYW5jZWwtcHJvamVjdC1idXR0b24nKSl7XG4gICAgICAgICAgICAgICAgc2hvd1Byb2plY3RGb3JtID0gIXNob3dQcm9qZWN0Rm9ybTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzaG93UHJvamVjdEZvcm0sICdjYW5jZWwnKSBcbiAgICAgICAgICAgICAgICByZW5kZXJBZGRQcm9qZWN0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7ICAgICAgIFxuXG4gICAgICAgIGZ1bmN0aW9uIHJlbmRlckFkZFByb2plY3QoKXtcbiAgICAgICAgICAgIGlmKHNob3dQcm9qZWN0Rm9ybSl7XG4gICAgICAgICAgICAgICAgYWRkUHJvamVjdENvbnRhaW5lci5pbm5lckhUTUwgPSBgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtZm9ybS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cInByb2plY3QtbmFtZVwiIHBsYWNlaG9sZGVyPVwiUHJvamVjdCBOYW1lXCI+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImFkZC1wcm9qZWN0LWJ1dHRvblwiPkFkZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJjYW5jZWwtcHJvamVjdC1idXR0b25cIj5DYW5jZWw8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgYWRkUHJvamVjdENvbnRhaW5lci5pbm5lckhUTUwgPSAnJzsgXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgaGFuZGxlQWRkUHJvamVjdCgpIHtcbiAgICAgICAgY29uc3QgbmV3UHJvamVjdENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9qZWN0LW5hbWUtY29udGFpbmVyJyk7XG4gICAgICAgIGxldCBhZGRQcm9qZWN0SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdC1uYW1lJykudmFsdWU7XG4gICAgXG4gICAgICAgIGlmIChhZGRQcm9qZWN0SW5wdXQgPT09ICcnKSB7XG4gICAgICAgICAgICBhbGVydCgnWW91IHdpbGwgbmVlZCBhIFByb2plY3QgTmFtZScpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbmV3UHJvamVjdEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgICAgICBuZXdQcm9qZWN0RWxlbWVudC50ZXh0Q29udGVudCA9IGFkZFByb2plY3RJbnB1dDtcbiAgICAgICAgICAgIG5ld1Byb2plY3RFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3BhZ2UtdGl0bGUnKTsgLy8gQWRkIHRoZSAncGFnZS10aXRsZScgY2xhc3NcbiAgICAgICAgICAgIG5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIFxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbXBvcnQge2J1aWxkSW5ib3h9IGZyb20gJy4vaW5ib3guanMnO1xuLy8gaW1wb3J0IHtidWlsZFByb2plY3R9IGZyb20gJy4vcHJvamVjdC5qcyc7XG5pbXBvcnQgeyBDcmVhdGVUb2RvIH0gZnJvbSAnLi90b2RvbGlzdC5qcyc7XG5cbmZ1bmN0aW9uIGlzSW5ib3hPclByb2plY3QoKSB7XG4gICAgLy8gY29uc29sZS5sb2coJ2lzSW5ib3hPclByb2plY3QgZnVuY3Rpb24gY2FsbGVkJyk7XG4gICAgY29uc3QgaXNJbmJveE9yUHJvamVjdE5hbWVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnBhZ2UtdGl0bGUnKTtcbiAgICBDcmVhdGVUb2RvLmJ1aWxkUHJvamVjdE9ySW5ib3goKVxuICAgIGlzSW5ib3hPclByb2plY3ROYW1lcy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFncmFwaENvbnRlbnQgPSB0YXJnZXQudGV4dENvbnRlbnQ7XG4gICAgICAgICAgICBpZihwYXJhZ3JhcGhDb250ZW50ID09PSAnVG9kYXknIHx8IHBhcmFncmFwaENvbnRlbnQgPT09ICdUaGlzIFdlZWsnKXtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFwibm90IHZhbGlkIG1vZm9cIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIENyZWF0ZVRvZG8uYnVpbGRQcm9qZWN0T3JJbmJveChwYXJhZ3JhcGhDb250ZW50KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ0NvbnRlbnQgaW5zaWRlIDxwPjonLCBwYXJhZ3JhcGhDb250ZW50KVxuICAgICAgICAgICAgcmV0dXJuIHtwYXJhZ3JhcGhDb250ZW50fTtcbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgQ3JlYXRlVG9kby5jcmVhdGVQcm9qZWN0KClcbn1cblxuaXNJbmJveE9yUHJvamVjdCgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9