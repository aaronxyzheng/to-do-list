const formBuilder = (function() {
    function placeForm() {
        const layer = buildForm();

        const body = document.querySelector("body");
        body.appendChild(layer);
    }

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

        bindFormLayer(layer);
        bindFormButton(layer);
        formPreventDefault(layer);

        return layer;
    }

    function bindFormLayer(layer) {
        layer.addEventListener("click", (e) => {
            if (e.target === layer) {
                layer.remove();
            }
        })
    }

    function bindFormButton(layer) {
        const button = layer.querySelector("button");

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

    function formPreventDefault(layer) {
        const form = layer.querySelector("form");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
        })
    }

    return {placeForm}
    
})()



export default formBuilder;