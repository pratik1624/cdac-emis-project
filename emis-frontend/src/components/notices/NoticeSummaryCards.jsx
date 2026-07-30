import {
    FaBullhorn,
    FaEnvelopeOpenText,
    FaExclamationCircle,
    FaCalendarAlt
} from "react-icons/fa";

export default function NoticeSummaryCards({ notices }) {

    const totalNotices = notices.length;

    const currentMonth = new Date().getMonth();
    const currentYear = new Date().getFullYear();

    const thisMonth = notices.filter(notice => {

        const date = new Date(notice.publishDate);

        return (
            date.getMonth() === currentMonth &&
            date.getFullYear() === currentYear
        );

    }).length;

    const latestDate =
        notices.length > 0
            ? new Date(
                  Math.max(
                      ...notices.map(notice => new Date(notice.publishDate))
                  )
              ).toLocaleDateString("en-GB", {
                  day: "2-digit",
                  month: "short",
                  year: "numeric"
              })
            : "-";

    return (

        <div className="row mb-4">

            <div className="col-lg-3 col-md-6 mb-3">

                <div className="dashboard-card">

                    <div className="dashboard-icon">

                        <FaBullhorn />

                    </div>

                    <h2 className="dashboard-value">

                        {totalNotices}

                    </h2>

                    <h6 className="dashboard-title">

                        Total Notices

                    </h6>

                    <small className="dashboard-subtitle">

                        Published Notices

                    </small>

                </div>

            </div>

            <div className="col-lg-3 col-md-6 mb-3">

                <div className="dashboard-card">

                    <div className="dashboard-icon">

                        <FaEnvelopeOpenText />

                    </div>

                    <h2 className="dashboard-value">

                        {latestDate}

                    </h2>

                    <h6 className="dashboard-title">

                        Latest Notice

                    </h6>

                    <small className="dashboard-subtitle">

                        Most Recent Announcement

                    </small>

                </div>

            </div>

            <div className="col-lg-3 col-md-6 mb-3">

                <div className="dashboard-card">

                    <div className="dashboard-icon">

                        <FaExclamationCircle />

                    </div>

                    <h2 className="dashboard-value">

                        {totalNotices}

                    </h2>

                    <h6 className="dashboard-title">

                        Active Notices

                    </h6>

                    <small className="dashboard-subtitle">

                        Currently Available

                    </small>

                </div>

            </div>

            <div className="col-lg-3 col-md-6 mb-3">

                <div className="dashboard-card">

                    <div className="dashboard-icon">

                        <FaCalendarAlt />

                    </div>

                    <h2 className="dashboard-value">

                        {thisMonth}

                    </h2>

                    <h6 className="dashboard-title">

                        This Month

                    </h6>

                    <small className="dashboard-subtitle">

                        Published This Month

                    </small>

                </div>

            </div>

        </div>

    );

}