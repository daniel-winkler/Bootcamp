// Apartado 1 - Partimos de un HTML con un div vacío y con JS añadimos
//dos elementos p con texto dentro.

const voidDiv = document.getElementsByTagName("div")[0];

const newP = document.createElement("p");

newP.textContent = "this p has text";

const newP2 = newP.cloneNode(true);


// voidDiv.appendChild(newP);
// voidDiv.appendChild(newP2);

voidDiv.append(newP, newP2);

console.log(voidDiv);
console.log(newP);

//Apartado 2 - Al pulsar un botón, cambiar el color del fondo del cuerpo de HTML.

const colorButton = document.getElementsByTagName("button")[0];

colorButton.addEventListener("click", function() {
    document.body.classList.toggle("bg-green");
});

//Apartado 3 - Partimos de un HTML con una lista de 3 URLs(texto) de imágenes y un elementimg.
//Al hacer clicken cada URL, cambiará la imagen a la que contenga dicha URL

const img = document.getElementsByTagName("img")[0];

const list = document.getElementsByTagName("ul")[0];

list.addEventListener("click", function (e){
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
const h3 = document.getElementsByTagName("h3")[0];

changeText.addEventListener("click", function() {
    h3.textContent = inputText.value;
})

//Apartado 4.2 - Añadir un nuevo input pero esta vez cambiará el texto con cada 
//pulsación de tecla del usuario.

const inputText2 = document.getElementsByTagName("input")[1];


