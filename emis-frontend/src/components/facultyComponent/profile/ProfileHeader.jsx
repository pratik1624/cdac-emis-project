import {
    FaUserCircle,
    FaEdit,
    FaEnvelope,
    FaPhone,
    FaBuilding,
    FaIdBadge
} from "react-icons/fa";

export default function ProfileHeader({

    faculty,

    onEdit

}) {

    return (

        <div className="profile-card profile-header mb-4">

            <div className="profile-card-body">

                <div className="row align-items-center">

                    {/* Avatar */}

                    <div className="col-lg-2 text-center">

                        <FaUserCircle
                            size={120}
                            className="profile-avatar-icon"
                        />

                        <button
                            className="btn btn-outline-success btn-sm w-100 mt-3"
                            disabled
                        >

                            Upload Photo

                        </button>

                    </div>

                    {/* Faculty Details */}

                    <div className="col-lg-7 mt-4 mt-lg-0">

                        <h2 className="profile-name">

                            {faculty.firstName} {faculty.lastName}

                        </h2>

                        <p className="profile-designation">

                            {faculty.designation}

                        </p>

                        <div className="profile-badges">

                            <span className="badge bg-success">

                                {faculty.role}

                            </span>

                        </div>

                        <div className="row mt-4">

                            <div className="col-md-6 mb-3">

                                <div className="profile-contact">

                                    <FaEnvelope className="profile-contact-icon" />

                                    <span>

                                        {faculty.email}

                                    </span>

                                </div>

                            </div>

                            <div className="col-md-6 mb-3">

                                <div className="profile-contact">

                                    <FaPhone className="profile-contact-icon" />

                                    <span>

                                        {faculty.phone}

                                    </span>

                                </div>

                            </div>

                            <div className="col-md-6">

                                <div className="profile-contact">

                                    <FaBuilding className="profile-contact-icon" />

                                    <span>

                                        {faculty.department}

                                    </span>

                                </div>

                            </div>

                            <div className="col-md-6">

                                <div className="profile-contact">

                                    <FaIdBadge className="profile-contact-icon" />

                                    <span>

                                        {faculty.employeeCode}

                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                    {/* Edit Button */}

                    <div className="col-lg-3 text-lg-end text-center mt-4 mt-lg-0">

                        <button
                            className="btn btn-success px-4 py-2"
                            onClick={onEdit}
                        >

                            <FaEdit className="me-2" />

                            Edit Profile

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}