import { useEffect, useState } from "react";

import { getAttendance } from "../../api/attendanceApi";

import DashboardCard from "../../components/ui/DashboardCard";
import InfoCard from "../../components/ui/InfoCard";

import AttendanceTable from "../../components/attendance/AttendanceTable";
import AttendanceOverview from "../../components/attendance/AttendanceOverview";
import AttendancePolicy from "../../components/attendance/AttendancePolicy";

import {
  FaClipboardCheck,
  FaCheckCircle,
  FaTimesCircle,
  FaCalendarAlt,
} from "react-icons/fa";

export default function Attendance() {
  const [attendance, setAttendance] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    const fetchAttendance = async () => {
      try {
        const data = await getAttendance();

        setAttendance(data);
      } catch (err) {
        console.error(err);

        setError("Unable to load attendance.");
      } finally {
        setLoading(false);
      }
    };

    fetchAttendance();
  }, []);

  if (loading) {
    return <h4>Loading Attendance...</h4>;
  }

  if (error) {
    return <h4>{error}</h4>;
  }

  const totalClasses = attendance.reduce(
    (sum, item) => sum + item.totalClasses,
    0,
  );

  const presentClasses = attendance.reduce(
    (sum, item) => sum + item.attendedClasses,
    0,
  );

  const absentClasses = totalClasses - presentClasses;

  const overallAttendance =
    totalClasses > 0 ? ((presentClasses * 100) / totalClasses).toFixed(1) : 0;

  return (
    <div className="attendance-page">
      {/* Header */}

      <div className="attendance-header">
        <div>
          <h2>Attendance</h2>

          <p>Track your attendance across all enrolled subjects</p>
        </div>
      </div>

      {/* Summary Cards */}

      <div className="dashboard-grid attendance-summary">
        <DashboardCard
          title="Overall"
          value={`${overallAttendance}%`}
          subtitle="Current Attendance"
          icon={<FaClipboardCheck />}
        />

        <DashboardCard
          title="Present"
          value={presentClasses}
          subtitle="Classes Attended"
          icon={<FaCheckCircle />}
        />

        <DashboardCard
          title="Absent"
          value={absentClasses}
          subtitle="Classes Missed"
          icon={<FaTimesCircle />}
        />

        <DashboardCard
          title="Total"
          value={totalClasses}
          subtitle="Total Classes"
          icon={<FaCalendarAlt />}
        />
      </div>

      {/* Attendance Table */}

      <div className="attendance-section">
        <InfoCard title="📚 Subject-wise Attendance">
          <p className="attendance-subtitle">
            Overall Attendance
            <strong className="ms-2">{overallAttendance}%</strong>
          </p>

          <AttendanceTable attendance={attendance} />
        </InfoCard>
      </div>

      {/* Bottom Cards */}

      {/* Bottom Cards */}

      <div className="attendance-bottom">
        <AttendanceOverview
          overallAttendance={overallAttendance}
          totalClasses={totalClasses}
          presentClasses={presentClasses}
          absentClasses={absentClasses}
        />

        <AttendancePolicy overallAttendance={overallAttendance} />
      </div>
    </div>
  );
}
