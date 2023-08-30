let toDos = [];
const TODOS_KEY = 'todos';

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // array 값을 string으로 바꿈
}

function makeLeftDiv() {
  const div = document.createElement('div');
  div.className = 'todo-list-container-left';
  return div;
}

function makeRightDiv() {
  const div = document.createElement('div');
  div.className = 'todo-list-container-right';
  return div;
}

function makeSpan(newItem) {
  const span = document.createElement('span');
  span.innerText = newItem;

  span.className = 'list-content';
  span.id = 'listContent';
  return span;
}

function makeCheckBox() {
  const input = document.createElement('input');
  input.className = 'check-box';
  input.setAttribute('type', 'checkbox');
  input.addEventListener('click', isChecked);

  return input;
}

function makeDeleteBtn() {
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'list-delete-btn';
  deleteBtn.addEventListener('click', deleteItem);
  deleteBtn.innerText = 'x';
  return deleteBtn;
}

function isChecked(event) {
  const isCheck = event.target.checked;
  const li = event.target.parentElement.parentElement;
  const span = event.target.parentElement.children[1];
  if (isCheck == true) {
    span.className = 'checked-list-content';
    toDos.forEach((toDo) => {
      if (toDo.id === parseInt(li.id)) {
        toDo.check = true;
      }
    });
  } else {
    span.className = 'list-content';
    toDos.forEach((toDo) => {
      if (toDo.id === parseInt(li.id)) {
        toDo.check = false;
      }
    });
  }
  saveToDos();
}

function deleteItem(event) {
  const li = event.target.parentElement.parentElement;
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  li.remove();
  saveToDos();
}

function paintToDo(newTodoObj) {
  const li = document.createElement('li');
  li.id = newTodoObj.id;
  const span = makeSpan(newTodoObj.text);
  const deleteBtn = makeDeleteBtn();
  const rightDiv = makeRightDiv();
  const leftDiv = makeLeftDiv();
  const checkBox = makeCheckBox(newTodoObj.check);

  if (newTodoObj.check === true) {
    checkBox.checked = true;
    span.className = 'checked-list-content';
  }
  leftDiv.appendChild(checkBox);
  leftDiv.appendChild(span);
  rightDiv.appendChild(deleteBtn);
  li.appendChild(leftDiv);
  li.appendChild(rightDiv);
  todoList.appendChild(li);
}

function addTodo(event) {
  if (addValue.value != false) {
    const newItem = addValue.value;
    const newTodoObj = {
      text: newItem,
      id: Date.now(),
      check: false,
    };
    addValue.value = '';
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
  }
}

const savedToDo = localStorage.getItem(TODOS_KEY);
if (savedToDo) {
  const pasredToDos = JSON.parse(savedToDo);
  toDos = pasredToDos;
  pasredToDos.forEach(paintToDo);
}
