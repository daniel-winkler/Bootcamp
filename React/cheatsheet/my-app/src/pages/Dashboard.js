import {useState} from "react";
import {useHistory} from "react-router-dom";

export default function Dashboard() {

    const [userId, setUserId] = useState(1);

    const history = useHistory()

    function handleClick(e) {
        history.push(`/record/${userId}`)
    }

    return (
        <div>
            <input type="text" onChange={e => setUserId(e.target.value)} value={userId}/>
            <button onClick={handleClick}>Ir al perfil de usuario {userId}</button>
        </div>
    )
}
