//Crea una lista con los nombres de la API Comments de Json Placeholder

// const list = document.getElementsByTagName("ul")[0];

// const urlComments = "https://jsonplaceholder.typicode.com/comments";

// // const localArray = [];

// function fillList(data) {
//     data.slice(0,20).forEach(comment => {
//         // const item = document.createElement("li");
//         // item.textContent = comment.name;
//         // list.appendChild(item)
//         list.innerHTML += `<li>${comment.name}</li>`
//         // localArray.push(comment.name)
// })}

// async function requestURL(url) {
//     const response = await fetch(url);
//     const data = await response.json();
//     fillList(data)
//     // console.log(localArray);
// }
// requestURL(urlComments)

//---------------EJERCICIO 6---------------------

const tbody = document.getElementsByTagName("tbody")[0];
const previousButton = document.querySelector("#previousButton")
const nextButton = document.querySelector("#nextButton")
const pageCounter = document.querySelector("#pageCounter")

const POSTS_URL = "https://jsonplaceholder.typicode.com/posts";

const postsArray = [];

let pageSize = 20;
let pageNumber = 1;
    
function pushArray(array) {
    array.forEach(post => postsArray.push(post))
}

function fillData(currentPageArray) {
    tbody.innerHTML = "";
    currentPageArray.forEach(post => {
        tbody.innerHTML +=
        `<tr>
            <td>
                <p><b>${post.id} - ${post.title}</b></p>
                <p>${post.body}</p>
            </td>
        </tr>`
    })
    pageCounter.textContent = `Page ${pageNumber} / ${postsArray.length / pageSize}`
}

function paginator(items, current_page, per_page_items) {
    //Source: https://shouts.dev/easiest-way-to-paginate-an-array-in-javascript
    let page = current_page || 1,
	per_page = per_page_items || 10,
	offset = (page - 1) * per_page,
    
	paginatedItems = items.slice(offset).slice(0, per_page_items),
	total_pages = Math.ceil(items.length / per_page);
    
	return {
        page: page,
		per_page: per_page,
		pre_page: page - 1 ? page - 1 : null,
		next_page: (total_pages > page) ? page + 1 : null,
		total: items.length,
		total_pages: total_pages,
		data: paginatedItems
	};
}

// function paginate(array, page_size, page_number) {
//     //Source: https://stackoverflow.com/questions/42761068/paginate-javascript-array
//     // human-readable page numbers usually start with 1, so we reduce 1 in the first argument
//     return array.slice((page_number - 1) * page_size, page_number * page_size);
//   }
  
//   console.log(paginate([1, 2, 3, 4, 5, 6], 2, 2));
//   console.log(paginate([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 4, 1));

function previousPage() {
    if (pageNumber > 1) {
        pageNumber--
        fillData(paginator(postsArray,pageNumber,pageSize).data)
    } else {
        alert("No hay más páginas")
    }
}

function nextPage() {
    if (pageNumber < postsArray.length / pageSize) {
        pageNumber++
        fillData(paginator(postsArray,pageNumber,pageSize).data)
    } else {
        alert("No hay más páginas")
    }
}

fetch(POSTS_URL)
    .then(response => {
        if(!response.ok) {
            throw Error("Hay algun problema con la respuesta" + response.statusText);
        }
        return response.json()
    })
    .then(data => {
        pushArray(data)
        previousButton.addEventListener("click", previousPage)
        nextButton.addEventListener("click", nextPage)
        fillData(paginator(postsArray,pageNumber,pageSize).data)
    })
    .catch(error => console.log(error))
;


/* APARTADO 2 */

const LOGIN_URL = "https://reqres.in/api/login";

const USERS_URL = "https://reqres.in/api/users"

const emailInput = document.querySelectorAll("input")[0];
const passwordInput = document.querySelectorAll("input")[1];
const usersList = document.querySelector("#usersList");

document.querySelector("#loginButton").addEventListener("click" , login);

function login(e) {
    e.preventDefault()
    const userInfo = {
        email: emailInput.value,
        password: passwordInput.value
    };
    // console.log(userInfo);
    const config = {
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(userInfo)
    }

    fetch(LOGIN_URL, config)
    .then(r => r.json())//console.log(r)
    // .then(data => {
    //     if (data.error) {
    //         alert(data.error)
    //     } else {
    //         fetchAllUsers()
    //     }
    // })
    .then(data => data.error ? alert(data.error) : fetchAllUsers())
}

async function fetchAllUsers() {
    // fetch(USERS_URL)
    // .then(r => r.json())
    // .then(data => console.log(data))

    let response = await fetch(USERS_URL);
    let data = await response.json();
    // console.log(data);
    let users = [];

    for (let page = 1 ; page <= data.total_pages ; page++) {
        let response = await fetch(`${USERS_URL}?page=${page}`);
        let newData = await response.json();
        users = users.concat(newData.data) // users = [...users, ...newData.data]
    }
    console.log(users);

    usersList.innerHTML = "";
    users.forEach(user => usersList.innerHTML += `<li>${user.email}</li>`)
}

// Alternativa oara recuperar todas las paginas de una API utlizando .then()

let users = [];

function fetchAllUsersV2(url) {
    fetch(url)
    .then(r => r.json())
    .then(newData => {
        users = users.concat(newData.data);

        if (newData.page < newData.total_pages) {
            fetchAllUsersV2(`${USERS_URL}?page=${newData.page+1}`)
        } else {
            usersList.innerHTML = "";
            users.forEach(user => usersList.innerHTML += `<li>${user.email}</li>`)
        }
    });
}