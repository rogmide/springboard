const todos = document.querySelectorAll('li');


function allTodos() {
    for (const li of todos) {
        li.classList.toggle('completed');
    }
}

const h1 = document.querySelector('h1');

setInterval(() => {

    if (h1.classList.contains('big')) {
        h1.innerText = "SAD";
    } else {
        h1.innerText = "HAPPY";
    }
    h1.classList.toggle('big');
    h1.classList.toggle('small');
}, 1000);