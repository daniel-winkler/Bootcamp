import React from 'react'
import Upcoming from '../components/Upcoming';
// import Pagination from '../components/Pagination';
import Header from '../components/Header';
// import Input from "../components/Input"

import { useContext } from "react";
import { GlobalContext } from "../App"

export default function MoviesPage() {

    const { searching } = useContext(GlobalContext)

    return (
        <>
            <Header />
            {/* <Pagination /> */}
            {/* <Upcoming /> */}
            {searching === false && <Upcoming /> }
            {/* <Pagination /> */}
        </>
    )
}
