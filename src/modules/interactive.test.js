import { addItem, checkFunction, clear, edit } from "./crud.js";

jest.mock('./crud.js');
  it('should edit a task\'s description', () => {
    edit(0);
    expect(JSON.parse(localStorage.getItem('todo-list'))[0].description).toBe('Updated Value');
  });

  it('should clear all completed tasks', () => {
    addItem('False item');
    clear();
    expect(JSON.parse(localStorage.getItem('todo-list'))).toHaveLength(1);
  })
});
