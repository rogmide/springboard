// const todos = document.querySelectorAll('li');


// function allTodos() {
//     for (const li of todos) {
//         li.classList.toggle('completed');
//     }
// }

// const h1 = document.querySelector('h1');

// setInterval(() => {

//     if (h1.classList.contains('big')) {
//         h1.innerText = "SAD";
//     } else {
//         h1.innerText = "HAPPY";
//     }
//     h1.classList.toggle('big');
//     h1.classList.toggle('small');
// }, 1000);

const newTodo = document.createElement('li');
const boldText = document.createElement('b');
boldText.textContent = "Dont forget to lock";
const ul = document.querySelector('ul');

newTodo.append(boldText);
ul.append(newTodo);

newTodo.classList.add('todo');

const secondTodo = document.createElement('li');
secondTodo.textContent = "Order Some La croix";

ul.append(newTodo, secondTodo);

secondTodo.classList.add('todo');

const newImg = document.createElement('img');
newImg.setAttribute('src', 'dogss.jpg')
newImg.classList.add('imgT');

document.body.prepend(newImg);

// const removeMe = document.querySelector('#remove-me');
// ul.removeChild(removeMe);

const removeMe = document.querySelector('#remove-me');
removeMe.remove();
const h1 = document.querySelector('h1');
h1.remove();