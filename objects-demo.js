// DECLARING NEW OBJECTS

let me = {
    firstName: 'Jaxon',
    lastName: 'Hermansen',
    age: 26
}

let attribute = 'age'

// delete me.age (delete attribute)

// console.log(me.firstName)
// console.log(me[attribute])

let meal = {
    appitizer: 'salad',
    entree: 'steak',
    drink: 'coke'
}

meal.desert = 'hot fudge sundae'

// destructuring ex below
let {appitizer} = meal
let {entree: takeHome} = meal
// let takeHome = meal.entree (saving to variable (another way to write code on line above))

// FOR IN LOOP

// for(let attribute in me){
//     console.log(attribute, me[attribute])
// }

// for(let 'attribute/key stand-in' in 'object to loop through'){
//     what you want it to do
// }

// CLASSES

class Pet {
    constructor(name, color, age){
        this.name = name,
        this.color = color,
        this.age = age
    }

    howOld() {
        console.log(`${this.name} is ${this.age} years old`)
    }
}

// let object = new Pet('Gus Gus', 'Black and Gray', 1)
// object.howOld()

class Dog extends Pet {
    constructor(name, color, age, breed) {
        super(name, color, age)
        this.breed = breed,
        this.trainingLevel = 0
    }

    train(){
        this.trainingLevel +=1
        console.log(`${this.name}'s training level is now ${this.trainingLevel}`)
    }
}

let myPet = new Dog('Gus Gus', 'Black and Gray', 1, 'Bernadoodle')

class Cat extends Pet {
    constructor(name, color, age, breed, temperment){
        super(name, color, age)
        this.breed = breed,
        this.temperment = temperment
    }
}