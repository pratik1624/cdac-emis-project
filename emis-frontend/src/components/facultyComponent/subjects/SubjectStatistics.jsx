import DashboardCard from "../../studentComponent/ui/DashboardCard";

import {
    FaBookOpen,
    FaLayerGroup,
    FaUsers,
    FaCheckCircle
} from "react-icons/fa";

export default function SubjectStatistics({ subjects }) {

    const totalSubjects = subjects.length;

    const totalSemesters = new Set(

        subjects.map(subject => subject.semester)

    ).size;

    const totalStudents = subjects.reduce(

        (total, subject) => total + (subject.totalStudents || 0),

        0

    );

    const activeSubjects = subjects.filter(

        subject => subject.active !== false

    ).length;

    return (

        <div className="dashboard-grid">

            <DashboardCard

                title="Subjects"

                value={totalSubjects}

                subtitle="Assigned Subjects"

                icon={<FaBookOpen />}

            />

            <DashboardCard

                title="Semesters"

                value={totalSemesters}

                subtitle="Teaching Semesters"

                icon={<FaLayerGroup />}

            />

            <DashboardCard

                title="Students"

                value={totalStudents}

                subtitle="Enrolled Students"

                icon={<FaUsers />}

            />

            <DashboardCard

                title="Active"

                value={activeSubjects}

                subtitle="Active Subjects"

                icon={<FaCheckCircle />}

            />

        </div>

    );

}