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

parents[0].style.backgroundColor = "#ddd";
parent2.style.backgroundColor = "#333";


// for (let familyMember of family) {
//     console.log(familyMember);
// }