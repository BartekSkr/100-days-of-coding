const data = localStorage.getItem("todoList")
  ? JSON.parse(localStorage.getItem("todoList"))
  : {
      todo: [],
      completed: [],
    };

renderTodoList();

//ADDING TEXT FROM INPUT TO THE LIST
document.querySelector(".todo-btn").addEventListener("click", (e) => {
  e.preventDefault();
  let newItem = document.querySelector(".todo-input").value;
  if (newItem) {
    addItemTodo(newItem);
    document.querySelector(".todo-input").value = "";

    data.todo.push(newItem);
    saveToLocalStorage();
  }
});

function renderTodoList() {
  if (!data.todo.length && !data.completed.length) return;

  for (let i = 0; i < data.todo.length; i++) {
    let todoValue = data.todo[i];
    addItemTodo(todoValue);
  }

  for (let j = 0; j < data.completed.length; j++) {
    let completedValue = data.completed[j];
    addItemTodo(completedValue, true);
  }
}

function saveToLocalStorage() {
  localStorage.setItem("todoList", JSON.stringify(data));
}

function removeItem() {
  const item = this.parentNode.parentNode;
  const parent = item.parentNode;
  const id = parent.id;

  if (id === "todo") {
    data.todo.splice(data.todo.indexOf(item.innerText), 1);
  } else {
    data.completed.splice(data.completed.indexOf(item.innerText), 1);
  }

  saveToLocalStorage();

  parent.removeChild(item);
}

function completeItem() {
  const item = this.parentNode.parentNode;
  const parent = item.parentNode;
  const id = parent.id;

  if (id === "todo") {
    data.todo.splice(data.todo.indexOf(item.innerText), 1);
    data.completed.push(item.innerText);
  } else {
    data.completed.splice(data.completed.indexOf(item.innerText), 1);
    data.todo.push(item.innerText);
  }

  saveToLocalStorage();

  //CHECK IF THE ITEM SHOULD BE ADDED TO TODO OR COMPLETED LIST
  let target =
    id === "todo"
      ? document.getElementById("completed")
      : document.getElementById("todo");

  parent.removeChild(item);
  target.insertBefore(item, target.childNodes[0]);
}

//ADDING NEW ITEMS TO THE LIST
function addItemTodo(itemText, completed) {
  const list = completed
    ? document.getElementById("completed")
    : document.getElementById("todo");

  const item = document.createElement("li");
  item.innerText = itemText;

  const buttons = document.createElement("div");
  buttons.classList.add("buttons");

  const completeBtn = document.createElement("i");
  completeBtn.innerHTML = `<i class="fas fa-check"></i>`;

  //CLICK EVENT FOR COMPLETING THE ITEM
  completeBtn.addEventListener("click", completeItem);

  const deleteBtn = document.createElement("i");
  deleteBtn.innerHTML = `<i class="fas fa-trash-alt"></i>`;

  //CLICK EVENT FOR REMOVING THE ITEM
  deleteBtn.addEventListener("click", removeItem);

  buttons.appendChild(completeBtn);
  buttons.appendChild(deleteBtn);
  item.appendChild(buttons);
  list.appendChild(item);
}
