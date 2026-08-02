import {
    FaHome,
    FaUser,
    FaClipboardCheck,
    FaChartLine,
    FaMoneyBillWave,
    FaBullhorn,
    FaSignOutAlt
} from "react-icons/fa";

import { NavLink } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { FaCog } from "react-icons/fa";
export default function StudentSidebar() {

    const { logout } = useAuth();

    const menu = [

        {
            title: "Dashboard",
            icon: <FaHome />,
            path: "/student/dashboard"
        },

        {
            title: "Profile",
            icon: <FaUser />,
            path: "/student/profile"
        },

        {
            title: "Attendance",
            icon: <FaClipboardCheck />,
            path: "/student/attendance"
        },

        {
            title: "Results",
            icon: <FaChartLine />,
            path: "/student/results"
        },

        {
            title: "Fees",
            icon: <FaMoneyBillWave />,
            path: "/student/fees"
        },

        {
            title: "Notices",
            icon: <FaBullhorn />,
            path: "/student/notices"
        },

        // {
        //     title: "Settings",
        //     icon: <FaCog />,
        //     path: "/settings"
        // }

    ];

    return (

        <aside className="student-sidebar">

            <div className="sidebar-logo">

                <h3>🎓 EMIS</h3>

                <p>Student Portal</p>

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

                        {item.icon}

                        {item.title}

                    </NavLink>

                ))}

            </div>

            <div className="sidebar-footer">

                <button
                    className="btn btn-light w-100 rounded-3"
                    onClick={logout}
                >
                    <FaSignOutAlt className="me-2" />
                    Logout
                </button>

            </div>

        </aside>

    );

}