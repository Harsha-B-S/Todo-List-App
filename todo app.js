let todoList = [{ item: "Wish Me!", dueDate: "2001-10-04", dueTime: "00:00" }];
if (!JSON.parse(localStorage.getItem("todoList"))) {
  localStorage.setItem("todoList", JSON.stringify(todoList));
}
displayItems();

function addTodo() {
  let inputElement = document.querySelector("#todo-input");
  let dateElement = document.querySelector("#todo-date");
  let timeElement = document.querySelector("#todo-time");
  let todoItem = inputElement.value;
  let todoDate = dateElement.value;
  let todoTime = timeElement.value;
  if (todoItem) {
    todoList = JSON.parse(localStorage.getItem("todoList"));
    todoList.push({ item: todoItem, dueDate: todoDate, dueTime: todoTime });
    localStorage.setItem("todoList", JSON.stringify(todoList));
    inputElement.value = "";
    dateElement.value = "";
    timeElement.value = "";
    displayItems();
  }
}

function displayItems() {
  todoList = JSON.parse(localStorage.getItem("todoList"));
  let containerElement = document.querySelector(".todo-container");
  let newHtml = "";
  for (let i = 0; i < todoList.length; i++) {
    newHtml += `<span>${todoList[i].item}</span>
                    <span>${todoList[i].dueDate}</span>
                    <span>${todoList[i].dueTime}</span>
                    <button class="todo-delete" onclick="
                         todoList.splice(${i},1);
                         localStorage.setItem('todoList', JSON.stringify(todoList)); 
                         displayItems();">Delete</button>`;
  }

  containerElement.innerHTML = newHtml;
}
