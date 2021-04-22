export default function Agenda({contacts, setContacts}) {

    // console.log(contacts);

    function handleRemoveContact(e) {
        setContacts(contacts.filter((contact, index) => index != e.target.id))
    }
    
    return (
            <div className="row mb-5">
            {
                contacts.map((contact, index) => {
                    return (
                        <ul className="list-group col-4 mb-3">
                            <li className="list-group-item list-group-item-primary">Contacto {index+1}</li>
                            <li className="list-group-item">{contact.firstName}</li>
                            <li className="list-group-item">{contact.lastName}</li>
                            <li className="list-group-item">{contact.phone}</li>
                            <li className="list-group-item">{contact.address}, {contact.zip}, {contact.city}</li>
                            <li className="list-group-item"><button className="btn btn-warning" onClick={handleRemoveContact} id={index}>Eliminar</button></li>
                        </ul>
                    )
                })
            }
            </div>

    )
}
