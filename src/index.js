import "./styles.css";
import eventBinder from "./js/events.js";
import componentBuilder from "./js/components.js";

class App {
    constructor() {
        this.bindEvents();
    }

    bindEvents() {
        eventBinder.bindViews();
        eventBinder.bindAddTask(this.placeForm);
    }

    placeForm() {
        const layer = componentBuilder.buildForm();
        layer.placeLayer();
    }
}

const app = new App();