import DashboardCard from "../../studentComponent/ui/DashboardCard";

import { FaUserGraduate, FaBuilding, FaMale, FaFemale } from "react-icons/fa";

export default function StudentStatistics({ students }) {
  const totalStudents = students.length;

  const totalDepartments = new Set(
    students.map((student) => student.department),
  ).size;

  const maleStudents = students.filter(
    (student) => student.gender === "MALE",
  ).length;

  const femaleStudents = students.filter(
    (student) => student.gender === "FEMALE",
  ).length;

  return (
    <div className="dashboard-grid">
      <DashboardCard
        title="Students"
        value={totalStudents}
        subtitle="Total Students"
        icon={<FaUserGraduate />}
      />

      <DashboardCard
        title="Departments"
        value={totalDepartments}
        subtitle="Departments"
        icon={<FaBuilding />}
      />

      <DashboardCard
        title="Male Students"
        value={maleStudents}
        subtitle="Male"
        icon={<FaMale />}
      />

      <DashboardCard
        title="Female Students"
        value={femaleStudents}
        subtitle="Female"
        icon={<FaFemale />}
      />
    </div>
  );
}
