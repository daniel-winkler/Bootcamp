// BOOK CONSTRUCTOR

class Book {
    constructor (id, title, author, sales, price) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.sales = sales;
        this.price = price;
    }
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

let displayedBooks = Array.from(books);

const tbody = document.getElementById("tbody");
const filterInput = document.querySelector("#searchBook");
const priceHeader = document.querySelector("#priceHeader");
const tfoot = document.querySelector("#tfoot");

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

    const totalPrice = displayedBooks.reduce((priceSum, book) => priceSum + book.price, 0)
    tfoot.textContent = `Precio total: ${totalPrice}`
};

fillTable(books);


filterInput.addEventListener("input", e => {
    displayedBooks = books.filter(book => {
       if (book.title.toLowerCase().includes(e.target.value) || book.author.toLowerCase().includes(e.target.value)) {
           return true;
       }
    })
    fillTable(displayedBooks)
})

let ascendingOrder = false;

priceHeader.style.cursor = "pointer";

priceHeader.addEventListener("click", e => {
    ascendingOrder = !ascendingOrder;

    document.getElementsByTagName("span")[0].innerHTML = ascendingOrder ? "&uarr;" : "&darr;";

    displayedBooks.sort((book1, book2) => {
        return ascendingOrder ? book1.price - book2.price : book2.price - book1.price;
    })
    fillTable(displayedBooks)
})



