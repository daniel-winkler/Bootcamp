//-------------------DOM (Document Object Model)------------------------------


//BASICS

console.log(document); //leemos todos los objetos que contiene y por lo tanto podemos acceder.

console.log(document.domain);
//output: 127.0.0.1

console.log(document.URL);
//output: http://127.0.0.1:5500/cheatsheet/

console.log(document.title);
//output: Cheatsheet JavaScript

document.title += " (DOM)" //concatenamos para añadir (DOM).
console.log(document.title);
//output: Cheatsheet JavaScript(DOM)


// SELECTORS

const family = document.getElementsByTagName("div");
console.log(family);


const grandParent = document.getElementById("grandparent");
console.log(grandParent); //no es un HTML collection porque lo seleccionamos por ID, que son unicos.


const parents = document.getElementsByClassName("parent");
console.log(parents);

const parent1 = parents[0]; //accede y guarda al primer objeto del array de parents en una variable
const parent2 = document.getElementsByClassName("parent")[1]; //de la misma forma, accede y guarda el segundo objeto.
console.log(parent1, parent2);

const children = document.getElementsByClassName("child");
console.log(children);
console.log(children[2]);

let element = document.querySelector("div#grandparent>.parent>div.child#child-4"); //seleccionamos de la misma manera que hacemos en CSS
console.log(element);

element = document.querySelectorAll(".grandparent div"); //selecciona todo, y no solo el primero como con querySelector
console.log(element);

parents[0].style.backgroundColor = "cyan"; //style solo funciona con elementos, no con arrays.
parent2.style.backgroundColor = "yellow";

const changeBackground = element => element.style.backgroundColor = "yellow";
changeBackground(children[1]);

const changeBackgroundV2 = (element, color) => element.style.backgroundColor = color;
changeBackgroundV2(children[0], "red");

changeBackgroundV2(parent2.children[1], "blue")
changeBackgroundV2(children[0].parentNode.parentNode, "salmon"); //parentNode va saltando un padre hacia arriba

changeBackgroundV2(parent2.children[1].previousElementSibling, "#ddd"); //accede a parent2.children[0] (el hermano de parent2.children[1])

changeBackgroundV2(grandParent.children[1].previousElementSibling.lastElementChild, "green")
                                //children[1] NO es nuestra variable, sino el hijo de grandParent (llamamos primero nuestra variable grandParent y sólo podemos saltar de uno en uno)

// parents[0].parentNode.style.backgroundColor = "#999"

// for (let familyMember of family) {
//     console.log(familyMember);
// }


// PROPIEDADES / PROPERTIES

//  children[0].innerHTML = "Child 1 v2";
console.log(children[0].innerHTML); //imprime lo que literalmente está dentro dentro del HTML
//output: <span>Child 1</span>
console.log(children[0].textContent); //imprime solo el texto que contiene ignorando las etiquetas interiores.
//output: Child 1

console.log("Classlist:", parent1.classList); //lista todas las clases que tiene ese elemento
parent1.classList.remove("bg-dark"); //borra la clase que indiquemos
console.log("Classlist:", parent1.classList)

parent1.classList.add("bg-red"); //añade la clase bg-red, que le cambia el bgcolor a red porque lo tenemos en CSS, pero no prevalece si lo hemos cambiado antes en JS (código anterior)
console.log("Classlist:", parent1.classList)

parent1.classList.toggle("bg-red"); //alterna la clase. si no está la incluye, si está la elimina.

parent1.setAttribute("name","nombre-del-parent-1"); //crea un atributo nuevo en el html del elemento.
console.log(parent1);

console.clear();


// CREATE / REMOVE ELEMENTS

let myDiv = document.createElement("div");

myDiv.id = "new-div";

myDiv.classList.add("child");

myDiv.textContent = "child 2.5";

parent1.appendChild(myDiv); //lo creamos como hijo del elemento que indiquemos

// IMPORTANTE: No podemos volver a utilizar un nodo que hayamos creado, ni asignandolo a otra variable.

let myDiv2 = myDiv;

parent2.appendChild(myDiv);
parent1.appendChild(myDiv2); //MISMO nodo con variables distintas variables

myDiv2 = myDiv.cloneNode(true); //con true, copia todo el contenido que tenga ese div

parent2.appendChild(myDiv2); //lo añade al final del parent2 como hijo

myDiv2.textContent = "Child 5";

myDiv.remove();

let myDiv3 = myDiv.cloneNode();

parent2.before(myDiv3); //before lo añade antes del padre indicado (parent2).
parent2.after(myDiv.cloneNode()); //after añade despues del elemento padre indicado.


//Miniejercicio: crea una funcion que devuelva un nodo nuevo y que reciba etiqueta e ID.
function newNode(tag, id, classes) {
    let newNode;
    newNode = document.createElement(tag);
    newNode.id = id;
    newNode.classList.add(classes);
    return newNode;
}

newDiv = newNode("div", "newId", "newClass");
parent1.appendChild(newDiv);
console.log(newDiv);

newDiv.classList.add("newClass2","newClass3");
console.log(newDiv);


// EVENTS / EVENTOS

const colorButton = document.getElementsByTagName("button")[0] //indicamos [0] porque sino te devuelve un HTML collection, aunque solo sea un elemento.

colorButton.addEventListener("click", function (event) { //event no deja de ser un argumento y no es obligatorio usarlo, pero nos puede ser util.
    console.log(event); //da informacion del evento "click"
    console.log(event.target); //informa del elemento que ha disparado el evento
    // document.body.style.backgroundColor = "green";
    console.log(event.target.tagName); //nos dice el nombre de la etiqueta del disparador.
    
    if (event.ctrlKey) { //entra en el bucle si se hace click manteniendo CTRL pulsado
        document.body.classList.toggle("bg-red"); //activa y desactiva la clase con nuestro evento click
    }

    console.log(`X: ${event.clientX} | Y: ${event.clientY}`); //indica las coordenadas del raton respecto al viewport.
    console.log(`Alt: ${event.altKey} | Shift: ${event.shiftKey} | Ctrl: ${event.ctrlKey}`); //indica el buleano si hemos mantenido pulsado uno de aquellos botones al hacer click
});

const emailInput = document.getElementById("emailInput"); //con ID siempre te va a devolver un elemento, y no un HTML collection
console.log(emailInput);

emailInput.addEventListener("focus", inputListener);
emailInput.addEventListener("blur", inputListener);


function inputListener (e) {
    console.log("Tipo de evento :", e.type);
    if (e.type === "blur") {
        e.target.style.borderColor = "red";
        // e.target.classList.add("bg-red");
    } else if (e.type === "focus") {
        e.target.style.borderColor = "green";
        // e.target.classList.remove("bg-red");
    }
}

const changeTitle = e => {
    document.querySelectorAll("h1")[2].textContent = emailInput.value; //value accede al contenido actual del input
}


emailInput.addEventListener("keydown", inputListener);
emailInput.addEventListener("keyup", changeTitle);

const container = document.querySelector("#container");

container.addEventListener("mouseover", inputListener);
container.addEventListener("mouseout", inputListener);


function coords(e) {
    document.querySelectorAll("h1")[3].textContent = `X: ${e.clientX} | Y: ${e.clientY}`;
};

document.body.addEventListener("mousemove", coords);



