import { FaUserCircle, FaEdit } from "react-icons/fa";

export default function ProfileHeader({ student, onEdit }) {
  return (
    <div className="card profile-header shadow-sm mb-4">
      <div className="card-body p-4">
        <div className="row align-items-center">
          {/* Avatar */}

          <div className="col-md-2 text-center">
            <FaUserCircle size={130} className="profile-icon mb-3" />

            <button className="btn btn-outline-success btn-sm w-100" disabled>
              Upload Photo
            </button>
          </div>

          {/* Student Details */}

          <div className="col-md-7">
            <h2 className="fw-bold mb-1">
              {student.firstName} {student.lastName}
            </h2>

            <p className="text-muted mb-2">{student.department}</p>

            <span className="badge bg-success fs-6">Student</span>

            <span className="badge bg-primary fs-6 ms-2">
              Semester {student.semester}
            </span>

            <div className="mt-3">
              <p className="mb-1">
                <strong>Email :</strong> {student.email}
              </p>

              <p className="mb-1">
                <strong>Phone :</strong> {student.phone}
              </p>
            </div>
          </div>

          {/* Edit */}

          <div className="col-md-3 text-end">
            <button className="btn btn-success" onClick={onEdit}>
              Edit Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
