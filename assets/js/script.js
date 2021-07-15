var buttonEl = document.querySelector("#save-task");
// console.log(buttonE1);
var formEl = document.querySelector("#task-form");
var tasksToDoEl = document.querySelector("#tasks-to-do");

var taskFormHandler = function (event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  console.log(taskNameInput);
  var taskTypeInput = document.querySelector("select[name='task-type']").value;
  console.log(taskTypeInput);
  //create list item
  if (!taskNameInput || !taskTypeInput) {
    alert("You need to fill out the task form!");
    return false;
  }

  formEl.reset();
  
  var taskDataObj = {
    name: taskNameInput,
    type: taskTypeInput
  };

  //send it as an argument to createTaskEl
  createTaskEl(taskDataObj);
}

var createTaskEl = function(taskDataObj) {
  var listItemEl = document.createElement("li");
  listItemEl.className = "task-item";

// create div to hold task infor and add to list itme
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";

  // add HTML content to div
  taskInfoEl.innerHTML = "<h3 class ='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";
  //append the list task info that was input by the customer
  listItemEl.appendChild(taskInfoEl);

  //add entire list item to list
  tasksToDoEl.appendChild(listItemEl);

}

formEl.addEventListener("submit", taskFormHandler);