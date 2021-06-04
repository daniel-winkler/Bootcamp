import { Route, Redirect } from 'react-router-dom';
import { useAuthContext } from "../contexts/AuthContext"

export default function PrivateRoute({children, ...rest}) { // rest pilla el resto de props, como seria path, exact, etc.

    const { isAuthenticated } = useAuthContext();

    return (
        <Route {...rest} render={() => { // se ejecuta cada vez que se pinta en e
            return isAuthenticated ? children : <Redirect to="/login" />
        }}/>
    )
}
