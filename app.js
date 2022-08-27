const taskInput=document.getElementById("task");
const taskList=document.getElementById("task-list");
let c=0;
//add function 
function addTask(){
    //store the text input on task
    let task=taskInput.value;
    //call display function
    displayTask(task);
    //call clear function
    clearInput();
    //increase task counter
    c++;
}

//display function
function displayTask(newTask){
    //add task text to the list alongside a delete button
    taskList.innerHTML += `<li id="${c}">${newTask} <button onclick="deleteTask(${c})">Delete</button> </li>`;
}

//clear function
function clearInput(){
    //clears the input bar
    taskInput.value="";
    taskInput.focus();
}

//delete function
function deleteTask(taskID){
    //Deletes the task that has the specified ID
    document.getElementById(taskID).remove();
}