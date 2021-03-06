const form = document.querySelector("#addTaskForm");
const input = document.querySelector("#txtTaskName");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");

eventListeners();

function eventListeners() {

    form.addEventListener("submit", addNewItem);

    taskList.addEventListener("click", deleteOneItem);

    btnDeleteAll.addEventListener("click", deleteAllitems);

}

function addNewItem(e) {

    if (input.value !== "") {

        const newTask = document.createElement("li");
        newTask.className = "list-group-item list-group-item-secondary";
        newTask.appendChild(document.createTextNode(input.value));

        const deleteItem = document.createElement("a");
        deleteItem.classList = "delete-item float-right";
        deleteItem.setAttribute("href", "#");
        deleteItem.innerHTML = '<i class="fas fa-times"></i>';

        newTask.appendChild(deleteItem);
        taskList.appendChild(newTask);
        form.reset();
        input.focus();
        e.preventDefault();
    }
    
    else {

        alert("Please add a new task");
        e.preventDefault();

    }

}

function deleteOneItem(e) {

    if (e.target.className == "fas fa-times") {

        if (confirm("Are you sure?")) {

            e.target.parentElement.parentElement.remove();
        }

    }

    input.focus();
    e.preventDefault();
}

function deleteAllitems(e) {

    if (confirm("Are you sure?")) {

        while (taskList.firstElementChild !== null) {

            taskList.removeChild(taskList.firstElementChild);
        }
    }

    e.preventDefault();
    input.focus();
    
}