import {
    FaHome,
    FaUsers,
    FaChalkboardTeacher,
    FaBook,
    FaBullhorn,
    FaCog,
    FaSignOutAlt
} from "react-icons/fa";

import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function AdminSidebar() {

    const { logout } = useAuth();

    const menu = [

        {
            title: "Dashboard",
            icon: <FaHome />,
            path: "/admin/dashboard"
        },

        {
            title: "Students",
            icon: <FaUsers />,
            path: "/admin/students"
        },

        {
            title: "Faculty",
            icon: <FaChalkboardTeacher />,
            path: "/admin/faculty"
        },

        {
            title: "Courses",
            icon: <FaBook />,
            path: "/admin/courses"
        },

        {
            title: "Notices",
            icon: <FaBullhorn />,
            path: "/admin/notices"
        },

        {
            title: "Settings",
            icon: <FaCog />,
            path: "/admin/settings"
        }

    ];

    return (

        <aside className="student-sidebar">

            <div className="sidebar-logo">

                <h3>🎓 EMIS</h3>

                <p>Admin Portal</p>

            </div>

            <div className="sidebar-menu">

                {menu.map(item => (

                    <NavLink

                        key={item.path}

                        to={item.path}

                        className={({ isActive }) =>
                            isActive
                                ? "sidebar-link active"
                                : "sidebar-link"
                        }

                    >

                        {item.icon}

                        {item.title}

                    </NavLink>

                ))}

            </div>

            <div className="sidebar-footer">

                <button
                    className="btn btn-light w-100"
                    onClick={logout}
                >

                    <FaSignOutAlt className="me-2"/>

                    Logout

                </button>

            </div>

        </aside>

    );

}