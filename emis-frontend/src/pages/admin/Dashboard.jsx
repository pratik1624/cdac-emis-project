import { useEffect, useState } from "react";

import { getAdminDashboard } from "../../api/adminApi";

import SummaryCards from "../../components/adminComponent/dashboard/SummaryCards";
import QuickActions from "../../components/adminComponent/dashboard/QuickActions";
import RecentNotices from "../../components/adminComponent/dashboard/RecentNotices";

import "../../styles/adminStyles/dashboard.css";

export default function Dashboard() {
  const [dashboard, setDashboard] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const data = await getAdminDashboard();

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
      <div className="admin-page">
        <h4>Loading Dashboard...</h4>
      </div>
    );
  }

  if (error) {
    return (
      <div className="admin-page">
        <h4>{error}</h4>
      </div>
    );
  }

  return (
    <div className="admin-page">
      <div className="page-header">
        <h2 className="page-title">Dashboard</h2>

        <p className="page-subtitle">
          Welcome Admin. Manage your college from one place.
        </p>
      </div>

      <SummaryCards dashboard={dashboard} />

      <div className="admin-dashboard-grid">
        <QuickActions />

        <RecentNotices notices={dashboard.recentNotices} />
      </div>
    </div>
  );
}
