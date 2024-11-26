import "./styles.css";

/**
 * todo list - 10 min
 * 1. input x
 * 2. add button x
 * 3. delete x
 * 4. delete all
 * 5. display the todo
 */

// data-value => dataset
// data-index = 1 => dataset.index = 1
// data-blah = 'test' => dataset.blah = 'test'

// 1. state
let todoValue = "";
let todoList = [];

// 2. elements
let addButton = document.getElementById("addButton");
let todoInput = document.querySelector("#todoInput");
let todoContainer = document.getElementById("todoContainer");
let deleteAllButton = document.getElementById("deleteAllButton");
let selectButton = document.getElementById("selectButton");

// 3. render function
const renderInput = () => {
  todoInput.value = todoValue;
};

const renderList = () => {
  todoContainer.innerHTML = "";
  let todoFrag = document.createDocumentFragment();
  todoList.forEach((item, index) => {
    let todoItem = document.createElement("li");
    todoItem.innerHTML = `<span>${item}</span><button data-index="${index}">x</button>`;
    todoFrag.appendChild(todoItem);
  });
  todoContainer.appendChild(todoFrag);
};

const render = () => {
  renderInput();
  renderList();
};

// 4. event listener => reuse render function
addButton.addEventListener("click", () => {
  if (!todoInput.value.trim().length) return;
  let todo = todoInput.value;
  todoList.push(todo);
  todoInput.value = "";
  renderList();
});

deleteAllButton.addEventListener("click", () => {
  todoList = [];
  renderList();
});

// Event delegation
todoContainer.addEventListener("click", (e) => {
  // e.target
  const idx = e.target.dataset.index;
  if (idx !== undefined) {
    todoList.splice(idx, 1);
  }
  renderList();
});

// total render
render();
