import {buildInbox} from './inbox.js';
import {buildProject} from './project.js';

function isInboxOrProject() {
    console.log('isInboxOrProject function called');
    const isInboxOrProjectNames = document.querySelectorAll('.page-title');
    buildInbox()
    isInboxOrProjectNames.forEach((element) => {
        element.addEventListener('click', (event) => {
            const target = event.target;
            const paragraphContent = target.textContent;
            if(paragraphContent === 'Inbox'){
                buildInbox(paragraphContent)
            }
            else if(paragraphContent === 'Add Projects'){
                buildProject(paragraphContent)
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