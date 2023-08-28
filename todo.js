function addTodo(event) {
  const div = document.createElement('div');
  const span = document.createElement('span');
  const input = document.createElement('input');
  const button = document.createElement('button');

  input.id = 'checkBox';
  input.className = 'check-box';
  input.setAttribute('type', 'checkbox');
  console.log(input);
  div.appendChild(input);

  span.innerText = addValue.value;
  addValue.value = '';
  span.className = 'list-content';
  span.id = 'list-content';
  div.appendChild(span);

  button.innerText = 'X';
  button.setAttribute('type', 'button');
  button.setAttribute('onClick', 'deleteItem()');
  button.className = 'list-btn';
  button.id = 'list-btn';
  div.appendChild(button);

  div.className = 'list';
  console.log(div);
  console.log(span);
  toDO.appendChild(div);
}

function deleteItem(event) {}
