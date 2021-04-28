import InputToDo from '../components/ejercicio4/InputToDo';
import ToDoList from '../components/ejercicio4/ToDoList';
import {useState, useEffect} from "react";

export default function Ejercicio4() {
    const TODO_URL = "https://jsonplaceholder.typicode.com/todos"
  
    const [todos, setTodos] = useState([])

    //   async function fetchUrl(url) {
    //     const response = await fetch(url);
    //     const data = await response.json();
    //     data.splice(20) //data.slice(0,20)
    //     setTodos(data)
    //   }
    useEffect(() => {
    fetch(TODO_URL)
    .then(r => r.json())
    .then(data => setTodos(data.slice(0,20)))
    // fetchUrl(TODO_URL)
    }, [])

    //   useFetch(TODO_URL, setTodos)

  return (
    <div className="container w-50 my-4">
      <h1>To-Do List</h1>
      <InputToDo setTodos={setTodos} />
      <ToDoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}
