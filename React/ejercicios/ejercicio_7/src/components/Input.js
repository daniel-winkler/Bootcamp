import React from 'react'
import { useEffect, useState } from "react"
import { useHistory } from "react-router-dom";

export default function Input({input}) {

    const [page, setPage] = useState(1)
    const SEARCH_URL = `https://api.themoviedb.org/3/search/movie?api_key=7d34055c400374a3555f3a9f651b9d0d&language=en-US&query=${input}&page=${page}`
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(SEARCH_URL)
        .then(r => r.json())
        .then(data => setMovies(data))
    }, [SEARCH_URL])

    function handlePage(e) {
        if (e.target.classList.contains("leftbutton") && page > 1) {
            console.log(e.target.innerText);
            setPage(page - 1)
        } else if (e.target.classList.contains("rightbutton") && page < movies.total_pages) {
            setPage(page + 1)
        } else {
            alert("No more pages available!")
        }
    }

    const history = useHistory()
    function handleMovieDetails(id) {
        history.push(`/movie/${id}`)
    }

    return (
        <div>
            <div className="pagination">
                <button className="leftbutton" onClick={handlePage}>&larr;</button>
                <button className="rightbutton" onClick={handlePage}>&rarr;</button>
            </div>
            <div className="moviegrid">
                {movies.results?.map(movie => {
                    return (
                        <div className="moviecard">
                            <img src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`} height={450} alt={`Poster of ${movie.title}`} />
                            <div className="movieinfo">
                                <h4 className="title">{movie.title}</h4>
                                <p><span>Release date: </span>{movie.release_date}</p>
                                <p className="overview">{movie.overview}</p>
                                <div>
                                    <button onClick={()=>handleMovieDetails(movie.id)}>More info</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="pagination">
                <button className="leftbutton" onClick={handlePage}>&larr;</button>
                <button className="rightbutton" onClick={handlePage}>&rarr;</button>
            </div>
        </div>
    )
}
