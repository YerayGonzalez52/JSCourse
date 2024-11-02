const taskInput = document.getElementById("taskInput");

const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");
const clearAllBtn = document.getElementById("clearAllBtn");


let tasks = [];

function addTask(){
    const taskText = taskInput.value.trim();
    if(taskText !== ""){
        tasks.push({text: taskText});
        taskInput.value = "";
        displayTasks();
    }
}

function displayTasks(){
    taskList.innerHTML = "";
    for(let i = 0; i < tasks.length; i++){
        const li = document.createElement("li");
        const task = tasks[i];
        li.innerHTML = `<input type="checkbox" id="task-${i}" ${task.completed ? "checked" : ""}>
                    <label for="task-${i}">${task.text}</label>`;
        li.querySelector("input").addEventListener("change", () => toggleTask(i));
        taskList.appendChild(li);
    };
}

function toggleTask(index){
    tasks[index].completed = !tasks[index].completed;
    displayTasks();
}

function clearCompletedTasks() {
    tasks = tasks.filter(task => !task.completed);
    displayTasks();
}

function clearAll(){
    tasks = [];
    displayTasks();
}

clearAllBtn.addEventListener("click", clearAll);  // Asocia la función al botón
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);

displayTasks();