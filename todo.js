function makeDiv() {
  const div = document.createElement('div');
  div.className = 'todo-list-container';
  return div;
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

function makeSpan() {
  const span = document.createElement('span');
  span.innerText = addValue.value;
  addValue.value = '';
  span.className = 'list-content';
  span.id = 'listContent';
  return span;
}

function makeCheckBox() {
  const input = document.createElement('input');
  input.id = 'checkBox';
  input.className = 'check-box';
  input.setAttribute('type', 'checkbox');
  input.setAttribute('onClick', 'isChecked()');
  return input;
}

function isChecked() {
  const isCheck = checkBox.checked;
  if (isCheck == true) {
    listContent.className = 'checked-list-content';
  } else {
    listContent.className = 'list-content';
  }
}

function paintToDo(newTodo) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerText = newTodo;
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = '❌';
  // const img = new Image();
  // img.src = './assets/delete.png';
  // img.className = 'btnImage';
  // deleteBtn.appendChild(img);
  deleteBtn.className = 'list-delete-btn';
  deleteBtn.addEventListener('click', deleteItem);

  li.appendChild(span);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);
}

function deleteItem(event) {
  const li = event.target.parentElement;
  li.remove();
}


function addTodo(event) {
  if (addValue.value != false) {
    const newTodo = addValue.value;
    addValue.value = '';
    paintToDo(newTodo);

    // const div = makeDiv();
    // const rightDiv = makeRightDiv();
    // const leftDiv = makeLeftDiv();
    // const content = makeSpan();
    // const checkBox = makeCheckBox();
    // const deleteBtn = makeDeleteButton();
    // const editBtn = makeEditButton();

    // leftDiv.appendChild(checkBox);
    // leftDiv.appendChild(content);
    // rightDiv.appendChild(editBtn);
    // rightDiv.appendChild(deleteBtn);
    // div.appendChild(leftDiv);
    // div.appendChild(rightDiv);

    // console.log(div);
    // toDO.appendChild(div);
  }
}
