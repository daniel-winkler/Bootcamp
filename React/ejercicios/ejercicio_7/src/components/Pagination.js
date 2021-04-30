// import React from 'react'

// export default function Pagination() {

//     function handlePage(e) {
//         if (e.target.innerText === "Previous" && page > 1) {
//             console.log(e.target.innerText);
//             setPage(page - 1)
//         } else if (e.target.innerText === "Next" && page < movies.total_pages) {
//             setPage(page + 1)
//         } else if (e.target.classList.contains("pagebutton")) {
//             setPage(Number(e.target.innerText))
//         }
//     }

//     const pages = []
//     for (let i = 1 ; i <= movies.total_pages ; i++) {
//         pages.push(i);
//     }

//     return (
//         <div className="d-flex justify-content-center">
//                     <button className="btn btn-info" onClick={handlePage}>Previous</button>
//                     {pages.map(page => {
//                         return(
//                             <button className="btn btn-info pagebutton" onClick={handlePage}>{page}</button>
//                         )
//                     })}
//                     <button className="btn btn-info" onClick={handlePage}>Next</button>
//             </div>
//     )
// }
