

function add() {
    let init = document.getElementById("tarefa").value;
    let information = new Task(randonId(), title, false);

    if(init == ""){
        alert("Digite algo válido!");
        return;
    }
}
class Task {
    constructor(id, title, status) {
            this.id = id,
            this.title = title,
            this.status = status
    }
}
class Tasklist {
    constructor() {
        this.tasks = [];
    }

    addTask(task).push(task);
}

function randonId() {
    return Math.floor(Math.random() * 9999);
}

