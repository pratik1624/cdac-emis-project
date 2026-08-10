import { useEffect, useState } from "react";

import { getFacultyDashboard } from "../../api/facultyApi";

import FacultyInfoCard from "../../components/facultyComponent/dashboard/FacultyInfo";
import FacultyStats from "../../components/facultyComponent/dashboard";

import SummaryCards from "../../components/facultyComponent/dashboard/SummaryCards";
import FacultyInfo from "../../components/facultyComponent/dashboard/FacultyInfo";

import "../../styles/facultyStyles/dashboard.css";

export default function Dashboard() {
  const [dashboard, setDashboard] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const data = await getFacultyDashboard();

      setDashboard(data);
    } catch (err) {
      console.log(err);

      setError("Unable to load dashboard.");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="faculty-dashboard">
        <h4>Loading Dashboard...</h4>
      </div>
    );
  }

  if (error) {
    return (
      <div className="faculty-dashboard">
        <h4>{error}</h4>
      </div>
    );
  }

  return (
    <div className="faculty-dashboard">
      <div className="dashboard-header">
        <h2>Dashboard</h2>

        <p>
          Welcome back,
          <strong> {dashboard.facultyName}</strong>
        </p>
      </div>

      <SummaryCards dashboard={dashboard} />

      <div className="dashboard-bottom">
        <FacultyInfo dashboard={dashboard} />
      </div>
    </div>
  );
}
