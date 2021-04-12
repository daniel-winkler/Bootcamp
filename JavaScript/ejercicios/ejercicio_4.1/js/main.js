// BOOK CONSTRUCTOR

function Book(id, title, author, sales, price) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.sales = sales;
    this.price = price;
};

// DATA INITIALIZATION

let books = [
    new Book(1, "Sapiens", "Yuval Noah Harari", 196846, 12),
    new Book(2, "12 Rules for Life", "Jordan B. Peterson", 325584, 15),
    new Book(3, "Mans Search for Meaning", "Viktor Frankl", 367411, 10),
    new Book(4, "Post Office", "Charles Bukowski", 122174, 8),
    new Book(5, "Steppenwolf", "Herman Hesse", 245338, 9),
    new Book(6, "Open", "Andre Agassi", 645343, 18),
    new Book(7, "The Name of the Wind", "Patrick Rothfuss", 438253, 11),
    new Book(8, "It", "Stephen King", 586756, 13),
    new Book(9, "Meditations", "Marcus Aurelius", 184253, 10),
    new Book(10, "Involuntary Journey to Siberia", "Andrei Amalrik", 86922, 12)
];

// SELECTORS

const tbody = document.querySelector("#tbody");

// UPDATE TABLE

function updateTable() {
    //vaciamos el tbody por completo
    tbody.innerHTML = "";

    //generamos de nuevo todas las filas
    books.forEach(book => {
        tbody.innerHTML += 
        `<tr>
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.sales}</td>
            <td>${book.price}</td>
            <td>
                <button class="btn btn-danger" id="${book.id}">Remove</button>
            </td>
        </tr>`;
    });
};

updateTable();

// DELETE BOOK

tbody.addEventListener("click", e => {
    if (e.target.tagName === "BUTTON") {
    books = books.filter(book => book.id != e.target.id)
    updateTable();
    };
});

// ADD BOOK

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const sales = document.querySelector("#sales");
const price = document.querySelector("#price");
const submit = document.querySelector("#submit");
const form = document.querySelector("#form");

let newId = 10

submit.addEventListener("click", (e) => {
    e.preventDefault();
    // const newId = books[books.length-1].id + 1;
    newId++
    books.push(new Book(newId, title.value, author.value, sales.value, price.value))
    updateTable(books);
    form.reset();
    // title.value = "";
    // author.value = "";
    // sales.value = "";
    // price.value = "";
});

