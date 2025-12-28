import "./styles.css";
import eventBinder from "./js/events-binder.js";
import formBuilder from "./js/dom-components/task-form.js";

class App {
    constructor() {
        this.bindEvents();
        this.taskList = [];
    }

    bindEvents() {
        eventBinder.bindViews();
        // Binding the Add Task button
        const addTaskButton = document.querySelector("#add-task")
        eventBinder.bindObject(addTaskButton, formBuilder.placeForm);
    }
}

const app = new App();