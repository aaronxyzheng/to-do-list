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

    function bindObject(object, func) {
        object.addEventListener("click", () => {
            func();
        })
    }



    return {bindViews, bindObject};
})();

export default eventBinder;