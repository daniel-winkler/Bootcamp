import {useState} from "react";

export default function InputToDo({todos, setTodos}) {

    const initialInput = {
        userId: 0,
        title: "",
        completed: false
    }

    const [input, setInput] = useState(initialInput);

    function handleInput(e) {
        setInput({...input, title: e.target.value})
    }

    function submit(e) {
        e.preventDefault()
        setTodos([input, ...todos]) //setTodos(currentTodos => currentTodos.unshift(input))
        setInput(initialInput)
    }

    return (
        <form onSubmit={submit}>
            <input type= "text" className="form-control mb-3" placeholder="Type in a new To-Do item" value={input.title} onChange={handleInput} />
        </form>
    )
}
