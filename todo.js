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

function isChecked(event) {
  const isCheck = checkBox.checked;
  console.log('checked');
  if (isCheck == true) {
    listContent.className = 'checked-list-content';
  } else {
    listContent.className = 'list-content';
  }
}

function deleteItem(event) {
  const li = event.target.parentElement.parentElement;
  li.remove();
}

function paintToDo() {
  const li = document.createElement('li');
  const span = makeSpan();

  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = '❌';
  deleteBtn.className = 'list-delete-btn';
  deleteBtn.addEventListener('click', deleteItem);
  const rightDiv = makeRightDiv();
  const leftDiv = makeLeftDiv();
  const checkBox = makeCheckBox();

  leftDiv.appendChild(checkBox);
  leftDiv.appendChild(span);
  rightDiv.appendChild(deleteBtn);
  li.appendChild(leftDiv);
  li.appendChild(rightDiv);
  todoList.appendChild(li);
}

function addTodo(event) {
  if (addValue.value != false) {
    paintToDo();
  }
}
