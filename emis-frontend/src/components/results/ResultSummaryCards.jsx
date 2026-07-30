import {
    FaGraduationCap,
    FaUniversity,
    FaBookOpen,
    FaAward
} from "react-icons/fa";

export default function ResultSummaryCards() {

    return (

        <div className="row mb-4">

            <div className="col-lg-3 col-md-6 mb-3">

                <div className="dashboard-card">

                    <div className="dashboard-icon">

                        <FaGraduationCap />

                    </div>

                    <h2 className="dashboard-value">

                        8.64

                    </h2>

                    <h6 className="dashboard-title">

                        CGPA

                    </h6>

                    <small className="dashboard-subtitle">

                        Overall Performance

                    </small>

                </div>

            </div>

            <div className="col-lg-3 col-md-6 mb-3">

                <div className="dashboard-card">

                    <div className="dashboard-icon">

                        <FaUniversity />

                    </div>

                    <h2 className="dashboard-value">

                        8.90

                    </h2>

                    <h6 className="dashboard-title">

                        SGPA

                    </h6>

                    <small className="dashboard-subtitle">

                        Current Semester

                    </small>

                </div>

            </div>

            <div className="col-lg-3 col-md-6 mb-3">

                <div className="dashboard-card">

                    <div className="dashboard-icon">

                        <FaBookOpen />

                    </div>

                    <h2 className="dashboard-value">

                        24

                    </h2>

                    <h6 className="dashboard-title">

                        Credits

                    </h6>

                    <small className="dashboard-subtitle">

                        Credits Earned

                    </small>

                </div>

            </div>

            <div className="col-lg-3 col-md-6 mb-3">

                <div className="dashboard-card">

                    <div className="dashboard-icon">

                        <FaAward />

                    </div>

                    <h2 className="dashboard-value">

                        Pass

                    </h2>

                    <h6 className="dashboard-title">

                        Status

                    </h6>

                    <small className="dashboard-subtitle">

                        Excellent Performance

                    </small>

                </div>

            </div>

        </div>

    );

}