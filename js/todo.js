/*
    1. 로컬 스토리지에 ToDo 추가
    2. X 클릭 시 ToDO 제거
    3. 새로고침 시 로컬 스토리지에 ToDO 있으면 목록 보여주기
    저장 형식 : {['id':현재시각,'text': ToDo]}
*/
const todoForm = document.querySelector(".todo_list_column form");
const todo = document.querySelector(".todo_list_column input");
const todoList = document.querySelector(".todo_list");

let toDos = [];

function removeToDo(e) {
  const li = e.target.parentNode;
  toDos = toDos.filter((todo) => parseInt(li.id) !== todo.id);
  console.log(toDos);
  li.remove();
  savedToDo();
}
function savedToDo() {
  localStorage.setItem("todo", JSON.stringify(toDos));
}
function paintToDo(todoObj) {
  const li = document.createElement("li");
  const spanBtn = document.createElement("span");
  const spanText = document.createElement("span");

  li.id = todoObj.id;
  spanText.innerText = todoObj.text;
  spanBtn.innerText = "❌";

  spanBtn.className = "todo_list_del";
  spanText.className = "todo_list_text";

  li.appendChild(spanBtn);
  li.appendChild(spanText);
  todoList.append(li);
  todo.value = "";

  spanBtn.addEventListener("click", removeToDo);
}

function submitHandler(e) {
  e.preventDefault();
  const todoValue = todo.value;

  const date = new Date();
  const newToDoObj = {
    id: date.getTime(),
    text: todoValue,
  };

  toDos.push(newToDoObj);
  paintToDo(newToDoObj);
  savedToDo();
}

function init() {
  const saveToDo = localStorage.getItem("todo");

  if (savedToDo !== null) {
    const parsedToDo = JSON.parse(saveToDo);
    parsedToDo.forEach((todo) => {
      paintToDo(todo);
      toDos.push(todo);
    });
  }
}

todoForm.addEventListener("submit", submitHandler);
init();
