/*APARTADO 1 - Partimos de un HTML con un div vacío y con JS añadimos
dos elementos p con texto dentro.*/

const voidDiv = document.getElementsByTagName("div")[0];

const newP = document.createElement("p");

newP.textContent = "this p has text";

const newP2 = newP.cloneNode(true);

// voidDiv.appendChild(newP);
// voidDiv.appendChild(newP2);

voidDiv.append(newP, newP2);

/*APARTADO 2 - Al pulsar un botón, cambiar el color del fondo del cuerpo de HTML.*/

const colorButton = document.getElementsByTagName("button")[0];

colorButton.addEventListener("click", function () {
    document.body.classList.toggle("bg-green");
});

/*APARTADO 3 - Partimos de un HTML con una lista de 3 URLs(texto) de imágenes y un elementimg.
Al hacer clicken cada URL, cambiará la imagen a la que contenga dicha URL*/

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
    // } LOL
    img.setAttribute("src", e.target.textContent)
});

/*APARTADO 4 - Añadir un input de tipo texto y un botón. Al pulsar el botón debe 
escribirse el texto del input en un párrafo.*/

const changeText = document.getElementsByTagName("button")[1];
const inputText = document.getElementsByTagName("input")[0];

// changeText.addEventListener("click", function () {
//     document.getElementsByTagName("h3")[0].textContent = inputText.value;
//      inputText.value = "";
// });

const h3 = document.getElementsByTagName("h3")[0];

changeText.addEventListener("click", () => {
    h3.textContent = inputText.value;
    inputText.value = "";
});


/*APARTADO 4.2 - Añadir un nuevo input pero esta vez cambiará el texto con cada 
pulsación de tecla del usuario.*/

const inputText2 = document.getElementsByTagName("input")[1];
const keyInput = document.getElementsByTagName("h3")[1]

inputText2.addEventListener("input", () => keyInput.textContent = inputText2.value);
                            //keyup o keydown tambien son opciones, pero son menos flexibles

/*APARTADO 5 - De forma similar al anterior, pero para un textarea y validará si lo introducido es mayor de 15 caracteres.*/

const textArea = document.querySelector("#textarea");
const validarTexto = document.getElementsByTagName("button")[2];

validarTexto.addEventListener("click", function () {
    if (textArea.textLength > 15) {
        alert("el texto tiene mas de 15 caracteres!");
    } else {
        alert("todo en orden");
    }
});

textArea.addEventListener("input", e => {
    // if (e.target.value.length > 15) {
    //     e.target.style.color = "red";
    // } else {
    //     e.target.style.color = "green";
    // }

    e.target.style.color = e.target.value.length > 15 ? "red" : "green";
});

/*APARTADO 6 - Añadir un input de tipo texto con leyenda: “ Escribir un número par”.
Añadir un botón. Al pulsar el botón nos validará si el número es par o no. 
En caso negativo, cambiar los bordes del input a rojo.*/

const inputPar = document.querySelector("#inputpar");
const buttonPar = document.querySelector("#buttonpar");

buttonPar.addEventListener("click", function () { //aqui no usamos e.target porque no queremos informacion del boton, sino de los inputs
    // if (inputPar.value % 2 === 0) {
    //     // alert("el numero es par");
    //     inputPar.style.color = "green";
    // } else {
    //     inputPar.style.color = "red";
    //     // alert("el numero NO es par");
    // }
    inputPar.style.color = inputPar.value % 2 === 0 ? "green" : "red";
    //es mejor usar classList.toggle, porque las clases son mas felxibles en vez de hardcodear los estilos directamente
});

inputPar.addEventListener("keydown", () => inputPar.style.color = "revert");

/*APARTADO 7 - Partiendo de una lista ul , crear 10 li con un texto indicando el número del elemento (“Elemento X”)
usando un bucle for*/

const list2 = document.getElementsByTagName("ul")[1];

const listItem = document.createElement("li");

for (i = 0 ; i <= 9 ; i++) {
    list2.appendChild(listItem.cloneNode());
    list2.children[i].textContent = `Elemento ${i + 1}`;
};

/*APARTADO 8 - Crear un enlace y un botón. Si pulso el enlace se me abre la URL en la misma página. Si pulso primero el
botón y luego el enlace, se me abre en una nueva pestaña.*/

const linkGoogle = document.querySelector("#linkgoogle");
const buttonGoogle = document.querySelector("#buttongoogle");
// let check = false;

// buttonGoogle.addEventListener("click", e => check = true);

// linkGoogle.addEventListener("click", function () {
//     if (check) {
//         this.setAttribute("target", "_blank");
//     }
// });

buttonGoogle.addEventListener("click", () => linkGoogle.target = "_blank");

/*APARTADO 9 - Añadir un párrafo y un select con 5 opciones de colores: negro, blanco, rojo, amarillo, verde y azul. Al
seleccionar un color del select , cambiar el color del parrafo.*/

const parrafo = document.getElementsByTagName("p")[2];

const color = document.getElementsByTagName("select")[0];

color.addEventListener("change", function (e) { // "input" tambien es una opcion
    parrafo.style.color = e.target.value;
    parrafo.textContent = `Este texto es de color ${e.target.value}`; //???
    console.log(e.target);
});


/*APARTADO 10 - Incluir un botón que al pulsarlo genere un número aleatorio y mantenga en una lista actualiza el número
de elementos que se han generado, los que son pares y los que son impares.*/

const num = document.getElementById("currentRandom")
const totalNumbers = document.getElementById("totalNumbers")
const oddNumbers = document.getElementById("oddNumbers")
const evenNumbers = document.getElementById("evenNumbers")

document.getElementById("randomButton").onclick = () => {
    const randomNumber = Math.floor(Math.random() * 100);
    currentRandom.textContent = randomNumber;
    // totalNumbers.textContent = Number(totalNumbers.textContent) + 1;
    totalNumbers.textContent++; //por algun motivo JS reconoce que es un numero y funciona tal cual con ++
    randomNumber % 2 === 0 ? evenNumbers.textContent++ : oddNumbers.textContent++;
}

//OTRA SOLUCION (mi primera)
const rngButton = document.getElementById("rng");
const rngInfo = document.querySelector("#rnginfo");
const listEven = document.querySelector("#listeven");
const listOdd = document.querySelector("#listodd");

let newNum = document.createElement("li");

let evenArray = [];
let oddArray = [];

rngButton.addEventListener("click", function () {
    let randomNum = Math.floor(Math.random() * 10);
    if (randomNum % 2 === 0) {
        evenArray.push(randomNum);
        listEven.appendChild(newNum.cloneNode());
        listEven.children[evenArray.length-1].textContent = randomNum;
    } else {
        oddArray.push(randomNum);
        listOdd.appendChild(newNum.cloneNode());
        listOdd.children[oddArray.length-1].textContent = randomNum;
    }
    rngInfo.textContent = `Se han generado ${evenArray.length + oddArray.length} números, de los cuales ${evenArray.length} son pares y ${oddArray.length} son impares`;
});

/*APARTADO 11 - Construir una lista que tenga números. Añadir un input donde poder añadir números y un botón. Al pulsar
el botón, si el número ya existe en la lista, mostrar un mensaje de error, si no existe, lo añadirá al
principio. AUN PENDIENTE DE HACER*/

let numList = document.querySelector("#numlist");
const numButton = document.querySelector("#numbutton");
const numInput = document.querySelector("#numinput");

let numArray = [];

numButton.addEventListener("click", function() {
    for (i = 0 ; i < numArray.length ; i++) {
        if (numInput.value !== numArray.slice(i, i+1)) {
            numArray.push(numInput.value);
        }
    }
    console.log(numArray);
});
[].indexOf

/*APARTADO 12 - Crearemos una clase .btnen CSS que le de ciertos estilos a un botón. Al hacer clicken el botón haremos 
“toggle” o alternaremos esa clase, es decir, si está presente la quitaremos y si no está, la añadiremos*/

document.getElementById("toggler").onclick = (e) => e.target.classList.toggle("btn");

/*EXTRA - REFACTORIZAR CODIGO*/

let buttons = document.getElementsByClassName("btn-red"); //Devuelve HTML Collection

// buttons[0].addEventListener('click', () => {
//     buttons[0].style.backgroundColor = "red";
// });

// buttons[1].addEventListener('click', () => {
//     buttons[1].style.backgroundColor = "red";
// });

// buttons[2].addEventListener('click', () => {
//     buttons[2].style.backgroundColor = "red";
// });

//Solucion 1

Array.from(buttons).forEach(button => button.onclick = e => e.target.style.backgroundColor = "red")

//Solucion 2

buttons = document.querySelectorAll(".btn-red"); //devuelve NodeList que tiene disponible para forEach

buttons.forEach(button => {

    button.addEventListener("click", function (e) {
        e.target.style.backgroundColor = "red";
    })
})