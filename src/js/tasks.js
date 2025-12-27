class Task {
    constructor(name, dueDate, project) {
        this._name = name;
        this._dueDate = dueDate;
        this._project = project;
    }

    getName() {
        return this._name;
    }

    getDueDate() {
        return this._dueDate;
    }

    getProject() {
        return this._project;
    }
}

export default Task;