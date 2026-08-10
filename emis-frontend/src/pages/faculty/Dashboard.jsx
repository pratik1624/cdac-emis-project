import { useEffect, useState } from "react";

import { getFacultyDashboard } from "../../api/facultyApi";

import FacultyInfoCard from "../../components/facultyComponent/dashboard/FacultyInfo";
// import PendingAttendance from "../../components/facultyComponent/dashboard/PendingAttendance";
// import PendingResults from "../../components/facultyComponent/dashboard/PendingResults";
// import TodaysClasses from "../../components/facultyComponent/dashboard/TodaysClasses";
// import QuickActions from "../../components/facultyComponent/dashboard/QuickActions";
import FacultyStats from "../../components/facultyComponent/dashboard";

import "../../styles/facultyStyles/dashboard.css";

export default function Dashboard() {
  const [dashboard, setDashboard] = useState(null);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const data = await getFacultyDashboard();

      setDashboard(data);
    } catch (err) {
      console.error(err);
    }
  };

  if (!dashboard) {
    return <h4>Loading...</h4>;
  }

  return (
    <div className="container-fluid">
      <h2 className="page-title mb-4">Faculty Dashboard</h2>

      <FacultyStats dashboard={dashboard} />

      <div className="row mt-4">
        <div className="col-lg-8">
          <TodaysClasses />
        </div>

        <div className="col-lg-4">
          <FacultyInfoCard />
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-lg-6">
          <PendingAttendance />
        </div>

        <div className="col-lg-6">
          <PendingResults />
        </div>
      </div>

      <div className="mt-4">
        <QuickActions />
      </div>
    </div>
  );
}
