import React from 'react'
import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { GlobalContext } from '../App';
import Pagination from './Pagination';

export default function Upcoming() {

    const {movies} = useContext(GlobalContext)

    const history = useHistory()
    function handleDetails(id) {
        history.push(`/movie/${id}`)
    }

    return (
        <>
            <Pagination />
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
                                    <button onClick={()=>handleDetails(movie.id)}>More info</button>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
            <Pagination />
        </>
    )
}
