import DashboardCard from "../../studentComponent/ui/DashboardCard";

import {

    FaBook,

    FaBuilding,

    FaGraduationCap,

    FaLayerGroup

} from "react-icons/fa";

export default function SubjectStatistics({

    subjects

}) {

    const totalSubjects = subjects.length;

    const totalDepartments = new Set(

        subjects.map(subject => subject.department)

    ).size;

    const totalSemesters = new Set(

        subjects.map(subject => subject.semester)

    ).size;

    const subjectCodes = subjects.filter(

        subject => subject.subjectCode

    ).length;

    return (

        <div className="dashboard-grid">

            <DashboardCard

                title="Subjects"

                value={totalSubjects}

                subtitle="Total Subjects"

                icon={<FaBook />}

            />

            <DashboardCard

                title="Departments"

                value={totalDepartments}

                subtitle="Departments"

                icon={<FaBuilding />}

            />

            <DashboardCard

                title="Semesters"

                value={totalSemesters}

                subtitle="Available"

                icon={<FaGraduationCap />}

            />

            <DashboardCard

                title="Codes"

                value={subjectCodes}

                subtitle="Subject Codes"

                icon={<FaLayerGroup />}

            />

        </div>

    );

}