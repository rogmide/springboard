// document.addEventListener('keypress', function(e){
//     console.log(e.key);
// });
// document.addEventListener('keydown', function(e){
//     console.log(e.key);
// });


//const remove = document.querySelectorAll('li button');
const form = document.querySelector('#add-friend');
const input = document.querySelector('#frist-name');
const friendList = document.querySelector('#friend-list');

// for (const btn of remove) {
//     btn.addEventListener('click', function (e) {
//         e.target.parentElement.remove();
//     });
// }


friendList.addEventListener('click', function (e) {
    if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
    } else if (e.target.tagName === "LI"){
        e.target.classList.add('best-friend');
        const heart = document.createElement('span');
        heart.innerHTML = '&hearts;';
        e.target.prepend(heart);
    }
});

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const newFriend = document.createElement('li');
    const removeBtn = document.createElement('button');
    removeBtn.innerText = 'remove';
    // removeBtn.addEventListener('click', function (e) {
    //     e.target.parentElement.remove();
    // });
    newFriend.innerText = input.value;
    newFriend.appendChild(removeBtn);
    input.value = "";
    friendList.appendChild(newFriend);



});