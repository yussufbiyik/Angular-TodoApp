export class Model {
    items;

    constructor() {
        this.items = [];
    }
}

export class TodoItem {
    priority;
    description;
    status;

    constructor(priority, description, status) {
        this.priority = priority;
        this.description = description;
        this.status = status;
    }
}