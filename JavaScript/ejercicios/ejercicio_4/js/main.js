function Book(id, title, author, sales, price) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.sales = sales;
    this.price = price;
};

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

console.log(books);


const tbody = document.querySelector("#tbody");

function fillRow(bookObject) {
    // tbody.innerHTML = "";
    let row = document.createElement("tr");
    tbody.appendChild(row)

    for (const key in bookObject) {
        const value = bookObject[key];
        const td = document.createElement("td");
        td.textContent = value;
        row.appendChild(td)
    };

    let button = document.createElement("button");
    button.classList.add("btn", "btn-danger")
    button.textContent = "Remove book";
    row.appendChild(button)
};


function fillTable(books) {
    books.forEach(book => fillRow(book))
}

fillTable(books)

