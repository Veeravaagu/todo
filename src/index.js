// index.js

import { isAddTaskContainerClicked, addProjectButtonClicked } from "./inbox";
import { landingPage } from "./project";

document.getElementById('inboxElement').addEventListener('click', () => {
    isAddTaskContainerClicked();
    // Add any additional logic specific to inbox
});

document.getElementById('projectElement').addEventListener('click', () => {
    landingPage();
    // Add any additional logic specific to project
});
