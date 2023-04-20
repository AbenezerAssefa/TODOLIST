// -- Define local storage --

export default class Storage {
  // -- To define the LS array --
  static getTasks() {
    let tasks;
    if (localStorage.getItem('tasks') === null) {
      tasks = [];
    } else {
      tasks = JSON.parse(localStorage.getItem('tasks'));//
    }
    return tasks;
  }

  // -- When pressed add task we call this functin to add it to LS --
  static addTask(task) {
    const tasks = Storage.getTasks();
    tasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // -- When pressed remove task we call this functin to remove it from LS --
  static removeTask(id) {
    let tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks = tasks.filter((e) => e.index.toString() !== id.toString());
    tasks.sort((a, b) => a.index - b.index);
    for (let i = 0; i < tasks.length; i += 1) {
      tasks[i].index = i;
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // -- When pressed checkbox, we change the status complete of the task  to true in LS --
  static updateStatus(id) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    for (let i = 0; i < tasks.length; i += 1) {
      if (tasks[i].index.toString() === id.toString()) {
        if (tasks[i].completed === false) {
          tasks[i].completed = true;
          localStorage.setItem('tasks', JSON.stringify(tasks));
        } else {
          tasks[i].completed = false;
        }
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
    }
  }

  // -- Update Local Storage when mdoify task description --
  static editTask(newTitle, newDescription, newDate, id) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    for (let i = 0; i < tasks.length; i += 1) {
      if (tasks[i].index.toString() === id.toString()) {
        tasks[i].title = newTitle;
        tasks[i].description = newDescription;
        tasks[i].dueDate = newDate;
        localStorage.setItem('tasks', JSON.stringify(tasks));
      }
    }
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }
}
