//-----------------------Object Oriented Programming (OOP) ---------------------------

console.clear();

// ANTES DE ES6
function Car(brand, model, year) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.getAge = function () {
        let age = new Date().getFullYear() - this.year;
        console.log(`This ${this.brand} ${this.model} is ${age} years old`);
    }
};

let myCar = new Car("Ford", "Mustang", 1990);
let myCar2 = new Car("Audi", "R8", 2010)

myCar.getAge()

console.log(myCar, myCar2);

Car.getHP = function () { // no actualiza las instancias. se puede hacer pero de otra manera (linea 31)
    console.log("This car has 300 hp");
}

myCar.getHP = function () { // solo modifica la instancia myCar
    console.log("This car has 300 hp");
}

console.log(myCar, myCar2);

Car.prototype.getHP = function () { // le añadimos la funcion a la superclase
    console.log("This car has 400 hp");
}

console.log(myCar, myCar2); //myCar2 no aparece la funcion getHP porque se encuentra en su superclase (el constructor), ya que no se la he dado directamente como antes a myCar

myCar.getHP();
myCar2.getHP();


function SUV(brand, model, year, width, height) {
    Car.call(this, brand, model, year);
    this.width = width;
    this.height = height;
};

SUV.prototype = Object(Car.prototype);

let mySUV = new SUV("Audi", "Q3", 2017, 2200, 2000);

mySUV.getAge();
mySUV.getHP();


// -------------------------- ES6 -----------------------------------

class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    getSummary() {
        console.log(`${this.title} was written by ${this.author} in ${this.year}`);
    }

    getType() {
        console.log("I'm a common book");
    }
}

const book1 = new Book("Metamorphosis", "Franz Kafka", 1915);

console.log(book1);

book1.getSummary();
book1.getType();

//Subclases (Herencia)

class Magazine extends Book{
    getType() {
        console.log("I'm a magazine.");
        super.getType(); // super accede a la superclase y ejecuta getType de esa clase (en este caso Book)
    }
}

const mag1 = new Magazine("Super Pop", "Algún loco", 2015);

console.log(mag1);

mag1.getSummary();
mag1.getType();



class Animal {
    constructor (type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }

    makeSound() {
        console.log(`This ${this.type} called ${this.name} goes ${this.sound}`);
    }

    static compare (animal1, animal2) {
        return animal1.type === animal2.type; //FUNCIÓN ESTÁTICA
    }
}

class Feline extends Animal {
    constructor (type, name) { //clase intermedia donde vamos ajustando los argumentos hardcodeando los que no necesitemos más adelante
        super (type, name, "miau")
    }
}

class Cat extends Feline {
    constructor (name) { //constructor y super van de la mano, siempre que queramos modificar/añadir lor argumentos del constructor
        super("cat", name) //asi hardcodeamos type y sound porque sabemos que es un gato. Name lo dejamos como argumento.
    }
}

class Dog extends Animal {
    constructor (name) {
        super("dog", name, "woof")
    }
}

const neruu = new Cat("Neruu")
const mina = new Dog("Mina")
const lara = new Dog("Lara")

console.log(neruu);
neruu.makeSound()
mina.makeSound();


// Método estático (o funcion auxiliar)

console.log(Animal.compare(mina, lara));