// -- Class constructor of the task object

export default class Task {
  constructor(title, description, dueDate, index, important) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.index = index;
    this.important = important;
    this.completed = false;
  }
}