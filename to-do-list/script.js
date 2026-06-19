let task = [];

function displayTask() {
    let html = "";
    for (let i = 0; i < task.length; i++) {
        html += "<li>" + task[i] + "<button onclick = 'removeTask(" + i + ")';> x </button></li>"
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
    displayTask()

}

function removeTask(i) {
    task.splice(i, 1);
    displayTask();
}

document.getElementById("clearAll").addEventListener("click", function() {
    task = [];
    displayTask();
})

    