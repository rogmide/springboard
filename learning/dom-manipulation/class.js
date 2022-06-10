const todos = document.querySelectorAll('li');


function allTodos() {
    for (const li of todos) {
        li.classList.toggle('completed');
    }
}

