let todoList = [];
let index = 0;

export const addItem = (value) => {
  let storedList = localStorage.getItem("todo-list");

  if (storedList === null) {
      todoList = [];
  } else {
      todoList = JSON.parse(storedList);
      index = todoList.length === 0 ? 0 : todoList.length;
  }

  const LocalStore = {
      index: index,
      description: value,
      completed: false,
  };
  todoList.push(LocalStore);
  localStorage.setItem("todo-list", JSON.stringify(todoList));
}

export const remove = (id) => {
    let storedData = localStorage.getItem("todo-list");
    todoList = JSON.parse(storedData);
    todoList.splice(id, 1);
    for (let i = 0; i < todoList.length; i++) {
        todoList[i].index = i;
    }
    localStorage.setItem("todo-list", JSON.stringify(todoList));
}

export const checkFunction = (index) => {
    if (index) {
      let storedData = localStorage.getItem("todo-list");
      todoList = JSON.parse(storedData);
      todoList[index].completed = false;
      localStorage.setItem("todo-list", JSON.stringify(todoList));
    }
    else {
      let storedData = localStorage.getItem("todo-list");
      todoList = JSON.parse(storedData);
      todoList[index].completed = true;
      localStorage.setItem("todo-list", JSON.stringify(todoList));
    }
}

export const edit = (index) => {
    let storedData = localStorage.getItem("todo-list");
    todoList = JSON.parse(storedData);
    todoList[index].description = "Updated Value";
    localStorage.setItem("todo-list", JSON.stringify(todoList));
}

export const clear = () => {
    let storedData = localStorage.getItem("todo-list");
    todoList = JSON.parse(storedData);
    let AfterCleared = todoList.filter((element) => element.completed === false);
    todoList = AfterCleared;
    for(let i=0;i<todoList.length;i++){
      todoList[i].index = i;
    }
    localStorage.setItem("todo-list", JSON.stringify(todoList));
}
