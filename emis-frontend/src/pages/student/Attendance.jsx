import { useEffect, useState } from "react";

import { getAttendance } from "../../api/attendanceApi";

import DashboardCard from "../../components/studentComponent/ui/DashboardCard";
import InfoCard from "../../components/studentComponent/ui/InfoCard";

import AttendanceTable from "../../components/studentComponent/attendance/AttendanceTable";
import AttendanceOverview from "../../components/studentComponent/attendance/AttendanceOverview";
import AttendancePolicy from "../../components/studentComponent/attendance/AttendancePolicy";

import {
    FaClipboardCheck,
    FaCheckCircle,
    FaTimesCircle,
    FaCalendarAlt
} from "react-icons/fa";

import "../../styles/studentStyles/attendance.css";

export default function Attendance() {

    const [attendance, setAttendance] = useState([]);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    useEffect(() => {

        loadAttendance();

    }, []);

    const loadAttendance = async () => {

        try {

            const data = await getAttendance();

            setAttendance(data);

        }

        catch (err) {

            console.error(err);

            setError("Unable to load attendance.");

        }

        finally {

            setLoading(false);

        }

    };

    if (loading) {

        return (

            <div className="container-fluid">

                <div className="text-center py-5">

                    <div
                        className="spinner-border text-success"
                        role="status"
                    >
                        <span className="visually-hidden">
                            Loading...
                        </span>
                    </div>

                </div>

            </div>

        );

    }

    if (error) {

        return (

            <div className="container-fluid">

                <div className="alert alert-danger">

                    {error}

                </div>

            </div>

        );

    }

    const totalClasses = attendance.reduce(

        (sum, item) => sum + item.totalClasses,

        0

    );

    const presentClasses = attendance.reduce(

        (sum, item) => sum + item.attendedClasses,

        0

    );

    const absentClasses = totalClasses - presentClasses;

    const overallAttendance =

        totalClasses === 0

            ? 0

            : ((presentClasses * 100) / totalClasses).toFixed(1);

    return (

        <div className="container-fluid attendance-page">

            {/* Header */}

            <div className="attendance-header">

                <h2>

                    Attendance

                </h2>

                <p>

                    Track your attendance across all enrolled subjects.

                </p>

            </div>

            {/* Summary */}

            <div className="dashboard-grid attendance-summary">

                <DashboardCard
                    title="Overall Attendance"
                    value={`${overallAttendance}%`}
                    subtitle="Current Percentage"
                    icon={<FaClipboardCheck />}
                />

                <DashboardCard
                    title="Present Classes"
                    value={presentClasses}
                    subtitle="Classes Attended"
                    icon={<FaCheckCircle />}
                />

                <DashboardCard
                    title="Absent Classes"
                    value={absentClasses}
                    subtitle="Classes Missed"
                    icon={<FaTimesCircle />}
                />

                <DashboardCard
                    title="Total Classes"
                    value={totalClasses}
                    subtitle="Conducted Classes"
                    icon={<FaCalendarAlt />}
                />

            </div>

            {/* Subject Table */}

            <div className="attendance-section">

                <InfoCard title="Subject-wise Attendance">

                    <AttendanceTable

                        attendance={attendance}

                    />

                </InfoCard>

            </div>

            {/* Bottom Section */}

            <div className="attendance-bottom">

                <AttendanceOverview

                    overallAttendance={overallAttendance}

                    totalClasses={totalClasses}

                    presentClasses={presentClasses}

                    absentClasses={absentClasses}

                />

                <AttendancePolicy

                    overallAttendance={overallAttendance}

                />

            </div>

        </div>

    );

}