import React from 'react'
import { useEffect, useState } from "react"

export default function Search() {

    const [page, setPage] = useState(1)
    const [search, setSearch] = useState("")
    const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=7d34055c400374a3555f3a9f651b9d0d&language=en-US&query=${search}&page=${page}`
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(SEARCH_URL)
        .then(r => r.json())
        .then(data => setMovies(data))
    }, [SEARCH_URL])

    function handleInput(e) {
        setSearch(e.target.value)
    }

    function handlePage(e) {
        if (e.target.classList.contains("leftbutton") && page > 1) {
            console.log(e.target.innerText);
            setPage(page - 1)
        } else if (e.target.classList.contains("rightbutton") && page < movies.total_pages) {
            setPage(page + 1)
        }
    }

    return (
        <div>
            <div>
                <input type="text" class="form-control" placeholder="Search for a movie" value={search} onChange={handleInput}/>
            </div>
            <div className="d-flex justify-content-center">
                    <button className="btn btn-info leftbutton" onClick={handlePage}>&larr;</button>
                    <button className="btn btn-info rightbutton" onClick={handlePage}>&rarr;</button>
            </div>
            <div className="row">
                {movies.results?.map(movie => {
                    return (
                        <div className="col-3 moviecard">
                            {movie && <img src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={`Poster of ${movie.title}`}/>}
                            <div className="">
                                <h5 className="text-center">{movie.title}</h5>
                                <p>Release date: {movie.release_date}</p>
                                <p className="overview">{movie.overview}</p>
                                {/* <button className="btn btn-info" onClick={()=>handleDetails(movie.id)}>Leer más</button> */}
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="d-flex justify-content-center">
                    <button className="btn btn-info leftbutton" onClick={handlePage}>&larr;</button>
                    <button className="btn btn-info rightbutton" onClick={handlePage}>&rarr;</button>
            </div>
        </div>
    )
}
