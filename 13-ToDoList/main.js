const addItems = document.querySelector(".add-items");
const itemsList = document.querySelector(".todo-list");
const checkButton = document.querySelector(".fa-check");
const deleteButton = document.querySelector(".fa-trash-alt");
const clearAll = document.querySelector(".clear-all");
const items = JSON.parse(localStorage.getItem("items")) || [];

function addItem(e) {
  e.preventDefault();
  const text = this.querySelector(".todo-input").value;
  const item = { text: text, done: false };

  items.push(item);
  populateList(items, itemsList);
  localStorage.setItem("items", JSON.stringify(items));
  this.reset();
}

function populateList(todoArr = [], todoList) {
  todoList.innerHTML = todoArr
    .map((todo, i) => {
      return `
        <li>
            <input type="checkbox" data-index=${i} id="item${i}" ${
        todo.done ? "checked" : ""
      }/>
            <label for="item${i}">${
        todo.text
      }</label><i class="fas fa-check"></i><i class="fas fa-trash-alt"></i>
        </li>
        `;
    })
    .join("");
}

function toggleDone(e) {
  if (!e.target.matches("input")) return;

  const el = e.target;
  const index = el.dataset.index;
  items[index].done = !items[index].done;
  localStorage.setItem("items", JSON.stringify(items));
  populateList(items, itemsList);
}

function clear() {
  localStorage.clear();
  location.reload();
}

addItems.addEventListener("submit", addItem);
itemsList.addEventListener("click", toggleDone);
// checkButton.addEventListener("click", check);
clearAll.addEventListener("click", clear);

populateList(items, itemsList);
