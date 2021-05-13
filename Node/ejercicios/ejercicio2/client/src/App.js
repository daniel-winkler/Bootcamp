import './App.css';
import InputToDo from './components/InputToDo';
import ToDoList from './components/ToDoList';
import {useState, useEffect} from "react";
// import useFetch from './hooks/useFetch';


function App() {

  // const TODO_URL = "https://jsonplaceholder.typicode.com/todos/"

  const MY_TODOS_DB = "http://127.0.0.1:3050/todos"
  
  const [todos, setTodos] = useState([])

  // async function fetchUrl(url) {
  //   const response = await fetch(url);
  //   const data = await response.json();
  //   // data.splice(20)
  //   console.log(data);
  //   setTodos(data.todos)
  // }
  useEffect(() => {
    // fetchUrl(MY_TODO_DB)
    fetch(MY_TODOS_DB)
    .then(response => response.json())
    .then(data => {
      console.log(data.todos);
      setTodos(data.todos)});
  }, [])

  return (
    <div className="container w-50 my-5">
      <h1>To-Do List</h1>
      <InputToDo setTodos={setTodos} />
      <ToDoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;

