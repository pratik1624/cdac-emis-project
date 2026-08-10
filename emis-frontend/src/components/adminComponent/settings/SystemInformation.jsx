import {
  FaServer,
  FaDatabase,
  FaUserShield,
  FaClock,
  FaCodeBranch,
} from "react-icons/fa";

export default function SystemInformation() {
  return (
    <div className="settings-card">
      <h4>🛡 System Information</h4>

      <div className="system-info">
        <span>
          <FaServer className="me-2 text-success" />
          System
        </span>

        <strong>EMIS Portal</strong>
      </div>

      <div className="system-info">
        <span>
          <FaCodeBranch className="me-2 text-success" />
          Version
        </span>

        <strong>v1.0.0</strong>
      </div>

      <div className="system-info">
        <span>
          <FaDatabase className="me-2 text-success" />
          Database
        </span>

        <strong className="text-success">Connected</strong>
      </div>

      <div className="system-info">
        <span>
          <FaUserShield className="me-2 text-success" />
          Logged In As
        </span>

        <strong>Administrator</strong>
      </div>

      <div className="system-info">
        <span>
          <FaClock className="me-2 text-success" />
          Last Login
        </span>

        <strong>Today</strong>
      </div>
    </div>
  );
}
