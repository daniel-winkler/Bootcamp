
export default function Lista(props) {
    // console.log(props.products[0].producto);
    return (
        <div>
            <h2>{props.category}</h2>
            <ul>
                {
                    props.products.map(product => {
                        return <li>{product.producto}</li>
                    })
                }
            </ul>
        </div>
    )
}
