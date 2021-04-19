/* APARTADO 1*/

const tbody = document.getElementsByTagName("tbody")[0];
const pageCounter = document.querySelectorAll(".pageCounter");
const previousButton = document.querySelectorAll(".previousPage").forEach(button => button.addEventListener("click", changePage));
const nextButton = document.querySelectorAll(".nextPage").forEach(button => button.addEventListener("click", changePage));;


const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

let postsArray = []

let pageSize = 5;
let pageNumber = 1;

// FUNCTIONS

async function getPosts(url) {
    const response = await fetch(url);
    const data = await response.json();
    postsArray = postsArray.concat(data)
    fillTable(paginate(postsArray,pageSize,pageNumber))
};
getPosts(POSTS_URL)

function fillTable (array) {
    tbody.innerHTML = "";
    array.forEach(post => {
        tbody.innerHTML += 
        `<tr>
            <td>
                <p><b>${post.id} - ${post.title}</b></p>
                <p>${post.body}</p>
            </td>
        </tr>`
    });
    pageCounter.forEach(counter => {
        counter.textContent = `Page ${pageNumber} / ${postsArray.length/pageSize}`
    })
};

function paginate(array, page_size, page_number) {
    //Source: https://stackoverflow.com/questions/42761068/paginate-javascript-array
    // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
    return array.slice((page_number - 1) * page_size, page_number * page_size);
}

function changePage(e) {
    if (e.target.classList.contains("nextPage") && pageNumber < postsArray.length/pageSize) {
        pageNumber++
        fillTable(paginate(postsArray,pageSize,pageNumber))
    } else if (e.target.classList.contains("previousPage") && pageNumber > 1) {
        pageNumber--
        fillTable(paginate(postsArray,pageSize,pageNumber))
    } else {
        alert("No hay más páginas.")
    }
}

/* APARTADO 2*/

const LOGIN_URL = "https://reqres.in/api/login";
const USERS_URL = "https://reqres.in/api/users";

const usersList = document.getElementsByTagName("ul")[0];

document.querySelector("#loginButton").addEventListener("click", login);

function login(e) {

    e.preventDefault();

    const userInfo = {
        email: emailInput.value,
        password: passwordInput.value
    };

    const config = {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(userInfo)
    }

    fetch(LOGIN_URL, config)
    .then(r => r.json())
    .then(data => data.error ? alert(data.error) : fetchUsersV2(USERS_URL))
                                                // fetchUsers()
}

let users = [];

// async function fetchUsers() {
//     let response = await fetch(USERS_URL);
//     let data = await response.json();
    
//     for (let page = 1 ; page <= data.total_pages ; page++) {
//         response = await fetch(`${USERS_URL}?page=${page}`)
//         data = await response.json();
//         users = users.concat(data.data);
//     }

//     usersList.innerHTML = "";
//     users.forEach(user => {
//         usersList.innerHTML += `<li>${user.first_name} ${user.last_name}</li>`
//     })
// }

function fetchUsersV2(url) {
    fetch(url)
    .then(r => r.json())
    .then(data => {
        users = users.concat(data.data);

        if (data.page < data.total_pages) {
            fetchUsersV2(`${url}?page=${data.page+1}`)
        } else {
            usersList.innerHTML = "";
            users.forEach(user => usersList.innerHTML += `<li>${user.first_name} ${user.last_name}</li>`)
        }
    })
}