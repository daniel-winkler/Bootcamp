import './App.css';
import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import Ejercicio1 from "./pages/Ejercicio1";
import Ejercicio2 from "./pages/Ejercicio2";
import Ejercicio3 from "./pages/Ejercicio3";
import Ejercicio4 from "./pages/Ejercicio4";

import { createContext, useState, useEffect } from "react";
export const GlobalContext = createContext()

function App() {

  // Context Ejercicio 3
  const initialContactState = [
    {firstName: "Jake", lastName: "Smith", address: "123 Fake Street", city: "New York", zip: "354414", phone: 134127101},
    {firstName: "Sara", lastName: "Jones", address: "456 Dummy Street", city: "Los Angeles", zip: "526544", phone: 152542643},
    {firstName: "Mark", lastName: "Doe", address: "789 My Street", city: "Washington", zip: "65841", phone: 445714327}
  ]

  const [contacts, setContacts] = useState(initialContactState); /* con esto creo una variable llamada contact con el array inicial, y su funcion setContact */

  // Context Ejercicio 4
  const TODO_URL = "https://jsonplaceholder.typicode.com/todos"
  
  const [todos, setTodos] = useState([])

  useEffect(() => {
  fetch(TODO_URL)
  .then(r => r.json())
  .then(data => setTodos(data.slice(0,20)))
  }, [])

  return (
    <div className="App">
      <BrowserRouter>

        <nav class="navbar navbar-dark bg-dark justify-content-around font-weight-bold custom">
          <NavLink to="/ejercicio1" activeClassName="selected" className="text-decoration-none">Ejercicio 1</NavLink>
          <NavLink to="/ejercicio2" activeClassName="selected" className="text-decoration-none">Ejercicio 2</NavLink>
          <NavLink to="/ejercicio3" activeClassName="selected" className="text-decoration-none">Ejercicio 3</NavLink>
          <NavLink to="/ejercicio4" activeClassName="selected" className="text-decoration-none">Ejercicio 4</NavLink>
        </nav>

        <GlobalContext.Provider value={{contacts, setContacts, todos, setTodos}}>
          <Switch>
            <Route path="/ejercicio1" component={Ejercicio1} />
            <Route path="/ejercicio2" component={Ejercicio2} />
            <Route path="/ejercicio3" component={Ejercicio3} />
            <Route path="/ejercicio4" component={Ejercicio4} />
          </Switch>
        </GlobalContext.Provider>

      </BrowserRouter>
    </div>
  );
}

export default App;
