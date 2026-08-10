import {
    FaUserTie,
    FaIdBadge,
    FaBuilding,
    FaEnvelope
} from "react-icons/fa";

export default function FacultyInfo({ dashboard }) {

    return (

        <div className="dashboard-card-section">

            <div className="dashboard-section-header">

                <h4>

                    Faculty Information

                </h4>

                <p>

                    Your academic profile

                </p>

            </div>

            <div className="faculty-info-list">

                <div className="faculty-info-item">

                    <div className="faculty-info-left">

                        <FaUserTie className="faculty-info-icon" />

                        <span>

                            Faculty Name

                        </span>

                    </div>

                    <strong>

                        {dashboard.facultyName}

                    </strong>

                </div>

                <div className="faculty-info-item">

                    <div className="faculty-info-left">

                        <FaIdBadge className="faculty-info-icon" />

                        <span>

                            Employee Code

                        </span>

                    </div>

                    <strong>

                        {dashboard.employeeCode}

                    </strong>

                </div>

                <div className="faculty-info-item">

                    <div className="faculty-info-left">

                        <FaBuilding className="faculty-info-icon" />

                        <span>

                            Department

                        </span>

                    </div>

                    <strong>

                        {dashboard.department}

                    </strong>

                </div>

                <div className="faculty-info-item">

                    <div className="faculty-info-left">

                        <FaEnvelope className="faculty-info-icon" />

                        <span>

                            Email

                        </span>

                    </div>

                    <strong>

                        {dashboard.email}

                    </strong>

                </div>

            </div>

        </div>

    );

}