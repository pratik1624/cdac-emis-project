import { Outlet } from "react-router-dom";

import Navbar from "../components/studentComponent/layout/Navbar";
import StudentSidebar from "../components/studentComponent/layout/StudentSidebar";

export default function MainLayout() {

    return (

        <div className="layout">

            <StudentSidebar />

            <div className="layout-content">

                <Navbar />

                <main className="layout-main">

                    <Outlet />

                </main>

            </div>

        </div>

    );

}