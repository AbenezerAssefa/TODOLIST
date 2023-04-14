import { addItem, remove } from "./crud.js";

jest.mock('./crud.js');

describe('Test crud functionality', () => {
  it('removes an <li> to the DOM', () => {
    document.body.innerHTML = `
      <ul class="task-box"></ul>
    `;

    addItem('First Item');
    const todos = JSON.parse(localStorage.getItem("todo-list"));
    const todoBox = document.querySelector('.task-box');
    todos.forEach((item) => {
      todoBox.innerHTML = `<li>${item.description}</li>`;
    });
    const Li = document.querySelectorAll('.task-box li');

    expect(Li).toHaveLength(1);
    expect(JSON.parse(localStorage.getItem('todo-list'))).toHaveLength(1);
  });

  it('adds an <li> to the DOM', () => {
    document.body.innerHTML = `
      <ul class="task-box">
        <li>Item 1</li
      </ul>
    `;

    const initialSize = JSON.parse(localStorage.getItem('todo-list')).length;
    remove(0);
    
    const todos = JSON.parse(localStorage.getItem("todo-list"));
    const todoBox = document.querySelector('.task-box');
    if (todos.length) {
      todos.forEach((item) => {
        todoBox.innerHTML += `<li>${item.description}</li>`;
      });
    } else {
      todoBox.innerHTML = '';
    }

    const Li = document.querySelectorAll('.task-box li');

    expect(Li).toHaveLength(0);
    expect(JSON.parse(localStorage.getItem('todo-list')).length).toBe(initialSize - 1);
  });
});
