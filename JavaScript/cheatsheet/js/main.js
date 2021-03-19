//-------- USO DE JS EXTERNO --------

function saludo () {
    alert("Hola desde un script externo");
    console.log("has hecho click");
}
document.getElementsByTagName('a').item(2).addEventListener("click", saludo);

//--------- DEPURACION / LOGGING ---------
// alert("Mensaje");

console.log("Mensaje");

//------------- VARIABLES -------------
// var -> funtion scope 
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

console.log(str.replaceAll("mundo", "futuro"));
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





