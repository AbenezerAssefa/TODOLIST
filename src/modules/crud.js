import {
  closeModal,
  createEditModal,
  createInfoModal,
} from './modal.js';
import {
  displayTask,
} from './display.js';
import Storage from './localStorage.js';
import Task from './task.js';

const titleInput = document.querySelector('.add-title');
const descriptionInput = document.querySelector('.add-desc');
const dateInput = document.querySelector('.add-date');
const importance = document.querySelector('.important-select');
const addForm = document.querySelector('.form');
const listContainer = document.querySelector('.all-tasks');

// -- Function to add new task with form --
addForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const tasks = Storage.getTasks();
  const newTitle = titleInput.value;
  const newDescription = descriptionInput.value;
  const newDate = dateInput.value;
  const important = importance.value;
  let index;
  const len = tasks.length;
  if (len === 0 || len === null) {
    index = 0;
  } else {
    index = tasks[len - 1].index + 1;
  }
  if (newTitle) {
    const newTask = new Task(newTitle, newDescription, newDate, Number(index), important, false); //
    Storage.addTask(newTask);
    displayTask(newTask);
    addForm.reset();
    closeModal();
  }
});

const closeModalBtn = document.querySelector('.close-modal');
closeModalBtn.addEventListener('click', closeModal);

// -- Function to handle click functions inside task container--
const clickHandle = (e) => {
  if (e.target.classList.contains('fa-pen-to-square')) {
    // -- Open modal to modify task desciption --
    const { id } = e.target;
    createEditModal(id);
  } else if (e.target.classList.contains('fa-trash-can')) {
    // -- Delete task when press trash can --
    const { id } = e.target;
    Storage.removeTask(id);
    e.target.parentElement.parentElement.remove();
  } else if (e.target.classList.contains('checkbox')) {
    // -- Check completed --
    const { id } = e.target;
    const checkbox = e.target;
    const sibling = checkbox.closest('.task-container');
    if (checkbox.checked) {
      sibling.dataset.taskStatus = 'completed';
      sibling.classList.add('completed');
      Storage.updateStatus(id);
    } else {
      sibling.classList.remove('completed');
      delete sibling.dataset.taskStatus;
      Storage.updateStatus(id);
    }
  } else if (e.target.classList.contains('fa-magnifying-glass')) {
    const { id } = e.target;
    createInfoModal(id);
  }
};
// --Event to handle UI in task --
listContainer.addEventListener('click', clickHandle);

export default clickHandle;