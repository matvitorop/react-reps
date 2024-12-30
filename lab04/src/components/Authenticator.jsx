import {createContext, useContext, useState} from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

// eslint-disable-next-line react/prop-types
export default function Authenticator ({children}) {
    const [isAuthorized, setAuthorized] = useState(false);

    const login = () => setAuthorized(true);
    const logout = () => setAuthorized(false);

    return (
        <AuthContext.Provider value={{ isAuthorized, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
}