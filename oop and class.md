### class and oop

## creating a class

```js

class Alien { // Name of the class
    // The constructor method will take a number of parameters and assign those parameters as properties to the created object.
    constructor (name, phrase) {
        this.name = name
        this.phrase = phrase
        this.species = "alien"
    }
    // These will be the object's methods.
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
    sayPhrase = () => console.log(this.phrase)
}
```


### creating instance of the class
```js
const alien1 = new alien('passing values that the constructor holds')
```
before lets see some things we can do to the class

#### instanceof
we can use instanceof to see the blueprint of an object

```js
object_name instanceof class_name

product instanceof Products

// return true or false
```

### accessing each object properties and methods

```js
alien1.name
alien1.phrase
```
The “this” keyword points to the class itself and is used to define the class properties within the constructor method.

Methods can be added by simply defining the function name and its execution code.

## inheritance
On the children class, we use the extends keyword to declare the parent class we want to inherit from. Then on the constructor method, we have to declare the "power" parameter and use the super function to indicate that property is declared on the parent class.
```js
class Enemy {
    constructor(power){
        this.power = power
    }
}
class Alien extends Enemy{
    constructor(name,phrase,power){
        super(power)
        this.name = name
        this.phrase =phrase
    }
}

```
### multi-level inheritance

```js

class Character {
    constructor (speed) {
        this.speed = speed
    }

    move = () => console.log(`I'm moving at the speed of ${this.speed}!`)
}

class Enemy extends Character {
    constructor(power, speed) {
        super(speed)
        this.power = power
    }

    attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
}


class Alien extends Enemy {
    constructor (name, phrase, power, speed) {
        super(power, speed)
        this.name = name
        this.phrase = phrase
        this.species = "alien"
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
    sayPhrase = () => console.log(this.phrase)
}
```

### implementing all the above

```js

class Character {
    constructor (speed) {
        this.speed = speed
    }
    move = () => console.log(`I'm moving at the speed of ${this.speed}!`)
}

class Enemy extends Character {
    constructor(name, phrase, power, speed) {
        super(speed)
        this.name = name
        this.phrase = phrase
        this.power = power
    }
    sayPhrase = () => console.log(this.phrase)
    attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
}


class Alien extends Enemy {
    constructor (name, phrase, power, speed) {
        super(name, phrase, power, speed)
        this.species = "alien"
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
}

class Bug extends Enemy {
    constructor (name, phrase, power, speed) {
        super(name, phrase, power, speed)
        this.species = "bug"
    }
    hide = () => console.log("You can't catch me now!")
}

class Robot extends Enemy {
    constructor (name, phrase, power, speed) {
        super(name, phrase, power, speed)
        this.species = "robot"
    }
    transform = () => console.log("Optimus prime!")
}


const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50)
const alien2 = new Alien("Lien", "Run for your lives!", 15, 60)
const bug1 = new Bug("Buggy", "Your debugger doesn't work with me!", 25, 100)
const bug2 = new Bug("Erik", "I drink decaf!", 5, 120)
const Robot1 = new Robot("Tito", "I can cook, swim and dance!", 125, 30)
const Robot2 = new Robot("Terminator", "Hasta la vista, baby!", 155, 40)

```
If a child class inherits any properties from a parent class, it must first assign the parent properties calling the super() function before assigning its own properties.

```js
// This throws an error:
class Alien extends Enemy {
    constructor (name, phrase, power, speed) {
        this.species = "alien" // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        super(name, phrase, power, speed)
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
}
```
### overriding paernets properties and methods

```js

class Enemy extends Character {
    constructor(name, phrase, power, speed) {
        super(speed)
        this.name = name
        this.phrase = phrase
        this.power = power
    }
    sayPhrase = () => console.log(this.phrase)
    attack = () => console.log(`I'm attacking with a power of ${this.power}!`)
}


class Alien extends Enemy {
    constructor (name, phrase, power, speed) {
        super(name, phrase, power, speed)
        this.species = "alien"
    }
    fly = () => console.log("Zzzzzziiiiiinnnnnggggg!!")
    attack = () => console.log("Now I'm doing a different thing, HA!") // Override the parent method.
}

const alien1 = new Alien("Ali", "I'm Ali the alien!", 10, 50)
alien1.attack() // output: "Now I'm doing a different thing, HA!"
```


## Encapsulation
Encapsulation is another key concept in OOP, and it stands for an object's capacity to "decide" which information it exposes to "the outside" and which it doesn't. Encapsulation is implemented through public and private properties and methods.

In JavaScript, all objects' properties and methods are public by default. "Public" just means we can access an object's property/method from outside its own body:


we use the # keyword to use encapsulation in the class
```js
#birthday = value
```

## polymorphism

Polymorphism means "many forms" and is actually a simple concept. It's the ability of one method to return different values according to certain conditions.

the above we saw were the examples of polymorphism 
overridng the parent functoin to match the need in the child class and the vlaues too

## object composition

Object composition is a technique that works as an alternative to inheritance.
