
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function AdminDashboard() {

    const { user, logout } = useAuth();

    const navigate = useNavigate();

    const handleLogout = () => {

        logout();

        navigate("/", { replace: true });

    };

    return (

        <div>

            <h2>Welcome {user.name}</h2>

            <button
                className="btn btn-danger"
                onClick={handleLogout}
            >
                Logout
            </button>

        </div>
        
    );
}
