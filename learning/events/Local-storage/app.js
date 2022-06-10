// const friends = ["Lana", "Hayden", "Jessie"];

// // the JSON.stringify function
// // converts the friends array into a JSON string

// localStorage.setItem("friends", JSON.stringify(friends));

// // JSON.parse converts the JSON string
// // back into JavaScript (in this case, a valid array)

// JSON.parse(localStorage.getItem("friends"));

// const preferences = {
//     fontSize: '18px',
//     favColor: 'teal'
// }

// localStorage.setItem('preferences', JSON.stringify(preferences));

// const { favColor } = JSON.parse(localStorage.preferences);
// document.body.style.backgroundColor = favColor;


const toggle = document.querySelector('input[type="checkbox"]');
if(localStorage.getItem('darkModeEnable')){
    document.body.className = 'dark'
    toggle.checked = true;
    
}

toggle.addEventListener('click', function (e) {
    const { checked } = toggle;
    if (checked){
        localStorage.setItem('darkModeEnable', true);
    } else {
        localStorage.removeItem('darkModeEnable');
    }

    toggle.checked ? document.body.className = 'dark' : document.body.className = '';    
});