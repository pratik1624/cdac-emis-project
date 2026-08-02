import { FaUserCircle } from "react-icons/fa";

export default function FacultyInfoCard() {

    return (

        <div className="card shadow-sm border-0 rounded-4 h-100">

            <div className="card-body text-center">

                <FaUserCircle
                    size={90}
                    className="text-primary mb-3"
                />

                <h5 className="fw-bold mb-1">
                    Dr. Faculty Name
                </h5>

                <p className="text-muted mb-3">
                    Assistant Professor
                </p>

                <hr />

                <div className="text-start">

                    <p className="mb-2">

                        <strong>Employee ID</strong>

                        <br />

                        EMP001

                    </p>

                    <p className="mb-2">

                        <strong>Department</strong>

                        <br />

                        Computer Engineering

                    </p>

                    <p className="mb-2">

                        <strong>Email</strong>

                        <br />

                        faculty@college.com

                    </p>

                </div>

            </div>

        </div>

    );

}