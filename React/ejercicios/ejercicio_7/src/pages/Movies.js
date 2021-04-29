import React from 'react'
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// import { useFetch } from "../hooks/useFetch"

export default function Movies() {

    let page = 5

    const UPCOMING_URL = `https://api.themoviedb.org/3/movie/upcoming?api_key=7d34055c400374a3555f3a9f651b9d0d&language=en-US&page=${page}`;
    // const UPCOMING_URL = "https://api.themoviedb.org/3/movie/upcoming?api_key=7d34055c400374a3555f3a9f651b9d0d&language=en-US&page=";

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch(UPCOMING_URL)
        .then(r => r.json())
        .then(data => setMovies(data.results))
        // return () => {
        //     cleanup
        // }
    }, [UPCOMING_URL])

    // useFetch(setMovies, page)

    // function handlePage(e) {
    //     if (e.target.innerText === "Previous") {
    //         page--
    //         useFetch(setMovies, page)
    //     } else {
    //         page++
    //         useFetch(setMovies, page)
    //     }
    // }

    const history = useHistory()

    function handleDetails(id) {
        history.push(`/movie/${id}`)
    }

    return (
        <>
            <h1>Upcoming Movies</h1>
            <div className="row m-5">
                {movies.map(movie => {
                    return (
                        <div className="col-3">
                            <img src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`} className="" alt={`Poster of ${movie.title}`}/>
                            <div className="">
                                <h5 className="text-center">{`${movie.title}`}</h5>
                                <p>Release date: {`${movie.release_date}`}</p>
                                <p className="overview">{`${movie.overview}`}</p>
                                <button className="btn btn-info" onClick={()=>handleDetails(movie.id)}>Leer más</button>
                            </div>
                        </div>
                    )
                })}
            </div>
                {/* <div className="d-flex justify-content-between">
                    <button className="btn btn-info" onClick={handlePage}>Previous</button>
                    <button className="btn btn-info" onClick={handlePage}>Next</button>
                </div> */}
        </>
    )
}
