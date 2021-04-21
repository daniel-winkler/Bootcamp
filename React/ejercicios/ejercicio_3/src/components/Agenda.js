export default function Agenda({contacts}) {

    // console.log(contacts);

    let n=0;

    return (
        <div className="container">
            <h1 className="my-4">Lista de contactos</h1>
                <div className="d-flex mb-5">
                {
                    contacts.map(contact => {
                        n++
                        return (
                            <ul className="list-group col">
                                <li className="list-group-item list-group-item-primary">Contacto {n}</li>
                                <li className="list-group-item">{contact.firstName}</li>
                                <li className="list-group-item">{contact.lastName}</li>
                                <li className="list-group-item">{contact.address}</li>
                                <li className="list-group-item">{contact.city}</li>
                                <li className="list-group-item">{contact.zip}</li>
                                <li className="list-group-item">{contact.phone}</li>
                                <li className="list-group-item"><button className="btn btn-warning">Eliminar</button></li>
                            </ul>
                            )
                        })
                    }
                </div>
        </div>
    )
}
