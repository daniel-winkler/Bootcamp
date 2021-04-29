// import { useEffect } from 'react'

// function useFetch(setState, page) {

//     const UPCOMING_URL = "https://api.themoviedb.org/3/movie/upcoming?api_key=7d34055c400374a3555f3a9f651b9d0d&language=en-US&page=";

//     useEffect(() => {
//         fetch(`${UPCOMING_URL}${page}`)
//         .then(r => r.json())
//         .then(data => setState(data.results))
//         // return () => {
//         //     cleanup
//         // }
//     }, [])
// }

// export { useFetch }
