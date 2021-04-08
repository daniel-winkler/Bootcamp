/* CONSTRUCTOR */

function User(name, firstLastName, secondLastName, email, age, city) {
    this.name = name;
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this.email = email;
    this.age = age;
    this.city = city;
    this.productsCount = 0;
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
});

// for (let user of users) {
//     let option = document.createElement("option");
//     option.textContent = user.name;
//     select.appendChild(option)
// } ALTERNATIVA FOR OF

// for (const key in users[0]) {
//     const value = users[0][key];
//     if (typeof value !== "function") {
//         const newListItem = document.createElement("li");
//         //newListItem.textContent = `${key}: ${value}`;
//         newListItem.innerHTML = `<b>${key}:</b> ${value}`;
//         newListItem.classList.add("list-group-item")
//         list.appendChild(newListItem)
//         // list.innerHTML = `<li class="list-group-item"><b>${key}:</b> ${value}</li>`;
//     };
// };


/*RELLENAR LA LISTA CON LA INFO DE UN USUARIO*/

function fillList(user) {

    list.innerHTML = "";

    for (const key in user) {

        const value = user[key]; //usamos [] porque va iterando en las propiedades de cada user.

        if (typeof value !== "function") {
            const newListItem = document.createElement("li");
            newListItem.innerHTML = `<b>${key}:</b> ${value}`;
            // newListItem.textContent = `${key}: ${value}`;
            newListItem.classList.add("list-group-item")
            list.appendChild(newListItem)
            // list.innerHTML += `<li class="list-group-item"><b>${key}:</b> ${value}</li>`;
        };
    };
};


/*AÑADIR LISTENERS*/

select.addEventListener("change", () => {
    const selectedUser = users.find(user => user.name === select.value);
    //va buscando en nuestro array el nombre del nuestro objeto hasta que coincida con el nombre seleccionado en nuestro select
   fillList(selectedUser)
});

incrementButton.addEventListener("click", processProducts);
emptyButton.addEventListener("click", processProducts);

function processProducts(e) {
    const selectedUser = users.find(user => user.name === select.value);
    if (e.target.id === "incrementbutton") {
        selectedUser.incrementProducts();
    } else {
        selectedUser.emptyProducts();
    };
    fillList(selectedUser)
}

// const user1 = {
//     name: "Fran",
//     firstLastName: "Gomez",
//     secondLastName: "Fernandez",
//     email: "fgomez@gmail.com",
//     age: "45",
//     city: "Malaga"
// }