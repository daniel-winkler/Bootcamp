// CLASS CONSTRUCTOR

class Book {
    constructor (id, title, author, sales, price) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.sales = sales;
        this.price = price;
    }
}

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
    new Book(9, "Meditations", "Marcus Aurelius", 284253, 10),
    new Book(10, "Involuntary Journey to Siberia", "Andrei Amalrik", 186922, 16)
];

let displayedBooks = Array.from(books);

let newId = books.length;

// SELECTORS

const tbody = document.getElementsByTagName("tbody")[0];
const titleInput = document.querySelector("#titleInput");
const authorInput = document.querySelector("#authorInput");
const salesInput = document.querySelector("#salesInput");
const priceInput = document.querySelector("#priceInput");
const addButton = document.querySelector("#addButton");
const form = document.getElementsByTagName("form")[0];
const searchInput = document.querySelector("#searchInput")
const tfoot = document.querySelector("tfoot>tr>th")
const priceButton = document.querySelector("#priceButton");
const arrow = document.getElementsByTagName("span")[0]

// FUNCTIONS

function fillTable(array) {
    tbody.innerHTML = "";
    
    array.forEach(book => {
        tbody.innerHTML += 
        `<tr>
        <th>${book.id}</th>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.sales}</td>
        <td>${book.price}</td>
        <td><button class="btn btn-warning" id="${book.id}">Remove book</button></td>
        </tr>
        `
    })
}
fillTable(books);

function addBook(e) {
    e.preventDefault();
    newId++;
    books.push(new Book(newId, titleInput.value, authorInput.value, salesInput.value, priceInput.value))
    // displayedBooks.push(new Book(newId, titleInput.value, authorInput.value, salesInput.value, priceInput.value))
    fillTable(books)
    priceSummary()
    form.reset()
}

function removeBook(e) {
    if (e.target.tagName === "BUTTON") {
        books = books.filter(book => book.id != e.target.id)
        displayedBooks = books.filter(book => book.id != e.target.id)
    }
    fillTable(displayedBooks)
    priceSummary()
}

function searchBook() {
    displayedBooks = books.filter(book => {
        if (book.title.toLowerCase().includes(searchInput.value) || book.author.toLowerCase().includes(searchInput.value)) {
            return true;
        }
    })
    fillTable(displayedBooks)
    priceSummary()
    arrow.innerHTML = "";
}

function priceSummary() {
    let totalPrice = displayedBooks.reduce((sum, book) => sum + book.price, 0)
    tfoot.textContent = `Total price: ${totalPrice}`;
}
priceSummary()

let order = false;
priceButton.style.cursor = "pointer";
function sortByPrice() {
    order = !order;
    arrow.innerHTML = order ? "&uarr;" : "&darr;";
    displayedBooks.sort((book1, book2) => {
        return order ? book1.price - book2. price : book2.price - book1.price;
    })
    fillTable(displayedBooks)
}

// EVENTS

addButton.addEventListener("click", addBook);
tbody.addEventListener("click", removeBook)
searchInput.addEventListener("input", searchBook)
priceButton.addEventListener("click", sortByPrice)
