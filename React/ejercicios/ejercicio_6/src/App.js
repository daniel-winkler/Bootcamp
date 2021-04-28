import './App.css';
import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom";
import Ejercicio1 from "./pages/Ejercicio1";
import Ejercicio2 from "./pages/Ejercicio2";
import Ejercicio3 from "./pages/Ejercicio3";
import Ejercicio4 from "./pages/Ejercicio4";

import { createContext } from "react";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav class="navbar navbar-dark bg-dark justify-content-around font-weight-bold custom">
          <NavLink to="/ejercicio1" activeClassName="selected" className="text-decoration-none">Ejercicio 1</NavLink>
          <NavLink to="/ejercicio2" activeClassName="selected" className="text-decoration-none">Ejercicio 2</NavLink>
          <NavLink to="/ejercicio3" activeClassName="selected" className="text-decoration-none">Ejercicio 3</NavLink>
          <NavLink to="/ejercicio4" activeClassName="selected" className="text-decoration-none">Ejercicio 4</NavLink>
        </nav>
        <Switch>
          <Route path="/ejercicio1" component={Ejercicio1} />
          <Route path="/ejercicio2" component={Ejercicio2} />
          <Route path="/ejercicio3" component={Ejercicio3} />
          <Route path="/ejercicio4" component={Ejercicio4} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
