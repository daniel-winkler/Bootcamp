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
            <div className="moviegrid">
                {movies.results?.map(movie => {
                    return (
                        <div className="moviecard">
                            <img src={`http://image.tmdb.org/t/p/w300${movie.poster_path}`} alt={`Poster of ${movie.title}`} />
                            <div className="movieinfo">
                                <h5 className="title">{movie.title}</h5>
                                <p>Release date: {movie.release_date}</p>
                                <p className="overview">{movie.overview}</p>
                                <div>
                                    <button className="" onClick={()=>handleDetails(movie.id)}>+ Info</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
    )
}
