import taskEditIcon from "../../assets/icons/task-edit.svg";
import taskCalendarIcon from "../../assets/icons/task-calendar.svg";
import taskMoreIcon from "../../assets/icons/task-more.svg";
import dateIcon from "../../assets/icons/date.svg";

function buildTaskElement(task) {
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

    bindCircle(taskElement);
    bindButtons(taskElement);

    return taskElement;
}

function bindCircle(taskElement){
    const circle = taskElement.querySelector(".circle");
    circle.addEventListener("click", () => taskElement.remove())
}

function bindButtons(taskElement) {
    bindCalendarButton(taskElement);
    bindTaskMoreButton(taskElement);
    
}

function bindCalendarButton(taskElement) {
    const calendarButton = taskElement.querySelector(`img[src="${taskCalendarIcon}"]`);
    calendarButton.addEventListener("click", (e) => {
        if(taskElement.querySelector(".calendarInput") === null) {
            e.stopPropagation();
            const calendarInput = document.createElement("input");
            calendarInput.classList.add("calendarInput");
            calendarInput.type = "date";
            
            calendarInput.style.position = "absolute";
            calendarInput.style.opacity = "0";
            calendarInput.style.pointerEvents = "none";

            taskElement.appendChild(calendarInput);

            setTimeout(() => {
                calendarInput.showPicker();
            }, 0);
        }

    })

    document.addEventListener("click", (e) => {
        const calendarInput = taskElement.querySelector(".calendarInput");
        if(calendarInput && !calendarInput.contains(e.target)) {
            calendarInput.remove();
        }
    })
}

function bindTaskMoreButton(taskElement) {
    const taskMoreButton = taskElement.querySelector(`img[src="${taskMoreIcon}"]`);
    taskMoreButton.addEventListener("click", (e) => {
        if(taskElement.querySelector(".overflow-menu") === null) { // Makes sure there isn't already an overflow menu
            e.stopPropagation(); //Otherwise overflow menu will close right after it opens.
            // Adds the Overflow Menu
            const overflowMenu = document.createElement("div");
            overflowMenu.innerHTML = `
                <div>
                    <img src="${taskEditIcon}">
                    <div>Edit</div>
                </div>
                <div class="overflow-menu-delete">
                    <svg class="delete-icon" clip-rule="evenodd" fill-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m4.015 5.494h-.253c-.413 0-.747-.335-.747-.747s.334-.747.747-.747h5.253v-1c0-.535.474-1 1-1h4c.526 0 1 .465 1 1v1h5.254c.412 0 .746.335.746.747s-.334.747-.746.747h-.254v15.435c0 .591-.448 1.071-1 1.071-2.873 0-11.127 0-14 0-.552 0-1-.48-1-1.071zm14.5 0h-13v15.006h13zm-4.25 2.506c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm-4.5 0c-.414 0-.75.336-.75.75v8.5c0 .414.336.75.75.75s.75-.336.75-.75v-8.5c0-.414-.336-.75-.75-.75zm3.75-4v-.5h-3v.5z" fill-rule="nonzero"/></svg>
                    <div>Delete</div>
                </div>
            `
            overflowMenu.classList.add("overflow-menu");
            taskElement.appendChild(overflowMenu);

            const deleteButton = overflowMenu.querySelector(".overflow-menu-delete");
            deleteButton.addEventListener("click", () => {
                taskElement.remove();
            })
        }
    })

    document.addEventListener("click", (e) => {
        const overflowMenu = taskElement.querySelector(".overflow-menu");
        if (overflowMenu && !overflowMenu.contains(e.target) && !taskMoreButton.contains(e.target)) {
            overflowMenu.remove();
        }
    })
}


export default buildTaskElement;