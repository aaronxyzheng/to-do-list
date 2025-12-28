import buildTaskElement from "./dom-components/task-element";
import Task from "./objects/Task";

const eventBinder = (function() {

    function bindViews() {
        const views = document.querySelectorAll(".view");
        views.forEach(view => {
            view.addEventListener("click", () => {
                views.forEach(v => v.setAttribute("selected", false));
                view.setAttribute("selected", "true");
            })
        })
    }

    function bindFormButton(layer, button) {
        button.addEventListener("click", () => {
            const taskName = document.querySelector("#task-name").value;
            const taskDate = document.querySelector("#task-date").value;
            const taskProject = document.querySelector("#task-project").value;

            const newTask = new Task(taskName, taskDate, taskProject);
            const newTaskElement = buildTaskElement(newTask);

            document.querySelector("#tasks").appendChild(newTaskElement);

            layer.remove();
        })
    }

    function bindFormLayer(layer) {
        layer.addEventListener("click", (e) => {
            if (e.target === layer) {
                layer.remove();
            }
        })
    }

    function bindObject(object, func) {
        object.addEventListener("click", () => {
            func();
        })
    }



    return {bindViews, bindObject, bindFormButton, bindFormLayer};
})();

export default eventBinder;