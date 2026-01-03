import "./styles.css";
import eventBinder from "./js/events-binder.js";
import formBuilder from "./js/dom-components/task-form.js";

import buildTaskElement from "./js/dom-components/task.js";
import Task from "./js/objects/Task.js";

class App {
    constructor() {
        this.bindEvents();

        //Place a default task item
        const newTask = new Task("Laundry", "2025-5-10", "workout");
        const newTaskElement = buildTaskElement(newTask);
        document.querySelector("#tasks").appendChild(newTaskElement);
    }

    bindEvents() {
        eventBinder.bindViews();
        // Binding the Add Task button
        const addTaskButton = document.querySelector("#add-task")
        eventBinder.bindObject(addTaskButton, formBuilder.placeForm);
    }
}

const app = new App();