import {useContext} from "react";
import {GlobalContext} from "../../App";

export default function Agenda() {

    const {contacts, setContacts} = useContext(GlobalContext)
    // console.log(contacts);

    function handleRemoveContact(phone) {
        // return () => {
            setContacts(contacts.filter(contact => contact.phone !== phone))
        // }
    }
    
    return (
            <div className="row mb-5">
            {
                contacts.map((contact, index) => {
                    return (
                        <ul key={contact.phone} className="list-group col-4 mb-3">
                            <li className="list-group-item active">Contacto {index+1}</li>
                            <li className="list-group-item">{contact.firstName}</li>
                            <li className="list-group-item">{contact.lastName}</li>
                            <li className="list-group-item">{contact.phone}</li>
                            <li className="list-group-item">{contact.address}, {contact.zip}, {contact.city}</li>
                            <li className="list-group-item">
                                <button className="btn btn-warning" onClick={() => handleRemoveContact(contact.phone)}>Eliminar</button>
                            </li>
                        </ul>
                    )
                })
            }
            </div>

    )
}
