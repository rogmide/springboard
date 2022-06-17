//1- Select the section with an id of container without using querySelector.
//2- Select the section with an id of container using querySelector.
//3- Select all of the list items with a class of “second”.
//4- Select a list item with a class of third, but only the list item inside of the ol tag.
//5- Give the section with an id of container the text “Hello!”.
//6- Add the class main to the div with a class of footer.
//7- Remove the class main on the div with a class of footer.
//8- Create a new li element.
//9- Give the li the text “four”.
//10- Append the li to the ul element.
//11- Loop over all of the lis inside the ol tag and give them a background color of “green”.
//12- Remove the div with a class of footer

const sectionId = document.getElementById('container');

const sectionQuery = document.querySelector('#container');

const secondElement = document.getElementsByClassName('second');

const olThird = document.querySelector('ol').getElementsByClassName('third');

//sectionId.innerText = "Hello";

const footer = document.querySelector('.footer');
footer.classList.add('main');

footer.classList.remove('main');

const newLi = document.createElement('li');

newLi.innerText = "four";

const ul = document.querySelector('ul');
ul.append(newLi);

const ol = document.querySelectorAll('ol li');

for (const li of ol) {
    li.style.backgroundColor = 'green';
}

footer.remove();