import DashboardCard from "../../studentComponent/ui/DashboardCard";

import {
    FaUsers,
    FaUserCheck,
    FaUserTimes,
    FaChartPie
} from "react-icons/fa";

export default function AttendanceSummary({ students }) {

    const totalStudents = students.length;

    const presentStudents = students.filter(

        student => student.status === "Present"

    ).length;

    const absentStudents = students.filter(

        student => student.status === "Absent"

    ).length;

    const attendancePercentage =

        totalStudents === 0

            ? 0

            : Math.round((presentStudents / totalStudents) * 100);

    return (

        <div className="dashboard-grid">

            <DashboardCard

                title="Students"

                value={totalStudents}

                subtitle="Loaded Students"

                icon={<FaUsers />}

            />

            <DashboardCard

                title="Present"

                value={presentStudents}

                subtitle="Marked Present"

                icon={<FaUserCheck />}

            />

            <DashboardCard

                title="Absent"

                value={absentStudents}

                subtitle="Marked Absent"

                icon={<FaUserTimes />}

            />

            <DashboardCard

                title="Attendance"

                value={`${attendancePercentage}%`}

                subtitle="Current Attendance"

                icon={<FaChartPie />}

            />

        </div>

    );

}