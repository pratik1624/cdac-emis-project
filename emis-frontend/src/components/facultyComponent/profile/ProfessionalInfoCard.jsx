import {
    FaBriefcase,
    FaIdBadge,
    FaBuilding,
    FaUserTag
} from "react-icons/fa";

export default function ProfessionalInfoCard({ faculty }) {

    return (

        <div className="profile-card h-100">

            <div className="profile-card-body">

                <h5 className="profile-card-title">

                    <FaBriefcase className="profile-title-icon" />

                    Professional Information

                </h5>

                <div className="profile-info-list">

                    <div className="profile-info-row">

                        <span className="profile-label">

                            <FaIdBadge className="me-2" />

                            Employee Code

                        </span>

                        <strong>

                            {faculty.employeeCode}

                        </strong>

                    </div>

                    <div className="profile-info-row">

                        <span className="profile-label">

                            <FaBuilding className="me-2" />

                            Department

                        </span>

                        <strong>

                            {faculty.department}

                        </strong>

                    </div>

                    <div className="profile-info-row">

                        <span className="profile-label">

                            <FaBriefcase className="me-2" />

                            Designation

                        </span>

                        <strong>

                            {faculty.designation}

                        </strong>

                    </div>

                    <div className="profile-info-row">

                        <span className="profile-label">

                            <FaUserTag className="me-2" />

                            Role

                        </span>

                        <strong>

                            {faculty.role}

                        </strong>

                    </div>

                </div>

            </div>

        </div>

    );

}