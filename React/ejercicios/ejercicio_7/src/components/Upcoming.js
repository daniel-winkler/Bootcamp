import React from 'react'
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from '../App';

export default function Upcoming() {

    const {movies} = useContext(GlobalContext)

    const history = useHistory()
    function handleDetails(id) {
        history.push(`/movie/${id}`)
    }

    return (
        <>
            <div className="row">
                {movies.results?.map(movie => {
                    return (
                        <div className="col-3 moviecard">
                            <img src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={`Poster of ${movie.title}`} style={{height: 450}}/>
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
        </>
    )
}
