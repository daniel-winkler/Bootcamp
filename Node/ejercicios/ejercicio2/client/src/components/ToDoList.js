import "./ToDoList.css";
import { MY_TODOS_DB } from "../settings";


export default function ToDoList({todos, setTodos}) {

    function toggleCompleted (e, i) {

        let id
        if (e.target.tagName === "SPAN") {
            id = e.target.parentElement.id
        } else {
            id = e.target.id
        }
        console.log(e.target);
        if (e.target.tagName !== "BUTTON") {

            fetch(MY_TODOS_DB + id, { method: "PUT" })
                .then(r => r.json())
                .then(data => console.log(data))
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
            .then(data => console.log(data))
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
