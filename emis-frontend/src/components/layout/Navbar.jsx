import { FaBell, FaMoon, FaSun, FaUserCircle } from "react-icons/fa";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";

export default function Navbar() {

    const { theme, toggleTheme } = useTheme();
    const { user } = useAuth();

    return (

        <header className="student-navbar">

            <div className="search-box">
                <input
                    type="text"
                    placeholder="Search..."
                />
            </div>

            <div className="nav-actions">

                <button
                    className="icon-btn"
                    onClick={toggleTheme}
                >
                    {theme === "dark"
                        ? <FaSun />
                        : <FaMoon />
                    }
                </button>

                <button className="icon-btn">
                    <FaBell />
                </button>

                <div className="profile">

                    <FaUserCircle size={38} />

                    <div>

                        <div className="fw-semibold">
                            {user?.name}
                        </div>

                        <small className="text-secondary">
                            Student
                        </small>

                    </div>

                </div>

            </div>

        </header>

    );

}