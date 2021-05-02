import React from 'react'
import Upcoming from '../components/Upcoming';
import Pagination from '../components/Pagination';

export default function Movies() {

    return (
        <>
            <h1>Upcoming Movies</h1>
            <Pagination />
            <Upcoming />
            <Pagination />
        </>
    )
}
