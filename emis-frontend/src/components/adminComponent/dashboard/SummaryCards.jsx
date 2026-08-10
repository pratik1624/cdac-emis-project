import DashboardCard from "../../studentComponent/ui/DashboardCard";

import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBuilding,
  FaBook,
} from "react-icons/fa";

export default function SummaryCards({ dashboard }) {
  return (
    <div className="dashboard-grid">
      <DashboardCard
        title="Students"
        value={dashboard.totalStudents}
        subtitle="Registered Students"
        icon={<FaUserGraduate />}
      />

      <DashboardCard
        title="Faculty"
        value={dashboard.totalFaculty}
        subtitle="Teaching Staff"
        icon={<FaChalkboardTeacher />}
      />

      <DashboardCard
        title="Departments"
        value={dashboard.totalDepartments}
        subtitle="Available Departments"
        icon={<FaBuilding />}
      />

      <DashboardCard
        title="Subjects"
        value={dashboard.totalSubjects}
        subtitle="Total Subjects"
        icon={<FaBook />}
      />
    </div>
  );
}
