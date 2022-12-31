//....................................project...................................................................

const todoform = document.querySelector(".todo");

const todoinput = document.querySelector(".todo input[type = 'text']");
const todolist = document.querySelector(".todo-list");

todoform.addEventListener("submit", (e) => {
  e.preventDefault();
  const newtodotext = todoinput.value;
  const newli = document.createElement("li");
  const newliinnerHtml = `<span class="text">${newtodotext}</span>
  <div class="todobutton">
    <button class="todobtn done">Done</button>
    <button class="todobtn delete">Delete</button>
  </div>`;

  newli.innerHTML = newliinnerHtml;
  todolist.append(newli);

  todoinput.value = " ";
});

todolist.addEventListener("click", (e) => {
  if (e.target.classList.contains("done")) {
    const listspan = e.target.parentNode.previousElementSibling;
    listspan.style.textDecoration = "line-through";
  }
});

todolist.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    const target = e.target.parentNode.parentNode;
    target.remove();
  }
});
//............................................project.........................................................
// const btn = document.querySelector(".btn");

// btn.addEventListener("click", (e) => {
//   console.log("you click me");
//   console.log(e);
// });
