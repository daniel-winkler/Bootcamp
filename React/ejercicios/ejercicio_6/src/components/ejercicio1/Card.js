export default function Card(props) {
    return (
            <div className="card w-25 m-auto">
                <img src={props.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.p}</p>
                    <a href={props.href} target="blank" className="btn btn-primary">{props.button}</a>
                </div>
            </div>
    )
}
