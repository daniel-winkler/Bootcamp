import './App.css';
import InputToDo from './components/InputToDo';
import ToDoList from './components/ToDoList';
import {useState, useEffect} from "react";
import useFetch from './hooks/useFetch';


function App() {
  
  // const EMERGENCY_API = "https://raw.githubusercontent.com/BC-FSWD/todo-list/master/todo-list.json"

  const TODO_URL = "https://jsonplaceholder.typicode.com/todos"
  
  const [todos, setTodos] = useState([])

  // async function fetchUrl(url) {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   data.splice(20) //data.slice(0,20)
  //   setTodos(data)
  // }
  // useEffect(() => {
  //   fetchUrl(TODO_URL)
  // }, [])

  useFetch(TODO_URL, setTodos)

  return (
    <div className="container w-50 my-5">
      <h1>To-Do List</h1>
      <InputToDo setTodos={setTodos} />
      <ToDoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;

