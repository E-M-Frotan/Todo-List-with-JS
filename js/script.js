// getting document manually
let myForm = document.getElementById("form");
let myInput = document.getElementById("input");
let list = document.getElementById("list");
let todoListItems = document.getElementById("todo-list-items");
list.style.visibility = "hidden";
// adding event to form and add and delete functionalies
myForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (myInput.value === "") return;
  todoListItems.hasChildNodes
    ? (list.style.visibility = "visible")
    : (list.style.visibility = "hidden");
  // create a new div
  let todoListItem = document.createElement("div");
  // adding class to div
  todoListItem.classList = "todo-list-item";
  // create span
  let mySpan = document.createElement("span");
  // adding class to sapn
  mySpan.classList = "span";
  // adding input value to span
  mySpan.textContent = myInput.value;
  // create button element
  let myButton = document.createElement("button");
  // adding delete class to button
  myButton.classList = "delete";
  // create i element
  let myI = document.createElement("i");
  // adding class to i
  myI.classList = "fa-regular fa-trash-can";
  // == adding element to it's parents ==
  myButton.appendChild(myI);
  todoListItem.appendChild(mySpan);
  todoListItem.appendChild(myButton);
  todoListItems.appendChild(todoListItem);
  myInput.value = "";
  // adding delete ablitity in newly created button
  let allTasks = document.querySelectorAll(".delete");
  let newlyCreated = allTasks[allTasks.length - 1];
  newlyCreated.addEventListener("click", () =>
    newlyCreated.parentElement.remove()
  );
  // lastTask[lastTask.length - 1].addEventListener("click", () => {
  //   let parent = lastTask.parentElement;
  //   parent.remove();
  // });
});
