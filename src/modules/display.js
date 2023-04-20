import { format } from 'date-fns';

const listContainer = document.querySelector('.all-tasks');
const titleSection = document.querySelector('.title-section-text');

function displayTask(task) {
  const taskContainer = document.createElement('div');
  taskContainer.classList.add('task-container');
  if (task.completed) {
    taskContainer.classList.add('completed');
    taskContainer.dataset.taskStatus = 'completed';
  }
  if (task.important === 'important') {
    taskContainer.dataset.taskImportance = 'important';
  }
  const checkboxTask = document.createElement('div');
  checkboxTask.classList.add('checkbox-task');
  const checkbox = document.createElement('input');
  checkbox.id = task.index;
  checkbox.classList.add('checkbox');
  checkbox.type = 'checkbox';
  checkboxTask.appendChild(checkbox);
  const taskText = document.createElement('p');
  taskText.dataset.index = task.index;
  taskText.classList.add('task-text');
  taskText.textContent = task.title;
  if (task.important === 'important') {
    const star = document.createElement('i');
    star.classList.add('fa-solid');
    star.classList.add('fa-star');
    taskText.appendChild(star);
  }
  checkboxTask.appendChild(taskText);
  taskContainer.appendChild(checkboxTask);
  const allIcons = document.createElement('div');
  allIcons.classList.add('all-icons');
  const taskDate = document.createElement('p');
  // data-index='${id}'
  taskDate.dataset.dateIndex = task.index;
  taskDate.classList.add('task-date');
  taskDate.textContent = task.dueDate;
  allIcons.appendChild(taskDate);
  const magnifyingGlass = document.createElement('i');
  magnifyingGlass.id = task.index;
  magnifyingGlass.classList.add('fa-solid');
  magnifyingGlass.classList.add('fa-magnifying-glass');
  allIcons.appendChild(magnifyingGlass);
  const pen = document.createElement('i');
  pen.id = task.index;
  pen.classList.add('fa-regular');
  pen.classList.add('fa-pen-to-square');
  allIcons.appendChild(pen);
  const trashCan = document.createElement('i');
  trashCan.id = task.index;
  trashCan.classList.add('fa-regular');
  trashCan.classList.add('fa-trash-can');
  allIcons.appendChild(trashCan);
  taskContainer.appendChild(allIcons);
  listContainer.appendChild(taskContainer);
}

function displayTasks() {
  titleSection.textContent = 'ALL TASKS';
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.forEach((task) => {
    const taskContainer = document.createElement('div');
    taskContainer.classList.add('task-container');
    if (task.completed) {
      taskContainer.classList.add('completed');
      taskContainer.dataset.taskStatus = 'completed';
    }
    if (task.important === 'important') {
      taskContainer.dataset.taskImportance = 'important';
    }
    const checkboxTask = document.createElement('div');
    checkboxTask.classList.add('checkbox-task');
    const checkbox = document.createElement('input');
    checkbox.id = task.index;
    checkbox.classList.add('checkbox');
    checkbox.type = 'checkbox';
    checkboxTask.appendChild(checkbox);
    const taskText = document.createElement('p');
    taskText.dataset.index = task.index;
    taskText.classList.add('task-text');
    taskText.textContent = task.title;
    if (task.important === 'important') {
      const star = document.createElement('i');
      star.classList.add('fa-solid');
      star.classList.add('fa-star');
      taskText.appendChild(star);
    }
    checkboxTask.appendChild(taskText);
    taskContainer.appendChild(checkboxTask);
    const allIcons = document.createElement('div');
    allIcons.classList.add('all-icons');
    const taskDate = document.createElement('p');
    taskDate.dataset.index = task.index;
    taskDate.classList.add('task-date');
    taskDate.textContent = task.dueDate;
    allIcons.appendChild(taskDate);
    const magnifyingGlass = document.createElement('i');
    magnifyingGlass.id = task.index;
    magnifyingGlass.classList.add('fa-solid');
    magnifyingGlass.classList.add('fa-magnifying-glass');
    allIcons.appendChild(magnifyingGlass);
    const pen = document.createElement('i');
    pen.id = task.index;
    pen.classList.add('fa-regular');
    pen.classList.add('fa-pen-to-square');
    allIcons.appendChild(pen);
    const trashCan = document.createElement('i');
    trashCan.id = task.index;
    trashCan.classList.add('fa-regular');
    trashCan.classList.add('fa-trash-can');
    allIcons.appendChild(trashCan);
    taskContainer.appendChild(allIcons);
    listContainer.appendChild(taskContainer);
  });
}

function displayChecked() {
  titleSection.textContent = 'COMPLETED TASKS';
  const tasks = document.querySelectorAll('.task-container');
  tasks.forEach((task) => {
    if (task.dataset.taskStatus === 'completed') {
      task.style.display = 'flex';
    } else {
      task.style.display = 'none';
    }
  });
}
function displayImportant() {
  titleSection.textContent = 'IMPORTANT';
  const tasks = document.querySelectorAll('.task-container');
  tasks.forEach((task) => {
    if (task.dataset.taskImportance === 'important') {
      task.style.display = 'flex';
    } else {
      task.style.display = 'none';
    }
  });
}
function displayToday() {
  const dateOfToday = format(new Date(), 'yyyy-MM-dd');
  const tasks = document.querySelectorAll('.task-container');
  titleSection.textContent = 'TODAY';
  tasks.forEach((task) => {
    const taskDate = task.querySelector('.task-date').textContent;
    console.log(taskDate);
    if (taskDate === dateOfToday) {
      task.style.display = 'flex';
    } else {
      task.style.display = 'none';
    }
  });
}

export {
  displayTask,
  displayChecked,
  displayTasks,
  displayImportant,
  displayToday,
};