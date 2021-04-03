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
    return array.slice(array.length-1);
}

slicedArray = [3,15,76,23,46,"hola"]
console.log(lastValue(slicedArray));

//Apartado 9 - Un granjero necesita contar la cantidad de patas de los animales en sus diferentes granjas muy
//frecuentemente, pero tiene tres especies: pollos (2 patas), vacas (4 patas) y cerdos (4 patas). Tu función
//recibirá la cantidad de animales en ese orden y devolverá la cantidad de patas totales.

let countLegs = (chicken, cows, pigs) => (chicken*2) + (cows*4) + (pigs*4);

console.log(countLegs(5, 2, 8));

//Apartado 10 - Crea una función que determine si dos datos recibidos por argumentos son del mismo tipo.

function checkType(a, b) {
    if (typeof a === typeof b) {
        console.log("A y B son del mismo tipo");
    } else {
        console.log("A y B NO son del mismo tipo");
    }
};

checkType(6, "hola");

//Apartado 11 - Crea una función que reciba un string con una frase y devuelva un array donde cada elemento será una
//palabra de la frase original. Investigar método existente de los strings para este fin.

let smartSplit = str => str.split(" ");

console.log(smartSplit("The quick brown fox jumps over the lazy dog"));

//Apartado 12 - Inicializa dos objetos, address1 y address2 con las propiedades: provincia, ciudad, municipio, código
//postal, calle, número, planta, y número de puerta.

const address1 = {
    provincia: "",
    ciudad: "",
    municipio: "",
    codigopostal: "",
    calle: "",
    numero: "",
    planta: "",
    puerta: ""
};

console.log(address1);

const address2 = {
    provincia: "",
    ciudad: "",
    municipio: "",
    codigopostal: "",
    calle: "",
    numero: "",
    planta: "",
    puerta: ""
};

console.log(address2);

//Apartado 13 - Los dominios en la web, se componen del nombre de dominio (codespaceacademy) y de un TLD (top
//level domain) como, por ejemplo .com / .es / .org, etc. Crea una función que se llame parseDomain() que
//reciba por argumento un string y devuelva un objeto con dos propiedades: domain y tld. Ejemplo:

const website = {
    domain: "",
    tld: ""
};

function parseDomain(str) {
    let webArray = str.split(".");
    website.domain = webArray[0];
    website.tld = webArray[1];
    return website;
}

console.log(parseDomain("google.com"));

//Apartado 14 - Nos han prohibido el uso del operador de igualdad estricta (===), pero queremos poder seguir utilizando
//dicha esa funcionalidad. Crea una función que devuelva true si dos números tienen el mismo valor y el
//mismo tipo de dato. Debemos usar el operador lógico “&&”. Prueba tu función con dos estos inputs:

function strictEquality(a, b) {
    if (a == b && a !== b || a != b) {
        return false;
    } else {
        return true;
    }
};

console.log(strictEquality(10, 8));

//Apartado 15 - Crea una función que reciba dos strings y devuelva true si tienen la misma longitud y false en caso
//contrario.

function stringLength (str1, str2) {
    if (str1.length === str2.length) {
        return true;
    } else {
        return false;
    }
};

console.log(stringLength ("hola", "adios"));

//Apartado 16 - Crea una función que reciba un string y determine si está vacío sin utilizar la propiedad length.

function emptyString (str) {
    if (str === "") {
        console.log("el string está vacío");
    } else {
        console.log(str);
    }
};

emptyString("");

//Apartado 17 - Imprimir elemento a elemento el array del apartado 1 de cuatro formas diferentes:

// While

let i = 0;
while (i < stringArray.length) {
    console.log("Con bucle 'while':", stringArray[i]);
    i++;
};

// For

for (i = 0 ; i < stringArray.length ; i++) {
    console.log("Con bucle 'for':", stringArray[i]);
};

// For Of

for (let item of stringArray) {
    console.log("Con bucle 'for of':", item);
};

// ForEach

stringArray.forEach(value => console.log("Con bucle 'forEach':", value));

//Apartado 18 - Crea una función que reciba un string y un número N y devuelva el string original repetido N veces.

function repeatString (str, N) {
    for (i = 0 ; i < N ; i++) {
        console.log(str);
    };
};

repeatString("hola", 4);

//Apartado 19 - Crea una función que recibe un objeto con dos campos, votos positivos y votos negativos y que devuelva
//la cuenta final.

let totalVotes = {
    upVotes: "",
    downVotes: "",
    getVoteCount(a, b) {
        this.upVotes = a;
        this.downVotes = b;
        return a - b
    }
};

console.log(totalVotes.getVoteCount(25, 15));
console.log(totalVotes);

//Apartado 20 - Crea una función que recibe un array de tipos de datos mezclados y que devuelva otro array con el tipo
//de cada uno de los elementos.

function getTypes (array) {
    let typeArray = [];
    for (i = 0 ; i < array.length ; i++) {
        typeArray.push(typeof array[i]);
    }
    return typeArray;
};

typesArray =["hola", 6, false, "adios"]
console.log(getTypes(typesArray));

//Apartado 21 - Función que dado un array de números con formato string devuelva un array con los números ya
//parseados.

function getParsedNumbers (array) {
    let parsedArray = [];
    for (i = 0 ; i < array.length ; i++) {
    parsedArray.push(Number(array[i])); 
    }
    return parsedArray;
};

stringNumbers = ["10", "46", "123", "543"]
console.log(getParsedNumbers(stringNumbers));

//Apartado 22 - Crea una función de flecha que devuelva “Positivo” si el número que recibe por argumento es mayor o
//igual que cero y “Negativo” en caso contrario. Usa el operador ternario.

let checkPositive = value => value >= 0 ? "Positivo" : "Negativo";

console.log(checkPositive(4));

//Apartado 23 - Crea una función que dado un array cualquiera y un índice, borre el elemento guardado en ese índice.

function deleteIndex (array, index) {
    let myArray = [];
    for (i = 0 ; i < array.length ; i++) {
        myArray.push(array[i]);
    }
    myArray.splice(index, 1);
    return myArray;
};
auxArray = [1,2,3,4,5,6,7,8,9]
console.log(deleteIndex(auxArray, 4));

//Apartado 24 - Usando la función del apartado anterior, crea otra función que dado un array de números y un número a
//filtrar, devuelva un array borrando todos las apariciones de dicho número.

//Apartado 25 - Crea dos funciones que recibirán un objeto, la primera devolverá un array con los nombres de todas sus
//propiedades. La segunda devolverá un array con los valores de dichas propiedades.

let person = {
    name: "Daniel",
    height: 189,
    blonde: false
};

let getKeys = obj => Object.keys(obj);
let getValues = obj => Object.values(obj);

console.log(getKeys(person));
console.log(getValues(person));

//Apartado 26 - Crea una función que invierta un string.

function reverseString (str) {
    return str.split("").reverse().join("")
};

console.log(reverseString("Hola mundo"));

//Apartado 27 - Crea una función que compare strings sin tener en cuenta las mayúsculas / minúsculas.

function compareStrings (a, b) {
    if (a.toLowerCase() === b.toLowerCase()) {
        return true;
    } else {
        return false;
    }
};

console.log(compareStrings("HoLa", "hOlA"));

//Apartado 28 - Crea una función que convierta en mayúscula sólo la primera letra de cada palabra de un string dado. El
//apartado 11 será de ayuda. Investigar cómo unir un array de strings en un unico string.

function capitalize (str) {

    let words = str.split(" ");
    // console.log(words);

    for (i = 0 ; i < words.length ; i++) {

        let letters = words[i].split("");

        // console.log(letters);

        letters[0] = letters[0].toUpperCase();

        // console.log(letters.join(""));

        words[i] = letters.join("");

        // console.log(words.join(" "));
    }

    return words.join(" ");
}

console.log(capitalize("hola mundo adios mundo que tal estas"));

//Apartado 29 - Crea una función en una única línea que reciba un valor lógico y devuelva el opuesto.

let getOpposite = value => !value;

console.log(getOpposite(false));