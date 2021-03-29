//Apartado 1 - Partimos de un HTML con un div vacío y con JS añadimos
//dos elementos p con texto dentro.

const voidDiv = document.getElementsByTagName("div")[0];

const newP = document.createElement("p");

newP.textContent = "this p has text";

const newP2 = newP.cloneNode(true);

// voidDiv.appendChild(newP);
// voidDiv.appendChild(newP2);

voidDiv.append(newP, newP2);

//Apartado 2 - Al pulsar un botón, cambiar el color del fondo del cuerpo de HTML.

const colorButton = document.getElementsByTagName("button")[0];

colorButton.addEventListener("click", function () {
    document.body.classList.toggle("bg-green");
});

//Apartado 3 - Partimos de un HTML con una lista de 3 URLs(texto) de imágenes y un elementimg.
//Al hacer clicken cada URL, cambiará la imagen a la que contenga dicha URL

const img = document.getElementsByTagName("img")[0];

const list = document.getElementsByTagName("ul")[0];

list.addEventListener("click", function (e) {
    // if (e.target === list.children[0]) {
    //     img.setAttribute("src", "https://motor.elpais.com/wp-content/uploads/2019/06/dc5fb47c-2020-bmw-8-series-gran-coupe-12.jpg")
    //     img.setAttribute("height", "300px")
    // } else if (e.target === list.children[1]) {
    //     img.setAttribute("src", "https://www.diariomotor.com/imagenes/2019/04/mercedes-amg-cla-35-2019-amarillo-32.jpg")
    //     img.setAttribute("height", "300px")
    // } else if (e.target === list.children[2]) {
    //     img.setAttribute("src", "https://www.hibridosyelectricos.com/media/hibridos/images/2019/05/24/2019052410514142475.jpg")
    //     img.setAttribute("height", "300px")
    // }
    img.setAttribute("src", e.target.textContent)
    img.setAttribute("height", "300px")
});

//Apartado 4 - Añadir un input de tipo texto y un botón. Al pulsar el botón debe 
//escribirse el texto del input en un párrafo.

const changeText = document.getElementsByTagName("button")[1];
const inputText = document.getElementsByTagName("input")[0];
// const h3 = document.getElementsByTagName("h3")[0];

changeText.addEventListener("click", function () {
    document.getElementsByTagName("h3")[0].textContent = inputText.value;
});

//Apartado 4.2 - Añadir un nuevo input pero esta vez cambiará el texto con cada 
//pulsación de tecla del usuario.

const inputText2 = document.getElementsByTagName("input")[1];

inputText2.addEventListener("keyup", function () {
    document.getElementsByTagName("h3")[1].textContent = this.value;
});

//Apartado 5 - De forma similar al anterior, pero para un textarea y validará si lo introducido es mayor de 15 caracteres.

const textArea = document.querySelector("#textarea");
const validarTexto = document.getElementsByTagName("button")[2];
console.log(textarea);

validarTexto.addEventListener("click", function () {
    if (textArea.textLength > 15) {
        alert("el texto tiene mas de 15 caracteres!");
    } else {
        alert("todo en orden");
    }
});

//Apartado 6 - Añadir un input de tipo texto con leyenda: “ Escribir un número par”.
//Añadir un botón. Al pulsar el botón nos validará si el número es par o no. 
//En caso negativo, cambiar los bordes del input a rojo.

const inputPar = document.querySelector("#inputpar");
const buttonPar = document.querySelector("#buttonpar");

buttonPar.addEventListener("click", function () {
    if (inputPar.value % 2 === 0) {
        // alert("el numero es par");
        inputPar.style.borderColor = "green";
    } else {
        inputPar.style.borderColor = "red";
        // alert("el numero NO es par");
    }
});

inputPar.addEventListener("keydown", function () {
    inputPar.style.borderColor = "revert";
});

//Apartado 7 - Partiendo de una lista ul , crear 10 li con un texto indicando el número del elemento (“Elemento X”)
//usando un bucle for

const list2 = document.getElementsByTagName("ul")[1];

const listItem = document.createElement("li");

for (i = 0; i <= 9; i++) {
    list2.appendChild(listItem.cloneNode());
    list2.children[i].textContent = `Elemento ${i + 1}`;
};

//Apartado 8 - Crear un enlace y un botón. Si pulso el enlace se me abre la URL en la misma página. Si pulso primero el
//botón y luego el enlace, se me abre en una nueva pestaña.

const linkGoogle = document.querySelector("#linkgoogle");
const buttonGoogle = document.querySelector("#buttongoogle");
let check = false;

buttonGoogle.addEventListener("click", e => check = true);

linkGoogle.addEventListener("click", function () {
    if (check) {
        this.setAttribute("target", "_blank");
    }
});

//Apartado 9 (INCOMPLETO)- Añadir un párrafo y un select con 5 opciones de colores: negro, blanco, rojo, amarillo, verde y azul. Al
//seleccionar un color del select , cambiar el color del parrafo.

const parrafo = document.getElementsByTagName("p")[0];

const color = document.getElementsByTagName("select")[0];

color.addEventListener("", function () {
    console.log(color.target.value);
});

console.log(color);

//Apartado 10 - Incluir un botón que al pulsarlo genere un número aleatorio y mantenga en una lista actualiza el número
//de elementos que se han generado, los que son pares y los que son impares.

const rngButton = document.getElementById("rng");
const rngInfo = document.querySelector("#rnginfo");
// const listEven = document.querySelector("#listeven");
// const listOdd = document.querySelector("#listodd");

let evenArray = [];
let oddArray = [];

rngButton.addEventListener("click", function () {
    let randomNum = Math.floor(Math.random() * 10);
    if (randomNum % 2 === 0) {
        evenArray.push(randomNum);
    } else {
        oddArray.push(randomNum);
    }
    // console.log(evenArray);
    // console.log(oddArray);
    rngInfo.textContent = `Se han generado ${evenArray.length + oddArray.length} números, de los cuales ${evenArray.length} son pares y ${oddArray.length} son impares`;
});

//Apartado 11 - Construir una lista que tenga números. Añadir un input donde poder añadir números y un botón. Al pulsar
//el botón, si el número ya existe en la lista, mostrar un mensaje de error, si no existe, lo añadirá al
//principio.