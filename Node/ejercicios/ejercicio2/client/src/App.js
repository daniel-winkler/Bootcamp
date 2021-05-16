import './App.css';
import InputToDo from './components/InputToDo';
import ToDoList from './components/ToDoList';
import { useState } from "react";
// import useFetch from './hooks/useFetch';
import { MY_TODOS_DB } from "./settings"
import useFetch from './hooks/useFetch';


function App() {

  const [todos, setTodos] = useState([])

  useFetch(MY_TODOS_DB, setTodos, todos)

  //ERROR: Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource at http://127.0.0.1:3050/todos. (Reason: CORS header 'Access-Control-Allow-Origin' missing).
  //ERROR: Uncaught (in promise) TypeError: NetworkError when attempting to fetch resource.

  return (
    <div className="container w-50 my-5">
      <h1>To-Do List</h1>
      <InputToDo setTodos={setTodos} />
      <ToDoList todos={todos} setTodos={setTodos} />
    </div>
  );
}

export default App;

