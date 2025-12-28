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
    return taskElement;
}


export default buildTaskElement;