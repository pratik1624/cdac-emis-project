import { Link } from "react-router-dom";

import {
  FaUserGraduate,
  FaChalkboardTeacher,
  FaBuilding,
  FaBullhorn,
} from "react-icons/fa";

export default function QuickActions() {
  return (
    <div className="app-card quick-actions-card">
      <h4 className="card-title">Quick Actions</h4>

      <div className="quick-actions-grid">
        <Link to="/admin/students" className="btn btn-success quick-btn">
          <FaUserGraduate className="me-2" />
          Manage Students
        </Link>

        <Link to="/admin/faculties" className="btn btn-success quick-btn">
          <FaChalkboardTeacher className="me-2" />
          Manage Faculty
        </Link>

        <Link to="/admin/departments" className="btn btn-success quick-btn">
          <FaBuilding className="me-2" />
          Manage Departments
        </Link>

        <Link to="/admin/notices" className="btn btn-success quick-btn">
          <FaBullhorn className="me-2" />
          Manage Notices
        </Link>
      </div>
    </div>
  );
}
