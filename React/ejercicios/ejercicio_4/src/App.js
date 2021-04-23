import './App.css';
import InputToDo from './components/InputToDo';
import ToDoList from './components/ToDoList';
import {useState} from "react";

//https://raw.githubusercontent.com/BC-FSWD/todo-list/master/todo-list.json

function App() {

  const initialState = [
    {
      userID: 29,
      title: "rgsdvegfedhhess",
      completed: false
    },
    {
      userID: 30,
      title: "thjtyjtydbdyrf",
      completed: false
    },
    {
      userID: 31,
      title: "lhjilhgndfbdej",
      completed: false
    },
  ];

const [todos, setTodos] = useState(initialState)

  return (
    <div className="container">
      <h1 className="my-3">To-Do List</h1>
      <InputToDo todos={todos} setTodos={setTodos} />
      <ToDoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;

