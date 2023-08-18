let tasks = [];
const taskList = document.getElementById('list');
const addTaskInput = document.getElementById('add');
const tasksCounter = document.getElementById('tasks-counter');

console.log('Working');

function renderList () {}

function toggleTask (taskId) {
    const task = tasks.filter(function(task){
        return task.id == taskId
    });

    if(task.length > 0){
        const currentTask = task[0];
        currentTask.done = !currentTask.done;
        renderList();
        showNotification("Task toggled successfully");
        return;
    }
}

function deleteTask (taskId) {
    const newTask = tasks.filter(function(task){
        return task.id !== taskId
    });

    tasks = newTask;
    renderList();
    showNotification("TASK DELETED SUCCESSFULLY");
}

function addTask (task) {
    if(task){
        tasks.push(task);
        //console.log(tasks);
        renderList();
    }
}

function showNotification(text) {
    alert(text);
}

function handleInputKeypress(e){
   if(e.key == 'Enter'){
    let text = e.target.value;
    // /console.log(text);

    if(!text){
        showNotification("Please enter some text");
        //console.log("Please enter some text")
    }

    const task = {
        text:text,
        id: Date.now().toString(),
        done:false
    }

    e.target.value='';
    addTask(text);

   }
}

addTaskInput.addEventListener('keyup',handleInputKeypress)