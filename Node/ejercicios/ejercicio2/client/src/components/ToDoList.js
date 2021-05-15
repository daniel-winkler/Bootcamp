import "./ToDoList.css";

export default function ToDoList({todos, setTodos}) {

    function toggleCompleted (e, i) {
        if (e.target.tagName !== "BUTTON") {
            const newTodos = [...todos];
            newTodos[i].completed = !newTodos[i].completed
            setTodos(newTodos)
        }
        
    }
   
    function handleRemoveTodo(title) {
        return () => setTodos(todos.filter(todo => title !== todo.title))
    }

    return (
        <ul className="list-group">
            {todos.map((todo, index) => {
                    return (
                        <li key={todo.title+index} className={`list-group-item d-flex justify-content-between ${todo.completed ? "completed" : ""}`} onClick={e => toggleCompleted(e, index)}>
                            <span>{index}: {todo.title}</span>
                            <button className="btn btn-danger" onClick={handleRemoveTodo(todo.title)}>X</button>
                        </li>
                    )
                })}
        </ul>
    )
}
