//Apartado 1 - Define e inicializa un array con 5 elementos string en una sola línea.

let stringArray = ["esto", "es", "un", "string", "nuevo"];

//Apartado 2 - Define un array inicialmente vacío . Añade tres elementos de tipo number posteriormente. Elimina por
//completo el primero y añade dos nuevos números al inicio. En cada paso, imprime la longitud y el array
//entero por consola utilizando un string template del tipo : `Longitud: ${}`.

let numbersArray = [];

console.log(`Este array tiene longitud ${numbersArray.length} con el siguiente contenido: ${numbersArray}`);

numbersArray.push(24, 13, 45);

console.log(`Este array tiene longitud ${numbersArray.length} con el siguiente contenido: ${numbersArray}`);

numbersArray.shift();

console.log(`Este array tiene longitud ${numbersArray.length} con el siguiente contenido: ${numbersArray}`);

numbersArray.unshift(60, 36);

console.log(`Este array tiene longitud ${numbersArray.length} con el siguiente contenido: ${numbersArray}`);

//Apartado 3 - Escribe una función nombrada que devuelva true si el argumento dado es de tipo boolean y false en
//caso contrario.

function myFunction(x) {
    if (typeof x === "boolean") {
        return true;
    } else {
        return false;
    }
}

console.log(myFunction("hola"));

//Apartado 4 - Escribe una función que devuelva la longitud de un string recibido por argumento.

function stringFunction(string) {
    console.log(`La longitud del string "${string}" tiene valor de ${string.length}`);
};

stringFunction("hola soy un string");

//Apartado 5 - Crea una función de flecha que reciba una cantidad de minutos y lo devuelva convertido en segundos.

let minutesToSeconds = minutes => minutes*60;

console.log(minutesToSeconds(5));

//Apartado 6 - Crea una función que reciba un número y devuelva el siguiente número par. (Si él es par, lo devolverá
//directamente).

function giveEven(num) {
    if (num % 2 === 0) {
        return num;
    } else {
        return num+1;
    }
};

console.log(giveEven(11));

//Apartado 7 - Crea una función que reciba una edad y devuelva la cantidad de días que esa persona ha vivido. Puedes
//obviar los años bisiestos.

let yearsToDays = years => years*365;

console.log(yearsToDays(20));

//Apartado 8 - Crea una función que reciba un array y devuelva su último elemento. Prueba tu función con varios arrays
//de diferentes longitudes.

function lastValue(array) {
    let newArray = array;
    return newArray.slice(newArray.length-1);
}

console.log(lastValue([3,15,76,23,46,19]));

//Apartado 9 - Un granjero necesita contar la cantidad de patas de los animales en sus diferentes granjas muy
//frecuentemente, pero tiene tres especies: pollos (2 patas), vacas (4 patas) y cerdos (4 patas). Tu función
//recibirá la cantidad de animales en ese orden y devolverá la cantidad de patas totales.

