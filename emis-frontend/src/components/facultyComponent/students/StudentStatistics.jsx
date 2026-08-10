import DashboardCard from "../../studentComponent/ui/DashboardCard";

import {
    FaUsers,
    FaGraduationCap,
    FaUserCheck,
    FaEnvelope
} from "react-icons/fa";

export default function StudentStatistics({ students }) {

    const totalStudents = students.length;

    const totalSemesters = new Set(

        students.map(student => student.semester)

    ).size;

    const emailCount = students.filter(

        student => student.email

    ).length;

    return (

        <div className="dashboard-grid">

            <DashboardCard

                title="Students"

                value={totalStudents}

                subtitle="Department Students"

                icon={<FaUsers />}

            />

            <DashboardCard

                title="Semesters"

                value={totalSemesters}

                subtitle="Active Semesters"

                icon={<FaGraduationCap />}

            />

            <DashboardCard

                title="Registered"

                value={totalStudents}

                subtitle="Registered Students"

                icon={<FaUserCheck />}

            />

            <DashboardCard

                title="Email"

                value={emailCount}

                subtitle="Email Available"

                icon={<FaEnvelope />}

            />

        </div>

    );

}