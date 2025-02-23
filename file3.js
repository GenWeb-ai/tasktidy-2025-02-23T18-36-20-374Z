document.addEventListener('DOMContentLoaded', () => {
    const app = document.getElementById('app');
    app.innerHTML = `
        <h1>Todo List</h1>
        <input type="text" id="new-todo" placeholder="Add a new todo">
        <button id="add-todo">Add</button>
        <ul id="todo-list"></ul>
    `;

    const newTodoInput = document.getElementById('new-todo');
    const addTodoButton = document.getElementById('add-todo');
    const todoList = document.getElementById('todo-list');

    addTodoButton.addEventListener('click', () => {
        const todoText = newTodoInput.value.trim();
        if (todoText) {
            addTodoItem(todoText);
            newTodoInput.value = '';
        }
    });

    function addTodoItem(text) {
        const li = document.createElement('li');
        li.textContent = text;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'delete';
        deleteButton.addEventListener('click', () => {
            todoList.removeChild(li);
        });
        li.appendChild(deleteButton);
        todoList.appendChild(li);
    }
});