import {useParams} from "react-router-dom";
import {useState, useEffect} from "react";

export default function Record(props) {

    const {user} = useParams(); //utilizamos user porque es el nombre que hemos definido en el path que nos lleva a este componente, y lo declaramos como constante en useParams()
                                //useParams() es un objeto que nos devuelve los parametros recibidos por la URL

    const [userData, setUserData] = useState({})

    const USERS_URL = "https://reqres.in/api/users/"

    useEffect(() => {
        fetch(`${USERS_URL}${user}`)
        .then(r => r.json())
        .then(data => setUserData(data))
    }, [user]) //podemos cargarnos el fetch para comprobar que no nos salga ningun error. si no peta, el setState se encargara de actualizar los datos cuando el fetch termine

    return (
        <div>
            {/* Record of {props.match.params.user} */}
            <h3>Record of {user}</h3>
            <ul>
                <li>{userData.data?.email}</li> {/* ponemos ? porque al hacer el fetch al principio userData.data no existirá hasta que se termine el fetch. con esa condicional espera hasta que contenga la informacion  */}
                <li>{userData.data?.first_name}</li>
                <li>{userData.data?.last_name}</li>
                <img src={userData.data?.avatar} alt="Profile"/>
            </ul>
        </div>
    )
}
