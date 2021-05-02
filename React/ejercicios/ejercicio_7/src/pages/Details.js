import React from 'react'
import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";

export default function Details() {

    const { id } = useParams();
    const [movie, setMovie] = useState({})
    const DETAILS_URL = `https://api.themoviedb.org/3/movie/${id}?api_key=7d34055c400374a3555f3a9f651b9d0d&language=en-US`

    useEffect(() => {
        fetch(DETAILS_URL)
        .then(r => r.json())
        .then(data => setMovie(data))
    }, [DETAILS_URL]) //podemos cargarnos el fetch para comprobar que no nos salga ningun error. si no peta, el setState se encargara de actualizar los datos cuando el fetch termine

    return (
        <div className="moviedetails">
            <img src={`http://image.tmdb.org/t/p/w500${movie.poster_path}`} className="" alt={`Poster of ${movie.title}`}/>
            <div className="detailsinfo">
                <h1>{movie.original_title}</h1>
                <h4>{movie.tagline}</h4>
                <p>{movie.overview}</p>
                <p className="genres">{movie.genres?.map(genre => {
                    return (
                        <span className="mx-1">{genre.name}</span>
                    )
                })}
                </p>
                <p>Release date: {movie.release_date}</p>
                <p>{movie.vote_average} / 10</p>
                <p><a href={`https://www.imdb.com/title/${movie.imdb_id}`} target="blank">Go to IMDb page</a></p>
            </div>
        </div>
    )
}
