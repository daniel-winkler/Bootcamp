import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom";
import Ejercicio1 from "./pages/Ejercicio1";
import Ejercicio2 from "./pages/Ejercicio2";
import Ejercicio3 from "./pages/Ejercicio3";
import Ejercicio4 from "./pages/Ejercicio4";

export default function Router() {
    return (
        <div>
            <BrowserRouter>

                <NavLink to="/ejercicio1" activeClassName="active">Ejercicio 1</NavLink>
                <NavLink to="/ejercicio2" activeClassName="active">Ejercicio 2</NavLink>
                <NavLink to="/ejercicio3" activeClassName="active">Ejercicio 3</NavLink>
                <NavLink to="/ejercicio4" activeClassName="active">Ejercicio 4</NavLink>

                <Switch>
                    <Route path="/ejercicio1" component={Ejercicio1} />
                    <Route path="/ejercicio2" component={Ejercicio2} />
                    <Route path="/ejercicio3" component={Ejercicio3} />
                    <Route path="/ejercicio4" component={Ejercicio4} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
