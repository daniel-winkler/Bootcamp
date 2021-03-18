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

let [var1, var2, var3] = [15, 20, 25]; //forma mas avanzadaS
console.log(var1, var2, var3);


//const -> block scope 
const x = 1;
//const =y; //no podemos iniciar una constante sin tambien definirla
//x = 2; //da error porque no podemos cambiar el valor de una constante en nuestro codigo

console.clear();

//----------------- TIPOS DE DATOS -------------------
let str = String("I'm a string.");
let str2 = "I'm another string."; //forma recomendada
console.log(typeof str, typeof str2, typeof "");

let num = Number(5);
let num2 = 5;
console.log(typeof num, typeof num2, typeof 5, typeof 5.3, typeof "5");