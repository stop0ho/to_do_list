function addTodo(event) {
  const div = document.createElement('div');
  const p = document.createElement('p');
  const input = document.createElement('input');

  input.id = 'checkBox';
  input.className = 'check-box';
  input.setAttribute('type', 'checkbox');
  console.log(input);
  div.appendChild(input);

  p.innerText = addValue.value;
  addValue.value = '';
  p.className = 'list-content';
  p.id = 'list-content';
  div.appendChild(p);
  div.className = 'list';
  console.log(div);
  console.log(p);
  toDO.appendChild(div);
}
