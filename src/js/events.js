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

    function bindAddTask(inputFunction) {
        const addTask = document.querySelector("#add-task");
        addTask.addEventListener("click", () => {
            inputFunction();
        })
    }



    return {bindViews, bindAddTask};
})();

export default eventBinder;