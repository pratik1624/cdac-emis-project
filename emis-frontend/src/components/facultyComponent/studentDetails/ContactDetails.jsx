import {
    FaEnvelope,
    FaPhone
} from "react-icons/fa";

export default function ContactDetails({ student }) {

    return (

        <div className="details-card">

            <div className="details-card-body">

                <h5 className="details-card-title">

                    <FaEnvelope className="details-title-icon" />

                    Contact Information

                </h5>

                <div className="details-list">

                    <div className="details-row">

                        <span className="details-label">

                            <FaEnvelope className="me-2" />

                            Email

                        </span>

                        <strong>

                            {student.email}

                        </strong>

                    </div>

                    <div className="details-row">

                        <span className="details-label">

                            <FaPhone className="me-2" />

                            Phone

                        </span>

                        <strong>

                            {student.phone || "-"}

                        </strong>

                    </div>

                </div>

            </div>

        </div>

    );

}