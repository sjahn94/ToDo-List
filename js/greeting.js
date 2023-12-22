const toDoNameForm = document.querySelector(".todo_name_column");
const toDoName = document.querySelector(".todo_name_column input");
const toDoSpan = document.querySelector(".todo_name_column span");

function handlePageLoad() {
  const savedUserName = localStorage.getItem("username");
  if (savedUserName !== null) {
    toDoName.className = "hidden";
    toDoSpan.innerText = `Hello ${savedUserName}`;
  }
}

function handleSubMitToDoName(event) {
  event.preventDefault();
  const username = toDoName.value;
  localStorage.setItem("username", username);
  toDoName.className = "hidden";
  toDoSpan.innerText = `Hello ${username}`;
}

toDoNameForm.addEventListener("submit", handleSubMitToDoName);
handlePageLoad();
