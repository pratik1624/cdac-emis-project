import { FaGraduationCap } from "react-icons/fa";

export default function AcademicInfoCard({ student }) {

    return (

        <div className="card shadow-sm border-0 rounded-4 h-100">

            <div className="card-body">

                <h5 className="fw-bold mb-4">

                    <FaGraduationCap className="text-success me-2" />

                    Academic Information

                </h5>

                <div className="row mb-3">

                    <div className="col-5 text-muted">
                        Roll Number
                    </div>

                    <div className="col-7 fw-semibold">
                        {student.rollNumber || "-"}
                    </div>

                </div>

                <div className="row mb-3">

                    <div className="col-5 text-muted">
                        Department
                    </div>

                    <div className="col-7 fw-semibold">
                        {student.department}
                    </div>

                </div>

                <div className="row">

                    <div className="col-5 text-muted">
                        Semester
                    </div>

                    <div className="col-7 fw-semibold">
                        {student.semester}
                    </div>

                </div>

            </div>

        </div>

    );

}