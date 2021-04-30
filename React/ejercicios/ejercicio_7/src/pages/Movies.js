import React from 'react'
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// import Pagination from '../components/Pagination';

export default function Movies() {
    
    const [page, setPage] = useState(1)
    const UPCOMING_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=7d34055c400374a3555f3a9f651b9d0d&language=en-US&page=${page}`;
    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(UPCOMING_URL)
        .then(r => r.json())
        .then(data => setMovies(data))
    }, [UPCOMING_URL])

    function handlePage(e) {
        if (e.target.innerText === "Previous" && page > 1) {
            console.log(e.target.innerText);
            setPage(page - 1)
        } else if (e.target.innerText === "Next" && page < movies.total_pages) {
            setPage(page + 1)
        } else if (e.target.classList.contains("pagebutton")) {
            setPage(Number(e.target.innerText))
        }
    }

    const history = useHistory()
    function handleDetails(id) {
        history.push(`/movie/${id}`)
    }

    const pages = []
    for (let i = 1 ; i <= movies.total_pages ; i++) {
        pages.push(i);
    }

    return (
        <>
            <h1>Upcoming Movies</h1>
            <div className="d-flex justify-content-center">
                    <button className="btn btn-info" onClick={handlePage}>Previous</button>
                    {pages.map(page => {
                        return(
                            <button className="btn btn-info pagebutton" onClick={handlePage}>{page}</button>
                        )
                    })}
                    <button className="btn btn-info" onClick={handlePage}>Next</button>
            </div>
            {/* <Pagination /> */}
            <div className="row">
                {movies.results?.map(movie => {
                    return (
                        <div className="col-3 moviecard">
                            <img src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={`Poster of ${movie.title}`}/>
                            <div className="">
                                <h5 className="text-center">{movie.title}</h5>
                                <p>Release date: {movie.release_date}</p>
                                <p className="overview">{movie.overview}</p>
                                <button className="btn btn-info" onClick={()=>handleDetails(movie.id)}>Leer más</button>
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className="d-flex justify-content-center">
                    <button className="btn btn-info" onClick={handlePage}>Previous</button>
                    {pages.map(page => {
                        return(
                            <button className="btn btn-info pagebutton" onClick={handlePage}>{page}</button>
                        )
                    })}
                    <button className="btn btn-info" onClick={handlePage}>Next</button>
            </div>
            {/* <Pagination /> */}

        </>
    )
}
