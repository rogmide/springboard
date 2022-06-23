function createInstructor(firstName, lastName) {
    return {
        firstName: firstName,
        lastName: lastName
    }
}

const createInstructor2 = (firstName, lastName) => {
    return {
        firstName,
        lastName
    }
}

let favoriteNumber = 42;

// let instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"

let instructor = {
    firstName: "Colt",
    [favoriteNumber]: "That is my favorite!"
}


let instructor2 = {
    firstName: "Colt",
    sayHi: function () {
        return "Hi!";
    },
    sayBye: function () {
        return this.firstName + " says bye!";
    }
}


let instructor3 = {
    firstName: "Colt",
    sayHI() {
        return "Hi!";
    },
    sayBye() {
        return instructor3.firstName + " says bye!";
    }
}

const d = createAnimal("dog", "bark", "Woooof!")
// {species: "dog", bark: ƒ}


const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// {species: "sheep", bleet: ƒ}

function createAnimal(species, verb, sound) {
    return {
        species,
        [verb](){
            return sound
        }
    }
}


