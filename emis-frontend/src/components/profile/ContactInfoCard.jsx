import {
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt
} from "react-icons/fa";

export default function ContactInfoCard({ student }) {

    return (

        <div className="card shadow-sm border-0 rounded-4">

            <div className="card-body">

                <h5 className="fw-bold mb-4">

                    <FaEnvelope className="text-success me-2" />

                    Contact Information

                </h5>

                <div className="row">

                    <div className="col-md-4 mb-3">

                        <div className="border rounded-3 p-3 h-100">

                            <FaEnvelope
                                className="text-success mb-2"
                            />

                            <div className="text-muted small">
                                Email
                            </div>

                            <div className="fw-semibold">
                                {student.email}
                            </div>

                        </div>

                    </div>

                    <div className="col-md-4 mb-3">

                        <div className="border rounded-3 p-3 h-100">

                            <FaPhone
                                className="text-success mb-2"
                            />

                            <div className="text-muted small">
                                Phone
                            </div>

                            <div className="fw-semibold">
                                {student.phone}
                            </div>

                        </div>

                    </div>

                    <div className="col-md-4 mb-3">

                        <div className="border rounded-3 p-3 h-100">

                            <FaMapMarkerAlt
                                className="text-success mb-2"
                            />

                            <div className="text-muted small">
                                Address
                            </div>

                            <div className="fw-semibold">
                                {student.address}
                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}