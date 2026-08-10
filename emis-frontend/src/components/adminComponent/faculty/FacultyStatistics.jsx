import DashboardCard from "../../studentComponent/ui/DashboardCard";

import {
  FaChalkboardTeacher,
  FaBuilding,
  FaMale,
  FaFemale,
} from "react-icons/fa";

export default function FacultyStatistics({ faculty }) {
  const totalFaculty = faculty.length;

  const totalDepartments = new Set(faculty.map((faculty) => faculty.department))
    .size;

  const maleFaculty = faculty.filter(
    (faculty) => faculty.gender === "MALE",
  ).length;

  const femaleFaculty = faculty.filter(
    (faculty) => faculty.gender === "FEMALE",
  ).length;

  return (
    <div className="dashboard-grid">
      <DashboardCard
        title="Faculty"
        value={totalFaculty}
        subtitle="Total Faculty"
        icon={<FaChalkboardTeacher />}
      />

      <DashboardCard
        title="Departments"
        value={totalDepartments}
        subtitle="Departments"
        icon={<FaBuilding />}
      />

      <DashboardCard
        title="Male Faculty"
        value={maleFaculty}
        subtitle="Male"
        icon={<FaMale />}
      />

      <DashboardCard
        title="Female Faculty"
        value={femaleFaculty}
        subtitle="Female"
        icon={<FaFemale />}
      />
    </div>
  );
}
