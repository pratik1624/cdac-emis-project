import { FaUser } from "react-icons/fa";

export default function PersonalInfoCard({ student }) {

    return (

        <div className="card shadow-sm border-0 rounded-4 h-100">

            <div className="card-body">

                <h5 className="fw-bold mb-4">

                    <FaUser className="text-success me-2" />

                    Personal Information

                </h5>

                <div className="row mb-3">

                    <div className="col-5 text-muted">
                        First Name
                    </div>

                    <div className="col-7 fw-semibold">
                        {student.firstName}
                    </div>

                </div>

                <div className="row mb-3">

                    <div className="col-5 text-muted">
                        Last Name
                    </div>

                    <div className="col-7 fw-semibold">
                        {student.lastName}
                    </div>

                </div>

                <div className="row mb-3">

                    <div className="col-5 text-muted">
                        Gender
                    </div>

                    <div className="col-7 fw-semibold">
                        {student.gender || "-"}
                    </div>

                </div>

                <div className="row">

                    <div className="col-5 text-muted">
                        Date of Birth
                    </div>

                    <div className="col-7 fw-semibold">
                        {student.dob || "-"}
                    </div>

                </div>

            </div>

        </div>

    );

}