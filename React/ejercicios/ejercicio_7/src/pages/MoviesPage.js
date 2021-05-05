import React from 'react'
import Upcoming from '../components/Upcoming';
import Pagination from '../components/Pagination';
import Header from '../components/Header';

export default function MoviesPage() {

    return (
        <>
            <Header />
            <Pagination />
            <Upcoming />
            <Pagination />
        </>
    )
}
