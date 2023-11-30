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
        });
    }
    
    static taskCategories = {
        'Inbox': [],
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
            newProjectElement.classList.add('page-title'); 
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
    const isInboxOrProjectNames = document.querySelectorAll('.page-title');
    _todolist_js__WEBPACK_IMPORTED_MODULE_0__.CreateTodo.buildProjectOrInbox();
    isInboxOrProjectNames.forEach((element) => {
        element.addEventListener('click', (event) => {
            const target = event.target;
            const paragraphContent = target.textContent;
            if (paragraphContent === 'Today' || paragraphContent === 'This Week') {
                console.error("not valid mofo");
            } else {
                _todolist_js__WEBPACK_IMPORTED_MODULE_0__.CreateTodo.buildProjectOrInbox(paragraphContent);
                _todolist_js__WEBPACK_IMPORTED_MODULE_0__.CreateTodo.handleAddTask(paragraphContent);
            }
        });
    });
    _todolist_js__WEBPACK_IMPORTED_MODULE_0__.CreateTodo.createProject();
}


isInboxOrProject();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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ZDs7O0FBR0EsbUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvZG9saXN0LmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjbGFzcyBDcmVhdGVUb2RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgICAgIHRoaXMuaWQgPSBDcmVhdGVUb2RvLmdlbmVyYXRlVW5pcXVlSWQoKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coYE5ldyBUb2RvIGNyZWF0ZWQgd2l0aCBJRDogJHt0aGlzLmlkfWApO1xuICAgIH1cblxuICAgIHN0YXRpYyBnZW5lcmF0ZVVuaXF1ZUlkKCkge1xuICAgICAgICBpZiAoIXRoaXMudW5pcXVlSWRDb3VudGVyKSB7XG4gICAgICAgICAgICB0aGlzLnVuaXF1ZUlkQ291bnRlciA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVuaXF1ZUlkQ291bnRlciArPSAxO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnVuaXF1ZUlkQ291bnRlcjtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXBwZW5kVG9kb1RvRGlzcGxheShwYXJhZ3JhcGhDb250ZW50KSB7XG4gICAgICAgIGNvbnN0IGluYm94VGFza0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gtdGFzay1jYXJkLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBpbmJveFRhc2tzID0gQ3JlYXRlVG9kby50YXNrQ2F0ZWdvcmllc1twYXJhZ3JhcGhDb250ZW50XTtcbiAgICBcbiAgICAgICAgaW5ib3hUYXNrQ2FyZC5pbm5lckhUTUwgPSAnJztcbiAgICBcbiAgICAgICAgaW5ib3hUYXNrcy5mb3JFYWNoKHRvZG8gPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFza0lkID0gdG9kby5pZDsgIFxuICAgICAgICAgICAgY29uc3QgdGFza0NvbnRlbnQgPSBgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2staXRlbVwiIGRhdGEtdGFzay1pZD1cIiR7dGFza0lkfVwiPlxuICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPlRhc2sgTmFtZTo8L3N0cm9uZz4ke3RvZG8udGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8cD48c3Ryb25nPkRlc2NyaXB0aW9uOjwvc3Ryb25nPiR7dG9kby5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+RHVlIERhdGU6PC9zdHJvbmc+ICR7dG9kby5kdWVEYXRlfTwvcD5cbiAgICAgICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5Qcmlvcml0eTo8L3N0cm9uZz4ke3RvZG8ucHJpb3JpdHl9PC9wPlxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiZGVsZXRlQnV0dG9uXCI+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgICAgIGluYm94VGFza0NhcmQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCB0YXNrQ29udGVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgdGFza0NhdGVnb3JpZXMgPSB7XG4gICAgICAgICdJbmJveCc6IFtdLFxuICAgICAgfTtcblxuICAgIHN0YXRpYyBoYW5kbGVBZGRUYXNrKHBhcmFncmFwaENvbnRlbnQpIHtcbiAgICAgICAgY29uc3QgbmFtZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbmFtZScpO1xuICAgICAgICBjb25zdCBkZXNjcmlwdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKTtcbiAgICAgICAgY29uc3QgZGF0ZUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpO1xuICAgICAgICBjb25zdCBwcmlvcml0eUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJpb3JpdHknKTtcbiAgICBcbiAgICAgICAgaWYgKG5hbWVFbGVtZW50ICYmIGRlc2NyaXB0aW9uRWxlbWVudCAmJiBkYXRlRWxlbWVudCAmJiBwcmlvcml0eUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBuYW1lRWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb25FbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgZGF0ZSA9IGRhdGVFbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgY29uc3QgcHJpb3JpdHkgPSBwcmlvcml0eUVsZW1lbnQudmFsdWU7XG4gICAgXG4gICAgICAgICAgICBpZiAobmFtZSAhPT0gJycgJiYgZGF0ZSAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0b2RvID0gbmV3IENyZWF0ZVRvZG8obmFtZSwgZGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5KTtcbiAgICBcbiAgICAgICAgICAgICAgICBpZiAoQ3JlYXRlVG9kby50YXNrQ2F0ZWdvcmllcy5oYXNPd25Qcm9wZXJ0eShwYXJhZ3JhcGhDb250ZW50KSkge1xuXG4gICAgICAgICAgICAgICAgICAgIENyZWF0ZVRvZG8udGFza0NhdGVnb3JpZXNbcGFyYWdyYXBoQ29udGVudF0ucHVzaCh0b2RvKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBDcmVhdGVUb2RvLnRhc2tDYXRlZ29yaWVzW3BhcmFncmFwaENvbnRlbnRdID0gW3RvZG9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBDcmVhdGVUb2RvLmFwcGVuZFRvZG9Ub0Rpc3BsYXkocGFyYWdyYXBoQ29udGVudCk7XG4gICAgXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tGb3JtJykucmVzZXQoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYWxlcnQoXCJZb3Ugd2lsbCBhdCBsZWFzdCBuZWVkIGEgbmFtZSBhbmQgZHVlIGRhdGVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBDcmVhdGVUb2RvLm15QXJyLmZvckVhY2godG9kbyA9PiB7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2codG9kby50aXRsZSwgdG9kby5kdWVEYXRlLCB0b2RvLmRlc2NyaXB0aW9uLCB0b2RvLnByaW9yaXR5KTtcbiAgICAgICAgICAgIC8vIH0pO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coQ3JlYXRlVG9kby50YXNrQ2F0ZWdvcmllc1snSW5ib3gnXSk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhDcmVhdGVUb2RvLnRhc2tDYXRlZ29yaWVzW3BhcmFncmFwaENvbnRlbnRdLGBwYXJhZ3JhcGhDb250ZW50IGlzICR7cGFyYWdyYXBoQ29udGVudH1gKTtcbiAgICAgICAgICAgIC8vIC8vIGNvbnNvbGUubG9nKENyZWF0ZVRvZG8ubXlBcnJbQ3JlYXRlVG9kby5teUFyci5sZW5ndGggLSAxXSxgcGFyYWdyYXBoQ29udGVudCBpcyAke3BhcmFncmFwaENvbnRlbnR9YCwgJ3RvZG8nKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKENyZWF0ZVRvZG8udGFza0NhdGVnb3JpZXMsJ2NoZWNrJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGRlbGV0ZVRhc2sodGFza0l0ZW0sIHBhcmFncmFwaENvbnRlbnQpIHtcbiAgICAgICAgLy8gY29uc3QgaW5ib3hUYXNrQ2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveC10YXNrLWNhcmQtY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IHRhc2tJZCA9IHRhc2tJdGVtLmRhdGFzZXQudGFza0lkO1xuICAgIFxuXG4gICAgICAgIHRhc2tJdGVtLnJlbW92ZSgpO1xuICAgIFxuXG4gICAgICAgIENyZWF0ZVRvZG8udGFza0NhdGVnb3JpZXNbcGFyYWdyYXBoQ29udGVudF0gPSBDcmVhdGVUb2RvLnRhc2tDYXRlZ29yaWVzW3BhcmFncmFwaENvbnRlbnRdLmZpbHRlcihcbiAgICAgICAgICAgIHRhc2sgPT4gdGFzay5pZCAhPT0gcGFyc2VJbnQodGFza0lkKSAgXG4gICAgICAgICk7XG4gICAgfVxuICAgIFxuICAgIFxuXG4gICAgc3RhdGljIGJ1aWxkUHJvamVjdE9ySW5ib3gocGFyYWdyYXBoQ29udGVudCA9ICdJbmJveCcpIHtcbiAgICAgICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50LWNvbnRhaW5lcicpO1xuICAgICAgICBtYWluQ29udGVudC5pbm5lckhUTUwgPVxuICAgICAgICAgIGA8ZGl2IGNsYXNzPVwiaW5ib3gtYWRkLXRhc2tcIj5cbiAgICAgICAgICAgICAgPGgyPiR7cGFyYWdyYXBoQ29udGVudH08L2gyPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiaW5ib3gtYWRkLXRhc2stYnV0dG9uXCI+PHNwYW4+Kzwvc3Bhbj4gQWRkIFRhc2s8L2J1dHRvbj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluYm94LXRhc2stY29udGFpbmVyXCI+PC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmJveC10YXNrLWNhcmQtY29udGFpbmVyXCI+PC9kaXY+XG4gICAgICAgICAgPC9kaXY+YDtcbiAgICAgICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IG1haW5Db250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveC1hZGQtdGFzay1idXR0b24nKTtcbiAgICAgICAgY29uc3QgaW5ib3hUYXNrQ2FyZCA9IG1haW5Db250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveC10YXNrLWNvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCB0YXNrQ2FyZERpc3BsYXlEZWxldGUgPSBtYWluQ29udGVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gtdGFzay1jYXJkLWNvbnRhaW5lcicpO1xuICAgICAgICBsZXQgc2hvd1Rhc2tGb3JtID0gZmFsc2U7XG4gICAgICBcbiAgICAgICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICBzaG93VGFza0Zvcm0gPSAhc2hvd1Rhc2tGb3JtOyBcbiAgICAgICAgICByZW5kZXJUYXNrRm9ybSgpO1xuICAgICAgICB9KTtcbiAgICAgIFxuICAgICAgICBpbmJveFRhc2tDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGRUYXNrQnV0dG9uJykpIHtcbiAgICAgICAgICAgIENyZWF0ZVRvZG8uaGFuZGxlQWRkVGFzayhwYXJhZ3JhcGhDb250ZW50KTtcbiAgICAgICAgICAgIHNob3dUYXNrRm9ybSA9ICFzaG93VGFza0Zvcm07IFxuICAgICAgICAgICAgcmVuZGVyVGFza0Zvcm0oKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZUJ1dHRvbicpKSB7XG4gICAgICAgICAgICAgIHNob3dUYXNrRm9ybSA9ICFzaG93VGFza0Zvcm07IFxuICAgICAgICAgICAgICByZW5kZXJUYXNrRm9ybSgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICBcbiAgICAgICAgdGFza0NhcmREaXNwbGF5RGVsZXRlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlQnV0dG9uJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrSXRlbSA9IHRhcmdldC5jbG9zZXN0KCcudGFzay1pdGVtJyk7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2tJdGVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBhcmFncmFwaENvbnRlbnQgPSBtYWluQ29udGVudC5xdWVyeVNlbGVjdG9yKCdoMicpLnRleHRDb250ZW50O1xuICAgICAgICAgICAgICAgICAgICBDcmVhdGVUb2RvLmRlbGV0ZVRhc2sodGFza0l0ZW0sIHBhcmFncmFwaENvbnRlbnQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBcbiAgICAgIFxuICAgICAgICBmdW5jdGlvbiByZW5kZXJUYXNrRm9ybSgpIHtcbiAgICAgICAgICBpZiAoc2hvd1Rhc2tGb3JtKSB7XG4gICAgICAgICAgICBpbmJveFRhc2tDYXJkLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgPGZvcm0gaWQ9XCJ0YXNrRm9ybVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWZvcm0tY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPk5hbWU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwibmFtZVwiIHJlcXVpcmVkPlxuICAgICAgXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPHRleHRhcmVhIGlkPVwiZGVzY3JpcHRpb25cIiByb3dzPVwiNFwiIHJlcXVpcmVkPjwvdGV4dGFyZWE+XG4gICAgICBcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkYXRlXCI+RGF0ZTo8L2xhYmVsPlxuICAgICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJkYXRlXCIgaWQ9XCJkYXRlXCIgcmVxdWlyZWQ+XG4gICAgICBcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlByaW9yaXR5OjwvbGFiZWw+XG4gICAgICAgICAgICAgICAgICA8c2VsZWN0IGlkPVwicHJpb3JpdHlcIiByZXF1aXJlZD5cbiAgICAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImxvd1wiPkxvdzwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWVkaXVtXCI+TWVkaXVtPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJoaWdoXCI+SGlnaDwvb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgPC9zZWxlY3Q+XG4gICAgICBcbiAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiYWRkVGFza0J1dHRvblwiPkFkZDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJkZWxldGVCdXR0b25cIj5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9mb3JtPmA7XG4gICAgICAgICAgfSBcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGluYm94VGFza0NhcmQuaW5uZXJIVE1MID0gJyc7IFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgXG4gICAgICAgIHJldHVybiB7IG1haW5Db250ZW50LCBhZGRUYXNrQnV0dG9uLCBpbmJveFRhc2tDYXJkIH07XG4gICAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlUHJvamVjdCgpe1xuICAgICAgICBjb25zdCBhZGRQcm9qZWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmFkZC1wcm9qZWN0Jyk7XG4gICAgICAgIGNvbnN0IGFkZFByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWRkLXByb2plY3QtY29udGFpbmVyJyk7XG4gICAgICAgIGxldCBzaG93UHJvamVjdEZvcm0gPSBmYWxzZTtcbiAgICAgICAgYWRkUHJvamVjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBzaG93UHJvamVjdEZvcm0gPSAhc2hvd1Byb2plY3RGb3JtO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coc2hvd1Byb2plY3RGb3JtLCdhZGQgcHJvamVjdCcpXG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHJlbmRlckFkZFByb2plY3QoKX0pXG4gICAgICAgIGFkZFByb2plY3RDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBpZih0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGQtcHJvamVjdC1idXR0b24nKSl7XG4gICAgICAgICAgICAgICAgQ3JlYXRlVG9kby5oYW5kbGVBZGRQcm9qZWN0KCk7XG4gICAgICAgICAgICAgICAgc2hvd1Byb2plY3RGb3JtID0gIXNob3dQcm9qZWN0Rm9ybTtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhzaG93UHJvamVjdEZvcm0sJ2FkZCcpIFxuICAgICAgICAgICAgICAgIHJlbmRlckFkZFByb2plY3QoKVxuICAgICAgICAgICAgfSBlbHNlIGlmKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2NhbmNlbC1wcm9qZWN0LWJ1dHRvbicpKXtcbiAgICAgICAgICAgICAgICBzaG93UHJvamVjdEZvcm0gPSAhc2hvd1Byb2plY3RGb3JtO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHNob3dQcm9qZWN0Rm9ybSwgJ2NhbmNlbCcpIFxuICAgICAgICAgICAgICAgIHJlbmRlckFkZFByb2plY3QoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTsgICAgICAgXG5cbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyQWRkUHJvamVjdCgpe1xuICAgICAgICAgICAgaWYoc2hvd1Byb2plY3RGb3JtKXtcbiAgICAgICAgICAgICAgICBhZGRQcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCA9IGBcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1mb3JtLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwicHJvamVjdC1uYW1lXCIgcGxhY2Vob2xkZXI9XCJQcm9qZWN0IE5hbWVcIj5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYWRkLXByb2plY3QtYnV0dG9uXCI+QWRkPC9idXR0b24+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImNhbmNlbC1wcm9qZWN0LWJ1dHRvblwiPkNhbmNlbDwvYnV0dG9uPlxuICAgICAgICAgICAgICAgIDwvZGl2PmA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBhZGRQcm9qZWN0Q29udGFpbmVyLmlubmVySFRNTCA9ICcnOyBcbiAgICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBoYW5kbGVBZGRQcm9qZWN0KCkge1xuICAgICAgICBjb25zdCBuZXdQcm9qZWN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2plY3QtbmFtZS1jb250YWluZXInKTtcbiAgICAgICAgbGV0IGFkZFByb2plY3RJbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9qZWN0LW5hbWUnKS52YWx1ZTtcbiAgICBcbiAgICAgICAgaWYgKGFkZFByb2plY3RJbnB1dCA9PT0gJycpIHtcbiAgICAgICAgICAgIGFsZXJ0KCdZb3Ugd2lsbCBuZWVkIGEgUHJvamVjdCBOYW1lJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBuZXdQcm9qZWN0RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgICAgIG5ld1Byb2plY3RFbGVtZW50LnRleHRDb250ZW50ID0gYWRkUHJvamVjdElucHV0O1xuICAgICAgICAgICAgbmV3UHJvamVjdEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgncGFnZS10aXRsZScpOyBcbiAgICAgICAgICAgIG5ld1Byb2plY3RDb250YWluZXIuYXBwZW5kQ2hpbGQobmV3UHJvamVjdEVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIFxuICAgIFxufSIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gaW1wb3J0IHtidWlsZEluYm94fSBmcm9tICcuL2luYm94LmpzJztcbi8vIGltcG9ydCB7YnVpbGRQcm9qZWN0fSBmcm9tICcuL3Byb2plY3QuanMnO1xuaW1wb3J0IHsgQ3JlYXRlVG9kbyB9IGZyb20gJy4vdG9kb2xpc3QuanMnO1xuXG5mdW5jdGlvbiBpc0luYm94T3JQcm9qZWN0KCkge1xuICAgIGNvbnN0IGlzSW5ib3hPclByb2plY3ROYW1lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYWdlLXRpdGxlJyk7XG4gICAgQ3JlYXRlVG9kby5idWlsZFByb2plY3RPckluYm94KCk7XG4gICAgaXNJbmJveE9yUHJvamVjdE5hbWVzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgY29uc3QgcGFyYWdyYXBoQ29udGVudCA9IHRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGlmIChwYXJhZ3JhcGhDb250ZW50ID09PSAnVG9kYXknIHx8IHBhcmFncmFwaENvbnRlbnQgPT09ICdUaGlzIFdlZWsnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIm5vdCB2YWxpZCBtb2ZvXCIpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBDcmVhdGVUb2RvLmJ1aWxkUHJvamVjdE9ySW5ib3gocGFyYWdyYXBoQ29udGVudCk7XG4gICAgICAgICAgICAgICAgQ3JlYXRlVG9kby5oYW5kbGVBZGRUYXNrKHBhcmFncmFwaENvbnRlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbiAgICBDcmVhdGVUb2RvLmNyZWF0ZVByb2plY3QoKTtcbn1cblxuXG5pc0luYm94T3JQcm9qZWN0KCk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9