import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PrivateRoute() {

    // Get authentication state from AuthContext
    const { loading, isAuthenticated } = useAuth();

    // Wait until state hydration completes
    if (loading) {
        return <h3>Loading...</h3>;
    }

    // Redirect unauthenticated users to Login
    if (!isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    // Allow access to protected routes
    return <Outlet />;
}