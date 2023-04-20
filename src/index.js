import './style.css';
import './modules/sidebar.js';
import './modules/crud.js';
import { displayTasks } from './modules/display';

const openModalBtn = document.querySelector('.open-modal-btn');
const modalAdd = document.querySelector('.modal-add');
const overlay = document.querySelector('.overlay');
const hambMenu = document.querySelector('.hamburger-menu');
const closeMenu = document.querySelector('.close-menu-btn');
const sideBar = document.querySelector('.sidebar-menu');
// ---- EVENT LISTENERES ---

// -- Function to open menu for mobile version --
hambMenu.addEventListener('click', () => {
  sideBar.style.display = 'flex';
});
// -- Function to open menu for mobile version --
closeMenu.addEventListener('click', () => {
  sideBar.style.display = 'none';
});

// -- Function to open modal to add new task --
openModalBtn.addEventListener('click', () => {
  modalAdd.classList.add('active');
  overlay.classList.add('active');
});

document.addEventListener('DOMContentLoaded', displayTasks);