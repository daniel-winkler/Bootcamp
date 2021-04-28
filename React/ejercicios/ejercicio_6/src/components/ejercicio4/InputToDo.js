import { useState, useContext } from "react";
import { GlobalContext } from "../../App";

export default function InputToDo() {

    const {setTodos} = useContext(GlobalContext)

    const initialInput = {
        userId: 0,
        id: 0,
        title: "",
        completed: false
    }

    const [input, setInput] = useState(initialInput);

    function handleInput(e) {
        setInput({...input, title: e.target.value})
    }

    function submit(e) {
        e.preventDefault()
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
