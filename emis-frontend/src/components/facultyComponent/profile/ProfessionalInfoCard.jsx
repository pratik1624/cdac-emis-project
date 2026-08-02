import {
    FaIdBadge,
    FaUniversity,
    FaBriefcase,
    FaUserTag
} from "react-icons/fa";

export default function ProfessionalInfoCard({ faculty }) {

    return (

        <div className="card profile-card h-100">

            <div className="card-body">

                <h5 className="fw-bold mb-4">

                    <FaBriefcase className="profile-icon me-2" />

                    Professional Information

                </h5>

                <div className="row mb-3">

                    <div className="col-5 profile-label">

                        Employee Code

                    </div>

                    <div className="col-7 profile-value">

                        {faculty.employeeCode}

                    </div>

                </div>

                <div className="row mb-3">

                    <div className="col-5 profile-label">

                        Designation

                    </div>

                    <div className="col-7 profile-value">

                        {faculty.designation}

                    </div>

                </div>

                <div className="row mb-3">

                    <div className="col-5 profile-label">

                        Department

                    </div>

                    <div className="col-7 profile-value">

                        {faculty.department}

                    </div>

                </div>

                <div className="row">

                    <div className="col-5 profile-label">

                        Role

                    </div>

                    <div className="col-7 profile-value">

                        {faculty.role}

                    </div>

                </div>

            </div>

        </div>

    );

}