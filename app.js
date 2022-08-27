const taskInput=document.getElementById("task");
const taskList=document.getElementById("task-list");

//add function 
function addTask(){
    let task=taskInput.value;
    displayTask(task);
    clearInput();
}

//display function
function displayTask(taskName){
    taskList.innerHTML += `<li>${taskName}</li>`;
}

//clear function
function clearInput(){
    taskInput.value="";
    taskInput.focus();
}

//delete function
function deleteTask(){
}