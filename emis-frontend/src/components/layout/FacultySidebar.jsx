import {
    FaHome,
    FaUser,
    FaUsers,
    FaBook,
    FaClipboardCheck,
    FaCog,
    FaSignOutAlt
} from "react-icons/fa";

import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function FacultySidebar() {

    const { logout } = useAuth();

    const menu = [

        {
            title: "Dashboard",
            icon: <FaHome />,
            path: "/faculty/dashboard"
        },

        {
            title: "Profile",
            icon: <FaUser />,
            path: "/faculty/profile"
        },

        {
            title: "Students",
            icon: <FaUsers />,
            path: "/faculty/students"
        },

        {
            title: "Subjects",
            icon: <FaBook />,
            path: "/faculty/subjects"
        },

        {
            title: "Attendance",
            icon: <FaClipboardCheck />,
            path: "/faculty/attendance"
        },

        {
            title: "Settings",
            icon: <FaCog />,
            path: "/faculty/settings"
        }

    ];

    return (

        <aside className="student-sidebar">

            <div className="sidebar-logo">

                <h3>🎓 EMIS</h3>

                <p>Faculty Portal</p>

            </div>

            <div className="sidebar-menu">

                {menu.map((item) => (

                    <NavLink
                        key={item.path}
                        to={item.path}
                        className={({ isActive }) =>
                            isActive
                                ? "sidebar-link active"
                                : "sidebar-link"
                        }
                    >

                        <span className="me-2">
                            {item.icon}
                        </span>

                        {item.title}

                    </NavLink>

                ))}

            </div>

            <div className="sidebar-footer">

                <button
                    className="btn btn-light w-100"
                    onClick={logout}
                >

                    <FaSignOutAlt className="me-2" />

                    Logout

                </button>

            </div>

        </aside>

    );

}