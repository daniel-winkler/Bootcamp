
export default function ToDoList({todos, setTodos}) {

    function handleCompleted(i) {
        // console.log(todos[index].completed);
        return () => setTodos(currentTodos => !currentTodos[i].completed)
    }
    console.log(todos[0].completed);

    return (
        <ul className="list-group">
            {
                todos.map((todo, index) => {
                    return (
                        <li className="list-group-item" onClick={handleCompleted(index)}>{index}: {todo.title}</li>
                    )
                })
            }
        </ul>
    )
}
