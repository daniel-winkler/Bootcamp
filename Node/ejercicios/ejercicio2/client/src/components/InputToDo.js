import {useState} from "react";

export default function InputToDo({setTodos}) {

    const initialInput = {
        title: "",
        completed: false,
        active: true
    }

    const [input, setInput] = useState(initialInput);

    function handleInput(e) {
        setInput({...input, title: e.target.value})
    }

    const MY_TODOS_DB = "http://127.0.0.1:3050/todos/"

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

        setTodos(currentTodos => [input, ...currentTodos])
        // con currentTodos no hace falta importar nuestro estado (todos), porque esa informacion ya la tiene nuestra funcion setTodos
        setInput(initialInput)
    }

    return (
        <form onSubmit={submit}>
            <input type= "text" className="form-control mb-3" placeholder="Type in a new To-Do item" value={input.title} onChange={handleInput} />
        </form>
    )
}
