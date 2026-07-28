import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function RoleRoute({ allowedRoles }) {

    // Get authenticated user
    const { user } = useAuth();

    // Check if user's role is allowed
    if (!allowedRoles.includes(user.role)) {
        return <Navigate to="/" replace />;
    }

    // Allow access
    return <Outlet />;
}