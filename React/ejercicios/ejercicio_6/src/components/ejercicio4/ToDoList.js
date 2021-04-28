import "./ToDoList.css";
import { useContext } from "react";
import { GlobalContext}  from "../../App";

export default function ToDoList() {

    const {todos, setTodos} = useContext(GlobalContext)

    // function handleCompleted(i) {
    //     return (e) => {  
    //         if (e.target.tagName !== "BUTTON") {
    //             setTodos(todos.map((todo, index) => {
    //                 if (index === i) {
    //                     return todo = {...todo, completed: !todo.completed}
    //                 } else {
    //                     return todo
    //                 }
    //             }))
    //         }
    //     }
    // }

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
