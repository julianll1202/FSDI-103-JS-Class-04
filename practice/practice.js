const studentInput=document.getElementById("studentName");

function addStudent(){
    let student=studentInput.value;
    console.log("Adding ...");
    displayStudent(student);
    clearInput();
}

function displayStudent(newStudent){
    document.getElementById("student-list").innerHTML += `<li class="item">${newStudent}</li>`;
}

function clearInput(){
    studentInput.value="";
    studentInput.focus();
}