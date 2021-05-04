import React from 'react'
import Upcoming from '../components/Upcoming';
import Pagination from '../components/Pagination';
import Header from '../components/Header';

export default function Movies() {

    return (
        <>
            <Header />
            <Pagination />
            <Upcoming />
            <Pagination />
        </>
    )
}
