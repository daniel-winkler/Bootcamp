import { useAuthContext } from "../contexts/AuthContext"


export default function Dashboard() {

    const { logOut } = useAuthContext();

    return (
        <div className="container">
            <p>PRIVATE</p>
            <button className="btn btn-warning" onClick={logOut}>Log out</button>
        </div>
    )
}
