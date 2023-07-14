var tasks = [];

function renderTasks() {
  var taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  tasks.forEach(function(task, index) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(task));

    var editBtn = document.createElement("span");
    editBtn.innerHTML = "&#9998;";
    editBtn.classList.add("edit-btn");
    editBtn.setAttribute("onclick", "editTask(" + index + ")");
    li.appendChild(editBtn);

    var deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = "&#10006;";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.setAttribute("onclick", "deleteTask(" + index + ")");
    li.appendChild(deleteBtn);

    li.onclick = function() {
      this.classList.toggle("completed");
    };

    taskList.appendChild(li);
  });
}

function addTask() {
  var taskInput = document.getElementById("taskInput");

  if (taskInput.value !== "") {
    tasks.push(taskInput.value);
    taskInput.value = "";
    renderTasks();
  }
}

function editTask(index) {
  var newTask = prompt("Edit the task:", tasks[index]);

  if (newTask !== null && newTask !== "") {
    tasks[index] = newTask;
    renderTasks();
  }
}

function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

function searchTasks() {
  var searchInput = document.getElementById("searchInput");
  var filteredTasks = tasks.filter(function(task) {
    return task.toLowerCase().includes(searchInput.value.toLowerCase());
  });
  renderFilteredTasks(filteredTasks);
}

function renderFilteredTasks(filteredTasks) {
  var taskList = document.getElementById("taskList");
  taskList.innerHTML = "";

  filteredTasks.forEach(function(task, index) {
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(task));

    var editBtn = document.createElement("span");
    editBtn.innerHTML = "&#9998;";
    editBtn.classList.add("edit-btn");
    editBtn.setAttribute("onclick", "editTask(" + index + ")");
    li.appendChild(editBtn);

    var deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = "&#10006;";
    deleteBtn.classList.add("delete-btn");
    deleteBtn.setAttribute("onclick", "deleteTask(" + index + ")");
    li.appendChild(deleteBtn);

    li.onclick = function() {
      this.classList.toggle("completed");
    };

    taskList.appendChild(li);
  });
}

renderTasks();