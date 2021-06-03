import "./ToDoList.css";
import { MY_TODOS_DB } from "../settings";


export default function ToDoList({todos, setFetched, fetched}) {

    function toggleCompleted (e) {

        let id = e.target.tagName === "LI" ? e.target.id : e.target.parentElement.id
        let checked = e.target.classList.contains("completed") ? false : true;
        let body = {
            completed: checked
        }
        
        const http = {
            method: "PUT",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(body)
        };

        if (e.target.tagName !== "BUTTON") {

            fetch(MY_TODOS_DB + id, http)
                .then(r => r.json())
                .then(data => setFetched(!fetched))
            ;
        }

        // if (e.target.tagName !== "BUTTON") {
        //     const newTodos = [...todos];
        //     newTodos[i].completed = !newTodos[i].completed
        //     setTodos(newTodos)
        // }
    }
    
    function handleRemoveTodo(e) {
        //declaro la id del elemento LI que contiene el boton correspondiente
        const id = e.target.parentElement.id
        //como el metodo delete es por parametros, hago fetch a la url más la id como parametro
        fetch(MY_TODOS_DB + id, { method: "DELETE" })
            .then(r => r.json())
            .then(data => setFetched(!fetched))
        ;
    }

    return (
        <ul className="list-group">
            {todos.map((todo, index) => {
                    return (
                        <li key={todo._id} id={todo._id} className={`list-group-item d-flex justify-content-between ${todo.completed ? "completed" : ""}`} onClick={e => toggleCompleted(e, index)}>
                            <span>{index}: {todo.title}</span>
                            <button className="btn btn-danger" onClick={e => handleRemoveTodo(e)}>X</button>
                        </li>
                    )
                })}
        </ul>
    )
}
