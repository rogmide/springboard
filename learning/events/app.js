const h1 = document.querySelector("h1");

//WE NEVER USE THIS ONE - BUT DON DELETE IT FROM YOUR BRAIN
// h1.onclick = function () {
//     console.log("You just clicked the h1 element!");
// }

// h1.addEventListener("click", function(){
//   console.log("You just clicked the h1 element!");
// })

// h1.addEventListener("click", function(event){
//     console.log(event) // let's take a look!
//   })

// const formElement = document.querySelector("form");

// formElement.addEventListener("submit", function (event) {
//     //prevent refreshing the page 
//     event.preventDefault();
//     console.log("you just submitted the form!")
// })

// document.addEventListener("keypress", function (event) {
//     if (event.key === "a") {
//         console.log("you just pressed the 'a' key!");
//     }
// });


// const buttons = document.querySelectorAll("ul button");

// for (let button of buttons) {
//     button.addEventListener("click", function (event) {
//         event.target.parentElement.remove();
//     });
// }

// const form = document.querySelector(".sec-form");
// const friendList = document.querySelector("#friend-list");

// form.addEventListener("submit", function (event) {
//     event.preventDefault();
//     const newFriendInput = document.querySelector("#first-name");
//     const newLi = document.createElement("li");
//     const newButton = document.createElement("button");
//     newLi.innerText = newFriendInput.value;
//     newButton.innerText = "Remove";

//     newButton.addEventListener("click", function (event) {
//         event.target.parentElement.remove();
//     });

//     newLi.append(newButton);
//     friendList.append(newLi);
//     form.reset();
// });


// const ul = document.querySelector("#cars");

// ul.addEventListener("click", function(event) {
//   const selectedElement = event.target;
//   console.log("see all data attributes", selectedElement.dataset);
//   console.log(
//     "see one data attribute",
//     selectedElement.getAttribute("data-model")
//   );
// });


//DONT USE THIS OPTIONS
function makeBody(color) {
    document.body.style.backgroundColor = color;
}

// const btn = document.querySelector('#black');
const btn2 = document.querySelector('#color');

// btn2.onclick = function () {
//     makeBody('#202124');
// };

// btn.onclick = function () {
//     makeBody('black');
// };

//USE this WAY OF DOING EVENTS
const violetBtn = document.querySelector('#violete');
violetBtn.addEventListener('click', function () {
    makeBody('violet');
});

btn2.addEventListener('click', function () {
    makeBody('#202124');
});

const p = document.querySelector('p');

p.addEventListener('click', function(e){
    console.log(e);
});


