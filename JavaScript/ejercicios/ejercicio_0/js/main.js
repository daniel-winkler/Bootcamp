//Apartado 1 - Define e inicializa un array con 5 elementos string en una sola línea.

let stringArray = ["esto", "es", "un", "string", "nuevo"];
console.log(stringArray);

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

console.log(myFunction("boolean"));
console.log(myFunction(45));
console.log(myFunction(true));

let booleanCheck = arg => typeof arg === "boolean" ? true : false; //a partir de ? es redundante, porque queremos que nos devuelva true o false, que es justamente lo que nos devuelve la comparación

console.log(booleanCheck(false));
console.log(booleanCheck("hola"));


//Apartado 4 - Escribe una función que devuelva la longitud de un string recibido por argumento.

function stringFunction(string) {
    console.log(`La longitud del string "${string}" tiene valor de ${string.length}`);
};

stringFunction("hola soy un string");

let stringFunction2 = string => string.length;

console.log(stringFunction2("hola soy un string"));

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
console.log(giveEven(14));

let giveEven2 = num => num % 2 === 0 ? num : num+1;

console.log(giveEven2(9));
console.log(giveEven2(6));

//Apartado 7 - Crea una función que reciba una edad y devuelva la cantidad de días que esa persona ha vivido. Puedes
//obviar los años bisiestos.

let yearsToDays = years => years*365;

console.log(yearsToDays(20));

//Apartado 8 - Crea una función que reciba un array y devuelva su último elemento. Prueba tu función con varios arrays
//de diferentes longitudes.

function lastValue(array) {
    return array.slice(array.length-1); //slice tiene mas sentido si devuelve más de un elemento.
};

slicedArray = [3,15,76,23,46,"hola", 223]
console.log(lastValue(slicedArray));

let lastValue2 = array => array[array.length-1];

console.log(lastValue2(slicedArray));

//Apartado 9 - Un granjero necesita contar la cantidad de patas de los animales en sus diferentes granjas muy
//frecuentemente, pero tiene tres especies: pollos (2 patas), vacas (4 patas) y cerdos (4 patas). Tu función
//recibirá la cantidad de animales en ese orden y devolverá la cantidad de patas totales.

let countLegs = (chicken, cows, pigs) => (chicken*2) + (cows*4) + (pigs*4);

console.log(countLegs(5, 2, 10));

//Apartado 10 - Crea una función que determine si dos datos recibidos por argumentos son del mismo tipo.

function checkType(a, b) {
    if (typeof a === typeof b) {
        return "A y B son del mismo tipo";
    } else {
        return "A y B NO son del mismo tipo";
    }
};

console.log(checkType(9, "hola"));
console.log(checkType("hola", "adios"));

let checkType2 = (a, b) => typeof a === typeof b ? "mismo tipo" : "tipo distinto";

console.log(checkType2(6, 8));
console.log(checkType2("hola", 4));

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
};

console.log(parseDomain("google.com"));

function parseDomain2(str) {
    let webArray = str.split(".");
    let object = {
        domain: webArray[0],
        tld: webArray[1]
    }
    return object;
};

console.log(parseDomain2("tesla.com"));

let parseDomain3 = str => {return {domain: str.split(".")[0], tld: str.split(".")[1]}}

console.log(parseDomain3("codespace.com"));

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
console.log(strictEquality(9, 9));
console.log(strictEquality("7", "3"));
console.log(strictEquality("6", 6));
console.log(strictEquality("4", 8));
console.log(strictEquality("2", "2"));

let strictEquality2 = (a,b) => a == b && typeof a == typeof b;

console.log(strictEquality2(10, 8));
console.log(strictEquality2(9, 9));
console.log(strictEquality2("7", "3"));
console.log(strictEquality2("6", 6));
console.log(strictEquality2("4", 8));
console.log(strictEquality2("2", "2"));



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

let stringLength2 = (str1, str2) => str1.length === str2.length;

console.log(stringLength2("holii", "adios"));
console.log(stringLength2("hola", "adios"));

//Apartado 16 - Crea una función que reciba un string y determine si está vacío sin utilizar la propiedad length.

function emptyString (str) {
    if (str === "") {
        console.log("el string está vacío");
    } else {
        console.log(str);
    }
};

emptyString("");

let emptyString2 = str => str === "" ? "el string está vacío" : str;

console.log(emptyString2("hola mundo"));
console.log(emptyString2(""));

const isEmpty = function (str) { //funcion anónima que solo devuelve si es verdadero o falso
    return str === "";
};

console.log(isEmpty(""));

const isEmpty2 = function (str) {
    return str ? false : true; //truthy & falsy values
};

console.log(isEmpty2("prueba"));

//Apartado 17 - Imprimir elemento a elemento el array del apartado 1 de cuatro formas diferentes:

// While

let i = 0;
while (i < stringArray.length) {
    console.log("Con bucle 'while':", stringArray[i]);
    i++;
};

// For

for (let i = 0 ; i < stringArray.length ; i++) { //volvemos a definir i, ya que pertenece al bloque de la funcion, aunque no esté estrictamente escrito entre {}
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

repeatString("hola mundo", 4);

function repeatString2 (str, N) {
    let finalString = str;
    for (i = 1 ; i < N ; i++) {
        finalString += str;
    };
    return finalString;
};

console.log(repeatString2("hola mundo", 4));

//Apartado 19 - Crea una función que recibe un objeto con dos campos, votos positivos y votos negativos y que devuelva
//la cuenta final.


function getVoteCount(obj) {
    return obj.upVotes - obj.downVotes;
};

let totalVotes = {
    upVotes: 30,
    downVotes: 10
};

console.log(getVoteCount(totalVotes));
console.log(getVoteCount({upVotes: 15, downVotes: 10}));

//Apartado 20 - Crea una función que recibe un array de tipos de datos mezclados y que devuelva otro array con el tipo
//de cada uno de los elementos.

function getTypes (array) {
    let typeArray = [];
    for (i = 0 ; i < array.length ; i++) {
        typeArray.push(typeof array[i]);
    }
    return typeArray;
};

typesArray =["hola", 6, false, "adios", 56, undefined, {}]
console.log(getTypes(typesArray));

function getTypes2 (array) {
    let typeArray = [];
    array.forEach(element => typeArray.push(typeof element));
    return typeArray;
};

console.log(getTypes2(typesArray));

//Apartado 21 - Función que dado un array de números con formato string devuelva un array con los números ya
//parseados.

function getParsedNumbers (array) {
    let parsedArray = [];
    for (i = 0 ; i < array.length ; i++) {
    parsedArray.push(Number(array[i])); 
    }
    return parsedArray;
};

stringNumbers = ["10", "46", "123", "543", "36"]
console.log(getParsedNumbers(stringNumbers));

function getParsedNumbers2 (array) {
    let parsedArray = [];
    array.forEach(element => parsedArray.push(Number(element)));
    return parsedArray;
};

console.log(getParsedNumbers2(stringNumbers));

//Apartado 22 - Crea una función de flecha que devuelva “Positivo” si el número que recibe por argumento es mayor o
//igual que cero y “Negativo” en caso contrario. Usa el operador ternario.

let checkPositive = value => value >= 0 ? "Positivo" : "Negativo";

console.log(checkPositive(-2));

//Apartado 23 - Crea una función que dado un array cualquiera y un índice, borre el elemento guardado en ese índice.

function deleteIndex (array, index) {
    let myArray = [];
    for (i = 0 ; i < array.length ; i++) {
        myArray.push(array[i]);
    }
    myArray.splice(index, 1);
    return myArray;
};
let auxArray = [1,2,3,4,5];
console.log(deleteIndex(auxArray, 2));

function deleteIndex2 (array, index) {
    array.splice(index, 1);
    return array;
};
let auxArray2 = [1,2,3,4,5];
console.log(deleteIndex2(auxArray2, 2));

let deleteItem = (array, index) => array.splice(index, 1);

let auxArray3 = [1,2,3,4,5];
console.log(deleteItem(auxArray3, 2));
console.log(auxArray3);

//Apartado 24 - Usando la función del apartado anterior, crea otra función que dado un array de números y un número a
//filtrar, devuelva un array borrando todos las apariciones de dicho número.

const filterItem = (array, numberToFilter) => {

    array.forEach((element, index) => {

        if (element === numberToFilter) {
            deleteItem(array, index); //este metodo tiene el problema que si el numero filtrado está dos veces seguidas, el segundo se lo salta
        } 
    })
}
let filterArray = [23, 12, 54, 75, 43]
filterItem(filterArray, 12);
console.log(filterArray);

const filterItem2 = (array, numberToFilter) => {
    for (i = 0 ; i < array.length ; i++) {
        if (array[i] === numberToFilter) {
            deleteItem(array, i); 
            i--; //de esta manera corregimos manualmente que se salte un indice al eliminar un numero, restandole 1
        };
    };
};

let filterArray2 = [23, 12, 12, 54, 75, 43, 12]
filterItem2(filterArray2, 12);
console.log(filterArray2);

const filterItem3 = (array, numberToFilter) => {
    for (i = array.length - 1 ; i >= 0 ; i--) {
        if (array[i] === numberToFilter) {
            deleteItem(array, i); //llendo de "arriba a abajo" al eliminar un numero el indice no se altera, por tanto es la mejor solucion
        };
    };
};

filterArray2 = [23, 12, 12, 54, 75, 43, 12]
filterItem3(filterArray2, 12);
console.log(filterArray2);

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
console.log(Object.entries(person));

//Apartado 26 - Crea una función que invierta un string.

function reverseString (str) {
    return str.split("").reverse().join("")
};

console.log(reverseString("odnum aloH"));

let reverseString2 = str => str.split("").reverse().join("");

console.log(reverseString2("odnum aloH"));

function stringReverse (str) {
    let reversedString = "";
    for (let i = str.length - 1 ; i >= 0 ; i--) {
        reversedString += str.charAt(i); //.charAt selecciona el caracter del string indicado con el indice
    };
    return reversedString;
};

console.log(stringReverse("odnum aloH"));

//falta solucion con FOR OF de Luis

//Apartado 27 - Crea una función que compare strings sin tener en cuenta las mayúsculas / minúsculas.

function compareStrings (a, b) {
    if (a.toLowerCase() === b.toLowerCase()) {
        return true;
    } else {
        return false;
    }
};

console.log(compareStrings("HoLa", "hOlA"));

let compareStrings2 = (a, b) => a.toLowerCase() === b.toLowerCase();

console.log(compareStrings2("HoLa", "hOlA"));

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

console.log(capitalize("el veloz murciélago hindú comía feliz cardillo y kiwi."));

//Apartado 29 - Crea una función en una única línea que reciba un valor lógico y devuelva el opuesto.

let getOpposite = value => !value;

console.log(getOpposite(false));