import React from 'react'
import { useState, useContext } from "react"
import {GlobalContext} from "../App"
import Input from "../components/Input"

export default function Header() {

    let { searching, setSearching, setPage } = useContext(GlobalContext)

    const [input, setInput] = useState("")

    function handleInput(e) {
        setSearching(true)
        setInput(e.target.value)
    }

    function handleReset() {
        setSearching(false)
        setInput("")
        setPage(1)
    }

    return (
        <>
            <div className="header">
                <h1 onClick={()=>handleReset()}>UPCOMING MOVIES</h1>
                <div>
                    <input type="text" class="form-control" placeholder="Search for a movie.." value={input} onChange={handleInput}/>
                </div>
            </div>
                {searching && <Input input={input} />}
        </>
    )
}
