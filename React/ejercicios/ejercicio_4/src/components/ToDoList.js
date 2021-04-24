
export default function ToDoList({todos, setTodos}) {

    // const customTodos = [...todos]

    function handleCompleted(e) {
    //     console.log(customTodos.map((todo, index) => {
    //         if (index == e.target.id) {
    //             todo.completed = !todo.completed
    //         }
    //     }
    // ))}
    }
    
    function handleRemoveTodo(title) {
        return () => setTodos(todos.filter(todo => title !== todo.title))
    }

    return (
        <ul className="list-group">
            {
                todos.map((todo, index) => {
                    return (
                        <li className="list-group-item d-flex justify-content-between" id={index} onClick={handleCompleted}>
                            <span>{index}: {todo.title} {JSON.stringify(todo.completed)}</span>
                            <button className="btn btn-danger" onClick={handleRemoveTodo(todo.title)}>X</button>
                        </li>
                    )
                })
            }
        </ul>
    )
}
