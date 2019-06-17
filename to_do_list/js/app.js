document.addEventListener('DOMContentLoaded', () => {
  const newTaskForm = document.querySelector('#new-task-form');
  newTaskForm.addEventListener('submit', handleTaskSubmit);

  const deleteAll = document.querySelector('#delete-all');
  deleteAll.addEventListener('click', handleDeleteAll);
})

const handleTaskSubmit = function (event) {
  event.preventDefault();

  const toDoTask = createToDoTask(event.target);
  const toDoList = document.querySelector('#to-do-list');
  toDoList.appendChild(toDoTask);

  event.target.reset();
}

const createToDoTask = function (form) {
  const toDoTask = document.createElement('li');
  toDoTask.classList.add('to-do-task');

  const taskName = document.createElement('h2');
  taskName.textContent = form.taskName.value;
  toDoTask.appendChild(taskName);

  const taskDescription = document.createElement('h3');
  taskDescription.textContent = form.taskDescription.value;
  toDoTask.appendChild(taskDescription);

  const taskImportance = document.createElement('h3');
  taskImportance.textContent = form.taskImportance.value;
  toDoTask.appendChild(taskImportance);

  const taskUrgency = document.createElement('h3');
  taskUrgency.textContent = form.taskUrgency.value;
  toDoTask.appendChild(taskUrgency);

  const dueDate = document.createElement('h3');
  dueDate.textContent = form.dueDate.value;
  toDoTask.appendChild(dueDate);

  return toDoTask;
}

const handleDeleteAll = function (event) {
  const toDoList = document.querySelector('#to-do-list');
  toDoList.innerHTML = '';
}
