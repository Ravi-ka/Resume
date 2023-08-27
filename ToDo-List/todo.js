    (function(){
    var a = 20;
    let tasks = [];
    const tasksList = document.getElementById('list');
    const addTaskInput = document.getElementById('add');
    const tasksCounter = document.getElementById('tasks-counter');

    console.log('Working');

    async function fetchData(){

        //Implemented using promises
        // fetch('https://jsonplaceholder.typicode.com/todos')
        // .then(function (response){
        //     //console.log(response);
        //     return response.json();
        // })
        // .then(function (data){
        //     //console.log(data);
        //     tasks = data.slice(0,10);
        //     renderList(data);
        // })
        // .catch(function (error){
        //     console.log('error',error);
        // })


        //implemented using async/await
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/todos');
            //console.log(response);
            const data = await response.json();
            //console.log(data);
            tasks = data.slice(0,10);
            renderList();
        }
        catch(error){
            console.log(error);
        }
    }

    function addTaskToDOM(task) {
        const li = document.createElement('li');
        li.innerHTML = `
                <input type="checkbox" id="${task.id}" ${task.completed ? 'checked' : ''} class="custom-checkbox">
                <label for="${task.id}">${task.title}</label>
                <img src="delete (1).png" class="delete" data-id="${task.id}" />
        `;
        tasksList.append(li);
    }


    function renderList () {
        tasksList.innerHTML='';
        for(let i=0;i<tasks.length;i++){
            addTaskToDOM(tasks[i]);
        }
        tasksCounter.innerHTML=tasks.length;
    }

    function toggleTask (taskId) {
        const task = tasks.filter(function(task){
            return task.id == Number(taskId)
        });

        if(task.length > 0){
            const currentTask = task[0];
            currentTask.completed =! currentTask.completed;
            renderList();
            //showNotification("Task toggled successfully");
            return;
        }
        showNotification('Could not perform the task');
    }

    function deleteTask (taskId) {
        const newTask = tasks.filter(function(task){
            return task.id !== Number(taskId)
        });

        tasks = newTask;
        renderList();
        //showNotification("Task Deleted Successfully");
    }

    function addTask (task) {
        if(task){
            tasks.push(task);
            //console.log(tasks);
            renderList();
        }
    }

    function showNotification(title) {
        alert(title);
    }

    function handleInputKeypress(e){
    if(e.key == 'Enter'){
        let title = e.target.value;
        // /console.log(title);

        if(!title){
            showNotification("Please enter some title");
            //console.log("Please enter some title")
        }

        const task = {
            title:title,
            id: Date.now(),
            completed:false
        }

        e.target.value='';
        addTask(task);

    }
    }

    function handleClickListener(e){
        let target = e.target;
        //console.log(target);

        if (target.className =='delete'){
            const taskId = target.dataset.id;
            deleteTask(taskId);
            return;
        }

        else if(target.className == 'custom-checkbox'){
            const taskId = target.id;
            toggleTask(taskId);
            return;
        }
    }

    function initializeApp(){
        fetchData();
        addTaskInput.addEventListener('keyup',handleInputKeypress)
        document.addEventListener('click',handleClickListener)
    }

    initializeApp();
    })()

