// title -> finish promises today
// completed -> true

const main = document.getElementById("main");
const ipt = document.getElementById("ipt")
const add = document.getElementById("add")

add.addEventListener("click", () => {
    let newTodo = {
        id: Date.now(),
        title: ipt.value,
        completed: false
    }

    todos = [...todos, newTodo]

    display()
})

let todos = [

];

function delTodo(id) {
    todos = todos.filter(todo => todo.id !== id)

    display()
}

function toggleTodo(id) {
    todos = todos.map(todo => {
        if(todo.id === id) {
            return {...todo, completed: !todo.completed}
        }
        return todo
    })

    display()
}

function display() {
    main.innerHTML = ""

  todos.map((todo) => {
    const todoDiv = document.createElement("div");

    //creating checkbox for toggling
    const check = document.createElement("input")
    check.type = "checkbox"
    check.checked = todo.completed
    todoDiv.appendChild(check)

    // toggling a todo
    check.addEventListener("change", () => {
        toggleTodo(todo.id)
    })

    // creating span for title
    const title = document.createElement('span')
    title.textContent = todo.title
    if(todo.completed) title.classList.add("done")
    todoDiv.appendChild(title)

    // creating button for deleting
    const delbtn = document.createElement("button")
    delbtn.textContent = "Delete"
    todoDiv.appendChild(delbtn)

    // deleting a todo
    delbtn.addEventListener("click", () => delTodo(todo.id))


    main.appendChild(todoDiv);
  });
}

display();

// checkbox, title, delete button
