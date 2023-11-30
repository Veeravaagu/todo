// import {buildInbox} from './inbox.js';
// import {buildProject} from './project.js';
import { CreateTodo } from './todolist.js';

function isInboxOrProject() {
    const isInboxOrProjectNames = document.querySelectorAll('.page-title');
    CreateTodo.buildProjectOrInbox();
    isInboxOrProjectNames.forEach((element) => {
        element.addEventListener('click', (event) => {
            const target = event.target;
            const paragraphContent = target.textContent;
            if (paragraphContent === 'Today' || paragraphContent === 'This Week') {
                console.error("not valid mofo");
            } else {
                CreateTodo.buildProjectOrInbox(paragraphContent);
                CreateTodo.handleAddTask(paragraphContent);
            }
        });
    });
    CreateTodo.createProject();
}


isInboxOrProject();