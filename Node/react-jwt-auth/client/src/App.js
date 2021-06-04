import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Pages from "./pages/Pages";
import AuthContextProvider from "./contexts/AuthContext";


function App() {
  return (
    <div>
      <AuthContextProvider>
        <Router>
          <Navbar />
          <Pages />
        </Router>
      </AuthContextProvider>
    </div>
  )
}

export default App;
