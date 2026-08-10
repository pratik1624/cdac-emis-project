import DashboardCard from "../../studentComponent/ui/DashboardCard";    

import {

    FaBullhorn,

    FaCalendarAlt,

    FaClock,

    FaFileAlt

} from "react-icons/fa";

export default function NoticeStatistics({

    notices

}) {

    const totalNotices = notices.length;

    const today = new Date().toISOString().split("T")[0];

    const todayNotices = notices.filter(

        notice => notice.publishDate === today

    ).length;

    const latestNotice = notices.length;

    const scheduled = notices.filter(

        notice =>

            notice.publishDate > today

    ).length;

    return (

        <div className="dashboard-grid">

            <DashboardCard

                title="Notices"

                value={totalNotices}

                subtitle="Total Notices"

                icon={<FaBullhorn />}

            />

            <DashboardCard

                title="Today"

                value={todayNotices}

                subtitle="Published Today"

                icon={<FaCalendarAlt />}

            />

            <DashboardCard

                title="Latest"

                value={latestNotice}

                subtitle="Latest Notices"

                icon={<FaFileAlt />}

            />

            <DashboardCard

                title="Scheduled"

                value={scheduled}

                subtitle="Upcoming"

                icon={<FaClock />}

            />

        </div>

    );

}