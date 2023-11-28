/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/inbox.js":
/*!**********************!*\
  !*** ./src/inbox.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildInbox: () => (/* binding */ buildInbox)
/* harmony export */ });
/* harmony import */ var _todolist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todolist.js */ "./src/todolist.js");


function buildInbox(paragraphContent = 'Inbox') {
  const mainContent = document.querySelector('.main-content-container');
  mainContent.innerHTML =
    `<div class="inbox-add-task">
        <h2>${paragraphContent.toUpperCase()}</h2>
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
      _todolist_js__WEBPACK_IMPORTED_MODULE_0__.CreateTodo.handleAddTask();
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
    _todolist_js__WEBPACK_IMPORTED_MODULE_0__.CreateTodo.deleteTask(taskItem);
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

/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildProject: () => (/* binding */ buildProject)
/* harmony export */ });
/* harmony import */ var _todolist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todolist.js */ "./src/todolist.js");


function buildProject(paragraphContent) {
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
        _todolist_js__WEBPACK_IMPORTED_MODULE_0__.CreateTodo.handleAddTask();
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
      _todolist_js__WEBPACK_IMPORTED_MODULE_0__.CreateTodo.deleteTask(taskItem);
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

/***/ }),

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
/* harmony import */ var _inbox_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox.js */ "./src/inbox.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project.js */ "./src/project.js");



function isInboxOrProject() {
    console.log('isInboxOrProject function called');
    const isInboxOrProjectNames = document.querySelectorAll('.page-title');
    (0,_inbox_js__WEBPACK_IMPORTED_MODULE_0__.buildInbox)()
    isInboxOrProjectNames.forEach((element) => {
        element.addEventListener('click', (event) => {
            const target = event.target;
            const paragraphContent = target.textContent;
            if(paragraphContent === 'Inbox'){
                (0,_inbox_js__WEBPACK_IMPORTED_MODULE_0__.buildInbox)(paragraphContent)
            }
            else if(paragraphContent === 'Add Projects'){
                (0,_project_js__WEBPACK_IMPORTED_MODULE_1__.buildProject)(paragraphContent)
            }
            else {
                console.error("not valid mofo")
            }
            console.log('Content inside <p>:', paragraphContent)
            return {paragraphContent};
        });
    });
}

isInboxOrProject()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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c0M7QUFDSTs7QUFFMUM7QUFDQTtBQUNBO0FBQ0EsSUFBSSxxREFBVTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IscURBQVU7QUFDMUI7QUFDQTtBQUNBLGdCQUFnQix5REFBWTtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CO0FBQ3BCLFNBQVM7QUFDVCxLQUFLO0FBQ0w7O0FBRUEsa0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luYm94LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvZG9saXN0LmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENyZWF0ZVRvZG8gfSBmcm9tICcuL3RvZG9saXN0LmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkSW5ib3gocGFyYWdyYXBoQ29udGVudCA9ICdJbmJveCcpIHtcbiAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50LWNvbnRhaW5lcicpO1xuICBtYWluQ29udGVudC5pbm5lckhUTUwgPVxuICAgIGA8ZGl2IGNsYXNzPVwiaW5ib3gtYWRkLXRhc2tcIj5cbiAgICAgICAgPGgyPiR7cGFyYWdyYXBoQ29udGVudC50b1VwcGVyQ2FzZSgpfTwvaDI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJpbmJveC1hZGQtdGFzay1idXR0b25cIj48c3Bhbj4rPC9zcGFuPiBBZGQgVGFzazwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5ib3gtdGFzay1jb250YWluZXJcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImluYm94LXRhc2stY2FyZC1jb250YWluZXJcIj48L2Rpdj5cbiAgICA8L2Rpdj5gO1xuICBjb25zdCBhZGRUYXNrQnV0dG9uID0gbWFpbkNvbnRlbnQucXVlcnlTZWxlY3RvcignLmluYm94LWFkZC10YXNrLWJ1dHRvbicpO1xuICBjb25zdCBpbmJveFRhc2tDYXJkID0gbWFpbkNvbnRlbnQucXVlcnlTZWxlY3RvcignLmluYm94LXRhc2stY29udGFpbmVyJyk7XG4gIGNvbnN0IHRhc2tDYXJkRGlzcGxheURlbGV0ZSA9IG1haW5Db250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveC10YXNrLWNhcmQtY29udGFpbmVyJyk7XG4gIGxldCBzaG93VGFza0Zvcm0gPSBmYWxzZTtcblxuICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNob3dUYXNrRm9ybSA9ICFzaG93VGFza0Zvcm07IFxuICAgIHJlbmRlclRhc2tGb3JtKCk7XG4gIH0pO1xuXG4gIGluYm94VGFza0NhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZFRhc2tCdXR0b24nKSkge1xuICAgICAgQ3JlYXRlVG9kby5oYW5kbGVBZGRUYXNrKCk7XG4gICAgICBzaG93VGFza0Zvcm0gPSAhc2hvd1Rhc2tGb3JtOyBcbiAgICAgIHJlbmRlclRhc2tGb3JtKCk7XG4gICAgfSBlbHNlIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGVCdXR0b24nKSkge1xuICAgICAgICBzaG93VGFza0Zvcm0gPSAhc2hvd1Rhc2tGb3JtOyBcbiAgICAgICAgcmVuZGVyVGFza0Zvcm0oKTtcbiAgICB9XG4gIH0pO1xuXG4gIHRhc2tDYXJkRGlzcGxheURlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRhc2tJdGVtID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWl0ZW0nKTtcbiAgICBpZiAodGFza0l0ZW0pIHtcbiAgICBDcmVhdGVUb2RvLmRlbGV0ZVRhc2sodGFza0l0ZW0pO1xufX0pXG5cbiAgZnVuY3Rpb24gcmVuZGVyVGFza0Zvcm0oKSB7XG4gICAgaWYgKHNob3dUYXNrRm9ybSkge1xuICAgICAgaW5ib3hUYXNrQ2FyZC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxmb3JtIGlkPVwidGFza0Zvcm1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1mb3JtLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5OYW1lOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiByZXF1aXJlZD5cblxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb246PC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImRlc2NyaXB0aW9uXCIgcm93cz1cIjRcIiByZXF1aXJlZD48L3RleHRhcmVhPlxuXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGF0ZVwiPkRhdGU6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiIHJlcXVpcmVkPlxuXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5Qcmlvcml0eTo8L2xhYmVsPlxuICAgICAgICAgICAgPHNlbGVjdCBpZD1cInByaW9yaXR5XCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3dcIj5Mb3c8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1lZGl1bVwiPk1lZGl1bTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGlnaFwiPkhpZ2g8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImFkZFRhc2tCdXR0b25cIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZGVsZXRlQnV0dG9uXCI+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5gO1xuICAgIH0gXG4gICAgZWxzZSB7XG4gICAgICBpbmJveFRhc2tDYXJkLmlubmVySFRNTCA9ICcnOyBcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBtYWluQ29udGVudCwgYWRkVGFza0J1dHRvbiwgaW5ib3hUYXNrQ2FyZCB9O1xufSIsImltcG9ydCB7IENyZWF0ZVRvZG8gfSBmcm9tICcuL3RvZG9saXN0LmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkUHJvamVjdChwYXJhZ3JhcGhDb250ZW50KSB7XG4gICAgY29uc3QgbWFpbkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50LWNvbnRhaW5lcicpO1xuICAgIG1haW5Db250ZW50LmlubmVySFRNTCA9XG4gICAgICBgPGRpdiBjbGFzcz1cImluYm94LWFkZC10YXNrXCI+XG4gICAgICAgICAgPGgyPiR7cGFyYWdyYXBoQ29udGVudH08L2gyPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJpbmJveC1hZGQtdGFzay1idXR0b25cIj48c3Bhbj4rPC9zcGFuPiBBZGQgVGFzazwvYnV0dG9uPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmJveC10YXNrLWNvbnRhaW5lclwiPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmJveC10YXNrLWNhcmQtY29udGFpbmVyXCI+PC9kaXY+XG4gICAgICA8L2Rpdj5gO1xuICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBtYWluQ29udGVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gtYWRkLXRhc2stYnV0dG9uJyk7XG4gICAgY29uc3QgaW5ib3hUYXNrQ2FyZCA9IG1haW5Db250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveC10YXNrLWNvbnRhaW5lcicpO1xuICAgIGNvbnN0IHRhc2tDYXJkRGlzcGxheURlbGV0ZSA9IG1haW5Db250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveC10YXNrLWNhcmQtY29udGFpbmVyJyk7XG4gICAgbGV0IHNob3dUYXNrRm9ybSA9IGZhbHNlO1xuICBcbiAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgc2hvd1Rhc2tGb3JtID0gIXNob3dUYXNrRm9ybTsgXG4gICAgICByZW5kZXJUYXNrRm9ybSgpO1xuICAgIH0pO1xuICBcbiAgICBpbmJveFRhc2tDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnYWRkVGFza0J1dHRvbicpKSB7XG4gICAgICAgIENyZWF0ZVRvZG8uaGFuZGxlQWRkVGFzaygpO1xuICAgICAgICBzaG93VGFza0Zvcm0gPSAhc2hvd1Rhc2tGb3JtOyBcbiAgICAgICAgcmVuZGVyVGFza0Zvcm0oKTtcbiAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlQnV0dG9uJykpIHtcbiAgICAgICAgICBzaG93VGFza0Zvcm0gPSAhc2hvd1Rhc2tGb3JtOyBcbiAgICAgICAgICByZW5kZXJUYXNrRm9ybSgpO1xuICAgICAgfVxuICAgIH0pO1xuICBcbiAgICB0YXNrQ2FyZERpc3BsYXlEZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgIGNvbnN0IHRhc2tJdGVtID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWl0ZW0nKTtcbiAgICAgIGlmICh0YXNrSXRlbSkge1xuICAgICAgQ3JlYXRlVG9kby5kZWxldGVUYXNrKHRhc2tJdGVtKTtcbiAgfX0pXG4gIFxuICAgIGZ1bmN0aW9uIHJlbmRlclRhc2tGb3JtKCkge1xuICAgICAgaWYgKHNob3dUYXNrRm9ybSkge1xuICAgICAgICBpbmJveFRhc2tDYXJkLmlubmVySFRNTCA9IGBcbiAgICAgICAgICA8Zm9ybSBpZD1cInRhc2tGb3JtXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1mb3JtLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwibmFtZVwiPk5hbWU6PC9sYWJlbD5cbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgcmVxdWlyZWQ+XG4gIFxuICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGVzY3JpcHRpb25cIj5EZXNjcmlwdGlvbjo8L2xhYmVsPlxuICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJkZXNjcmlwdGlvblwiIHJvd3M9XCI0XCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cbiAgXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkYXRlXCI+RGF0ZTo8L2xhYmVsPlxuICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImRhdGVcIiByZXF1aXJlZD5cbiAgXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJwcmlvcml0eVwiPlByaW9yaXR5OjwvbGFiZWw+XG4gICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJwcmlvcml0eVwiIHJlcXVpcmVkPlxuICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3dcIj5Mb3c8L29wdGlvbj5cbiAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibWVkaXVtXCI+TWVkaXVtPC9vcHRpb24+XG4gICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hcIj5IaWdoPC9vcHRpb24+XG4gICAgICAgICAgICAgIDwvc2VsZWN0PlxuICBcbiAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJhZGRUYXNrQnV0dG9uXCI+QWRkPC9idXR0b24+XG4gICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZGVsZXRlQnV0dG9uXCI+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Zvcm0+YDtcbiAgICAgIH0gXG4gICAgICBlbHNlIHtcbiAgICAgICAgaW5ib3hUYXNrQ2FyZC5pbm5lckhUTUwgPSAnJzsgXG4gICAgICB9XG4gICAgfVxuICBcbiAgICByZXR1cm4geyBtYWluQ29udGVudCwgYWRkVGFza0J1dHRvbiwgaW5ib3hUYXNrQ2FyZCB9O1xuICB9IiwiZXhwb3J0IGNsYXNzIENyZWF0ZVRvZG8ge1xuICAgIGNvbnN0cnVjdG9yKHRpdGxlLCBkdWVEYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkpIHtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLmRlc2NyaXB0aW9uID0gZGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXBwZW5kVG9kb1RvRGlzcGxheSh0b2RvKSB7XG4gICAgICAgIGNvbnN0IGluYm94VGFza0NhcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gtdGFzay1jYXJkLWNvbnRhaW5lcicpO1xuXG4gICAgICAgIGNvbnN0IHRhc2tDb250ZW50ID0gYFxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2staXRlbVwiPlxuICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+VGFzayBOYW1lOjwvc3Ryb25nPiAke3RvZG8udGl0bGV9PC9wPlxuICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+RGVzY3JpcHRpb246PC9zdHJvbmc+ICR7dG9kby5kZXNjcmlwdGlvbn08L3A+XG4gICAgICAgICAgICAgICAgPHA+PHN0cm9uZz5EdWUgRGF0ZTo8L3N0cm9uZz4gJHt0b2RvLmR1ZURhdGV9PC9wPlxuICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+UHJpb3JpdHk6PC9zdHJvbmc+ICR7dG9kby5wcmlvcml0eX08L3A+XG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImRlbGV0ZUJ1dHRvblwiPkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+YDtcblxuICAgICAgICBpbmJveFRhc2tDYXJkLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgdGFza0NvbnRlbnQpO1xuICAgIH1cblxuICAgIHN0YXRpYyBoYW5kbGVBZGRUYXNrKCkge1xuICAgICAgICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ25hbWUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGVzY3JpcHRpb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGVzY3JpcHRpb24nKS52YWx1ZTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdkYXRlJykudmFsdWU7XG4gICAgICAgIGNvbnN0IHByaW9yaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3ByaW9yaXR5JykudmFsdWU7XG4gICAgICAgIGlmKG5hbWUgIT09ICcnICYmIGRhdGUgIT09ICcnKXtcbiAgICAgICAgICAgIGNvbnN0IHRvZG8gPSBuZXcgQ3JlYXRlVG9kbyhuYW1lLCBkYXRlLCBkZXNjcmlwdGlvbiwgcHJpb3JpdHkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ05ldyBUb2RvOicsIHRvZG8pO1xuICAgICAgICAgICAgQ3JlYXRlVG9kby5hcHBlbmRUb2RvVG9EaXNwbGF5KHRvZG8pO1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Rhc2tGb3JtJykucmVzZXQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNle1xuICAgICAgICAgICAgYWxlcnQoXCJZb3Ugd2lsbCBhdCBsZWFzdCBuZWVkIGEgbmFtZSBhbmQgZHVlIGRhdGVcIik7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBzdGF0aWMgZGVsZXRlVGFzayh0YXNrSXRlbSkge1xuICAgICAgICB0YXNrSXRlbS5yZW1vdmUoKTtcbiAgICB9XG5cbiAgICAvLyBzdGF0aWMgYnVpbGRQcm9qZWN0T3JJbmJveChwYXJhZ3JhcGhDb250ZW50KSB7XG4gICAgLy8gICAgIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudC1jb250YWluZXInKTtcbiAgICAvLyAgICAgbWFpbkNvbnRlbnQuaW5uZXJIVE1MID1cbiAgICAvLyAgICAgICBgPGRpdiBjbGFzcz1cImluYm94LWFkZC10YXNrXCI+XG4gICAgLy8gICAgICAgICAgIDxoMj4ke3BhcmFncmFwaENvbnRlbnQudG9VcHBlckNhc2UoKX08L2gyPlxuICAgIC8vICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiaW5ib3gtYWRkLXRhc2stYnV0dG9uXCI+PHNwYW4+Kzwvc3Bhbj4gQWRkIFRhc2s8L2J1dHRvbj5cbiAgICAvLyAgICAgICAgICAgPGRpdiBjbGFzcz1cImluYm94LXRhc2stY29udGFpbmVyXCI+PC9kaXY+XG4gICAgLy8gICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmJveC10YXNrLWNhcmQtY29udGFpbmVyXCI+PC9kaXY+XG4gICAgLy8gICAgICAgPC9kaXY+YDtcbiAgICAvLyAgICAgY29uc3QgYWRkVGFza0J1dHRvbiA9IG1haW5Db250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveC1hZGQtdGFzay1idXR0b24nKTtcbiAgICAvLyAgICAgY29uc3QgaW5ib3hUYXNrQ2FyZCA9IG1haW5Db250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveC10YXNrLWNvbnRhaW5lcicpO1xuICAgIC8vICAgICBjb25zdCB0YXNrQ2FyZERpc3BsYXlEZWxldGUgPSBtYWluQ29udGVudC5xdWVyeVNlbGVjdG9yKCcuaW5ib3gtdGFzay1jYXJkLWNvbnRhaW5lcicpO1xuICAgIC8vICAgICBsZXQgc2hvd1Rhc2tGb3JtID0gZmFsc2U7XG4gICAgICBcbiAgICAvLyAgICAgYWRkVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAvLyAgICAgICBzaG93VGFza0Zvcm0gPSAhc2hvd1Rhc2tGb3JtOyBcbiAgICAvLyAgICAgICByZW5kZXJUYXNrRm9ybSgpO1xuICAgIC8vICAgICB9KTtcbiAgICAgIFxuICAgIC8vICAgICBpbmJveFRhc2tDYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgLy8gICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIC8vICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhZGRUYXNrQnV0dG9uJykpIHtcbiAgICAvLyAgICAgICAgIENyZWF0ZVRvZG8uaGFuZGxlQWRkVGFzaygpO1xuICAgIC8vICAgICAgICAgc2hvd1Rhc2tGb3JtID0gIXNob3dUYXNrRm9ybTsgXG4gICAgLy8gICAgICAgICByZW5kZXJUYXNrRm9ybSgpO1xuICAgIC8vICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZGVsZXRlQnV0dG9uJykpIHtcbiAgICAvLyAgICAgICAgICAgc2hvd1Rhc2tGb3JtID0gIXNob3dUYXNrRm9ybTsgXG4gICAgLy8gICAgICAgICAgIHJlbmRlclRhc2tGb3JtKCk7XG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9KTtcbiAgICAgIFxuICAgIC8vICAgICB0YXNrQ2FyZERpc3BsYXlEZWxldGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAvLyAgICAgICBjb25zdCB0YXNrSXRlbSA9IGV2ZW50LnRhcmdldC5jbG9zZXN0KCcudGFzay1pdGVtJyk7XG4gICAgLy8gICAgICAgaWYgKHRhc2tJdGVtKSB7XG4gICAgLy8gICAgICAgQ3JlYXRlVG9kby5kZWxldGVUYXNrKHRhc2tJdGVtKTtcbiAgICAvLyAgIH19KVxuICAgICAgXG4gICAgLy8gICAgIGZ1bmN0aW9uIHJlbmRlclRhc2tGb3JtKCkge1xuICAgIC8vICAgICAgIGlmIChzaG93VGFza0Zvcm0pIHtcbiAgICAvLyAgICAgICAgIGluYm94VGFza0NhcmQuaW5uZXJIVE1MID0gYFxuICAgIC8vICAgICAgICAgICA8Zm9ybSBpZD1cInRhc2tGb3JtXCI+XG4gICAgLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRhc2stZm9ybS1jb250YWluZXJcIj5cbiAgICAvLyAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJuYW1lXCI+TmFtZTo8L2xhYmVsPlxuICAgIC8vICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgaWQ9XCJuYW1lXCIgcmVxdWlyZWQ+XG4gICAgICBcbiAgICAvLyAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJkZXNjcmlwdGlvblwiPkRlc2NyaXB0aW9uOjwvbGFiZWw+XG4gICAgLy8gICAgICAgICAgICAgICA8dGV4dGFyZWEgaWQ9XCJkZXNjcmlwdGlvblwiIHJvd3M9XCI0XCIgcmVxdWlyZWQ+PC90ZXh0YXJlYT5cbiAgICAgIFxuICAgIC8vICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRhdGVcIj5EYXRlOjwvbGFiZWw+XG4gICAgLy8gICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cImRhdGVcIiBpZD1cImRhdGVcIiByZXF1aXJlZD5cbiAgICAgIFxuICAgIC8vICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInByaW9yaXR5XCI+UHJpb3JpdHk6PC9sYWJlbD5cbiAgICAvLyAgICAgICAgICAgICAgIDxzZWxlY3QgaWQ9XCJwcmlvcml0eVwiIHJlcXVpcmVkPlxuICAgIC8vICAgICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwibG93XCI+TG93PC9vcHRpb24+XG4gICAgLy8gICAgICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJtZWRpdW1cIj5NZWRpdW08L29wdGlvbj5cbiAgICAvLyAgICAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cImhpZ2hcIj5IaWdoPC9vcHRpb24+XG4gICAgLy8gICAgICAgICAgICAgICA8L3NlbGVjdD5cbiAgICAgIFxuICAgIC8vICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgY2xhc3M9XCJhZGRUYXNrQnV0dG9uXCI+QWRkPC9idXR0b24+XG4gICAgLy8gICAgICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImRlbGV0ZUJ1dHRvblwiPkRlbGV0ZTwvYnV0dG9uPlxuICAgIC8vICAgICAgICAgICAgIDwvZGl2PlxuICAgIC8vICAgICAgICAgICA8L2Zvcm0+YDtcbiAgICAvLyAgICAgICB9IFxuICAgIC8vICAgICAgIGVsc2Uge1xuICAgIC8vICAgICAgICAgaW5ib3hUYXNrQ2FyZC5pbm5lckhUTUwgPSAnJzsgXG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9XG4gICAgICBcbiAgICAvLyAgICAgcmV0dXJuIHsgbWFpbkNvbnRlbnQsIGFkZFRhc2tCdXR0b24sIGluYm94VGFza0NhcmQgfTtcbiAgICAvLyAgIH1cbiAgICBcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtidWlsZEluYm94fSBmcm9tICcuL2luYm94LmpzJztcbmltcG9ydCB7YnVpbGRQcm9qZWN0fSBmcm9tICcuL3Byb2plY3QuanMnO1xuXG5mdW5jdGlvbiBpc0luYm94T3JQcm9qZWN0KCkge1xuICAgIGNvbnNvbGUubG9nKCdpc0luYm94T3JQcm9qZWN0IGZ1bmN0aW9uIGNhbGxlZCcpO1xuICAgIGNvbnN0IGlzSW5ib3hPclByb2plY3ROYW1lcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYWdlLXRpdGxlJyk7XG4gICAgYnVpbGRJbmJveCgpXG4gICAgaXNJbmJveE9yUHJvamVjdE5hbWVzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgY29uc3QgcGFyYWdyYXBoQ29udGVudCA9IHRhcmdldC50ZXh0Q29udGVudDtcbiAgICAgICAgICAgIGlmKHBhcmFncmFwaENvbnRlbnQgPT09ICdJbmJveCcpe1xuICAgICAgICAgICAgICAgIGJ1aWxkSW5ib3gocGFyYWdyYXBoQ29udGVudClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYocGFyYWdyYXBoQ29udGVudCA9PT0gJ0FkZCBQcm9qZWN0cycpe1xuICAgICAgICAgICAgICAgIGJ1aWxkUHJvamVjdChwYXJhZ3JhcGhDb250ZW50KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIm5vdCB2YWxpZCBtb2ZvXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnQ29udGVudCBpbnNpZGUgPHA+OicsIHBhcmFncmFwaENvbnRlbnQpXG4gICAgICAgICAgICByZXR1cm4ge3BhcmFncmFwaENvbnRlbnR9O1xuICAgICAgICB9KTtcbiAgICB9KTtcbn1cblxuaXNJbmJveE9yUHJvamVjdCgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9