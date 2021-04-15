//Crea una lista con los nombres de la API Comments de Json Placeholder

const list = document.getElementsByTagName("ul")[0];

const urlComments = "https://jsonplaceholder.typicode.com/comments";

const localArray = [];

function fillList(data) {
    data.slice(0,20).forEach(comment => {
        // const item = document.createElement("li");
        // item.textContent = comment.name;
        // list.appendChild(item)
        list.innerHTML += `<li>${comment.name}</li>`
        localArray.push(comment.name)
})}

async function requestURL(url) {
    const response = await fetch(url);
    const data = await response.json();
    fillList(data)
    console.log(localArray);

}
requestURL(urlComments)


//Con la API Posts de Json Placeholder crea un h2 y un parrafo para el titulo
//y el body respectivamente para cada post.

const posts = document.getElementsByTagName("div")[0];

const urlPosts = "https://jsonplaceholder.typicode.com/posts";

function fillData(data) {
    data.slice(0,20).forEach(post => {
        // const title = document.createElement("h2");
        // title.textContent = post.title;
        // posts.appendChild(title);
        
        // const body = document.createElement("p");
        // body.textContent = post.body;
        // posts.appendChild(body)
        posts.innerHTML +=
        `<h2>${post.title}</h2>
        <p>${post.body}</p>
        `
    })
}

fetch(urlPosts)
    .then(r => r.json())
    .then(data => fillData(data))
    .catch(error => console.log(error))



