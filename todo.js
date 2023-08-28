function makeDiv() {
  const div = document.createElement('div');
  div.className = 'todo-list-container';
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

function makeDeleteButton() {
  button = document.createElement('button');
  button.innerText = 'X';
  button.setAttribute('type', 'button');
  button.setAttribute('onClick', 'deleteItem()');
  button.className = 'list-delete-btn';
  button.id = 'list-delete-btn';
  return button;
}

function makeEditButton() {
  button = document.createElement('button');
  button.innerText = '편집';
  button.setAttribute('type', 'button');
  button.setAttribute('onClick', 'editItem()');
  button.className = 'list-edit-btn';
  button.id = 'list-edit-btn';
  return button;
}

function isChecked() {
  const isCheck = checkBox.checked;
  if (isCheck == true) {
    listContent.className = 'checked-list-content';
  } else {
    listContent.className = 'list-content';
  }
}

function addTodo(event) {
  const div = makeDiv();
  const span = makeSpan();
  const input = makeCheckBox();
  const deleteBtn = makeDeleteButton();
  const editBtn = makeEditButton();

  div.appendChild(input);
  div.appendChild(span);
  div.appendChild(editBtn);
  div.appendChild(deleteBtn);

  console.log(div);
  console.log(span);
  toDO.appendChild(div);
}

function deleteItem(event) {
  console.log('delete');
}

function editItem(event) {
  console.log('edit');
}
