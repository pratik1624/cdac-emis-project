import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PublicRoute() {

    const { loading, isAuthenticated, user } = useAuth();

    // Wait for state hydration
    if (loading) {
        return <h3>Loading...</h3>;
    }

    // Already logged in?
    if (isAuthenticated) {

        switch (user.role) {

            case "ADMIN":
                return <Navigate to="/admin/dashboard" replace />;

            case "FACULTY":
                return <Navigate to="/faculty/dashboard" replace />;

            case "STUDENT":
                return <Navigate to="/student/dashboard" replace />;

            default:
                return <Navigate to="/" replace />;
        }
    }

    // Not logged in → show Login page
    return <Outlet />;
}