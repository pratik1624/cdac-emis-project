import FacultySidebar from "../components/layout/FacultySidebar";
import Navbar from "../components/layout/Navbar";
import { Outlet } from "react-router-dom";

export default function FacultyLayout() {

    return (

        <div className="layout">

            <FacultySidebar />

            <div className="main-content">

                <Navbar />

                <div className="page-content">

                    <Outlet />

                </div>

            </div>

        </div>

    );

}