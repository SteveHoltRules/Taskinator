var buttonE1 = document.querySelector("#save-task");
// console.log(buttonE1);
var formEl = document.querySelector("#task-form");
var tasksToDoE1 = document.querySelector("#tasks-to-do");

var createTaskHandler = function(event) {
  event.preventDefault();
  var taskNameInput = document.querySelector("input[name='task-name']").value;
  console.log(taskNameInput);
  var taskTypeInput = document.querySelector("select[name='task-type']").value;
  console.log(taskTypeInput);
  //create list item
  var listItemE1 = document.createElement("li");
  listItemE1.className = "task-item";

  // create div to hold task infor and add to list itme
  var taskInfoEl = document.createElement("div");
  taskInfoEl.className = "task-info";

  // add HTML content to div
  taskInfoEl.innerHTML = "<h3 class ='task-name'>" + taskNameInput + "</h3><span class='task-type'>" + taskTypeInput + "</span>";
  //append the list task info that was input by the customer
  listItemEl.appendChild(taskInfoEl);

  //add entire list item to list
  tasksToDoe1.appendChild(listItemE1);
};

formEl.addEventListener("submit", createTaskHandler);

