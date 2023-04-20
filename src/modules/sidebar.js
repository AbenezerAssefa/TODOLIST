import {
  displayTasks,
  displayChecked,
  displayImportant,
  displayToday,
} from './display';

const allLink = document.querySelector('.all');
const importantLink = document.querySelector('.important');
const checkedLink = document.querySelector('.checked');
const todayLink = document.querySelector('.today');
allLink.addEventListener('click', displayTasks);
importantLink.addEventListener('click', displayImportant);
checkedLink.addEventListener('click', displayChecked);
todayLink.addEventListener('click', displayToday);