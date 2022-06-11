const listContainer = document.querySelector('.order-list');
const formAddTodo = document.querySelector('.add-todo');

listContainer.addEventListener('click', function (e) {
    if (e.target.tagName === 'DIV') {
        const listItem = e.target.parentElement;
        if (!e.target.parentElement.classList.contains('scratch')) {
            e.target.parentElement.classList.toggle('scratch');
            e.target.parentElement.remove();
            listContainer.append(listItem);
        } else {
            e.target.parentElement.classList.toggle('scratch');
            e.target.parentElement.remove();
            listContainer.prepend(listItem);
        }
    }

    if (e.target.tagName === 'P') {
        const listItem = e.target.parentElement.parentElement;
        if (!e.target.parentElement.parentElement.classList.contains('scratch')) {
            e.target.parentElement.parentElement.classList.toggle('scratch');
            e.target.parentElement.parentElement.remove();
            listContainer.append(listItem);
        } else {
            e.target.parentElement.parentElement.classList.toggle('scratch');
            e.target.parentElement.parentElement.remove();
            listContainer.prepend(listItem);
        }
    }

    if (e.target.tagName === 'SPAN') {
        e.target.parentElement.parentElement.remove();
    }
});

const tast = document.querySelector('.new-item');
const newAlert = document.querySelector('.alert');
const newItem = document.querySelector('.new-item');

//newAlert.setAttribute('hidden', true);

formAddTodo.addEventListener('click', function (e) {

    if (e.target.tagName === 'SPAN') {
        if (!(tast.value === '')) {
            const newTodo = document.querySelector('.new-item');
            const newDiv = document.createElement('div');
            const newP = document.createElement('p');
            newP.innerText = newTodo.value;
            const newSpan = document.createElement('span');
            newSpan.classList.add('material-symbols-outlined', 'icon-center');
            newSpan.innerText = 'restore_from_trash';
            newDiv.append(newP);
            newDiv.append(newSpan);
            //item-list
            const newLi = document.createElement('li');
            newLi.append(newDiv);
            newLi.classList.add('item-list');
            listContainer.prepend(newLi);
            newTodo.value = '';
        } else {
            newAlert.removeAttribute('hidden');
        }
    }
});

newItem.addEventListener('keypress', function (e) {
    newAlert.setAttribute('hidden', true);
    e.preventDefault();
    if (e.key === 'Enter') {
        const newTodo = document.querySelector('.new-item');
        const newDiv = document.createElement('div');
        const newP = document.createElement('p');
        if (newTodo.value === '') {
            newAlert.removeAttribute('hidden');
            return '';
        }
        newP.innerText = newTodo.value;
        const newSpan = document.createElement('span');
        newSpan.classList.add('material-symbols-outlined', 'icon-center');
        newSpan.innerText = 'restore_from_trash';
        newDiv.append(newP);
        newDiv.append(newSpan);
        //item-list
        const newLi = document.createElement('li');
        newLi.append(newDiv);
        newLi.classList.add('item-list');
        listContainer.prepend(newLi);
        newTodo.value = '';
    } else {
        newItem.value += e.key;
    }
});