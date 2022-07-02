async function getData() {
    const response = await axios.get('https://swapi.dev/api/planets');
    console.log(response);
    for (const planet of response.data.results) {
        console.log(planet.name);
    }
    console.log('');
    const nextUrl = response.data.next;
    const nextPlanet = await axios.get(nextUrl);
    for (const planet of nextPlanet.data.results) {
        console.log(planet.name);
    }
}

async function getDataSpaceX() {
    const ul = ($('#getLaunches'));
    const response = await axios.get('https://api.spacexdata.com/v3/launches/upcoming');
    for (const lunch of response.data) {
        const newLi = $(`<li> <b> ${lunch.mission_name}</b> -${lunch.rocket.rocket_name} </li>`);
        ul.append(newLi);
    }
}

async function getRandomDog() {
    const rep = await axios.get('https://dog.ceo/api/breeds/image/random');
    const img = $(`<img src=" ${rep.data.message}" alt="Some Random Img">`);
    $('.imgHolder').append(img);
}
async function getRandomDogByBreed(breed) {
    try {
        const rep = await axios.get(`https://dog.ceo/api/breed/${breed}/images/random`);
        const img = $(`<img src=" ${rep.data.message}" alt="Some Random Img">`);
        $('.imgHolder').append(img);
    } catch (error) {
        alert('Sorry breed cant be found');
        getRandomDog();
    }
}

$(() => {
    $('#btn').on('click', getDataSpaceX);
});
$(() => {
    $('#btnDod').on('click', getRandomDog);
});
$(() => {
    const breed = $('#fname');
    $('#submit').on('click', function (e) {
        e.preventDefault();
        getRandomDogByBreed(breed.val());
    });
});

async function getJoke(firstName, lastName) {
    const rep = await axios.get(`http://api.icndb.com/jokes/random`, { params: { firstName, lastName } });
    console.log(rep.data.value.joke);
}

// async function getUsers(firstName, lastName) {
//     const rep = await axios.get(`https://reqres.in/api/users`);
//     console.log(rep);
// }
// async function createUsers() {
//     const rep = await axios.post(`https://reqres.in/api/users`, { params: { username: 'Chiken', email: 'chiken@gmail.com', age: 1 } });
//     console.log(rep);
// }

async function getUsers(token) {
    const res = await axios.get('https://hack-or-snooze-v3.herokuapp.com/users/', { params: { token } });
    console.log(res);
}
async function signUp(name, username, password) {
    try {
        const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/signup', { user: { name, username, password } });
    } catch (error) {
        alert('that name is taken');
    }
}
async function login(username, password) {
    try {
        const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/login', { user: { username, password } });
        console.log(res);
        return res.data.token;
    } catch (error) {

    }
}

async function getUserWithAuth() {
    const token = await login('rogm', '123123');
    getUsers(token);
}

async function createStory() {
    const token = await login('rogm', '123123');
    const newStory = {
        token,
        story: {
            "author": "ML",
            "title": "The best story ever",
            "url": "http://google.com"
        }
    }
    const res = await axios.post('https://hack-or-snooze-v3.herokuapp.com/stories', newStory);
    console.log(res);
}