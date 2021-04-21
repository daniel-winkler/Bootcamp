import './App.css';
import Agenda from './components/Agenda';
import Form from './components/Form';
import {useState} from "react";

function App() {

  const contacts = [
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
  // console.log(contacts);

  const [contact, setContact] = useState(0);
  
  return (
    <div className="App">
      <Agenda contacts={contacts} />
      <Form />
    </div>
  );
}

export default App;
