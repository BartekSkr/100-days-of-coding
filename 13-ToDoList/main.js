const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".todo-list");
const newListInput = document.querySelector(".todo-input");
const clearAll = document.querySelector(".clear-all");

const LOCAL_STORAGE_LIST_KEY = "task.list";

const todoList = JSON.parse(localStorage.getItem(LOCAL_STORAGE_LIST_KEY)) || [];

addItems.addEventListener("submit", (e) => {
  e.preventDefault();
  const listName = newListInput.value;
  if (listName === null || listName === "") return;

  const list = createList(listName);
  newListInput.value = null;
  todoList.push(list);
  saveAndRender();
});

function createList(name) {
  return { id: Date.now().toString(), name: name };
}

function save() {
  localStorage.setItem(LOCAL_STORAGE_LIST_KEY, JSON.stringify(todoList));
}

function saveAndRender() {
  save();
  render();
}

function render() {
  clearElement(itemsList);
  todoList.forEach((list) => {
    const listElement = document.createElement("li");
    listElement.dataset.listId = list.id;
    listElement.classList.add("todo-list");
    listElement.innerText = list.name;

    const listIconDiv = document.createElement("div");
    listIconDiv.classList.add("todo-list-div");

    listIconCheck = document.createElement("i");
    listIconCheck.innerHTML = `<i class="fas fa-check"></i>`;

    listIconDelete = document.createElement("i");
    listIconDelete.innerHTML = `<i class="fas fa-trash-alt"></i>`;

    listIconDiv.appendChild(listIconCheck);
    listIconDiv.appendChild(listIconDelete);
    listElement.appendChild(listIconDiv);
    itemsList.appendChild(listElement);

    listIconCheck.addEventListener("click", check);
    listIconDelete.addEventListener("click", deleteItem);
  });
}

function clearElement(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function clear() {
  localStorage.clear();
  location.reload();
}

function check(e) {
  e.target.parentElement.parentElement.parentElement.classList.toggle(
    "completed"
  );
}

function deleteItem(e) {
  e.target.parentElement.parentElement.parentElement.classList.add("fall");
  e.target.parentElement.parentElement.parentElement.addEventListener(
    "transitionend",
    () => {
      e.target.parentElement.parentElement.parentElement.remove();
    }
  );
}

clearAll.addEventListener("click", clear);

render();
