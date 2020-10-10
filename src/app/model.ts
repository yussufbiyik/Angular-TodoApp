export class Model {
    items;

    constructor() {
        this.items = [
            new TodoItem("High","Online Derslere Katıl",false),
            new TodoItem("Medium","Freelance Projelerde İlerleme Kaydet",false),
            new TodoItem("High","Ders Çalış",false),
            new TodoItem("High","Tekrar Yap",false)
        ];
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