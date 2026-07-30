import {
  FaCheckCircle,
  FaTimesCircle,
  FaCalendarAlt,
  FaChartPie,
} from "react-icons/fa";

export default function AttendanceSummary() {
  return (
    <div className="row mb-4">

      <div className="col-lg-3 col-md-6 mb-3">
        <div className="card app-card attendance-summary-card">
          <FaChartPie className="attendance-icon app-icon" />
          <h6>Overall Attendance</h6>
          <h2>92%</h2>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 mb-3">
        <div className="card app-card attendance-summary-card">
          <FaCheckCircle className="attendance-icon app-icon" />
          <h6>Present</h6>
          <h2>219</h2>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 mb-3">
        <div className="card app-card attendance-summary-card">
          <FaTimesCircle className="attendance-icon text-danger" />
          <h6>Absent</h6>
          <h2>21</h2>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 mb-3">
        <div className="card app-card attendance-summary-card">
          <FaCalendarAlt className="attendance-icon text-primary" />
          <h6>Total Classes</h6>
          <h2>240</h2>
        </div>
      </div>

    </div>
  );
}