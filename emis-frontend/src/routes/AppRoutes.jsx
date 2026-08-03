import { Routes, Route } from "react-router-dom";

import Login from "../pages/auth/Login";

import PublicRoute from "./PublicRoute";
import PrivateRoute from "./PrivateRoute";
import RoleRoute from "./RoleRoute";

import StudentLayout from "../layouts/StudentLayout";
import FacultyLayout from "../layouts/FacultyLayout";
import AdminLayout from "../layouts/AdminLayout";

import StudentDashboard from "../pages/student/Dashboard";
import Profile from "../pages/student/Profile";
import Attendance from "../pages/student/Attendance";
import AcademicResults from "../pages/student/AcademicResults";
import Fees from "../pages/student/Fees";



import FacultyDashboard from "../pages/faculty/Dashboard";
import FacultyProfile from "../pages/faculty/Profile";
import FacultyAttendance from "../pages/faculty/Attendance";
import FacultyStudents from "../pages/faculty/Students";
import StudentDetails from "../pages/faculty/StudentDetails";
import FacultySubjects from "../pages/faculty/Subjects";
import SubjectMarks from "../pages/faculty/SubjectMarks";




import AdminDashboard from "../pages/admin/Dashboard";

import Settings from "../pages/settings/Settings";

export default function AppRoutes() {
  return (
    <Routes>
      {/* ================= PUBLIC ROUTES ================= */}

      <Route element={<PublicRoute />}>
        <Route path="/" element={<Login />} />
      </Route>

      {/* ================= PRIVATE ROUTES ================= */}

      <Route element={<PrivateRoute />}>
        {/* ================= STUDENT ================= */}

        <Route element={<RoleRoute allowedRoles={["STUDENT"]} />}>
          <Route path="/student" element={<StudentLayout />}>
            <Route path="dashboard" element={<StudentDashboard />} />

            <Route path="profile" element={<Profile />} />

            <Route path="attendance" element={<Attendance />} />

            <Route path="results" element={<AcademicResults />} />

            <Route path="fees" element={<Fees />} />

            <Route path="notices" element={<Notices />} />

            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>

        {/* ================= FACULTY ================= */}

       <Route element={<RoleRoute allowedRoles={["FACULTY"]} />}>

    <Route path="/faculty" element={<FacultyLayout />}>

        <Route path="dashboard" element={<FacultyDashboard />} />

        <Route path="profile" element={<FacultyProfile />} />

        <Route path="students" element={<FacultyStudents />} />

        <Route path="students/:id" element={<StudentDetails />} />

        <Route path="subjects" element={<FacultySubjects />} />

        <Route
            path="subjects/:subjectId"
            element={<SubjectMarks />}
        />

        <Route
            path="attendance"
            element={<FacultyAttendance />}
        />

        <Route
            path="settings"
            element={<Settings />}
        />

    </Route>

</Route>

        {/* ================= ADMIN ================= */}

        <Route element={<RoleRoute allowedRoles={["ADMIN"]} />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<AdminDashboard />} />

            <Route path="settings" element={<Settings />} />
          </Route>
        </Route>
      </Route>
    </Routes>
  );
}
