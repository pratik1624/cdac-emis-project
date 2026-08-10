import {
    FaGraduationCap,
    FaIdBadge,
    FaBuilding,
    FaLayerGroup
} from "react-icons/fa";

export default function AcademicDetails({ student }) {

    return (

        <div className="details-card">

            <div className="details-card-body">

                <h5 className="details-card-title">

                    <FaGraduationCap className="details-title-icon" />

                    Academic Information

                </h5>

                <div className="details-list">

                    <div className="details-row">

                        <span className="details-label">

                            <FaIdBadge className="me-2" />

                            Roll Number

                        </span>

                        <strong>

                            {student.rollNumber}

                        </strong>

                    </div>

                    <div className="details-row">

                        <span className="details-label">

                            <FaBuilding className="me-2" />

                            Department

                        </span>

                        <strong>

                            {student.department}

                        </strong>

                    </div>

                    <div className="details-row">

                        <span className="details-label">

                            <FaLayerGroup className="me-2" />

                            Semester

                        </span>

                        <strong>

                            Semester {student.semester}

                        </strong>

                    </div>

                </div>

            </div>

        </div>

    );

}