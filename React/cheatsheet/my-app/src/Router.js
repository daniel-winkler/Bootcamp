import {BrowserRouter, Route, Switch, NavLink} from "react-router-dom";
import Index from "./pages/Index";
import Dashboard from "./pages/Dashboard";
import Record from "./pages/Record";
import Error from "./pages/Error";

export default function Router() {
    return (
        <div>
            <BrowserRouter>

                <NavLink to="/" style={{marginRight: "10px"}} activeClassName="active">Inicio</NavLink>
                <NavLink to="/dashboard" style={{marginRight: "10px"}}>Dashboard</NavLink> {/* NavLInk actúan como enlaces <a>, es decir podemos meterlos en otros elementos para aplicarles Bootstrap por ejemplo */}
                <NavLink to="/record/1">Record</NavLink>

                <Switch>
                    <Route exact path="/" component={Index}/>
                    <Route path="/dashboard" component={Dashboard} />
                    <Route path="/record/:user" component={Record} />

                    <Route component={Error} />
                </Switch>
            </BrowserRouter>
            <h2>Footer común</h2>
        </div>
    )
}
