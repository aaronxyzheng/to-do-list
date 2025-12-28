import eventBinder from "../events-binder.js";

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

        eventBinder.bindFormLayer(layer);
        eventBinder.bindFormButton(layer, layer.querySelector("button"));
        formPreventDefault(layer);

        return layer;
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