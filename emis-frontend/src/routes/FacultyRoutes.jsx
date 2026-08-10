import { Routes, Route, Navigate } from "react-router-dom";

import FacultyLayout from "../layouts/FacultyLayout";

import Dashboard from "../pages/faculty/Dashboard";
import Profile from "../pages/faculty/Profile";
import Students from "../pages/faculty/Students";
import StudentDetails from "../pages/faculty/StudentDetails";
import Subjects from "../pages/faculty/Subjects";
import SubjectMarks from "../pages/faculty/SubjectMarks";
import Attendance from "../pages/faculty/Attendance";

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
                    path="subjects/:subjectId/marks"
                    element={<SubjectMarks />}
                />

                <Route
                    path="attendance"
                    element={<Attendance />}
                />

                <Route
                    index
                    element={<Navigate to="dashboard" replace />}
                />

                <Route
                    path="*"
                    element={<Navigate to="dashboard" replace />}
                />

            </Route>

        </Routes>

    );

}