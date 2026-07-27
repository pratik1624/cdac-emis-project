import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    // ==========================
    // State
    // ==========================

    const [user, setUser] = useState(null);

    const [token, setToken] = useState(null);

    const [loading, setLoading] = useState(true);

    // ==========================
    // State Hydration
    // ==========================

    useEffect(() => {

        const storedUser = localStorage.getItem("user");
        const storedToken = localStorage.getItem("token");

        if (storedUser && storedToken) {

            setUser(JSON.parse(storedUser));
            setToken(storedToken);

        }

        setLoading(false);

    }, []);

    // ==========================
    // Login
    // ==========================

    const loginUser = (data) => {

        localStorage.setItem("token", data.jwt);

        localStorage.setItem(
            "user",
            JSON.stringify({
                id: data.id,
                name: data.name,
                role: data.role,
            })
        );

        setToken(data.jwt);

        setUser({
            id: data.id,
            name: data.name,
            role: data.role,
        });
    };

    // ==========================
    // Logout
    // ==========================

    const logout = () => {

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        setUser(null);
        setToken(null);
    };

    // ==========================
    // Derived State
    // ==========================

    const isAuthenticated = !!token;

    return (

        <AuthContext.Provider
            value={{
                user,
                token,
                loading,
                isAuthenticated,
                loginUser,
                logout,
            }}
        >
            {children}
        </AuthContext.Provider>

    );

};

export const useAuth = () => useContext(AuthContext);