let task = [];

function updateUI() {
    saveTasks();
    displayTask();
}

function displayTask() {
    let html = "";
    for (let i = 0; i < task.length; i++) {
        html += `<li> ${task[i]} <button class = "delete" onclick = 'removeTask(${i})';> <i class="far fa-trash-alt"></i> </button></li>`
    }
    document.getElementById("list").innerHTML = html;
}

function addTask() {
    let theTask = document.getElementById("task");
    let text= theTask.value;
    
    if (text === ""){
        return;
    }
    task.push(text);
    theTask.value = "";
    // saveTasks();
    // displayTask();
    updateUI();
    
}

function removeTask(i) {
    task.splice(i, 1);
    // saveTasks();
    // displayTask();
    updateUI();
    
}

document.getElementById("clearAll").addEventListener("click", function() {
    task = [];
    // saveTasks();
    // displayTask();
    updateUI();
})

function saveTasks() {
    localStorage.setItem("task", JSON.stringify(task));
};

function loadTasks() {
    let saved = localStorage.getItem("task");
    if(saved !== null) {
        task = JSON.parse(saved)
    }
}

let listElements = document.getElementById("list");
function taskComplete() {
    let tasks= listElements.getElementsByTagName("li")
    for(let i = 0;i < tasks.length; i++){
        tasks[i].addEventListener("click", function() {
            this.classList.toggle('completed')
        })
    }
}

loadTasks();
displayTask();
taskComplete();

    