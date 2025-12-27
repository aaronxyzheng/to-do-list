const componentBuilder = (function() {

    function buildForm() {
        const layer = document.createElement("div");
        layer.innerHTML = `
            <form>
                <div id="form-inputs">
                    <input type="text" placeholder="Task Name">
                    <input type="date">
                    <select name="project" id="project">
                        <option value="" disabled selected>Select a project</option>
                        <option value="workout">workout</option>
                    </select>
                </div>
                <button>Create task</button>
            </form>
        `;
        layer.id = "form-layer";
        bindLayer(layer);

        function placeLayer() {
            const body = document.querySelector("body");
            body.appendChild(layer);
        }

        function bindLayer(layer) { //If the screen is clicked but not on the <form> then delete/exit the whole layer/
            layer.addEventListener("click", (e) => {
                if (e.target === layer) {
                    layer.remove();
                }
            })
        }
        return {layer, placeLayer};
    }

    return({buildForm})
})()

export default componentBuilder 