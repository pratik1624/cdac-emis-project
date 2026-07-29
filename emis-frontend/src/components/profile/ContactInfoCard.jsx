import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt
} from "react-icons/fa";

export default function ContactInfoCard({ student }) {

    return (

        <div className="card profile-card">

            <div className="card-body">

                <h5 className="fw-bold mb-4">

                    <FaEnvelope className="profile-icon me-2" />

                    Contact Information

                </h5>

                <div className="row">

                    <div className="col-md-4 mb-3">

                        <div className="profile-info-box">

                            <FaEnvelope
                                className="profile-icon mb-3"
                            />

                            <div className="profile-label">
                                Email
                            </div>

                            <div className="profile-value">
                                {student.email}
                            </div>

                        </div>

                    </div>

                    <div className="col-md-4 mb-3">

                        <div className="profile-info-box">

                            <FaPhone
                                className="profile-icon mb-3"
                            />

                            <div className="profile-label">
                                Phone
                            </div>

                            <div className="profile-value">
                                {student.phone}
                            </div>

                        </div>

                    </div>

                    <div className="col-md-4 mb-3">

                        <div className="profile-info-box">

                            <FaMapMarkerAlt
                                className="profile-icon mb-3"
                            />

                            <div className="profile-label">
                                Address
                            </div>

                            <div className="profile-value">
                                {student.address}
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}