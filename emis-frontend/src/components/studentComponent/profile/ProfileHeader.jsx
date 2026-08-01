import {
  FaUserCircle,
  FaEdit,
  FaEnvelope,
  FaPhone
} from "react-icons/fa";

export default function ProfileHeader({ student, onEdit }) {
  return (
    <div className="card profile-header shadow-sm mb-4">

      <div className="card-body p-4">

        <div className="row align-items-center">

          {/* Avatar */}

          <div className="col-lg-2 text-center">

            <FaUserCircle
              size={130}
              className="profile-icon mb-3"
            />

            <button
              className="btn btn-outline-success btn-sm w-100"
              disabled
            >
              Upload Photo
            </button>

          </div>

          {/* Student Details */}

          <div className="col-lg-7">

            <h2 className="fw-bold mb-2">

              {student.firstName} {student.lastName}

            </h2>

            <p className="text-secondary fs-5 mb-3">

              {student.department}

            </p>

            <div className="mb-3">

              <span className="badge bg-success me-2">

                Student

              </span>

              <span className="badge bg-primary">

                Semester {student.semester}

              </span>

            </div>

            <div className="row">

              <div className="col-md-6">

                <p className="mb-2">

                  <FaEnvelope className="text-success me-2" />

                  {student.email}

                </p>

              </div>

              <div className="col-md-6">

                <p className="mb-2">

                  <FaPhone className="text-success me-2" />

                  {student.phone}

                </p>

              </div>

            </div>

          </div>

          {/* Edit Button */}

          <div className="col-lg-3 text-end">

            <button
              className="btn btn-success px-4"
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