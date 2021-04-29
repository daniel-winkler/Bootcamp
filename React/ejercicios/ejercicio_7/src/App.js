import './App.css';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Movies from "./pages/Movies"
import Details from "./pages/Details"
import Footer from './components/Footer';

function App() {
  return (
    <div className="App text-center">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Movies}/>
          <Route path="/movie/:id" component={Details}/>
       </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
