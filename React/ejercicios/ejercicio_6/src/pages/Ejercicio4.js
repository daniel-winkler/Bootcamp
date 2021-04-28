import InputToDo from '../components/ejercicio4/InputToDo';
import ToDoList from '../components/ejercicio4/ToDoList';

export default function Ejercicio4() {

  return (
    <div className="container w-50 my-4">
      <h1>To-Do List</h1>
      <InputToDo />
      <ToDoList />
    </div>
  );
}
