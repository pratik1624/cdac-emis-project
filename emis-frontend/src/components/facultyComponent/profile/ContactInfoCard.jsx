import {
    FaEnvelope,
    FaPhone
} from "react-icons/fa";

export default function ContactInfoCard({ faculty }) {

    return (

        <div className="profile-card">

            <div className="profile-card-body">

                <h5 className="profile-card-title">

                    <FaEnvelope className="profile-title-icon" />

                    Contact Information

                </h5>

                <div className="row">

                    <div className="col-md-6 mb-4">

                        <div className="profile-info-box">

                            <FaEnvelope className="profile-box-icon" />

                            <h6>

                                Email Address

                            </h6>

                            <p>

                                {faculty.email}

                            </p>

                        </div>

                    </div>

                    <div className="col-md-6 mb-4">

                        <div className="profile-info-box">

                            <FaPhone className="profile-box-icon" />

                            <h6>

                                Phone Number

                            </h6>

                            <p>

                                {faculty.phone}

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}