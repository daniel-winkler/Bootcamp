import './App.css';
import InputToDo from './components/InputToDo';
import ToDoList from './components/ToDoList';
import {useState, useEffect} from "react";


function App() {
  
  const TODO_URL = "https://raw.githubusercontent.com/BC-FSWD/todo-list/master/todo-list.json"
  
  const [todos, setTodos] = useState([])

  async function fetchUrl(url) {
    const response = await fetch(url);
    const data = await response.json();
    data.splice(20)
    setTodos(data)
  }
  
  useEffect(() => {
    fetchUrl(TODO_URL)
  }, [])

  return (
    <div className="container w-50 my-5">
      <h1>To-Do List</h1>
      <InputToDo todos={todos} setTodos={setTodos} />
      <ToDoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;

