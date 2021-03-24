//-------- USO DE JS EXTERNO --------

function saludo() {
    alert("Hola desde un script externo");
    console.log("has hecho click");
}
// document.getElementsByTagName('a').item(2).addEventListener("click", saludo);

//--------- DEPURACION / LOGGING ---------
// alert("Mensaje");

console.log("Mensaje");

//------------- VARIABLES -------------
// var -> function scope 
// let / const -> block scope {}

function saludar() {

    let contador;

    console.log("inicial: ", contador);

    // comprobar con var y con let y ver diferencias 
    for (let contador = 0; contador < 3; contador++) {
        console.log(contador);
    }

    console.log("final: ", contador);

}

saludar();

console.clear();

// Inicialización
let day;
day = 5; //iniciamos y luego definimos

let monthName = "Octubre"; //iniciamos y definimos a la vez

let hour, minute, second;

let array = [15, 20, 25];
console.log(array[0], array[1], array[2]);

let [var1, var2, var3] = [15, 20, 25]; //forma mas avanzada
console.log(var1, var2, var3);


//const -> block scope 
const x = 1;
//const =y; //no podemos iniciar una constante sin tambien definirla
//x = 2; //da error porque no podemos cambiar el valor de una constante en nuestro codigo

console.clear();

//----------------- TIPOS DE DATOS -------------------

//PRIMITIVOS

let str = String("I'm a string.");
let str2 = "I'm another string."; //forma recomendada
console.log(typeof str, typeof str2, typeof "");
//output: string string string

let num = Number(5);
let num2 = 5;
console.log(typeof num, typeof num2, typeof 5, typeof 5.3, typeof "5");
//output: number number number number string

let bool = Boolean(true); //true or false
let bool2 = false;
console.log(typeof bool, typeof bool2, typeof true, typeof "true");
//output: boolean boolean boolean string

let undef;
console.log(undef, typeof undef);
//output: undefined undefined

let selectedColor = null; //sirve para limpiar una variable
console.log(selectedColor, typeof selectedColor);
//output: null object

//OBJETOS

array = Array(1, 2, 3); //no la volvemos a declarar, ya que la declaramos en la linea 45 y entraria en conflicto
let array2 = [1, 2, 3];
console.log(array, array2);
//output: Array(3) [ 1, 2, 3 ], Array(3) [ 1, 2, 3 ]
console.log(typeof array, typeof array2);
//output: object object

console.log(typeof new Date("2021-03-19"));
//output: object
console.log(typeof new Error("MEnsaje de error."));
//output: object

console.clear();

//----------------- STRINGS -------------------

str = "Hola futuro."; //str ya está declarada
console.log(str, str.length, "Hola futuro.".length);
//output: Hola futuro. 12 12

console.log(str.indexOf("futuro"), str.indexOf("cadena no presente")); //indica la posicion donde empieza el string que comprobamos con la variable. si da un -1 es que no existe.
//output: 5 -1

console.log("la última ocurrencia de 'u' es en el indice", str.lastIndexOf("u"));
//output: la última ocurrencia de 'u' es en el indice 8

console.log(str.substring(1, 3));
//output: ol

console.log("Hola mundo".concat(". Adiós mundo."));
//output: Hola mundo. Adiós mundo.

console.log("Hola mundo" + ". Adiós mundo."); //Equivalente a .concat
//output: Hola mundo. Adiós mundo.

str = str + ". Adiós mundo.";
str += ". Adiós mundo."; //nos va haciendo concat a str y guardandola
console.log(str);
//output: Hola futuro.. Adiós mundo.. Adiós mundo.

console.log(str.replace("futuro", "Mundo"));
//Hola Mundo.. Adiós mundo.. Adiós mundo.

console.log(str.replace("Mundo", "futuro")); //solo reemplaza la primera ocurrencia por algun motivo
//output: Hola futuro.. Adiós mundo.. Adiós mundo.

// console.log(str.replaceAll("mundo", "futuro"));
//output: Hola futuro.. Adiós futuro.. Adiós futuro.

console.log(str.toLowerCase());
//output: hola futuro.. adiós mundo.. adiós mundo.

console.log(str.toUpperCase());
//output: HOLA FUTURO.. ADIÓS MUNDO.. ADIÓS MUNDO.

console.log(`El día de mi cumpleaños es ${day}.`); //se usan las comillas dobladas y lo convierte en string (string template)
//output: El día de mi cumpleaños es 5.

console.log("El día de mi cumpleaños es", day, ".");
//output: El día de mi cumpleaños es 5.

console.clear();


//Parsing

let number = Number("asdas");
console.log(number, typeof number);
//output: NaN number

number = Number("1000"); //cambia un numero de formato string a formato numero (util para nuestros forms)
console.log(number, typeof number);
//output: 1000 number

number += "1000"; //entiende que es un .concat y no un numero. te lo reconoce como string y concadena en vez de sumar.
console.log(number, typeof number);
//output: 10001000 string

console.clear();


//----------------- OBJECTS --------------------

let person = { //key: value
    name: "John",
    age: 30,
    blonde: false, //ultimo key sin coma siempre
    walk: function () {
        console.log("Hey, estoy andando.");

    }, // Pre ES6
    jump() {
        console.log("Hey, estoy saltando.");
    } // ES6
}

//ACCESO POR PUNTO / DOT NOTATION
console.log(person);
//output: Object { name: "John", age: 30, blonde: false }

console.log(person.name);
//output: John

console.log(`Se llama ${person.name} y tiene ${person.age} años.`); //convierte todo en un string
//output: Se llama John y tiene 30 años.

person.name = "Jane";
console.log(person);
//output: Object { name: "Jane", age: 30, blonde: false }

console.log(`Se llama ${person.name} y tiene ${person.age} años.`);
//output: Se llama Jane y tiene 30 años.

//ACCESO POR CORCHETES / BRACKETS NOTATION
console.log(person["age"]);
//output: 30

let propertyName = "age";
console.log(person[propertyName]);
//output: 30

//AMPLIACION
person.children = ["Martha", "Peter"]; //directamente añadimos una propiedad que no existe. si existiera, la sustituiria por el valor que le damos
console.log(person);
//output: Object { name: "Jane", age: 30, blonde: false, children: [] }
console.log(person.children[1]);
//output: Peter

person.jump();
//output: Hey, estoy saltando.
person.walk();
//output: Hey, estoy andando.


//THIS
const person2 = {
    name: "Thomas",
    talk() {
        console.log(this);
        //output: Object { name: "Thomas", talk: talk() }
        console.log(`Me llamo ${this.name}`); //This siempre hace referencia a la misma variable donde se encuentra.
        //output: Me llamo Thomas
    }
}

const person3 = {
    name: "Sarah",
    talk() {
        console.log(this);
        //output: Object { name: "Sarah", talk: talk() }
        console.log(`Me llamo ${this.name}`);
        //output: Me llamo Sarah
    }
}

person2.talk();
person3.talk();

console.log(this);
//output: Window http://127.0.0.1:5500/cheatsheet/ (porque no se encuentra dentro de una variable)


console.clear();


//----------------- ARRAYS --------------------

let selectedColors = ["red", "blue"]; //Arrays de strings
console.log(selectedColors, selectedColors.length, typeof selectedColors);
//output: Array [ "red", "blue" ] 2 object

selectedColors[2] = "green"; //accedemos a un indice del array que no existe, por lo tanto nos lo crea.
console.log(selectedColors, selectedColors.length);
//output: Array(3) [ "red", "blue", "green" ] 3

selectedColors.push("violet", "white"); //push es una funcion que añade mas indices de array con su contenido correspondiente
console.log(selectedColors, selectedColors.length);
//output: Array(5) [ "red", "blue", "green", "violet", "white" ] 5

selectedColors.pop(); //pop elimina sólo el último elemento
console.log(selectedColors, selectedColors.length);
//output: Array(4) [ "red", "blue", "green", "violet" ] 4

selectedColors.unshift("white"); //unshift añade un valor nuevo al principio de nuestro array.
console.log(selectedColors, selectedColors.length);
//output: Array(5) [ "white", "red", "blue", "green", "violet" ] 5

selectedColors.shift(); //shift elimina el primer valor del array.
console.log(selectedColors, selectedColors.length);
//output: Array(4) [ "red", "blue", "green", "violet" ] 4

selectedColors.sort(); //sort por defecto ordena alfabeticamente nuestro array.
console.log(selectedColors, selectedColors.length);
//output: Array(4) [ "blue", "green", "red", "violet" ] 4

console.log(selectedColors.indexOf("red")); //indexOf busca el valor que le indique y me devuelve el indice de ese valor.
//output: 2 

console.log(selectedColors.slice(1, 3)); //slice como con los substrings, coge los elementos del array que indicas como rango de indices (el primero incluido el segundo excluido),
//output: Array [ "green", "red" ]         PERO NO NOS LOS ELIMINA DEL ARRAY.

console.log("los elementos borrados son: ", selectedColors.splice(1, 3)); //splice elimina un numero de valores que indicas con el segundo numero (3) a partir del indice que indicas con el primer numero (1).
//output: Array(3) [ "green", "red", "violet" ]
console.log("el array se ha quedado asi: ", selectedColors); //despues del splice se nos queda solo con un valor.
//output: Array [ "blue" ]

console.clear();

/*EJERCICIO:  CREAR UN OBJETO 'NIÑO' QUE TENGA LAS PROPIEDADES NOMBRE, ALTURA, GENERO Y AMIGOS.
AMIGOS ESTARÁ INICIALMENTE VACÍO Y LOS AÑADIREMOS POSTERIORMENTE 3 ELEMENTOS CON LOS NOMBRES.
DESPUES AÑADIREMOS UNO EXTRA AL INICIO*/

const child = {
    name: "David",
    height: 120,
    gender: "male",
    friends: [], //añadimos un array vacío
    loseFriend() {
        this.friends.pop(); //añadimos una funcion a nuestro objeto que elimine el ultimo amigo
    }
}

console.log(child);

child.friends = ["maria", "pablo", "laura"]; //rellenamos el array vacío acciendo a el por su objeto (child). Si hubiese un array existente y simplemente queremos añadir, usamos .push

console.log(child);

child.friends.unshift("juan"); //añadimos juan al principio con unshift

console.log(child);

child.loseFriend(); //llamamos la funcion para ejecutarla

console.log(child);



//----------------- CONDICIONALES --------------------
const randomNumber = 9;
const guessedNumber = "5";

if (randomNumber === guessedNumber) {
    console.log("has acertado el numero");
} else if (randomNumber > guessedNumber) {
    console.log("el numero secreto es mayor");
} else {
    console.log("el numero secreo es menor");
}

// Ternary Operator 
let variable = 12 < 10 ? "el primero es menor" : "el primero es mayor"; // comparacion o booleano ? "si es verdadero" : "si es falso"
console.log(variable);

let person4 = {
    name: "Daniel",
    age: 32,
    blonde: false,
    presentarse() {
        console.log(`Hola, me llamo ${this.name}, tengo ${this.age} años y ${this.blonde ? "soy rubio" : "no soy rubio"}`);
    }
}

person4.presentarse();


console.log(`Hola, me llamo ${person4.name}, tengo ${person4.age} años y ${person4.blonde ? "soy rubio" : "no soy rubio"}`);


// Switch
let option = 4;
switch (option) {
    case 1:
        //Bloque de código para valor 1
        console.log("Option vale 1");
        break;
    case 2:
        //Bloque de código para valor 2 
        console.log("Option vale 2");
        break;
    case 3:
        //Bloque de código para valor 3 etc.
        console.log("Option vale 3");
        break;
    default: //de otro modo (PSeint)
        console.log("Otra opcion");
        break; //usar break SIEMPRE
}

console.clear();


//----------------- FUNCIONES / FUNCTIONS --------------------

//NOMBRADAS

function greet(name, lastName) {
    return `Hola, ${name} ${lastName}, ¿qué tal?`; //usamos return para que nos devuelva algo, y con eso podemos comprobarlo usando console.log
}   //return se comporta como break, el codigo que haya detras será siempre inalcanzable

console.log(greet());
console.log(greet("Marcos", "Aurelio"));

function square(num) {
    return num * num;
}

console.log("el cuadrado de ", 4, "es ", square(4));


//ANÓNIMAS

let numbersArray = [5, 51, 1, 15, 2];
console.log(numbersArray);
numbersArray.sort(); //asi tal cual ordena segun ASCII
console.log(numbersArray);

//Function used to determine the order of the elements. It is expected to return a negative value 
//if first argument is less than second argument, zero if they're equal and a positive value otherwise. 
//If omitted, the elements are sorted in ascending, ASCII character order.

function orderNumbers (a, b) {
    if (a < b) {
        return -1;
    }  else if (a === b) {
        return 0;
    } else {
        return 1;
    }
}

function orderNumbersV2 (a, b) {
    return a - b; //del mismo modo recibe un valor positivo, negativo o nulo (como en la forma anterior)
}

// numbersArray.sort(orderNumbers);

numbersArray.sort(function (a, b) {return a - b}); //de esta forma anonima, sort recibe la funcion directamente sin tener que nombrarla antes

console.log(typeof orderNumbers, typeof function (a, b) {return a - b});
//output: function function

console.log(numbersArray);

console.clear();


//FUNCIONES DE FLECHA / ARROW FUNCTIONS

let perimeterOfSquare = function (side) { //paso a paso de transformar una funcion anónima a una por flechas.
    return side*4;
}
perimeterOfSquare = function (side) {return side*4};
perimeterOfSquare = (side) => {return side*4};
perimeterOfSquare = (side) => side*4;
perimeterOfSquare = side => side*4;


perimeterOfSquare = side => 4*side;
                        //side son los argumentos de la funcion.
console.log(perimeterOfSquare(5));
//output: 20



console.log(typeof function () {});
//output: function
console.log(typeof (() => {}));
//output: function

numbersArray.sort((a, b) => a - b); //transformamos la funcion de ordenar anterior a una funcion por flechas.
console.log(numbersArray);



//----------------- BUCLES / LOOPS --------------------

// FOR

for (let i = 0 ; i <= 10 ; i++) {
    console.log(`Índice: ${i}`);
}

//Miniejercicio: definir y rellenar un array con el indice i
let myArray = [];

for (let i = 0 ; i <= 10 ; i++) {
    myArray.push(i);
}

console.log(myArray);

myArray = [];

for (let i = 10 ; i >= 0 ; i--) { //para rellenar el array desde 10 al 0 
    myArray.push(i);
}

console.log(myArray);


// WHILE

while (true) {
    break; //para que no entre en bucle infinito
}

console.clear();
// FOR EACH 

[].forEach //se aplica SIEMPRE a un array, igual que el .sort

console.log(numbersArray);
numbersArray.forEach(function (value, index) { //con función anónima
    console.log(`Índice ${index}: ${value}`);
});

function myFunction (value, index) { //con función nombrada
    console.log(`Índice ${index}: ${value}`);
};

numbersArray.forEach(myFunction); //indicamos la función SIN LLAMARLA, ya que no retorna ningun valor.


numbersArray.forEach((value, index) => console.log(`Índice ${index}: ${value}`));


//Miniejercicio: copia un array dentro de un array vacío

let otherArray = [];

numbersArray.forEach(value => otherArray.push(value)); //indice a indice, va añadiendo el valor de numbersArray a otherArray.

console.log(otherArray);


// FOR OF

for (let item of numbersArray) { //donde numbersArray puede ser cualquier iterable, no tiene que ser estrictamente un array.
    console.log(item);
}

//CONTINUE
for (let i = 0 ; i < 5 ; i++) {
    if (i === 3) {
        continue; //salta a la siguiente iteración, por eso no hace console.log cuando i = 3.
    }
    console.log("using continue", i);
}

//BREAK

let i = 0;
let k;

mainLoop: while (true) {
    console.log("Outer loop", i);
    i++;
    k = 1;
    while (true) {
        console.log("Inner loop", k);
        k++;
        if (i === 5 && k === 5) {
            break mainLoop; //podemos etiquetar un bucle, para poder nombrar el bucle que queremos hacer break.
        } else if (k === 5) {
            break; //sale del bucle del que se encuentra, por tanto el bucle padre sigue funcionando.
        }
    }
}

console.clear();