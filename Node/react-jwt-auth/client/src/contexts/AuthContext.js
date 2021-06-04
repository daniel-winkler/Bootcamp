import { createContext, useContext, useState } from "react"


const AuthContext = createContext();

export default function AuthContextProvider({children}) {

    const [loggedInUser, setLoggedInUser] = useState({});
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    const getToken = () => localStorage.getItem("TOKEN_KEY");
    const setToken = token => localStorage.setItem("TOKEN_KEY", token); // ALERT: XSS - Cross Site Scripting vulnerable.
    const removeToken = () => localStorage.removeItem("TOKEN_KEY");

    const isAdmin = () => loggedInUser.role === "ADMIN";

    const logIn = (token, user) => {
        setToken(token); // TODO: guardar el token.
        setLoggedInUser(user); // TODO: actualizar el estado loggedInUser.
        setIsAuthenticated(true); // TODO: actualice el estado isAuthenticated.
    }

    const logOut = () => {
        removeToken(); 
        setLoggedInUser({}); 
        setIsAuthenticated(false); 
    }

    const contextValue = {
        logIn,
        logOut,
        isAuthenticated
    }

    return (
        <div>
            <AuthContext.Provider value={contextValue}>
                {children}
            </AuthContext.Provider>
        </div>
    )
}

// custom Hook para simplificar el uso de este contexto
const useAuthContext = () => useContext(AuthContext);

export { useAuthContext }
