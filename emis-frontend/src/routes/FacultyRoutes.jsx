import { Routes, Route, Navigate } from "react-router-dom";

import FacultyLayout from "../layouts/FacultyLayout";

import Dashboard from "../pages/faculty/Dashboard";
import Profile from "../pages/faculty/Profile";
import Attendance from "../pages/faculty/Attendance";
import Students from "../pages/faculty/Students";
import StudentDetails from "../pages/faculty/StudentDetails";
import Subjects from "../pages/faculty/Subjects";
import SubjectMarks from "../pages/faculty/SubjectMarks";
import Results from "../pages/faculty/Results";
import Notices from "../pages/faculty/Notices";
import Settings from "../pages/faculty/Settings";

export default function FacultyRoutes() {

    return (

        <Routes>

            <Route element={<FacultyLayout />}>

                <Route
                    path="dashboard"
                    element={<Dashboard />}
                />

                <Route
                    path="profile"
                    element={<Profile />}
                />

                <Route
                    path="attendance"
                    element={<Attendance />}
                />

                <Route
                    path="students"
                    element={<Students />}
                />

                <Route
                    path="students/:id"
                    element={<StudentDetails />}
                />

                <Route
                    path="subjects"
                    element={<Subjects />}
                />

                <Route
                    path="subjects/:subjectId"
                    element={<SubjectMarks />}
                />

                <Route
                    path="results"
                    element={<Results />}
                />

                <Route
                    path="notices"
                    element={<Notices />}
                />

                <Route
                    path="settings"
                    element={<Settings />}
                />

                <Route
                    path="*"
                    element={<Navigate to="dashboard" replace />}
                />

            </Route>

        </Routes>

    );

}