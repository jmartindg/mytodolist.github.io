//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions
function addTodo(event){
    event.preventDefault(); //Avoid refreshing

    const todoDiv = document.createElement('div'); //Add To-Do Div to Document
    todoDiv.classList.add("todo");
    const newTodo = document.createElement('li'); //Add Lists
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    // Complete Button
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fa fa-check" aria-hidden="true"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

    // Delete Button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa fa-times" aria-hidden="true"></i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);

    // Add to List
    todoList.appendChild(todoDiv);

    // Clear text after entering To-Do
    todoInput.value = "";
}

function deleteCheck(e){
    const item = e.target;

    // Delete To-Do List
    if(item.classList[0] === 'delete-btn'){
        const todo = item.parentElement;
        todo.remove();
    }
    // Check To-Do List
    if(item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }
}