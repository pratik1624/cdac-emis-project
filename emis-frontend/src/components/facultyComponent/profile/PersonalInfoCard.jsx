import {
    FaUser,
    FaVenusMars,
    FaCalendarAlt
} from "react-icons/fa";

export default function PersonalInfoCard({ faculty }) {

    return (

        <div className="profile-card h-100">

            <div className="profile-card-body">

                <h5 className="profile-card-title">

                    <FaUser className="profile-title-icon" />

                    Personal Information

                </h5>

                <div className="profile-info-list">

                    <div className="profile-info-row">

                        <span className="profile-label">

                            First Name

                        </span>

                        <strong>

                            {faculty.firstName}

                        </strong>

                    </div>

                    <div className="profile-info-row">

                        <span className="profile-label">

                            Last Name

                        </span>

                        <strong>

                            {faculty.lastName}

                        </strong>

                    </div>

                    <div className="profile-info-row">

                        <span className="profile-label">

                            <FaVenusMars className="me-2" />

                            Gender

                        </span>

                        <strong>

                            {faculty.gender}

                        </strong>

                    </div>

                    <div className="profile-info-row">

                        <span className="profile-label">

                            <FaCalendarAlt className="me-2" />

                            Date of Birth

                        </span>

                        <strong>

                            {faculty.DOB}

                        </strong>

                    </div>

                </div>

            </div>

        </div>

    );

}