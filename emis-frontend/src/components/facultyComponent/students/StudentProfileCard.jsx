import { FaUserGraduate } from "react-icons/fa";

export default function StudentProfileCard({ student }) {

    return (

        <div className="card shadow-sm border-0 rounded-4">

            <div className="card-body">

                <h5 className="fw-bold mb-4">

                    <FaUserGraduate className="me-2 text-primary" />

                    Student Profile

                </h5>

                <div className="row">

                    <div className="col-md-6 mb-3">

                        <strong>Name</strong>

                        <p>

                            {student.firstName} {student.lastName}

                        </p>

                    </div>

                    <div className="col-md-6 mb-3">

                        <strong>Roll Number</strong>

                        <p>

                            {student.rollNumber}

                        </p>

                    </div>

                    <div className="col-md-6 mb-3">

                        <strong>Department</strong>

                        <p>

                            {student.department}

                        </p>

                    </div>

                    <div className="col-md-6 mb-3">

                        <strong>Semester</strong>

                        <p>

                            {student.semester}

                        </p>

                    </div>

                    <div className="col-md-6 mb-3">

                        <strong>Email</strong>

                        <p>

                            {student.email}

                        </p>

                    </div>

                    <div className="col-md-6 mb-3">

                        <strong>Gender</strong>

                        <p>

                            {student.gender}

                        </p>

                    </div>

                </div>

            </div>

        </div>

    );

}