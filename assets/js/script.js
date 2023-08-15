
let armazenar = [];

function add() {
    let init = document.getElementById("tarefa").value;
    let information = new Task(randonId(), title, false);

    if(init == ""){
        alert("Digite algo válido!");
        return;
    }
    init.push(information);
}
console.log(armazenar);
class Task {
    constructor(id, title, status) {
            this.id = id,
            this.title = title,
            this.status = status
    }
}

// OBS: TIRAR ESSA PARTE DO HTML E DEIXAR SOMENTE NO JS


// function showForm() {
//     document.getElementById("list").classList.remove("hidden");
//     let showContent = "";

//     posts.forEach((post, index) => {
//         showContent += `
//         <div id="segundaria">

//         <div id="form2">
//             <div id="info">
//                 <span id="text">Isso é só um teste!</span>
//             </div>
//             <div id="botoes">
//                 <button type="button" id="ok"><i class="fa-solid fa-check"></i></button>
//                 <button type="button" id="edit"><i class="fa-regular fa-pen-to-square"></i></button>
//                 <button type="button" id="delete"><i class="fa-solid fa-trash"></i></button>
//             </div>
//         </div>
//     </div>
//         `
//     });
// }

class Tasklist {
    constructor() {
        this.tasks = [];
    }
}

function randonId() {
    return Math.floor(Math.random() * 9999);
}

