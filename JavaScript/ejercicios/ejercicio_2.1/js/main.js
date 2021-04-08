// CONSTRUCTOR

function User(name, firstLastName, secondLastName, email, age, city) {
    this.name = name;
    this.firstLastName = firstLastName;
    this.secondLastName = secondLastName;
    this.email = email;
    this.age = age;
    this.city = city;
    this.nProducts = 0;
    this.addProducts = () => this.nProducts++;
    this.emptyProducts = () => this.nProducts = 0;
};

// DATA

const users = [
    new User("Jose", "Lopez", "Garcia", "jlopez@gmail.com", 25, "Barcelona"),
    new User("Luisa", "Martin", "Sánchez", "lmartin@gmail.com", 51, "Cádiz"),
    new User("Pablo", "Ruiz", "Villalba", "pruiz@gmail.com", 33, "Segovia"),
];

// SELECTORS 

const select = document.querySelector("#selectmenu");
const list = document.querySelector("#userinfo")
const addButton = document.querySelector("#addbutton");
const emptyButton = document.querySelector("#emptybutton");

users.forEach(user => {
    let option = document.createElement("option");
    option.textContent = user.name;
    select.appendChild(option);
});

// FILL LIST

function fillList(userObject) {

    list.innerHTML = "";

    for (const key in userObject) {

        const value = userObject[key];

        if (typeof value !== "function") {
            let listItem = document.createElement("li");
            listItem.innerHTML = `<b>${key}:</b> ${value}`;
            listItem.classList.add("list-group-item")
            list.appendChild(listItem)
        };
    };

}

// LISTENERS

select.addEventListener("change", () => {
    const selectedUser = users.find(user => user.name === select.value);
    fillList(selectedUser)
    console.log(selectedUser);
});

addButton.addEventListener("click", processProducts)
emptyButton.addEventListener("click", processProducts)

function processProducts (e) {
    const selectedUser = users.find(user => user.name === select.value);
    if (e.target === addButton) {
        selectedUser.addProducts();
    } else {
        selectedUser.emptyProducts()
    };
    fillList(selectedUser);
};