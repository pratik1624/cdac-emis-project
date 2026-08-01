import { useEffect, useState } from "react";

import {
    getStudentProfile,
    getAttendance,
    getResults
} from "../../api/studentApi";

import { getStudentNotices } from "../../api/noticeApi";

import DashboardCard from "../../components/studentComponent/ui/DashboardCard";
import WelcomeBanner from "../../components/studentComponent/ui/WelcomeBanner";
import InfoCard from "../../components/studentComponent/ui/InfoCard";
import NoticeCard from "../../components/studentComponent/ui/NoticeCard";

import {
    FaClipboardCheck,
    FaChartLine,
    FaCheckCircle,
    FaBullhorn
} from "react-icons/fa";

export default function Dashboard() {

    const [profile, setProfile] = useState(null);
    const [attendance, setAttendance] = useState([]);
    const [results, setResults] = useState([]);
    const [notices, setNotices] = useState([]);

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const loadDashboard = async () => {

            try {

                const [
                    profileData,
                    attendanceData,
                    resultData,
                    noticeData
                ] = await Promise.all([
                    getStudentProfile(),
                    getAttendance(),
                    getResults(),
                    getStudentNotices()
                ]);

                setProfile(profileData);
                setAttendance(attendanceData);
                setResults(resultData);
                setNotices(noticeData);

            } catch (err) {

                console.error(err);

            } finally {

                setLoading(false);

            }

        };

        loadDashboard();

    }, []);

    if (loading) {

        return <h4>Loading Dashboard...</h4>;

    }

    // ==========================================
    // Attendance Statistics
    // ==========================================

    const totalClasses = attendance.reduce(
        (sum, item) => sum + item.totalClasses,
        0
    );

    const attendedClasses = attendance.reduce(
        (sum, item) => sum + item.attendedClasses,
        0
    );

    const attendancePercentage =
        totalClasses > 0
            ? ((attendedClasses * 100) / totalClasses).toFixed(1)
            : "0";

    // ==========================================
    // Result Statistics
    // ==========================================

    const totalObtained = results.reduce(
        (sum, item) => sum + item.obtainedMarks,
        0
    );

    const totalMarks = results.reduce(
        (sum, item) => sum + item.totalMarks,
        0
    );

    const percentage =
        totalMarks > 0
            ? ((totalObtained * 100) / totalMarks).toFixed(1)
            : "0";

    const passedSubjects = results.filter(
        result => result.grade !== "F"
    ).length;

    const totalSubjects = results.length;

    // ==========================================
    // Latest Notices
    // ==========================================

    const latestNotices = [...notices]
        .sort(
            (a, b) =>
                new Date(b.publishDate) -
                new Date(a.publishDate)
        )
        .slice(0, 3);

    return (

        <>

            <WelcomeBanner profile={profile} />

            <div className="dashboard-grid">

                <DashboardCard
                    title="Attendance"
                    value={`${attendancePercentage}%`}
                    subtitle="Current Attendance"
                    icon={<FaClipboardCheck />}
                />

                <DashboardCard
                    title="Results"
                    value={`${percentage}%`}
                    subtitle="Overall Percentage"
                    icon={<FaChartLine />}
                />

                <DashboardCard
                    title="Subjects Passed"
                    value={`${passedSubjects}/${totalSubjects}`}
                    subtitle="Current Semester"
                    icon={<FaCheckCircle />}
                />

                <DashboardCard
                    title="Notices"
                    value={notices.length}
                    subtitle="Published Notices"
                    icon={<FaBullhorn />}
                />

            </div>

            <div className="info-grid">

                <InfoCard title="Recent Notices">

                    {

                        latestNotices.map((notice, index) => (

                            <NoticeCard
                                key={index}
                                title={notice.title}
                                date={new Date(
                                    notice.publishDate
                                ).toLocaleDateString(
                                    "en-GB",
                                    {
                                        day: "2-digit",
                                        month: "short",
                                        year: "numeric"
                                    }
                                )}
                                description={notice.description}
                            />

                        ))

                    }

                </InfoCard>

                <InfoCard title="Student Information">

                    <div className="student-info">

                        <div>

                            <strong>Name</strong>

                            <p>

                                {profile?.firstName} {profile?.lastName}

                            </p>

                        </div>

                        <div>

                            <strong>Department</strong>

                            <p>

                                {profile?.department}

                            </p>

                        </div>

                        <div>

                            <strong>Semester</strong>

                            <p>

                                {profile?.semester}

                            </p>

                        </div>

                        <div>

                            <strong>Email</strong>

                            <p>

                                {profile?.email}

                            </p>

                        </div>

                    </div>

                </InfoCard>

            </div>

        </>

    );

}