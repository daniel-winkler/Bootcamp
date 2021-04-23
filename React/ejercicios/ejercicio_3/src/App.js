import './App.css';
import Agenda from './components/Agenda';
import Form from './components/Form';
import {useState} from "react";

function App() {

  const initialContactState = [
    {
      firstName: "Jake",
      lastName: "Smith",
      address: "123 Fake Street",
      city: "New York",
      zip: "354414",
      phone: 134127101
    },
    {
      firstName: "Sara",
      lastName: "Jones",
      address: "456 Dummy Street",
      city: "Los Angeles",
      zip: "526544",
      phone: 152542643
    },
    {
      firstName: "Mark",
      lastName: "Doe",
      address: "789 My Street",
      city: "Washington",
      zip: "65841",
      phone: 445714327
    }
  ]

  const [contacts, setContacts] = useState(initialContactState); /* con esto creo una variable llamada contact con el array inicial, y su funcion setContact */
  
  return (
    <div className="container">

      <h1 className="my-4">Lista de contactos</h1> {/* dejamos el titulo fuera del componente para dejarlo mas genérico por si lo queremos utlizar varias veces sin ceseidad de título */}
      <Agenda contacts={contacts} setContacts={setContacts} />
      
      <h1 className="my-4">Nuevo contacto</h1>
      <Form setContacts={setContacts}/>
    </div>
  );
}

export default App;
