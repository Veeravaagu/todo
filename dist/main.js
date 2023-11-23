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
/* harmony export */   isAddTaskContainerClicked: () => (/* binding */ isAddTaskContainerClicked)
/* harmony export */ });
/* harmony import */ var _todolist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todolist */ "./src/todolist.js");


const inboxElement = document.querySelector('.main-content-container');

function inboxBuilder() {
    // Create inbox title
    const inboxTitle = document.createElement('h2');
    inboxTitle.textContent = "INBOX";
    inboxElement.appendChild(inboxTitle);

    // Create "Add Task" container
    const addTaskContainer = document.createElement('div');
    addTaskContainer.classList.add('add-task-container');

    const addTaskIcon = document.createElement('img');
    addTaskContainer.appendChild(addTaskIcon);

    const addTaskDescription = document.createElement('p');
    addTaskDescription.textContent = "Add Task";
    addTaskContainer.appendChild(addTaskDescription);

    inboxElement.appendChild(addTaskContainer);

    return { addTaskContainer };
}

function isAddTaskContainerClicked() {
    const inboxElementClicked = inboxBuilder();
    inboxElementClicked.addTaskContainer.addEventListener('click', () => addTaskButtonClicked());
}

function addTaskContainerWhenClicked() {
    // Create form for adding tasks
    const addTaskForm = document.createElement('form');

    // Create input field for task name
    const addTaskInputField = document.createElement('input');
    addTaskInputField.classList.add('add-task-input-field');
    addTaskInputField.placeholder = "Task Name";
    addTaskForm.appendChild(addTaskInputField);

    // Create buttons for adding and canceling tasks
    const addTaskAddButton = document.createElement('button');
    addTaskAddButton.classList.add('add-task-button');
    addTaskForm.appendChild(addTaskAddButton);

    const addTaskCancelButton = document.createElement('button');
    addTaskCancelButton.classList.add('add-task-button');
    addTaskForm.appendChild(addTaskCancelButton);

    inboxElement.appendChild(addTaskForm);

    return { addTaskAddButton, addTaskCancelButton, addTaskInputField, addTaskForm };
}

const addTaskButtonClickedMixin = {
    myTask: [],
};

Object.assign(_todolist__WEBPACK_IMPORTED_MODULE_0__.CreateTodo.prototype, addTaskButtonClickedMixin);

function addTaskButtonClicked() {
    const addTaskButtonListener = addTaskContainerWhenClicked();

    addTaskButtonListener.addTaskAddButton.addEventListener('click', (e) => {
        e.preventDefault();
        addButtonWhenClicked();
    });

    addTaskButtonListener.addTaskCancelButton.addEventListener('click', () => {
        addTaskButtonListener.addTaskForm.style.display = 'none';
    });

    function addButtonWhenClicked() {
        if (addTaskButtonListener.addTaskInputField.value !== '') {
            // Create a new task
            const createTodoTask = new _todolist__WEBPACK_IMPORTED_MODULE_0__.CreateTodo();
            createTodoTask.title = addTaskButtonListener.addTaskInputField.value;
            addTaskButtonListener.addTaskForm.style.display = 'none';
            
            // Add the task to the task list
            addTaskButtonClickedMixin.myTask.push(createTodoTask);
            
            // Display tasks after adding
            displayTasks(addTaskButtonClickedMixin.myTask);
            console.log(addTaskButtonClickedMixin.myTask, 'lib');
        } else {
            alert("ERROR Name is required");
        }
    }

    return { addTaskButtonListener };
}


function displayTasks(taskLibraryStorage) {
    let taskDisplayContainer = document.querySelector('.task-display-container');

    // Check if the container exists, create it if not
    if (!taskDisplayContainer) {
        taskDisplayContainer = document.createElement('div');
        taskDisplayContainer.classList.add('task-display-container');
        document.body.appendChild(taskDisplayContainer);
    }

    // Clear existing content
    taskDisplayContainer.innerHTML = '';

    // Iterate through each task in taskLibraryStorage
    taskLibraryStorage.forEach((task) => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        // Create a checkbox
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.status;
        taskDiv.appendChild(checkbox);

        // Display the title
        const titleElement = document.createElement('p');
        titleElement.textContent = task.title;
        taskDiv.appendChild(titleElement);

        // Create a date picker
        const datePicker = document.createElement('input');
        datePicker.type = 'date';
        datePicker.value = task.dueDate;
        taskDiv.appendChild(datePicker);

        // Create a delete button
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(task.id));
        taskDiv.appendChild(deleteButton);

        // Append the task div to the display container
        taskDisplayContainer.appendChild(taskDiv);
    });
}

function deleteTask(taskId) {
    const index = addTaskButtonClickedMixin.myTask.findIndex((task) => task.id === taskId);

    if (index !== -1) {
        // Remove the task from the task list
        addTaskButtonClickedMixin.myTask.splice(index, 1);
        
        // Update display after deletion
        displayTasks(addTaskButtonClickedMixin.myTask);
        console.log(addTaskButtonClickedMixin.myTask, 'lib');
    }
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
// todolist.js

let taskIdCounter = 0; // Counter to generate unique IDs for tasks

class CreateTodo {
    constructor(title, dueDate, status) {
        this.id = ++taskIdCounter;
        this.title = title;
        this.dueDate = dueDate;
        this.status = Boolean(status);
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
/* harmony import */ var _inbox__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inbox */ "./src/inbox.js");



const hello = (0,_inbox__WEBPACK_IMPORTED_MODULE_0__.isAddTaskContainerClicked)();
console.log(hello,'hello');




})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBd0M7O0FBRXhDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLGFBQWE7QUFDYjs7QUFFTztBQUNQO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsYUFBYTtBQUNiOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxjQUFjLGlEQUFVOztBQUV4QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLGlEQUFVO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUEsYUFBYTtBQUNiOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEpBOztBQUVBLHVCQUF1Qjs7QUFFaEI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztVQ1hBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOb0Q7OztBQUdwRCxjQUFjLGlFQUF5QjtBQUN2QyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvaW5ib3guanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy90b2RvbGlzdC5qcyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3RvZG8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDcmVhdGVUb2RvIH0gZnJvbSBcIi4vdG9kb2xpc3RcIjtcblxuY29uc3QgaW5ib3hFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm1haW4tY29udGVudC1jb250YWluZXInKTtcblxuZnVuY3Rpb24gaW5ib3hCdWlsZGVyKCkge1xuICAgIC8vIENyZWF0ZSBpbmJveCB0aXRsZVxuICAgIGNvbnN0IGluYm94VGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xuICAgIGluYm94VGl0bGUudGV4dENvbnRlbnQgPSBcIklOQk9YXCI7XG4gICAgaW5ib3hFbGVtZW50LmFwcGVuZENoaWxkKGluYm94VGl0bGUpO1xuXG4gICAgLy8gQ3JlYXRlIFwiQWRkIFRhc2tcIiBjb250YWluZXJcbiAgICBjb25zdCBhZGRUYXNrQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgYWRkVGFza0NvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzay1jb250YWluZXInKTtcblxuICAgIGNvbnN0IGFkZFRhc2tJY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG4gICAgYWRkVGFza0NvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrSWNvbik7XG5cbiAgICBjb25zdCBhZGRUYXNrRGVzY3JpcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgYWRkVGFza0Rlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJBZGQgVGFza1wiO1xuICAgIGFkZFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0Rlc2NyaXB0aW9uKTtcblxuICAgIGluYm94RWxlbWVudC5hcHBlbmRDaGlsZChhZGRUYXNrQ29udGFpbmVyKTtcblxuICAgIHJldHVybiB7IGFkZFRhc2tDb250YWluZXIgfTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQWRkVGFza0NvbnRhaW5lckNsaWNrZWQoKSB7XG4gICAgY29uc3QgaW5ib3hFbGVtZW50Q2xpY2tlZCA9IGluYm94QnVpbGRlcigpO1xuICAgIGluYm94RWxlbWVudENsaWNrZWQuYWRkVGFza0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGFkZFRhc2tCdXR0b25DbGlja2VkKCkpO1xufVxuXG5mdW5jdGlvbiBhZGRUYXNrQ29udGFpbmVyV2hlbkNsaWNrZWQoKSB7XG4gICAgLy8gQ3JlYXRlIGZvcm0gZm9yIGFkZGluZyB0YXNrc1xuICAgIGNvbnN0IGFkZFRhc2tGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuXG4gICAgLy8gQ3JlYXRlIGlucHV0IGZpZWxkIGZvciB0YXNrIG5hbWVcbiAgICBjb25zdCBhZGRUYXNrSW5wdXRGaWVsZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgYWRkVGFza0lucHV0RmllbGQuY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2staW5wdXQtZmllbGQnKTtcbiAgICBhZGRUYXNrSW5wdXRGaWVsZC5wbGFjZWhvbGRlciA9IFwiVGFzayBOYW1lXCI7XG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoYWRkVGFza0lucHV0RmllbGQpO1xuXG4gICAgLy8gQ3JlYXRlIGJ1dHRvbnMgZm9yIGFkZGluZyBhbmQgY2FuY2VsaW5nIHRhc2tzXG4gICAgY29uc3QgYWRkVGFza0FkZEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgIGFkZFRhc2tBZGRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stYnV0dG9uJyk7XG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoYWRkVGFza0FkZEJ1dHRvbik7XG5cbiAgICBjb25zdCBhZGRUYXNrQ2FuY2VsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgYWRkVGFza0NhbmNlbEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhZGQtdGFzay1idXR0b24nKTtcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChhZGRUYXNrQ2FuY2VsQnV0dG9uKTtcblxuICAgIGluYm94RWxlbWVudC5hcHBlbmRDaGlsZChhZGRUYXNrRm9ybSk7XG5cbiAgICByZXR1cm4geyBhZGRUYXNrQWRkQnV0dG9uLCBhZGRUYXNrQ2FuY2VsQnV0dG9uLCBhZGRUYXNrSW5wdXRGaWVsZCwgYWRkVGFza0Zvcm0gfTtcbn1cblxuY29uc3QgYWRkVGFza0J1dHRvbkNsaWNrZWRNaXhpbiA9IHtcbiAgICBteVRhc2s6IFtdLFxufTtcblxuT2JqZWN0LmFzc2lnbihDcmVhdGVUb2RvLnByb3RvdHlwZSwgYWRkVGFza0J1dHRvbkNsaWNrZWRNaXhpbik7XG5cbmZ1bmN0aW9uIGFkZFRhc2tCdXR0b25DbGlja2VkKCkge1xuICAgIGNvbnN0IGFkZFRhc2tCdXR0b25MaXN0ZW5lciA9IGFkZFRhc2tDb250YWluZXJXaGVuQ2xpY2tlZCgpO1xuXG4gICAgYWRkVGFza0J1dHRvbkxpc3RlbmVyLmFkZFRhc2tBZGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGFkZEJ1dHRvbldoZW5DbGlja2VkKCk7XG4gICAgfSk7XG5cbiAgICBhZGRUYXNrQnV0dG9uTGlzdGVuZXIuYWRkVGFza0NhbmNlbEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYWRkVGFza0J1dHRvbkxpc3RlbmVyLmFkZFRhc2tGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgfSk7XG5cbiAgICBmdW5jdGlvbiBhZGRCdXR0b25XaGVuQ2xpY2tlZCgpIHtcbiAgICAgICAgaWYgKGFkZFRhc2tCdXR0b25MaXN0ZW5lci5hZGRUYXNrSW5wdXRGaWVsZC52YWx1ZSAhPT0gJycpIHtcbiAgICAgICAgICAgIC8vIENyZWF0ZSBhIG5ldyB0YXNrXG4gICAgICAgICAgICBjb25zdCBjcmVhdGVUb2RvVGFzayA9IG5ldyBDcmVhdGVUb2RvKCk7XG4gICAgICAgICAgICBjcmVhdGVUb2RvVGFzay50aXRsZSA9IGFkZFRhc2tCdXR0b25MaXN0ZW5lci5hZGRUYXNrSW5wdXRGaWVsZC52YWx1ZTtcbiAgICAgICAgICAgIGFkZFRhc2tCdXR0b25MaXN0ZW5lci5hZGRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBBZGQgdGhlIHRhc2sgdG8gdGhlIHRhc2sgbGlzdFxuICAgICAgICAgICAgYWRkVGFza0J1dHRvbkNsaWNrZWRNaXhpbi5teVRhc2sucHVzaChjcmVhdGVUb2RvVGFzayk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIERpc3BsYXkgdGFza3MgYWZ0ZXIgYWRkaW5nXG4gICAgICAgICAgICBkaXNwbGF5VGFza3MoYWRkVGFza0J1dHRvbkNsaWNrZWRNaXhpbi5teVRhc2spO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYWRkVGFza0J1dHRvbkNsaWNrZWRNaXhpbi5teVRhc2ssICdsaWInKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiRVJST1IgTmFtZSBpcyByZXF1aXJlZFwiKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB7IGFkZFRhc2tCdXR0b25MaXN0ZW5lciB9O1xufVxuXG5cbmZ1bmN0aW9uIGRpc3BsYXlUYXNrcyh0YXNrTGlicmFyeVN0b3JhZ2UpIHtcbiAgICBsZXQgdGFza0Rpc3BsYXlDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudGFzay1kaXNwbGF5LWNvbnRhaW5lcicpO1xuXG4gICAgLy8gQ2hlY2sgaWYgdGhlIGNvbnRhaW5lciBleGlzdHMsIGNyZWF0ZSBpdCBpZiBub3RcbiAgICBpZiAoIXRhc2tEaXNwbGF5Q29udGFpbmVyKSB7XG4gICAgICAgIHRhc2tEaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tEaXNwbGF5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGlzcGxheS1jb250YWluZXInKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCh0YXNrRGlzcGxheUNvbnRhaW5lcik7XG4gICAgfVxuXG4gICAgLy8gQ2xlYXIgZXhpc3RpbmcgY29udGVudFxuICAgIHRhc2tEaXNwbGF5Q29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xuXG4gICAgLy8gSXRlcmF0ZSB0aHJvdWdoIGVhY2ggdGFzayBpbiB0YXNrTGlicmFyeVN0b3JhZ2VcbiAgICB0YXNrTGlicmFyeVN0b3JhZ2UuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuXG4gICAgICAgIC8vIENyZWF0ZSBhIGNoZWNrYm94XG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0YXNrLnN0YXR1cztcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChjaGVja2JveCk7XG5cbiAgICAgICAgLy8gRGlzcGxheSB0aGUgdGl0bGVcbiAgICAgICAgY29uc3QgdGl0bGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICB0aXRsZUVsZW1lbnQudGV4dENvbnRlbnQgPSB0YXNrLnRpdGxlO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKHRpdGxlRWxlbWVudCk7XG5cbiAgICAgICAgLy8gQ3JlYXRlIGEgZGF0ZSBwaWNrZXJcbiAgICAgICAgY29uc3QgZGF0ZVBpY2tlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XG4gICAgICAgIGRhdGVQaWNrZXIudHlwZSA9ICdkYXRlJztcbiAgICAgICAgZGF0ZVBpY2tlci52YWx1ZSA9IHRhc2suZHVlRGF0ZTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkYXRlUGlja2VyKTtcblxuICAgICAgICAvLyBDcmVhdGUgYSBkZWxldGUgYnV0dG9uXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGVsZXRlVGFzayh0YXNrLmlkKSk7XG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQoZGVsZXRlQnV0dG9uKTtcblxuICAgICAgICAvLyBBcHBlbmQgdGhlIHRhc2sgZGl2IHRvIHRoZSBkaXNwbGF5IGNvbnRhaW5lclxuICAgICAgICB0YXNrRGlzcGxheUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0YXNrRGl2KTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZGVsZXRlVGFzayh0YXNrSWQpIHtcbiAgICBjb25zdCBpbmRleCA9IGFkZFRhc2tCdXR0b25DbGlja2VkTWl4aW4ubXlUYXNrLmZpbmRJbmRleCgodGFzaykgPT4gdGFzay5pZCA9PT0gdGFza0lkKTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgICAgLy8gUmVtb3ZlIHRoZSB0YXNrIGZyb20gdGhlIHRhc2sgbGlzdFxuICAgICAgICBhZGRUYXNrQnV0dG9uQ2xpY2tlZE1peGluLm15VGFzay5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBcbiAgICAgICAgLy8gVXBkYXRlIGRpc3BsYXkgYWZ0ZXIgZGVsZXRpb25cbiAgICAgICAgZGlzcGxheVRhc2tzKGFkZFRhc2tCdXR0b25DbGlja2VkTWl4aW4ubXlUYXNrKTtcbiAgICAgICAgY29uc29sZS5sb2coYWRkVGFza0J1dHRvbkNsaWNrZWRNaXhpbi5teVRhc2ssICdsaWInKTtcbiAgICB9XG59XG5cblxuIiwiLy8gdG9kb2xpc3QuanNcblxubGV0IHRhc2tJZENvdW50ZXIgPSAwOyAvLyBDb3VudGVyIHRvIGdlbmVyYXRlIHVuaXF1ZSBJRHMgZm9yIHRhc2tzXG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVUb2RvIHtcbiAgICBjb25zdHJ1Y3Rvcih0aXRsZSwgZHVlRGF0ZSwgc3RhdHVzKSB7XG4gICAgICAgIHRoaXMuaWQgPSArK3Rhc2tJZENvdW50ZXI7XG4gICAgICAgIHRoaXMudGl0bGUgPSB0aXRsZTtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5zdGF0dXMgPSBCb29sZWFuKHN0YXR1cyk7XG4gICAgfVxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBpc0FkZFRhc2tDb250YWluZXJDbGlja2VkIH0gZnJvbSBcIi4vaW5ib3hcIjtcblxuXG5jb25zdCBoZWxsbyA9IGlzQWRkVGFza0NvbnRhaW5lckNsaWNrZWQoKTtcbmNvbnNvbGUubG9nKGhlbGxvLCdoZWxsbycpO1xuXG5cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9