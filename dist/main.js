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
/* harmony export */   addProjectButtonClicked: () => (/* binding */ addProjectButtonClicked),
/* harmony export */   isAddTaskContainerClicked: () => (/* binding */ isAddTaskContainerClicked)
/* harmony export */ });
/* harmony import */ var _todolist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todolist */ "./src/todolist.js");
// inbox.js

 // Importing from todolist.js

const inboxContainer = document.querySelector('.main-content-container');
let inboxInputState = null;

document.getElementById('inboxElement').addEventListener('click', () => {
    if (!inboxInputState) {
        inboxInputState = (0,_todolist__WEBPACK_IMPORTED_MODULE_0__.addTaskButtonClicked)(inboxContainer, 'inbox');
    }
});

function isAddTaskContainerClicked() {
    const inboxElementClicked = inboxBuilder();
    inboxElementClicked.addTaskContainer.addEventListener('click', () => (0,_todolist__WEBPACK_IMPORTED_MODULE_0__.addTaskButtonClicked)(inboxContainer, inboxInputState, 'inbox'));
}

function addProjectButtonClicked() {
    // Calling the imported function from todolist.js
    (0,_todolist__WEBPACK_IMPORTED_MODULE_0__.addTaskButtonClicked)(inboxContainer, 'inbox');
}

function inboxBuilder() {
    const inboxTitle = document.createElement('h2');
    inboxTitle.textContent = "INBOX";
    inboxContainer.appendChild(inboxTitle);

    const addTaskContainer = document.createElement('div');
    addTaskContainer.classList.add('add-task-container');

    const addTaskIcon = document.createElement('img');
    addTaskContainer.appendChild(addTaskIcon);

    const addTaskDescription = document.createElement('p');
    addTaskDescription.textContent = "Add Task";
    addTaskContainer.appendChild(addTaskDescription);

    inboxContainer.appendChild(addTaskContainer);

    return { addTaskContainer, inputState: inboxInputState };
}


/***/ }),

/***/ "./src/project.js":
/*!************************!*\
  !*** ./src/project.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   landingPage: () => (/* binding */ landingPage)
/* harmony export */ });
/* harmony import */ var _todolist__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todolist */ "./src/todolist.js");
// project.js



function landingPage() {
    // Your landing page logic here
    console.log("Project Page");
    const projectName = prompt('Enter Project Name:');
    if (projectName) {
        // Add logic to create a project with the given name
        console.log('Project Added:', projectName);
        const projectContainer = document.querySelector('.main-content-container');
        (0,_todolist__WEBPACK_IMPORTED_MODULE_0__.addTaskButtonClicked)(projectContainer, 'project', projectName);
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
/* harmony export */   CreateProject: () => (/* binding */ CreateProject),
/* harmony export */   CreateTodo: () => (/* binding */ CreateTodo),
/* harmony export */   addProjectButtonClicked: () => (/* binding */ addProjectButtonClicked),
/* harmony export */   addTaskButtonClicked: () => (/* binding */ addTaskButtonClicked),
/* harmony export */   addTaskContainerWhenClicked: () => (/* binding */ addTaskContainerWhenClicked),
/* harmony export */   deleteTask: () => (/* binding */ deleteTask),
/* harmony export */   displayTasks: () => (/* binding */ displayTasks),
/* harmony export */   handleCheckboxChange: () => (/* binding */ handleCheckboxChange)
/* harmony export */ });
// todolist.js

class CreateProject {
    constructor(name) {
        this.id = ++projectIdCounter;
        this.name = name;
        this.tasks = [];
    }
}

class CreateTodo {
    constructor(title, dueDate, status, projectName) {
        this.id = ++taskIdCounter;
        this.title = title;
        this.dueDate = dueDate;
        this.status = Boolean(status);
        this.projectName = projectName || 'inbox'; // Default to 'inbox' if no project name is provided
    }
}

function displayTasks(project, container) {
    let taskDisplayContainer = container.querySelector('.task-display-container');

    if (!taskDisplayContainer) {
        taskDisplayContainer = document.createElement('div');
        taskDisplayContainer.classList.add('task-display-container');
        container.appendChild(taskDisplayContainer);
    }

    taskDisplayContainer.innerHTML = '';

    project.tasks.forEach((task) => {
        const taskDiv = document.createElement('div');
        taskDiv.classList.add('task');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = task.status;
        checkbox.addEventListener('change', () => handleCheckboxChange(checkbox, task.id, project, container));
        taskDiv.appendChild(checkbox);

        const titleElement = document.createElement('p');
        titleElement.textContent = task.title;
        taskDiv.appendChild(titleElement);

        const datePicker = document.createElement('input');
        datePicker.type = 'date';
        datePicker.value = task.dueDate;
        taskDiv.appendChild(datePicker);

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => deleteTask(task.id, project, container));
        taskDiv.appendChild(deleteButton);

        taskDisplayContainer.appendChild(taskDiv);
    });
}

function addTaskContainerWhenClicked(container, projectName = 'inbox') {
    if (!container || typeof container.appendChild !== 'function') {
        console.error("Invalid container provided to addTaskContainerWhenClicked");
        return {};
    }

    const addTaskForm = document.createElement('form');
    const addTaskInputField = document.createElement('input');
    addTaskInputField.classList.add('add-task-input-field');
    addTaskInputField.placeholder = "Task Name";
    addTaskForm.appendChild(addTaskInputField);

    const addTaskAddButton = document.createElement('button');
    addTaskAddButton.textContent = 'Add Task';
    addTaskForm.appendChild(addTaskAddButton);

    const addTaskCancelButton = document.createElement('button');
    addTaskCancelButton.textContent = 'Cancel';
    addTaskForm.appendChild(addTaskCancelButton);

    container.appendChild(addTaskForm);

    // Ensure each container has its own inputState
    if (!container.inputState) {
        container.inputState = [];
    }

    return { addTaskAddButton, addTaskCancelButton, addTaskInputField, addTaskForm, projectName };
}

function addTaskButtonClicked(container, projectName = 'inbox') {
    const addTaskButtonListener = addTaskContainerWhenClicked(container, projectName);

    addTaskButtonListener.addTaskAddButton.addEventListener('click', (e) => {
        e.preventDefault();
        addButtonWhenClicked(addTaskButtonListener, container);
    });

    addTaskButtonListener.addTaskCancelButton.addEventListener('click', () => {
        addTaskButtonListener.addTaskForm.style.display = 'none';
    });
}

function addProjectButtonClicked(container) {
    const addProjectForm = document.createElement('form');
    const addProjectInputField = document.createElement('input');
    addProjectInputField.classList.add('add-project-input-field');
    addProjectInputField.placeholder = "Project Name";
    addProjectForm.appendChild(addProjectInputField);

    const addProjectAddButton = document.createElement('button');
    addProjectAddButton.textContent = 'Add Project';
    addProjectForm.appendChild(addProjectAddButton);

    const addProjectCancelButton = document.createElement('button');
    addProjectCancelButton.textContent = 'Cancel';
    addProjectForm.appendChild(addProjectCancelButton);

    container.appendChild(addProjectForm);

    addProjectAddButton.addEventListener('click', (e) => {
        e.preventDefault();
        const projectName = addProjectInputField.value;
        if (projectName) {
            const project = findProjectByName(projectName);
            addTaskButtonClicked(container, 'inbox', projectName); // Pass the project name
        } else {
            alert("ERROR: Project Name is required");
        }
    });

    addProjectCancelButton.addEventListener('click', () => {
        landingPage('inbox');
    });
}

function addButtonWhenClicked(addTaskButtonListener, container) {
    if (addTaskButtonListener.addTaskInputField.value !== '') {
        const createTodoTask = new CreateTodo(
            addTaskButtonListener.addTaskInputField.value
            // Add other parameters as needed
        );

        addTaskButtonListener.addTaskForm.style.display = 'none';

        const projectName = addTaskButtonListener.projectName;
        const project = findProjectByName(projectName);
        project.tasks.push(createTodoTask);
        displayTasks(project, container);
    } else {
        alert("ERROR: Name is required");
    }
}

function findProjectByName(projectName) {
    let project = projects.find((p) => p.name === projectName);

    if (!project) {
        // Create a new project if not found
        project = new CreateProject(projectName);
        projects.push(project);
    }

    return project;
}

function handleCheckboxChange(checkbox, taskId, project, container) {
    const index = project.tasks.findIndex((task) => task.id === taskId);

    if (index !== -1) {
        project.tasks[index].status = checkbox.checked;

        if (checkbox.checked) {
            project.tasks.splice(index, 1);
        }

        displayTasks(project, container);
    }
}

function deleteTask(taskId, project, container) {
    const index = project.tasks.findIndex((task) => task.id === taskId);

    if (index !== -1) {
        project.tasks.splice(index, 1);
        displayTasks(project, container);
    }
}

let projectIdCounter = 0;
let taskIdCounter = 0;

// Initialize projects array
const projects = [];


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
/* harmony import */ var _project__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./project */ "./src/project.js");
// index.js




document.getElementById('inboxElement').addEventListener('click', () => {
    (0,_inbox__WEBPACK_IMPORTED_MODULE_0__.isAddTaskContainerClicked)();
    // Add any additional logic specific to inbox
});

document.getElementById('projectElement').addEventListener('click', () => {
    (0,_project__WEBPACK_IMPORTED_MODULE_1__.landingPage)();
    // Add any additional logic specific to project
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRWtELENBQUM7O0FBRW5EO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDBCQUEwQiwrREFBb0I7QUFDOUM7QUFDQSxDQUFDOztBQUVNO0FBQ1A7QUFDQSx5RUFBeUUsK0RBQW9CO0FBQzdGOztBQUVPO0FBQ1A7QUFDQSxJQUFJLCtEQUFvQjtBQUN4Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBLGFBQWE7QUFDYjs7Ozs7Ozs7Ozs7Ozs7OztBQ3pDQTs7QUFFa0Q7O0FBRTNDO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtEQUFvQjtBQUM1QjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1EO0FBQ25EO0FBQ0E7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEtBQUs7QUFDTDs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxhQUFhO0FBQ2I7O0FBRU87QUFDUDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1FQUFtRTtBQUNuRSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7O0FBRUw7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVPO0FBQ1A7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7VUNoTUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTs7QUFFNkU7QUFDckM7O0FBRXhDO0FBQ0EsSUFBSSxpRUFBeUI7QUFDN0I7QUFDQSxDQUFDOztBQUVEO0FBQ0EsSUFBSSxxREFBVztBQUNmO0FBQ0EsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3RvZG8vLi9zcmMvaW5ib3guanMiLCJ3ZWJwYWNrOi8vdG9kby8uL3NyYy9wcm9qZWN0LmpzIiwid2VicGFjazovL3RvZG8vLi9zcmMvdG9kb2xpc3QuanMiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90b2RvL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdG9kby93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8vLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW5ib3guanNcblxuaW1wb3J0IHsgYWRkVGFza0J1dHRvbkNsaWNrZWQgfSBmcm9tIFwiLi90b2RvbGlzdFwiOyAvLyBJbXBvcnRpbmcgZnJvbSB0b2RvbGlzdC5qc1xuXG5jb25zdCBpbmJveENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tYWluLWNvbnRlbnQtY29udGFpbmVyJyk7XG5sZXQgaW5ib3hJbnB1dFN0YXRlID0gbnVsbDtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luYm94RWxlbWVudCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlmICghaW5ib3hJbnB1dFN0YXRlKSB7XG4gICAgICAgIGluYm94SW5wdXRTdGF0ZSA9IGFkZFRhc2tCdXR0b25DbGlja2VkKGluYm94Q29udGFpbmVyLCAnaW5ib3gnKTtcbiAgICB9XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzQWRkVGFza0NvbnRhaW5lckNsaWNrZWQoKSB7XG4gICAgY29uc3QgaW5ib3hFbGVtZW50Q2xpY2tlZCA9IGluYm94QnVpbGRlcigpO1xuICAgIGluYm94RWxlbWVudENsaWNrZWQuYWRkVGFza0NvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IGFkZFRhc2tCdXR0b25DbGlja2VkKGluYm94Q29udGFpbmVyLCBpbmJveElucHV0U3RhdGUsICdpbmJveCcpKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZFByb2plY3RCdXR0b25DbGlja2VkKCkge1xuICAgIC8vIENhbGxpbmcgdGhlIGltcG9ydGVkIGZ1bmN0aW9uIGZyb20gdG9kb2xpc3QuanNcbiAgICBhZGRUYXNrQnV0dG9uQ2xpY2tlZChpbmJveENvbnRhaW5lciwgJ2luYm94Jyk7XG59XG5cbmZ1bmN0aW9uIGluYm94QnVpbGRlcigpIHtcbiAgICBjb25zdCBpbmJveFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDInKTtcbiAgICBpbmJveFRpdGxlLnRleHRDb250ZW50ID0gXCJJTkJPWFwiO1xuICAgIGluYm94Q29udGFpbmVyLmFwcGVuZENoaWxkKGluYm94VGl0bGUpO1xuXG4gICAgY29uc3QgYWRkVGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGFkZFRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgnYWRkLXRhc2stY29udGFpbmVyJyk7XG5cbiAgICBjb25zdCBhZGRUYXNrSWNvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuICAgIGFkZFRhc2tDb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0ljb24pO1xuXG4gICAgY29uc3QgYWRkVGFza0Rlc2NyaXB0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgIGFkZFRhc2tEZXNjcmlwdGlvbi50ZXh0Q29udGVudCA9IFwiQWRkIFRhc2tcIjtcbiAgICBhZGRUYXNrQ29udGFpbmVyLmFwcGVuZENoaWxkKGFkZFRhc2tEZXNjcmlwdGlvbik7XG5cbiAgICBpbmJveENvbnRhaW5lci5hcHBlbmRDaGlsZChhZGRUYXNrQ29udGFpbmVyKTtcblxuICAgIHJldHVybiB7IGFkZFRhc2tDb250YWluZXIsIGlucHV0U3RhdGU6IGluYm94SW5wdXRTdGF0ZSB9O1xufVxuIiwiLy8gcHJvamVjdC5qc1xuXG5pbXBvcnQgeyBhZGRUYXNrQnV0dG9uQ2xpY2tlZCB9IGZyb20gXCIuL3RvZG9saXN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBsYW5kaW5nUGFnZSgpIHtcbiAgICAvLyBZb3VyIGxhbmRpbmcgcGFnZSBsb2dpYyBoZXJlXG4gICAgY29uc29sZS5sb2coXCJQcm9qZWN0IFBhZ2VcIik7XG4gICAgY29uc3QgcHJvamVjdE5hbWUgPSBwcm9tcHQoJ0VudGVyIFByb2plY3QgTmFtZTonKTtcbiAgICBpZiAocHJvamVjdE5hbWUpIHtcbiAgICAgICAgLy8gQWRkIGxvZ2ljIHRvIGNyZWF0ZSBhIHByb2plY3Qgd2l0aCB0aGUgZ2l2ZW4gbmFtZVxuICAgICAgICBjb25zb2xlLmxvZygnUHJvamVjdCBBZGRlZDonLCBwcm9qZWN0TmFtZSk7XG4gICAgICAgIGNvbnN0IHByb2plY3RDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWFpbi1jb250ZW50LWNvbnRhaW5lcicpO1xuICAgICAgICBhZGRUYXNrQnV0dG9uQ2xpY2tlZChwcm9qZWN0Q29udGFpbmVyLCAncHJvamVjdCcsIHByb2plY3ROYW1lKTtcbiAgICB9XG59XG4iLCIvLyB0b2RvbGlzdC5qc1xuXG5leHBvcnQgY2xhc3MgQ3JlYXRlUHJvamVjdCB7XG4gICAgY29uc3RydWN0b3IobmFtZSkge1xuICAgICAgICB0aGlzLmlkID0gKytwcm9qZWN0SWRDb3VudGVyO1xuICAgICAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgICAgICB0aGlzLnRhc2tzID0gW107XG4gICAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ3JlYXRlVG9kbyB7XG4gICAgY29uc3RydWN0b3IodGl0bGUsIGR1ZURhdGUsIHN0YXR1cywgcHJvamVjdE5hbWUpIHtcbiAgICAgICAgdGhpcy5pZCA9ICsrdGFza0lkQ291bnRlcjtcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgICAgICB0aGlzLnN0YXR1cyA9IEJvb2xlYW4oc3RhdHVzKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0TmFtZSA9IHByb2plY3ROYW1lIHx8ICdpbmJveCc7IC8vIERlZmF1bHQgdG8gJ2luYm94JyBpZiBubyBwcm9qZWN0IG5hbWUgaXMgcHJvdmlkZWRcbiAgICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXNwbGF5VGFza3MocHJvamVjdCwgY29udGFpbmVyKSB7XG4gICAgbGV0IHRhc2tEaXNwbGF5Q29udGFpbmVyID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy50YXNrLWRpc3BsYXktY29udGFpbmVyJyk7XG5cbiAgICBpZiAoIXRhc2tEaXNwbGF5Q29udGFpbmVyKSB7XG4gICAgICAgIHRhc2tEaXNwbGF5Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tEaXNwbGF5Q29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3Rhc2stZGlzcGxheS1jb250YWluZXInKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEaXNwbGF5Q29udGFpbmVyKTtcbiAgICB9XG5cbiAgICB0YXNrRGlzcGxheUNvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcblxuICAgIHByb2plY3QudGFza3MuZm9yRWFjaCgodGFzaykgPT4ge1xuICAgICAgICBjb25zdCB0YXNrRGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tEaXYuY2xhc3NMaXN0LmFkZCgndGFzaycpO1xuXG4gICAgICAgIGNvbnN0IGNoZWNrYm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgY2hlY2tib3gudHlwZSA9ICdjaGVja2JveCc7XG4gICAgICAgIGNoZWNrYm94LmNoZWNrZWQgPSB0YXNrLnN0YXR1cztcbiAgICAgICAgY2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4gaGFuZGxlQ2hlY2tib3hDaGFuZ2UoY2hlY2tib3gsIHRhc2suaWQsIHByb2plY3QsIGNvbnRhaW5lcikpO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGNoZWNrYm94KTtcblxuICAgICAgICBjb25zdCB0aXRsZUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwJyk7XG4gICAgICAgIHRpdGxlRWxlbWVudC50ZXh0Q29udGVudCA9IHRhc2sudGl0bGU7XG4gICAgICAgIHRhc2tEaXYuYXBwZW5kQ2hpbGQodGl0bGVFbGVtZW50KTtcblxuICAgICAgICBjb25zdCBkYXRlUGlja2VyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcbiAgICAgICAgZGF0ZVBpY2tlci50eXBlID0gJ2RhdGUnO1xuICAgICAgICBkYXRlUGlja2VyLnZhbHVlID0gdGFzay5kdWVEYXRlO1xuICAgICAgICB0YXNrRGl2LmFwcGVuZENoaWxkKGRhdGVQaWNrZXIpO1xuXG4gICAgICAgIGNvbnN0IGRlbGV0ZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBkZWxldGVCdXR0b24udGV4dENvbnRlbnQgPSAnRGVsZXRlJztcbiAgICAgICAgZGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZGVsZXRlVGFzayh0YXNrLmlkLCBwcm9qZWN0LCBjb250YWluZXIpKTtcbiAgICAgICAgdGFza0Rpdi5hcHBlbmRDaGlsZChkZWxldGVCdXR0b24pO1xuXG4gICAgICAgIHRhc2tEaXNwbGF5Q29udGFpbmVyLmFwcGVuZENoaWxkKHRhc2tEaXYpO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVGFza0NvbnRhaW5lcldoZW5DbGlja2VkKGNvbnRhaW5lciwgcHJvamVjdE5hbWUgPSAnaW5ib3gnKSB7XG4gICAgaWYgKCFjb250YWluZXIgfHwgdHlwZW9mIGNvbnRhaW5lci5hcHBlbmRDaGlsZCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiSW52YWxpZCBjb250YWluZXIgcHJvdmlkZWQgdG8gYWRkVGFza0NvbnRhaW5lcldoZW5DbGlja2VkXCIpO1xuICAgICAgICByZXR1cm4ge307XG4gICAgfVxuXG4gICAgY29uc3QgYWRkVGFza0Zvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgY29uc3QgYWRkVGFza0lucHV0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGFkZFRhc2tJbnB1dEZpZWxkLmNsYXNzTGlzdC5hZGQoJ2FkZC10YXNrLWlucHV0LWZpZWxkJyk7XG4gICAgYWRkVGFza0lucHV0RmllbGQucGxhY2Vob2xkZXIgPSBcIlRhc2sgTmFtZVwiO1xuICAgIGFkZFRhc2tGb3JtLmFwcGVuZENoaWxkKGFkZFRhc2tJbnB1dEZpZWxkKTtcblxuICAgIGNvbnN0IGFkZFRhc2tBZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRUYXNrQWRkQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBUYXNrJztcbiAgICBhZGRUYXNrRm9ybS5hcHBlbmRDaGlsZChhZGRUYXNrQWRkQnV0dG9uKTtcblxuICAgIGNvbnN0IGFkZFRhc2tDYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRUYXNrQ2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgYWRkVGFza0Zvcm0uYXBwZW5kQ2hpbGQoYWRkVGFza0NhbmNlbEJ1dHRvbik7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkVGFza0Zvcm0pO1xuXG4gICAgLy8gRW5zdXJlIGVhY2ggY29udGFpbmVyIGhhcyBpdHMgb3duIGlucHV0U3RhdGVcbiAgICBpZiAoIWNvbnRhaW5lci5pbnB1dFN0YXRlKSB7XG4gICAgICAgIGNvbnRhaW5lci5pbnB1dFN0YXRlID0gW107XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgYWRkVGFza0FkZEJ1dHRvbiwgYWRkVGFza0NhbmNlbEJ1dHRvbiwgYWRkVGFza0lucHV0RmllbGQsIGFkZFRhc2tGb3JtLCBwcm9qZWN0TmFtZSB9O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkVGFza0J1dHRvbkNsaWNrZWQoY29udGFpbmVyLCBwcm9qZWN0TmFtZSA9ICdpbmJveCcpIHtcbiAgICBjb25zdCBhZGRUYXNrQnV0dG9uTGlzdGVuZXIgPSBhZGRUYXNrQ29udGFpbmVyV2hlbkNsaWNrZWQoY29udGFpbmVyLCBwcm9qZWN0TmFtZSk7XG5cbiAgICBhZGRUYXNrQnV0dG9uTGlzdGVuZXIuYWRkVGFza0FkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYWRkQnV0dG9uV2hlbkNsaWNrZWQoYWRkVGFza0J1dHRvbkxpc3RlbmVyLCBjb250YWluZXIpO1xuICAgIH0pO1xuXG4gICAgYWRkVGFza0J1dHRvbkxpc3RlbmVyLmFkZFRhc2tDYW5jZWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgIGFkZFRhc2tCdXR0b25MaXN0ZW5lci5hZGRUYXNrRm9ybS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkUHJvamVjdEJ1dHRvbkNsaWNrZWQoY29udGFpbmVyKSB7XG4gICAgY29uc3QgYWRkUHJvamVjdEZvcm0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb3JtJyk7XG4gICAgY29uc3QgYWRkUHJvamVjdElucHV0RmllbGQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgIGFkZFByb2plY3RJbnB1dEZpZWxkLmNsYXNzTGlzdC5hZGQoJ2FkZC1wcm9qZWN0LWlucHV0LWZpZWxkJyk7XG4gICAgYWRkUHJvamVjdElucHV0RmllbGQucGxhY2Vob2xkZXIgPSBcIlByb2plY3QgTmFtZVwiO1xuICAgIGFkZFByb2plY3RGb3JtLmFwcGVuZENoaWxkKGFkZFByb2plY3RJbnB1dEZpZWxkKTtcblxuICAgIGNvbnN0IGFkZFByb2plY3RBZGRCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRQcm9qZWN0QWRkQnV0dG9uLnRleHRDb250ZW50ID0gJ0FkZCBQcm9qZWN0JztcbiAgICBhZGRQcm9qZWN0Rm9ybS5hcHBlbmRDaGlsZChhZGRQcm9qZWN0QWRkQnV0dG9uKTtcblxuICAgIGNvbnN0IGFkZFByb2plY3RDYW5jZWxCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICBhZGRQcm9qZWN0Q2FuY2VsQnV0dG9uLnRleHRDb250ZW50ID0gJ0NhbmNlbCc7XG4gICAgYWRkUHJvamVjdEZvcm0uYXBwZW5kQ2hpbGQoYWRkUHJvamVjdENhbmNlbEJ1dHRvbik7XG5cbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYWRkUHJvamVjdEZvcm0pO1xuXG4gICAgYWRkUHJvamVjdEFkZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBhZGRQcm9qZWN0SW5wdXRGaWVsZC52YWx1ZTtcbiAgICAgICAgaWYgKHByb2plY3ROYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ID0gZmluZFByb2plY3RCeU5hbWUocHJvamVjdE5hbWUpO1xuICAgICAgICAgICAgYWRkVGFza0J1dHRvbkNsaWNrZWQoY29udGFpbmVyLCAnaW5ib3gnLCBwcm9qZWN0TmFtZSk7IC8vIFBhc3MgdGhlIHByb2plY3QgbmFtZVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoXCJFUlJPUjogUHJvamVjdCBOYW1lIGlzIHJlcXVpcmVkXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBhZGRQcm9qZWN0Q2FuY2VsQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICBsYW5kaW5nUGFnZSgnaW5ib3gnKTtcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkQnV0dG9uV2hlbkNsaWNrZWQoYWRkVGFza0J1dHRvbkxpc3RlbmVyLCBjb250YWluZXIpIHtcbiAgICBpZiAoYWRkVGFza0J1dHRvbkxpc3RlbmVyLmFkZFRhc2tJbnB1dEZpZWxkLnZhbHVlICE9PSAnJykge1xuICAgICAgICBjb25zdCBjcmVhdGVUb2RvVGFzayA9IG5ldyBDcmVhdGVUb2RvKFxuICAgICAgICAgICAgYWRkVGFza0J1dHRvbkxpc3RlbmVyLmFkZFRhc2tJbnB1dEZpZWxkLnZhbHVlXG4gICAgICAgICAgICAvLyBBZGQgb3RoZXIgcGFyYW1ldGVycyBhcyBuZWVkZWRcbiAgICAgICAgKTtcblxuICAgICAgICBhZGRUYXNrQnV0dG9uTGlzdGVuZXIuYWRkVGFza0Zvcm0uc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZSA9IGFkZFRhc2tCdXR0b25MaXN0ZW5lci5wcm9qZWN0TmFtZTtcbiAgICAgICAgY29uc3QgcHJvamVjdCA9IGZpbmRQcm9qZWN0QnlOYW1lKHByb2plY3ROYW1lKTtcbiAgICAgICAgcHJvamVjdC50YXNrcy5wdXNoKGNyZWF0ZVRvZG9UYXNrKTtcbiAgICAgICAgZGlzcGxheVRhc2tzKHByb2plY3QsIGNvbnRhaW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgYWxlcnQoXCJFUlJPUjogTmFtZSBpcyByZXF1aXJlZFwiKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGZpbmRQcm9qZWN0QnlOYW1lKHByb2plY3ROYW1lKSB7XG4gICAgbGV0IHByb2plY3QgPSBwcm9qZWN0cy5maW5kKChwKSA9PiBwLm5hbWUgPT09IHByb2plY3ROYW1lKTtcblxuICAgIGlmICghcHJvamVjdCkge1xuICAgICAgICAvLyBDcmVhdGUgYSBuZXcgcHJvamVjdCBpZiBub3QgZm91bmRcbiAgICAgICAgcHJvamVjdCA9IG5ldyBDcmVhdGVQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgcHJvamVjdHMucHVzaChwcm9qZWN0KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvamVjdDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGhhbmRsZUNoZWNrYm94Q2hhbmdlKGNoZWNrYm94LCB0YXNrSWQsIHByb2plY3QsIGNvbnRhaW5lcikge1xuICAgIGNvbnN0IGluZGV4ID0gcHJvamVjdC50YXNrcy5maW5kSW5kZXgoKHRhc2spID0+IHRhc2suaWQgPT09IHRhc2tJZCk7XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICAgIHByb2plY3QudGFza3NbaW5kZXhdLnN0YXR1cyA9IGNoZWNrYm94LmNoZWNrZWQ7XG5cbiAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgIHByb2plY3QudGFza3Muc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGRpc3BsYXlUYXNrcyhwcm9qZWN0LCBjb250YWluZXIpO1xuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbGV0ZVRhc2sodGFza0lkLCBwcm9qZWN0LCBjb250YWluZXIpIHtcbiAgICBjb25zdCBpbmRleCA9IHByb2plY3QudGFza3MuZmluZEluZGV4KCh0YXNrKSA9PiB0YXNrLmlkID09PSB0YXNrSWQpO1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgICBwcm9qZWN0LnRhc2tzLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIGRpc3BsYXlUYXNrcyhwcm9qZWN0LCBjb250YWluZXIpO1xuICAgIH1cbn1cblxubGV0IHByb2plY3RJZENvdW50ZXIgPSAwO1xubGV0IHRhc2tJZENvdW50ZXIgPSAwO1xuXG4vLyBJbml0aWFsaXplIHByb2plY3RzIGFycmF5XG5jb25zdCBwcm9qZWN0cyA9IFtdO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBpbmRleC5qc1xuXG5pbXBvcnQgeyBpc0FkZFRhc2tDb250YWluZXJDbGlja2VkLCBhZGRQcm9qZWN0QnV0dG9uQ2xpY2tlZCB9IGZyb20gXCIuL2luYm94XCI7XG5pbXBvcnQgeyBsYW5kaW5nUGFnZSB9IGZyb20gXCIuL3Byb2plY3RcIjtcblxuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2luYm94RWxlbWVudCcpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGlzQWRkVGFza0NvbnRhaW5lckNsaWNrZWQoKTtcbiAgICAvLyBBZGQgYW55IGFkZGl0aW9uYWwgbG9naWMgc3BlY2lmaWMgdG8gaW5ib3hcbn0pO1xuXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvamVjdEVsZW1lbnQnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICBsYW5kaW5nUGFnZSgpO1xuICAgIC8vIEFkZCBhbnkgYWRkaXRpb25hbCBsb2dpYyBzcGVjaWZpYyB0byBwcm9qZWN0XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==