/* CONSTRUCTOR */

function User(name, firstLastName, secondLastName, email, age, city, productsCount) {
    this.name = name;
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this.email = email;
    this.age = age;
    this.city = city;
    this.productsCount = productsCount;
    this.incrementProducts =  () => this.productsCount++;
    this.emptyProducts = () => this.productsCount = 0;
};

/* DATA */

const users = [
    new User("Fran", "Gómez", "Fernández", "fgomez@gmail.com", 35, "Málaga"),
    new User("Lucía", "García", "Ruíz", "lgarcia@gmail.com", 41, "Madrid"),
    new User("María", "Núñez", "Coronado", "mnunez@gmail.com", 18, "Albacete"),
];

/* SELECTORS */

const select = document.querySelector("#userselect");
const list = document.querySelector("#userinfo");
const incrementButton = document.querySelector("#incrementbutton");
const emptyButton = document.querySelector("#emptybutton");


users.forEach(user => {
    let option = document.createElement("option");
    option.textContent = user.name;
    select.appendChild(option)
 })
console.log(select);


// const user1 = {
//     name: "Fran",
//     firstLastName: "Gomez",
//     secondLastName: "Fernandez",
//     email: "fgomez@gmail.com",
//     age: "45",
//     city: "Malaga"
// }