// project.js

import { addTaskButtonClicked } from "./todolist";

export function landingPage() {
    // Your landing page logic here
    console.log("Project Page");
    const projectName = prompt('Enter Project Name:');
    if (projectName) {
        // Add logic to create a project with the given name
        console.log('Project Added:', projectName);
        const projectContainer = document.querySelector('.main-content-container');
        addTaskButtonClicked(projectContainer, 'project', projectName);
    }
}
