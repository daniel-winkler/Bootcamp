const URL = "https://jsonplaceholder.typicode.com/users";

let promise = fetch(URL);

console.log(1);
promise.then(response => console.log(response)) //then siempre se aplica sobre una promesa cuando esta se resuelva, y espera una funcion callback
console.log(2);

console.log(promise);


function printData(array) {
    array.forEach(user => console.log(user.website))
}

const printNames = array => array.forEach(user => console.log(user.name))
const printCities = array => array.forEach(user => console.log(user.address.city))
const printLats = array => array.forEach(user => console.log(user.address.geo.lat))

fetch(URL)
    .then(response => {
        if(!response.ok) {
            throw Error("Hay algun problema con la respuesta" + response.statusText);
        }
        return response.json()
    })
    .then(data => {
        printData(data);
        printNames(data);
        printCities(data);
        printLats(data);
    })
    .catch(error => console.log(error))
;


fetch(URL).then(r => r.json()).then(data => console.log(data))


// Async - await (alternativa a .then)

async function requestURL(url) {
    console.log(2);
    const response = await fetch(url);
    const data = await response.json();
    // console.log(data);
    // printData(data);
    // printNames(data);
    // printCities(data);
    // printLats(data);
    console.log(4);
}

console.log(1);
requestURL(URL);
console.log(3); //los console log indican el orden en el que salen impresas, ya que tenemos los await en la funcion.


// Peticion con método HTTP POST en lugar de GET

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

const newPost = {
    title: "mi titulo",
    body: "mi cuerpo de publciacion"
};

const http = {
    method: "POST",
    headers: {
        "Content-type": "application/json"
    },
    body: JSON.stringify(newPost)
};

fetch(POSTS_URL, http)
    .then(r => r.json())
    .then(data => console.log(data))
;


