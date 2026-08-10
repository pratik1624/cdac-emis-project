import DashboardCard from "../../studentComponent/ui/DashboardCard";

import {
    FaUsers,
    FaBookOpen,
    FaClipboardCheck,
    FaFileAlt
} from "react-icons/fa";

export default function SummaryCards({ dashboard }) {

    return (

        <div className="dashboard-grid">

            <DashboardCard
                title="Students"
                value={dashboard.totalStudents}
                subtitle="Assigned Students"
                icon={<FaUsers />}
            />

            <DashboardCard
                title="Subjects"
                value={dashboard.totalSubjects}
                subtitle="Assigned Subjects"
                icon={<FaBookOpen />}
            />

            <DashboardCard
                title="Attendance"
                value={dashboard.pendingAttendance}
                subtitle="Pending Attendance"
                icon={<FaClipboardCheck />}
            />

            <DashboardCard
                title="Results"
                value={dashboard.pendingResults}
                subtitle="Pending Results"
                icon={<FaFileAlt />}
            />

        </div>

    );

}