import './App.css';
import Footer from './components/Footer';
import Router from './components/Router';
import { createContext, useEffect, useState } from "react";

export const GlobalContext = createContext()

function App() {

  const [page, setPage] = useState(1)
  const UPCOMING_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=7d34055c400374a3555f3a9f651b9d0d&language=en-US&page=${page}`;
  const [movies, setMovies] = useState([])

  useEffect(() => {
      fetch(UPCOMING_URL)
      .then(r => r.json())
      .then(data => setMovies(data))
  }, [UPCOMING_URL])

  return (
    <div className="App text-center">
      <GlobalContext.Provider value={{page, setPage, movies}}>
        <Router />
      </GlobalContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
