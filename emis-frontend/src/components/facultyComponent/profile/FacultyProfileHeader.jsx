import { FaUserCircle, FaEdit } from "react-icons/fa";

export default function FacultyProfileHeader({ faculty, onEdit }) {

    return (

        <div className="card profile-card mb-4">

            <div className="card-body p-4">

                <div className="row align-items-center">

                    {/* Photo */}

                    <div className="col-lg-2 text-center">

                        <FaUserCircle
                            size={120}
                            className="text-primary mb-3"
                        />

                        <button
                            className="btn btn-outline-primary btn-sm w-100"
                            disabled
                        >
                            Upload Photo
                        </button>

                    </div>

                    {/* Faculty Details */}

                    <div className="col-lg-7">

                        <h2 className="fw-bold mb-2">

                            {faculty.firstName} {faculty.lastName}

                        </h2>

                        <p className="text-muted mb-2">

                            {faculty.designation}

                        </p>

                        <span className="badge bg-primary me-2">

                            {faculty.department}

                        </span>

                        <span className="badge bg-success">

                            {faculty.role}

                        </span>

                        <div className="mt-3">

                            <p className="mb-1">

                                <strong>Employee Code :</strong>

                                {" "}

                                {faculty.employeeCode}

                            </p>

                            <p className="mb-0">

                                <strong>Email :</strong>

                                {" "}

                                {faculty.email}

                            </p>

                        </div>

                    </div>

                    {/* Edit */}

                    <div className="col-lg-3 text-end">

                        <button
                            className="btn btn-primary"
                            onClick={onEdit}
                        >

                            <FaEdit className="me-2" />

                            Edit Profile

                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

}