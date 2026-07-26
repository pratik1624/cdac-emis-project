import { createContext, useContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(
        JSON.parse(localStorage.getItem("user"))
    );

    const loginUser = (data) => {

    localStorage.setItem("token", data.jwt);

    localStorage.setItem("user", JSON.stringify({
        id: data.id,
        name: data.name,
        role: data.role
    }));

    setUser({
        id: data.id,
        name: data.name,
        role: data.role
    });
};
    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        setUser(null);
    };

    return (

        <AuthContext.Provider
            value={{
                user,
                loginUser,
                logout
            }}
        >
            {children}
        </AuthContext.Provider>

    );

};

export const useAuth = () => useContext(AuthContext);