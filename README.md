# 자바스크립트로 to do list 만들기

## [페이지로 이동](https://stop0ho.github.io/to_do_list/)

### 📸 미리보기

<img width="697" alt="image" src="https://github.com/stop0ho/to_do_list/assets/68852637/5a816b76-bae6-4698-8c92-1fab93af46f1">

### 💖 기능소개

1. 할 일 추가 기능 : 입력 칸에 할 일을 쓰고 `Enter`를 누르거나, `+` 버튼을 누르면 할 일이 추가됩니다.
2. 할 일 삭제 기능 : `x` 버튼을 누르면 리스트에서 할 일을 삭제할 수 있습니다.
3. 체크 기능 : 체크박스를 클릭하면 다 한 일이 체크 됩니다.
4. 저장 기능 : 새로고침해도 현재 상태가 그대로 유지 됩니다.

---

## 구현 방법

### 📌 할 일 추가 기능

```javascript
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
```

- 추가 버튼을 누르면 `addTodo`함수가 실행됩니다.
- 입력받은 값을 저장한 뒤, 입력창을 빈 칸으로 만들어줍니다.
- localStorage를 이용한 관리를 위해 `newTodoObj`라는 객체를 만들어서 거기에 text, id, check를 저장해주고 `toDos`에 넣어줍니다. 여기서 `toDos`는 localStorage에 저장될, 또는 저장 되어 있는 값들을 관리하는 객체입니다.
- `paintToDo` 함수를 실행해 화면에 새로운 객체를 그려줍니다.
- `saveToDos` 함수를 이용해 현재 `toDos`의 상태를 저장해줍니다.

```javascript
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
```

- `paintToDo` 함수의 구성입니다.
- `newTodoObj.check` 의 값을 확인해서 이전에 이미 체크 된 할 일에 대해 체크박스를 체크된 상태로, 글씨에는 취소선이 그어진 상태로 만들어줍니다.

### 📌 할 일 삭제 기능

```javascript
function deleteItem(event) {
  const li = event.target.parentElement.parentElement;
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  li.remove();
  saveToDos();
}
```

- 삭제 버튼을 누르면 `deletItem` 함수가 실행됩니다.
- 현재 버튼이 눌린 곳의 부모의 부모(구간을 left, right로 나눠놨기에 두 번을 타고 올라가야 합니다.)로 올라가면 해당 할 일의 줄 전체를 지울 수 있습니다.
- 로컬스토리지에 있는 값 역시도 지워줘야 하며, 지운 이후에 `saveToDos()`를 이용해 로컬스토리지를 갱신해줍니다.

### 📌 체크 기능

```javascript
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
```

- 체크버튼을 누르면 `isChecked` 함수가 실행됩니다.
- 체크버튼이 체크 상태인지 아닌지를 확인합니다.
- 체크 상태라면 로컬스토리지에 저장된 check 값을 true로 변경하고, 내용에 취소선을 그어줍니다.
- 체크 상태가 아니라면 로컬스토리지에 저장된 check 값을 false로 변경하고, 내용이 정상적으로 보이게끔 합니다.

### 📌 localStorage 저장 기능

```javascript
function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); // array 값을 string으로 바꿈
}
```

- 현재 상태를 localStorage에 저장해주는 `saveToDos()` 함수입니다.

```javascript
const savedToDo = localStorage.getItem(TODOS_KEY);
if (savedToDo) {
  const pasredToDos = JSON.parse(savedToDo);
  toDos = pasredToDos;
  pasredToDos.forEach(paintToDo);
}
```

- 로컬스토리지에 저장되어 있는 값들을 `savedToDo`에 불러오고, 빈 값이 아니라면 배열로 바꿔준 뒤, `toDos`에 저장합니다.
- 그리고 로컬스토리지에 저장되어 있는 값들을 `paintToDo` 함수를 이용해 화면에 그려줍니다. 이로써 새로고침을 해도 이미 적어둔 내용들이 사라지지 않게끔 할 수 있었습니다.

---

## 아쉬운 점

- 코드를 좀 더 최적화 할 수 있는지에 대해 고민해봐야 할 것 같습니다.

## 후에 추가하고 싶은 점

- 이미 추가한 할 일에 대해 `편집 기능`을 추가해보고 싶습니다.
- 할 일에 대해 우선순위 관리할 수 있도록 할 일의 순서들을 정렬하는 기능을 구현해보고 싶습니다.
- 할 일에 하위항목을 추가할 수 있게끔 구현해보고 싶습니다.
