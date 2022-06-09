
// const mainGreeting = document.getElementById("main-greeting")
// console.log(mainGreeting.innerText) // "Hello World!"

// //mainGreeting.innerText = "It's changed!";

// //mainGreeting.innerHTML = "<article>Just Changed!</article>"

// const mainHeading = document.querySelector("h1")

// mainHeading.style.color = "red";
// mainHeading.style.backgroundColor = "green"

// const firstInput = document.querySelector("input")

// firstInput.setAttribute('type', 'password');
// firstInput.setAttribute('class', 'my-pass');
// firstInput.value = "enter some password"

// mainHeading.classList // []

// mainHeading.classList.add("top-heading") // ["top-heading"]
// //CREATING

// const newButton = document.createElement("button");

// const newUnorderedList = document.createElement("ul");

// const newDiv = document.createElement("div");

// newDiv.innerText = "a brand new div!";
// newDiv.style.color = "tomato"


// const ul = document.querySelector("ul");

// const newLi = document.createElement("li");

// newLi.innerText = "Hello!";

// ul.append(newLi);

// ul.remove();

// const foundDiv = document.querySelector("div");

// const h1 = document.querySelector('h1');

// h1.innerText = "GO AWAY!"

// const p = document.querySelector('p');

// const ol = document.getElementsByTagName('ol');

// const i = document.querySelector('i');

// i.innerText = i.innerText.toUpperCase();

const allh1 = document.querySelectorAll('h1');

for (let h1 of allh1) {
    h1.style.color = 'purple';
    h1.style.fontSize = '20px';
}

const myimg = document.querySelectorAll('img');

for (const img of myimg) {
    img.style.width = "100px";
    img.style.border = "2px solid green";
}