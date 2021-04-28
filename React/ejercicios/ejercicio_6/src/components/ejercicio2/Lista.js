
// export default function Lista(props) {
//     // console.log(props.products[0].producto);

//     return (
//         <div>
//             <h2>{props.category}</h2>
//             <ul>
//                 {/* {JSON.stringify(props.products)} */}
//                 {
//                     props.products.map(product => {
//                         return <li>{product.producto}</li>
//                     })
//                 }
//             </ul>
//         </div>
//     )
// }

export default function Lista({category, products}) {
    
    // const {category, products} = props

    return (
        <div className="container my-4">
            <h2 className="text-center mb-3">{category}</h2>
            <ul className="list-group text-center">
                {/* {JSON.stringify(props.products)} */}
                {
                    products.map(({id, producto, marca, modelo, precio}) => {
                        return <li className="list-group-item" key={id}>{producto} {marca} {modelo} {precio}€</li>
                    })
                }
            </ul>
        </div>
    )
}
