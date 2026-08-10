import {
    FaUserCircle,
    FaEnvelope,
    FaPhone,
    FaGraduationCap,
    FaIdBadge
} from "react-icons/fa";

export default function StudentHeader({ student }) {

    return (

        <div className="student-header-card">

            <div className="student-header-body">

                <div className="row align-items-center">

                    <div className="col-lg-2 text-center">

                        <FaUserCircle
                            size={110}
                            className="student-avatar"
                        />

                    </div>

                    <div className="col-lg-10">

                        <h2 className="student-name">

                            {student.firstName} {student.lastName}

                        </h2>

                        <p className="student-department">

                            {student.department}

                        </p>

                        <div className="student-badges">

                            <span className="badge bg-success">

                                Semester {student.semester}

                            </span>

                        </div>

                        <div className="row mt-4">

                            <div className="col-md-6 mb-3">

                                <div className="student-contact">

                                    <FaIdBadge className="student-contact-icon" />

                                    <span>

                                        {student.rollNumber}

                                    </span>

                                </div>

                            </div>

                            <div className="col-md-6 mb-3">

                                <div className="student-contact">

                                    <FaGraduationCap className="student-contact-icon" />

                                    <span>

                                        {student.department}

                                    </span>

                                </div>

                            </div>

                            <div className="col-md-6">

                                <div className="student-contact">

                                    <FaEnvelope className="student-contact-icon" />

                                    <span>

                                        {student.email}

                                    </span>

                                </div>

                            </div>

                            <div className="col-md-6">

                                <div className="student-contact">

                                    <FaPhone className="student-contact-icon" />

                                    <span>

                                        {student.phone}

                                    </span>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    );

}