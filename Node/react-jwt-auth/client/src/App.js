import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Public from "./pages/Public";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} /> 
          <Route path="/public" component={Public} /> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
