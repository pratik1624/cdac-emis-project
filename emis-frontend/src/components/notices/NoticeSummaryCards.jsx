import {
    FaBullhorn,
    FaEnvelopeOpenText,
    FaExclamationCircle,
    FaCalendarAlt
} from "react-icons/fa";

export default function NoticeSummaryCards() {

    return (

        <div className="row mb-4">

            <div className="col-lg-3 col-md-6 mb-3">

                <div className="dashboard-card">

                    <div className="dashboard-icon">

                        <FaBullhorn />

                    </div>

                    <h2 className="dashboard-value">

                        25

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

                        3

                    </h2>

                    <h6 className="dashboard-title">

                        Unread

                    </h6>

                    <small className="dashboard-subtitle">

                        New Announcements

                    </small>

                </div>

            </div>

            <div className="col-lg-3 col-md-6 mb-3">

                <div className="dashboard-card">

                    <div className="dashboard-icon">

                        <FaExclamationCircle />

                    </div>

                    <h2 className="dashboard-value">

                        5

                    </h2>

                    <h6 className="dashboard-title">

                        Important

                    </h6>

                    <small className="dashboard-subtitle">

                        High Priority

                    </small>

                </div>

            </div>

            <div className="col-lg-3 col-md-6 mb-3">

                <div className="dashboard-card">

                    <div className="dashboard-icon">

                        <FaCalendarAlt />

                    </div>

                    <h2 className="dashboard-value">

                        8

                    </h2>

                    <h6 className="dashboard-title">

                        This Month

                    </h6>

                    <small className="dashboard-subtitle">

                        Recent Notices

                    </small>

                </div>

            </div>

        </div>

    );

}