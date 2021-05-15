import { useState } from "react";
import { MY_TODOS_DB } from "../settings"
import useFetch from '../hooks/useFetch';

export default function InputToDo({setTodos}) {

    const initialInput = {
        title: ""
    }

    const [input, setInput] = useState(initialInput);

    function handleInput(e) {
        setInput({...input, title: e.target.value})
        // setInput(e.target.value)
    }

    const http = {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify(input)
    };
    
    function submit(e) {
        e.preventDefault()
        fetch(MY_TODOS_DB, http)
            .then(r => r.json())
            .then(data => console.log(data))
        ;
        // useFetch(MY_TODOS_DB, setTodos)
        // setTodos(currentTodos => [input, ...currentTodos])
        // con currentTodos no hace falta importar nuestro estado (todos), porque esa informacion ya la tiene nuestra funcion setTodos
        setInput(initialInput)
    }

    return (
        <form onSubmit={submit}>
            <input type= "text" className="form-control mb-3" placeholder="Type in a new To-Do item" value={input.title} onChange={handleInput} />
        </form>
    )
}
