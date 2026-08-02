import {
    FaUser,
    FaVenusMars,
    FaCalendarAlt
} from "react-icons/fa";

export default function PersonalInfoCard({ faculty }) {

    return (

        <div className="card profile-card h-100">

            <div className="card-body">

                <h5 className="fw-bold mb-4">

                    <FaUser className="profile-icon me-2" />

                    Personal Information

                </h5>

                <div className="row mb-3">

                    <div className="col-5 profile-label">

                        First Name

                    </div>

                    <div className="col-7 profile-value">

                        {faculty.firstName}

                    </div>

                </div>

                <div className="row mb-3">

                    <div className="col-5 profile-label">

                        Last Name

                    </div>

                    <div className="col-7 profile-value">

                        {faculty.lastName}

                    </div>

                </div>

                <div className="row mb-3">

                    <div className="col-5 profile-label">

                        Gender

                    </div>

                    <div className="col-7 profile-value">

                        <FaVenusMars className="me-2 profile-icon" />

                        {faculty.gender}

                    </div>

                </div>

                <div className="row">

                    <div className="col-5 profile-label">

                        Date of Birth

                    </div>

                    <div className="col-7 profile-value">

                        <FaCalendarAlt className="me-2 profile-icon" />

                        {faculty.dob || faculty.DOB || "-"}

                    </div>

                </div>

            </div>

        </div>

    );

}