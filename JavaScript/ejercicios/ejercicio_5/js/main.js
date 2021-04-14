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
    new Book(3, "Mans Search for Meaning", "Viktor Frankl", 367411, 17),
    new Book(4, "Post Office", "Charles Bukowski", 122174, 8),
    new Book(5, "Steppenwolf", "Herman Hesse", 245338, 9),
    new Book(6, "Open", "Andre Agassi", 645343, 18),
    new Book(7, "The Name of the Wind", "Patrick Rothfuss", 438253, 11),
    new Book(8, "It", "Stephen King", 586756, 13),
    new Book(9, "Meditations", "Marcus Aurelius", 184253, 10),
    new Book(10, "Involuntary Journey to Siberia", "Andrei Amalrik", 86922, 16)
];

const tbody = document.getElementById("tbody");

function fillTable (array) {
    tbody.innerHTML = "";
    array.forEach(book => {
        tbody.innerHTML += 
        `<tr>
            <td>${book.id}</td>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.sales}</td>
            <td>${book.price}</td>
        </tr>`;
    });
};

fillTable(books);

// SEARCH BOOK
const searchBook = document.querySelector("#searchBook");

let booksToDisplay = Array.from(books); //porque al igual que con los objetos, si simplemente lo asignamos a books, es un objeto con dos nombres distintos


searchBook.addEventListener("input", () => {
    let input = searchBook.value.toLowerCase();
    booksToDisplay = books.filter(book => {
        for (let key in book) {
            let value = book[key]
            if (typeof value === "string") {
                value = value.toLowerCase();
            }
            if (typeof value === "string" && value.includes(input)) {
                return true
            }
        }
    })
    fillTable(booksToDisplay);
    updatePriceSummary()
    sortBooks();
});

// PRICE SUMMARY
const tfoot = document.querySelector("tfoot>tr>th")

function updatePriceSummary() {
    let priceSummary = booksToDisplay.reduce((sum, currentPrice) => sum + currentPrice.price, 0)
    tfoot.textContent = `Current total price : ${priceSummary}`;
}
updatePriceSummary()

// SORT BOOKS
const sortButton = document.querySelector("#sortButton");

function sortBooks() {
    booksToDisplay.sort((book1, book2) => book1.price - book2.price);
}

// sortBooks();
// let sortedBooks = booksToDisplay;

sortButton.addEventListener("click", () => {
    booksToDisplay.reverse();
    fillTable(booksToDisplay);
})

