import {useState, useContext} from "react";
import {GlobalContext} from "../../App";

export default function Form() {

    const {setContacts} = useContext(GlobalContext)

    // const [firstName, setFirstName] = useState("");
    // const [lastName, setLastName] = useState("");
    // const [address, setAddress] = useState("");
    // const [zip, setZip] = useState("");
    // const [city, setCity] = useState("");
    // const [phone, setPhone] = useState("");

    // function handleFirstName(e) {
    //     setFirstName(e.target.value)
    // };

    // function handleLastName(e) {
    //     setLastName(e.target.value)
    // };

    // function handleAddress(e) {
    //     setAddress(e.target.value)
    // };

    // function handleZip(e) {
    //     setZip(e.target.value)
    // };

    // function handleCity(e) {
    //     setCity(e.target.value)
    // };

    // function handlePhone(e) {
    //     setPhone(e.target.value)
    // };
    const initialState = {
        firstName: "",
        lastName: "",
        address: "",
        zip: "",
        city: "",
        phone: ""
    }
    const [form, setForm] = useState(initialState)

    function handleInput(e) {
        // console.log(e.target.name);
        // const inputName = e.target.name;
        // const newValue = e.target.value;
        setForm({...form, [e.target.name]: e.target.value});
    }

    function submit(e) {
        e.preventDefault();

        // const newContact = {firstName, lastName, address, zip, city, phone} //usamos el nombre de nuestras variables, y automaticamente nos asignará la propiedad con el nombre de esa variable y conteniendo su valor

        // const newContact = {
        //     name: name,
        //     lastName: lastName,
        //     address: address,
        //     zip: zip,
        //     city: city,
        //     phone: phone
        // }

        // setContacts([...contacts, newContact]) //Necesitaria recibir los contactos actuales (contacts)
        setContacts(currentContacts => [...currentContacts, form])

        // e.target.reset();
        // setFirstName("");
        // setLastName("");
        // setAddress("");
        // setZip("");
        // setCity("");
        // setPhone("");
        setForm(initialState);
    }

    return (
            <form className="container mb-5 form-group" onSubmit={submit}>
                <input type="text" name="firstName" className="form-control mb-2" value={form.firstName} onChange={handleInput} placeholder="Introduce un nombre"/> {/* ponemos value pform.ara que cuando resetee despues del submit nos ponga el valor vacío que envia setState */}
                <input type="text" name="lastName" className="form-control mb-2" value={form.lastName} onChange={handleInput} placeholder="Introduce los apellidos"/>
                <input type="text" name="address" className="form-control mb-2" value={form.address} onChange={handleInput} placeholder="Introduce la dirección"/>
                <input type="text" name="zip" className="form-control mb-2" value={form.zip} onChange={handleInput} placeholder="Introduce la provincia"/>
                <input type="text" name="city" className="form-control mb-2" value={form.city} onChange={handleInput} placeholder="Introduce el código postal"/>
                <input type="text" name="phone" className="form-control mb-2" value={form.phone} onChange={handleInput} placeholder="Introduce el número de teléfono"/>
                <button type="submit" className="btn btn-success">Registrar</button>
            </form>
    )
}
