// import {buildInbox} from './inbox.js';
// import {buildProject} from './project.js';
import { CreateTodo } from './todolist.js';

function isInboxOrProject() {
    const container = document.querySelector('.sidebar-container');
    container.addEventListener('click', (event) => {
        const target = event.target;
        if (target.classList.contains('page-title')) {
            const paragraphContent = target.textContent;
            if (paragraphContent === 'Today' || paragraphContent === 'This Week') {
                CreateTodo.buildProjectOrInbox(paragraphContent);
            } else {
                CreateTodo.buildProjectOrInbox(paragraphContent);
                CreateTodo.handleAddTask(paragraphContent);
            }
        }
    });

    CreateTodo.createProject();
}



isInboxOrProject();