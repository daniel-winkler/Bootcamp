import { Route, Switch } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./Dashboard";
import Public from "./Public";
import Error from "./Error"
import PrivateRoute from "./PrivateRoute";


export default function Pages() {
    return (
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/public" component={Public} />
          <PrivateRoute path="/dashboard">
            <Dashboard /> 
          </PrivateRoute>
          <Route component={Error} />
        </Switch>
    )
}
