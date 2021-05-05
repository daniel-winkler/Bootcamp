import React from 'react'
import { useContext } from "react";
import { GlobalContext } from '../App';

export default function Pagination() {

    const {page, setPage, movies} = useContext(GlobalContext)

    function handlePage(e) {
        if (e.target.classList.contains("leftbutton") && page > 1) {
            console.log(e.target.innerText);
            setPage(page - 1)
        } else if (e.target.classList.contains("rightbutton") && page < movies.total_pages) {
            setPage(page + 1)
        } else if (e.target.classList.contains("pagebutton")) {
            setPage(Number(e.target.innerText))
        } else {
            alert("No more pages available!")
        }
    }

    const pages = []
    for (let i = 1 ; i <= movies.total_pages ; i++) {
        pages.push(i);
    }

    return (
            <div className="pagination">
                <button className="leftbutton" onClick={handlePage}>&larr;</button>
                {pages.map(page => {
                    return(
                        <button className="pagebutton" onClick={handlePage}>{page}</button>
                    )
                })}
                <button className="rightbutton" onClick={handlePage}>&rarr;</button>
            </div>
    )
}
