// CONSTRUCTOR

function Book(title, author, sales, price) {
    this.title = title;
    this.author = author;
    this.sales = sales;
    this.price = price;
};

let books = [
    new Book("Sapiens", "Yuval Noah Harari", 196846, 12),
    new Book("12 Rules for Life", "Jordan B. Peterson", 325584, 15),
    new Book("Mans Search for Meaning", "Viktor Frankl", 367411, 10),
    new Book("Post Office", "Charles Bukowski", 122174, 8),
    new Book("Steppenwolf", "Herman Hesse", 245338, 9),
    new Book("Open", "Andre Agassi", 645343, 18),
    new Book("The Name of the Wind", "Patrick Rothfuss", 438253, 11),
    new Book("It", "Stephen King", 586756, 13),
    new Book("Meditations", "Marcus Aurelius", 184253, 10),
    new Book("Involuntary Journey to Siberia", "Andrei Amalrik", 86922, 12)
];

// TABLE

const tbody = document.querySelector("#tbody");
let bookId = 1;

function fillRow(bookObject) {
    
    const row = document.createElement("tr");
    tbody.appendChild(row);
    const th = document.createElement("th");
    th.textContent = bookId;
    row.appendChild(th);

    bookObject = {"id" : bookId, ...bookObject}
    newBookList.push(bookObject);

    for (const key in bookObject) {
        if (key !== "id") {
        const value = bookObject[key];
        const td = document.createElement("td");
        td.textContent = value;
        row.appendChild(td);
        };
    };
    
    const td = document.createElement("td");
    row.appendChild(td);
    const button = document.createElement("button");
    button.classList.add("btn", "btn-outline-danger")
    button.textContent = "Remove book";
    button.id = bookId;
    td.appendChild(button)

    bookId++
};

function fillTable(books) {
    tbody.innerHTML = "";
    newBookList = [];
    books.forEach(book => fillRow(book))
    bookId = 1;
}

fillTable(books)

// REMOVE BOOK

tbody.addEventListener("click", (e) => {
    if (e.target.textContent === "Remove book"){
        books.splice(e.target.id - 1, 1);
        fillTable(books)
    };
});

// ADD BOOK

const title = document.querySelector("#title");
const author = document.querySelector("#author");
const sales = document.querySelector("#sales");
const price = document.querySelector("#price");
const submit = document.querySelector("#submit");

// function submitForm() {
//     const frm = document.querySelector("#form");
//     frm.submit(); // Submit
//     frm.reset();  // Reset
//     return false; // Prevent page refresh
//  };

submit.addEventListener("click", () => {
    books.push(new Book(title.value, author.value, sales.value, price.value))
    fillTable(books);
    title.value = "";
    author.value = "";
    sales.value = "";
    price.value = "";
});
