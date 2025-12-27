const eventBinder = (function() {

    function bindEvents() {
        bindViews();
        //bindProjects();
        //bindTasks();
        bindAddTask();
    }

    function bindViews() {
        const views = document.querySelectorAll(".view");
        views.forEach(view => {
            view.addEventListener("click", () => {
                views.forEach(v => v.setAttribute("selected", false));
                view.setAttribute("selected", "true");
            })
        })
    }

    



    return {bindEvents};
})();

export default eventBinder;