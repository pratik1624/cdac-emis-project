import {
    FaEnvelope,
    FaPhone
} from "react-icons/fa";

export default function ContactInfoCard({ faculty }) {

    return (

        <div className="card profile-card">

            <div className="card-body">

                <h5 className="fw-bold mb-4">

                    <FaEnvelope className="profile-icon me-2" />

                    Contact Information

                </h5>

                <div className="row">

                    {/* Email */}

                    <div className="col-md-6 mb-3">

                        <div className="border rounded-3 p-3 h-100">

                            <FaEnvelope
                                className="profile-icon mb-2"
                            />

                            <div className="profile-label">

                                Email

                            </div>

                            <div className="profile-value">

                                {faculty.email}

                            </div>

                        </div>

                    </div>

                    {/* Phone */}

                    <div className="col-md-6 mb-3">

                        <div className="border rounded-3 p-3 h-100">

                            <FaPhone
                                className="profile-icon mb-2"
                            />

                            <div className="profile-label">

                                Phone

                            </div>

                            <div className="profile-value">

                                {faculty.phone}

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}