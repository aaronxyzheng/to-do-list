import "./styles.css";
import eventBinder from "./js/events.js";
import componentBuilder from "./js/components.js";

class App {
    constructor() {
        this.bindEvents();
    }

    bindEvents() {
        eventBinder.bindViews();

        const layer = componentBuilder.buildForm();
        eventBinder.bindObject(document.querySelector("#add-task"), layer.placeLayer); //Binding the Add Task button
    }
}

const app = new App();