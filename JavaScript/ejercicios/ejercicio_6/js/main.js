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
    pageCounter.textContent = `Page ${pageNumber}/5`
}

function paginator(items, current_page, per_page_items) {
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

let pageNumber = 1;

function previousPage() {
    if (pageNumber > 1) {
        pageNumber--
        fillData(paginator(postsArray,pageNumber,20).data)
    } else {
        alert("No hay más páginas")
    }
}

function nextPage() {
    if (pageNumber < 5) {
        pageNumber++
        fillData(paginator(postsArray,pageNumber,20).data)
    } else {
        alert("No hay más páginas")
    }
}

// async function requestURL(url) {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     fillData(data);
//     pushArray(data);
//     console.log(postsArray);
// }
// requestURL(POSTS_URL)


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
        fillData(paginator(postsArray,pageNumber,20).data)
    })
    .catch(error => console.log(error))
;