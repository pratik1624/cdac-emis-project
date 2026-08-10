import DashboardCard from "../../studentComponent/ui/DashboardCard";

import {
    FaUsers,
    FaChartLine,
    FaArrowUp,
    FaArrowDown
} from "react-icons/fa";

export default function MarksSummary({ marks }) {

    const totalStudents = marks.length;

    const obtainedMarks = marks.map(student =>
        Number(student.obtainedMarks || 0)
    );

    const highestMarks =
        obtainedMarks.length > 0
            ? Math.max(...obtainedMarks)
            : 0;

    const lowestMarks =
        obtainedMarks.length > 0
            ? Math.min(...obtainedMarks)
            : 0;

    const averageMarks =
        obtainedMarks.length > 0
            ? (
                obtainedMarks.reduce((a, b) => a + b, 0) /
                obtainedMarks.length
            ).toFixed(1)
            : 0;

    return (

        <div className="dashboard-grid">

            <DashboardCard

                title="Students"

                value={totalStudents}

                subtitle="Students Appeared"

                icon={<FaUsers />}

            />

            <DashboardCard

                title="Average"

                value={averageMarks}

                subtitle="Average Marks"

                icon={<FaChartLine />}

            />

            <DashboardCard

                title="Highest"

                value={highestMarks}

                subtitle="Highest Marks"

                icon={<FaArrowUp />}

            />

            <DashboardCard

                title="Lowest"

                value={lowestMarks}

                subtitle="Lowest Marks"

                icon={<FaArrowDown />}

            />

        </div>

    );

}