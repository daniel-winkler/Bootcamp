import './App.css';
import Footer from './components/Footer';
import Router from './components/Router';
import { createContext } from "react";

export const GlobalContext = createContext()

function App() {

  return (
    <div className="App text-center">
      <GlobalContext.Provider>
        <Router />
      </GlobalContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
