

// completion
function TaskCompletion(tasks) {
    displayTasks(tasks);
    if(true){
            let taskId = parseInt(prompt("Give me the ID to check the task status"));
            
        if (taskId >= 0 && taskId < tasks.length) {
            let [description, completed] = tasks[taskId].split(' | ');
            let newStatus = completed === "true" ? "false" : "true";
            tasks[taskId] = `${description} | ${newStatus}`;
            saveTasks(tasks);
            console.log("Task updated");
        } else {
            console.log("invalid ID");
        }
    }else{
        console.log("you can add tasks by choosing choice 1");
    }
    
}


function loadTasks() {
    let tasks = localStorage.getItem('tasks');
    return tasks ? tasks.split(', ') : []; 
}
function saveTasks(tasks) {
    localStorage.setItem('tasks', tasks.join(', ')); 
}

// Display
function displayTasks(tasks) {
    if (tasks.length === 0) {
        console.log("No available tasks");
    } else {
        console.log("ID | Description | Completed");

    tasks.forEach((task, index) => {
        const parts = task.split(' | ');
        const description = parts[0];
        const completed = parts[1] === "true";
        const status = completed ? "completed" : "UnCompleted";

        console.log(`${index} | ${description} | ${status}`);
});
    }
}

// Add
function addTask(tasks) {
    let description = prompt("Give me the task description");
    tasks.push(`${description}`);
    saveTasks(tasks);
    console.log("Task added successfully");
}

// Update task discription
function updateTask(tasks) {
    displayTasks(tasks);
    let taskId = parseInt(prompt("Give me the task ID to update"));
    if (taskId >= 0 && taskId < tasks.length) {
        let [description, completed] = tasks[taskId].split(' | ');
        let newDescription = prompt("Enter the new discreption");
        tasks[taskId] = `${newDescription} | ${completed}`;
        saveTasks(tasks);
        console.log("Task updated");
    } else {
        console.log("Invalid ID");
    }
}

//Delete
function removeTask(tasks) {
    displayTasks(tasks);
    let taskId = parseInt(prompt("Give me the ID to Delete"));
    if (taskId >= 0 && taskId < tasks.length) {
        tasks.splice(taskId, 1);
        saveTasks(tasks);
        console.log("Task deleted");
    } else {
        console.log("invalid ID");
    }
}
function main() {
    let tasks = loadTasks();
    let choice;
    do {
        console.log("\n Task Manager");
        console.log("1 . Add Task");
        console.log("2 . View Tasks");
        console.log("3 . Edit Task");
        console.log("4 . show Task Completion ");
        console.log("5 . Delete Task");
        console.log("6. Exit");


        choice = prompt("What is your choice");
        if(choice == 1){
            addTask(tasks);
        }else if(choice == 2){
            displayTasks(tasks);
        }else if(choice == 3){
            updateTask(tasks);
        }else if(choice == 4){
            TaskCompletion(tasks);
        }else if(choice == 5){
            removeTask(tasks);
        }else{
            console.log("Try Again");
        }
    } while (choice !== "6");
}

main();






