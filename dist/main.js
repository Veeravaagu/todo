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


function buildInbox() {
  const mainContent = document.querySelector('.main-content-container');
  mainContent.innerHTML =
    `<div class="inbox-add-task">
        <h2>INBOX</h2>
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

(0,_inbox_js__WEBPACK_IMPORTED_MODULE_0__.buildInbox)()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkM7O0FBRXBDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsTUFBTSxvREFBVTtBQUNoQjtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0EsSUFBSSxvREFBVTtBQUNkLEVBQUU7O0FBRUY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3ZFTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxpREFBaUQsV0FBVztBQUM1RCxtREFBbUQsaUJBQWlCO0FBQ3BFLGdEQUFnRCxhQUFhO0FBQzdELGdEQUFnRCxjQUFjO0FBQzlEO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUMxQ0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05zQztBQUN0QyxxREFBVSxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmJveC5qcyIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL3RvZG9saXN0LmpzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly90b2RvLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENyZWF0ZVRvZG8gfSBmcm9tICcuL3RvZG9saXN0LmpzJztcblxuZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkSW5ib3goKSB7XG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudC1jb250YWluZXInKTtcbiAgbWFpbkNvbnRlbnQuaW5uZXJIVE1MID1cbiAgICBgPGRpdiBjbGFzcz1cImluYm94LWFkZC10YXNrXCI+XG4gICAgICAgIDxoMj5JTkJPWDwvaDI+XG4gICAgICAgIDxidXR0b24gY2xhc3M9XCJpbmJveC1hZGQtdGFzay1idXR0b25cIj48c3Bhbj4rPC9zcGFuPiBBZGQgVGFzazwvYnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5ib3gtdGFzay1jb250YWluZXJcIj48L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImluYm94LXRhc2stY2FyZC1jb250YWluZXJcIj48L2Rpdj5cbiAgICA8L2Rpdj5gO1xuICBjb25zdCBhZGRUYXNrQnV0dG9uID0gbWFpbkNvbnRlbnQucXVlcnlTZWxlY3RvcignLmluYm94LWFkZC10YXNrLWJ1dHRvbicpO1xuICBjb25zdCBpbmJveFRhc2tDYXJkID0gbWFpbkNvbnRlbnQucXVlcnlTZWxlY3RvcignLmluYm94LXRhc2stY29udGFpbmVyJyk7XG4gIGNvbnN0IHRhc2tDYXJkRGlzcGxheURlbGV0ZSA9IG1haW5Db250ZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbmJveC10YXNrLWNhcmQtY29udGFpbmVyJyk7XG4gIGxldCBzaG93VGFza0Zvcm0gPSBmYWxzZTtcblxuICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIHNob3dUYXNrRm9ybSA9ICFzaG93VGFza0Zvcm07IFxuICAgIHJlbmRlclRhc2tGb3JtKCk7XG4gIH0pO1xuXG4gIGluYm94VGFza0NhcmQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2FkZFRhc2tCdXR0b24nKSkge1xuICAgICAgQ3JlYXRlVG9kby5oYW5kbGVBZGRUYXNrKCk7XG4gICAgICBzaG93VGFza0Zvcm0gPSAhc2hvd1Rhc2tGb3JtOyBcbiAgICAgIHJlbmRlclRhc2tGb3JtKCk7XG4gICAgfSBlbHNlIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGVCdXR0b24nKSkge1xuICAgICAgICBzaG93VGFza0Zvcm0gPSAhc2hvd1Rhc2tGb3JtOyBcbiAgICAgICAgcmVuZGVyVGFza0Zvcm0oKTtcbiAgICB9XG4gIH0pO1xuXG4gIHRhc2tDYXJkRGlzcGxheURlbGV0ZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgIGNvbnN0IHRhc2tJdGVtID0gZXZlbnQudGFyZ2V0LmNsb3Nlc3QoJy50YXNrLWl0ZW0nKTtcbiAgICBpZiAodGFza0l0ZW0pIHtcbiAgICBDcmVhdGVUb2RvLmRlbGV0ZVRhc2sodGFza0l0ZW0pO1xufX0pXG5cbiAgZnVuY3Rpb24gcmVuZGVyVGFza0Zvcm0oKSB7XG4gICAgaWYgKHNob3dUYXNrRm9ybSkge1xuICAgICAgaW5ib3hUYXNrQ2FyZC5pbm5lckhUTUwgPSBgXG4gICAgICAgIDxmb3JtIGlkPVwidGFza0Zvcm1cIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFzay1mb3JtLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cIm5hbWVcIj5OYW1lOjwvbGFiZWw+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiBpZD1cIm5hbWVcIiByZXF1aXJlZD5cblxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImRlc2NyaXB0aW9uXCI+RGVzY3JpcHRpb246PC9sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBpZD1cImRlc2NyaXB0aW9uXCIgcm93cz1cIjRcIiByZXF1aXJlZD48L3RleHRhcmVhPlxuXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwiZGF0ZVwiPkRhdGU6PC9sYWJlbD5cbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwiZGF0ZVwiIGlkPVwiZGF0ZVwiIHJlcXVpcmVkPlxuXG4gICAgICAgICAgICA8bGFiZWwgZm9yPVwicHJpb3JpdHlcIj5Qcmlvcml0eTo8L2xhYmVsPlxuICAgICAgICAgICAgPHNlbGVjdCBpZD1cInByaW9yaXR5XCIgcmVxdWlyZWQ+XG4gICAgICAgICAgICAgIDxvcHRpb24gdmFsdWU9XCJsb3dcIj5Mb3c8L29wdGlvbj5cbiAgICAgICAgICAgICAgPG9wdGlvbiB2YWx1ZT1cIm1lZGl1bVwiPk1lZGl1bTwvb3B0aW9uPlxuICAgICAgICAgICAgICA8b3B0aW9uIHZhbHVlPVwiaGlnaFwiPkhpZ2g8L29wdGlvbj5cbiAgICAgICAgICAgIDwvc2VsZWN0PlxuXG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBjbGFzcz1cImFkZFRhc2tCdXR0b25cIj5BZGQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGNsYXNzPVwiZGVsZXRlQnV0dG9uXCI+RGVsZXRlPC9idXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5gO1xuICAgIH0gXG4gICAgZWxzZSB7XG4gICAgICBpbmJveFRhc2tDYXJkLmlubmVySFRNTCA9ICcnOyBcbiAgICB9XG4gIH1cblxuICByZXR1cm4geyBtYWluQ29udGVudCwgYWRkVGFza0J1dHRvbiwgaW5ib3hUYXNrQ2FyZCB9O1xufVxuXG5cbiIsImV4cG9ydCBjbGFzcyBDcmVhdGVUb2RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlRGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5KSB7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGRlc2NyaXB0aW9uO1xuICAgICAgICB0aGlzLnByaW9yaXR5ID0gcHJpb3JpdHk7XG4gICAgfVxuXG4gICAgc3RhdGljIGFwcGVuZFRvZG9Ub0Rpc3BsYXkodG9kbykge1xuICAgICAgICBjb25zdCBpbmJveFRhc2tDYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluYm94LXRhc2stY2FyZC1jb250YWluZXInKTtcblxuICAgICAgICBjb25zdCB0YXNrQ29udGVudCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0YXNrLWl0ZW1cIj5cbiAgICAgICAgICAgICAgICA8cD48c3Ryb25nPlRhc2sgTmFtZTo8L3N0cm9uZz4gJHt0b2RvLnRpdGxlfTwvcD5cbiAgICAgICAgICAgICAgICA8cD48c3Ryb25nPkRlc2NyaXB0aW9uOjwvc3Ryb25nPiAke3RvZG8uZGVzY3JpcHRpb259PC9wPlxuICAgICAgICAgICAgICAgIDxwPjxzdHJvbmc+RHVlIERhdGU6PC9zdHJvbmc+ICR7dG9kby5kdWVEYXRlfTwvcD5cbiAgICAgICAgICAgICAgICA8cD48c3Ryb25nPlByaW9yaXR5Ojwvc3Ryb25nPiAke3RvZG8ucHJpb3JpdHl9PC9wPlxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJkZWxldGVCdXR0b25cIj5EZWxldGU8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PmA7XG5cbiAgICAgICAgaW5ib3hUYXNrQ2FyZC5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIHRhc2tDb250ZW50KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaGFuZGxlQWRkVGFzaygpIHtcbiAgICAgICAgY29uc3QgbmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCduYW1lJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZGF0ZScpLnZhbHVlO1xuICAgICAgICBjb25zdCBwcmlvcml0eSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcmlvcml0eScpLnZhbHVlO1xuICAgICAgICBpZihuYW1lICE9PSAnJyAmJiBkYXRlICE9PSAnJyl7XG4gICAgICAgICAgICBjb25zdCB0b2RvID0gbmV3IENyZWF0ZVRvZG8obmFtZSwgZGF0ZSwgZGVzY3JpcHRpb24sIHByaW9yaXR5KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdOZXcgVG9kbzonLCB0b2RvKTtcbiAgICAgICAgICAgIENyZWF0ZVRvZG8uYXBwZW5kVG9kb1RvRGlzcGxheSh0b2RvKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0YXNrRm9ybScpLnJlc2V0KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIGFsZXJ0KFwiWW91IHdpbGwgYXQgbGVhc3QgbmVlZCBhIG5hbWUgYW5kIGR1ZSBkYXRlXCIpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgc3RhdGljIGRlbGV0ZVRhc2sodGFza0l0ZW0pIHtcbiAgICAgICAgdGFza0l0ZW0ucmVtb3ZlKCk7XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge2J1aWxkSW5ib3h9IGZyb20gJy4vaW5ib3guanMnO1xuYnVpbGRJbmJveCgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9