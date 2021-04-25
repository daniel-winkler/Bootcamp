export default function ToDoList({todos, setTodos}) {

    function handleCompleted(i) {

        return (e) => {
            
            if (e.target.tagName !== "BUTTON") {
                setTodos(todos.map((todo, index) => {
                    if (index == i) {
                        return todo = {...todo, completed: !todo.completed}
                    } else {
                        return todo
                    }
                }))
            }
        }
    }
   
    function handleRemoveTodo(title) {
        return () => setTodos(todos.filter(todo => title !== todo.title))
    }

    return (
        <ul className="list-group">
            {
                todos.map((todo, index) => {
                    if (todo.completed) {
                        return (
                            <li className="list-group-item d-flex justify-content-between bg-light" onClick={handleCompleted(index)}>
                                <span><del>{index}: {todo.title}</del></span>
                                <button className="btn btn-danger" onClick={handleRemoveTodo(todo.title)}>X</button>
                            </li>
                        )
                    } else {
                        return (
                            <li className="list-group-item d-flex justify-content-between" onClick={handleCompleted(index)}>
                                <span>{index}: {todo.title}</span>
                                <button className="btn btn-danger" onClick={handleRemoveTodo(todo.title)}>X</button>
                            </li>
                        )
                    }
                })
            }
        </ul>
    )
}
