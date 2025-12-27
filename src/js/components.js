import Task from "./tasks.js";
import dateIcon from "../assets/icons/date.svg";
import taskEditIcon from "../assets/icons/task-edit.svg";
import taskCalendarIcon from "../assets/icons/task-calendar.svg";
import taskMoreIcon from "../assets/icons/task-more.svg";

const componentBuilder = (function() {

    function buildForm() {
        const layer = document.createElement("div");
        layer.innerHTML = `
            <form>
                <div id="form-inputs">
                    <input type="text" placeholder="Task Name" id="task-name">
                    <input type="date" id="task-date">
                    <select name="project" id="task-project">
                        <option value="" disabled selected>Select a project</option>
                        <option value="workout">workout</option>
                    </select>
                </div>
                <button>Create task</button>
            </form>
        `;
        layer.id = "form-layer";
        bindLayer();
        bindButton();
        formPreventDefault();

        function placeLayer() {
            const body = document.querySelector("body");
            body.appendChild(layer);
        }

        function formPreventDefault() {
            const form = layer.querySelector("form");
            form.addEventListener("submit", (e) => {
                e.preventDefault();
            })
        }

        function bindLayer() { //If the screen is clicked but not on the <form> then delete/exit the whole layer/
            layer.addEventListener("click", (e) => {
                if (e.target === layer) {
                    layer.remove();
                }
            })


        }

        function bindButton() {
            const button = layer.querySelector("button");
            button.addEventListener("click", () => {
                const taskName = document.querySelector("#task-name").value;
                const taskDate = document.querySelector("#task-date").value;
                const taskProject = document.querySelector("#task-project").value;

                const newTask = new Task(taskName, taskDate, taskProject);
                const newTaskElement = buildTask(newTask);

                document.querySelector("#tasks").appendChild(newTaskElement);

                layer.remove();
            })
        }

        return {layer, placeLayer};
    }

    function buildTask(task) {
        const taskElement = document.createElement("div");
        taskElement.classList.add("task");
        taskElement.innerHTML = `
            <div class="circle"></div>
            <div class="task-info">
                <div class="task-name">${task.getName()}</div>
                <div class="task-date"><img src="${dateIcon}"><div>${task.getDueDate()}</div></div>
            </div>
            <div class="task-buttons">
                <img src="${taskEditIcon}">
                <img src="${taskCalendarIcon}">
                <img src="${taskMoreIcon}">
            </div>
        `

        return taskElement;
    }

    return({buildForm})
})()

export default componentBuilder 