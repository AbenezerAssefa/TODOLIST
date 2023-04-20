import Storage from './localStorage.js';

const modalEdit = document.querySelector('.edit-task');
const modalAdd = document.querySelector('.modal-add');
const overlay = document.querySelector('.overlay');

// -- Function to close modal --
const closeModal = function () {
  modalEdit.classList.remove('active');
  modalAdd.classList.remove('active');
  overlay.classList.remove('active');
  while (modalEdit.firstChild) {
    modalEdit.removeChild(modalEdit.firstChild);
  }
  while (overlay.firstChild) {
    overlay.removeChild(overlay.firstChild);
  }
};
const closeModalBtn = document.querySelector('.close-modal');
closeModalBtn.addEventListener('click', closeModal);

function editTask(editTitleInput, editDescInput, editDateInput, id, importance) {
  // Get the updated task information from the modal input fields
  const newTitle = editTitleInput.value;
  const newDescription = editDescInput.value;
  const newDate = editDateInput.value;
  const important = importance.value;
  const taskContainer = document.querySelector(`[data-index='${id}']`);
  const dateContainer = document.querySelector(`[data-date-index='${id}']`);
  taskContainer.textContent = newTitle;
  dateContainer.textContent = newDate;
  Storage.editTask(newTitle, newDescription, newDate, id, important);
  // Close the modal
  closeModal();
}
// --Create a modal to edit task.
function createEditModal(id) {
  modalEdit.classList.add('active');
  overlay.classList.add('active');
  const titleContainer = document.createElement('div');
  titleContainer.classList.add('title-modal');
  const titleModal = document.createElement('h3');
  titleModal.textContent = 'Edit Task';
  const closeModalBtn = document.createElement('button');
  closeModalBtn.classList.add('close-modal');
  closeModalBtn.textContent = 'x';
  modalEdit.appendChild(titleContainer);
  titleContainer.appendChild(titleModal);
  titleContainer.appendChild(closeModalBtn);
  const formContainer = document.createElement('div');
  formContainer.classList.add('form-container');
  const form = document.createElement('form');
  form.classList.add('form');
  // title
  const editTitleContainer = document.createElement('div');
  editTitleContainer.classList.add('add-container');
  editTitleContainer.classList.add('title');
  const editTitlelabel = document.createElement('label');
  editTitlelabel.classList.add('add-title-label');
  editTitlelabel.textContent = 'Title';
  const editTitleInput = document.createElement('input');
  editTitleInput.classList.add('add-title');
  editTitleInput.classList.add('input');
  editTitleInput.type = 'text';
  editTitleInput.required = true;
  editTitleInput.id = id;
  modalEdit.appendChild(formContainer);
  formContainer.appendChild(form);
  form.appendChild(editTitleContainer);
  editTitleContainer.appendChild(editTitlelabel);
  editTitleContainer.appendChild(editTitleInput);
  // description
  const editDescContainer = document.createElement('div');
  editDescContainer.classList.add('add-container');
  editDescContainer.classList.add('description');
  const editDesclabel = document.createElement('label');
  editDesclabel.classList.add('add-desc-label');
  editDesclabel.textContent = 'Description';
  const editDescInput = document.createElement('textarea');
  editDescInput.classList.add('add-desc');
  // editDescInput.type = 'text';
  editDescInput.id = id;
  form.appendChild(editDescContainer);
  editDescContainer.appendChild(editDesclabel);
  editDescContainer.appendChild(editDescInput);
  // date
  const editDateContainer = document.createElement('div');
  editDateContainer.classList.add('add-container');
  editDateContainer.classList.add('date');
  const editDatelabel = document.createElement('label');
  editDatelabel.classList.add('add-date-label');
  editDatelabel.textContent = 'Due date';
  const editDateInput = document.createElement('input');
  editDateInput.classList.add('add-date');
  editDateInput.classList.add('input');
  editDateInput.type = 'date';
  editDateInput.id = id;
  form.appendChild(editDateContainer);
  editDateContainer.appendChild(editDatelabel);
  editDateContainer.appendChild(editDateInput);
  // importance
  const editImportanceContainer = document.createElement('div');
  editImportanceContainer.classList.add('choose-importance');
  const editImportanceLabel = document.createElement('label');
  editImportanceLabel.classList.add('importance-label');
  editImportanceLabel.textContent = 'How Important?';
  const editImportanceSelect = document.createElement('select');
  editImportanceSelect.classList.add('important-select');
  const option = document.createElement('option');
  option.textContent = '--Please choose an option--';
  const optionN = document.createElement('option');
  optionN.classList.add('no-important');
  optionN.textContent = 'Not much';
  optionN.value = 'Not important';
  const optionY = document.createElement('option');
  optionY.classList.add('yes-important');
  optionY.textContent = 'Super Important!!';
  optionY.value = 'Important';
  form.appendChild(editImportanceContainer);
  editImportanceContainer.appendChild(editImportanceLabel);
  editImportanceContainer.appendChild(editImportanceSelect);
  editImportanceSelect.appendChild(option);
  editImportanceSelect.appendChild(optionN);
  editImportanceSelect.appendChild(optionY);

  // button edit
  const buttonEdit = document.createElement('button');
  buttonEdit.classList.add('edit-task-btn');
  buttonEdit.textContent = 'Edit';
  buttonEdit.id = id;
  form.appendChild(buttonEdit);
  closeModalBtn.addEventListener('click', (e) => {
    e.preventDefault();
    closeModal();
  });
  buttonEdit.addEventListener('click', (e) => {
    e.preventDefault();
    const { id } = e.target;
    editTask(editTitleInput, editDescInput, editDateInput, id, editImportanceSelect);
  });
}

function createInfoModal(id) {
  const tasks = JSON.parse(localStorage.getItem('tasks'));
  modalEdit.classList.add('active');
  overlay.classList.add('active');
  const html = `
  <div class='modal-info-container'>
  <button class="close-modal">x</button>
    <div class= "title-container-info">
    <h3>Task details</h3>
    </div>
  <div class="task-details">
    <div class="title-container">
      <h4 class="info-title">Title</h4>
      <p class="info">${tasks[id].title}</p>
     </div
   <div class="description-container">
     <h4 class="info-title">Description</h4>
     <p class="info">${tasks[id].description}</p>
     </div>
    <div class="date-info-container">
     <h4 class="info-title">Date</h4>
     <div class="info">${tasks[id].dueDate}</div>
     </div>
     <div class="importance-div">
     <h4 class="info-title">Importance</h4>
     <p class="info">${tasks[id].important}</p>
     </div>
    </div>
  </div>`;
  modalEdit.insertAdjacentHTML('beforeend', html);
  const closeModalBtn = modalEdit.querySelector('.close-modal');
  closeModalBtn.addEventListener('click', closeModal);
}

export {
  closeModal,
  createEditModal,
  createInfoModal,
};