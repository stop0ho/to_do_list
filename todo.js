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

function makeDeleteButton() {
  const button = document.createElement('button');
  const img = new Image();
  img.src = './assets/delete.png';
  img.className = 'btnImage';
  button.appendChild(img);
  button.setAttribute('type', 'button');
  button.setAttribute('onClick', 'deleteItem()');
  button.className = 'list-delete-btn';
  button.id = 'listDeleteBtn';
  return button;
}

function makeEditButton() {
  const button = document.createElement('button');
  const img = new Image();
  img.src = './assets/edit.png';
  img.className = 'btnImage';
  button.appendChild(img);
  button.setAttribute('type', 'button');
  button.setAttribute('onClick', 'editItem()');
  button.className = 'list-edit-btn';
  button.id = 'listEditBtn';
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
  if (addValue.value != false) {
    const div = makeDiv();
    const rightDiv = makeRightDiv();
    const leftDiv = makeLeftDiv();
    const content = makeSpan();
    const checkBox = makeCheckBox();
    const deleteBtn = makeDeleteButton();
    const editBtn = makeEditButton();

    leftDiv.appendChild(checkBox);
    leftDiv.appendChild(content);
    rightDiv.appendChild(editBtn);
    rightDiv.appendChild(deleteBtn);
    div.appendChild(leftDiv);
    div.appendChild(rightDiv);

    console.log(div);
    toDO.appendChild(div);
  }
}

function deleteItem(event) {
  console.log('delete');
}

function editItem(event) {
  console.log('edit');
}
