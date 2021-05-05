import React from 'react'
import { useState, useContext } from "react"
import {GlobalContext} from "../App"
import Input from "../components/Input"

export default function Header() {

    let { searching, setSearching } = useContext(GlobalContext)

    const [search, setSearch] = useState("")

    function handleInput(e) {
        setSearching(true)
        setSearch(e.target.value)
    }

    return (
        <>
            <div className="header">
                <h1>UPCOMING MOVIES</h1>
                <div>
                    <input type="text" class="form-control" placeholder="Search for a movie.." value={search} onChange={handleInput}/>
                </div>
            </div>
                {searching && <Input search={search} />}
        </>
    )
}
