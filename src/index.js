import "./styles.css";
import eventBinder from "./js/events.js";

class App {
    constructor() {
        eventBinder.bindEvents();
    }
}

const app = new App();