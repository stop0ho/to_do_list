function addTodo(event) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  li.appendChild(span);
  span.innerText = addValue.value;
  addValue.value = '';
  console.log(li);
  toDO.appendChild(li);
}
