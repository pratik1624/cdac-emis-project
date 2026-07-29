import { FaGraduationCap } from "react-icons/fa";

export default function AcademicInfoCard({ student }) {

    return (

        <div className="card profile-card h-100">

            <div className="card-body">

                <h5 className="fw-bold mb-4">

                    <FaGraduationCap className="profile-icon me-2" />

                    Academic Information

                </h5>

                <div className="row mb-3">

                    <div className="col-5 profile-label">
                        Roll Number
                    </div>

                    <div className="col-7 profile-value">
                        {student.rollNumber || "-"}
                    </div>

                </div>

                <div className="row mb-3">

                    <div className="col-5 profile-label">
                        Department
                    </div>

                    <div className="col-7 profile-value">
                        {student.department}
                    </div>

                </div>

                <div className="row">

                    <div className="col-5 profile-label">
                        Semester
                    </div>

                    <div className="col-7 profile-value">
                        {student.semester}
                    </div>

                </div>

            </div>

        </div>

    );

}