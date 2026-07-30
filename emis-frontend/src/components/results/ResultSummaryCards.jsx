import {
  FaPercentage,
  FaCheckCircle,
  FaBookOpen,
  FaAward,
} from "react-icons/fa";

export default function ResultSummaryCards({
  percentage,
  passedSubjects,
  totalSubjects,
  totalObtained,
  totalMarks,
  highestGrade,
}) {
  return (
    <div className="row mb-4">

      <div className="col-lg-3 col-md-6 mb-3">
        <div className="dashboard-card">
          <div className="dashboard-icon">
            <FaPercentage />
          </div>

          <h2 className="dashboard-value">
            {percentage}%
          </h2>

          <h6 className="dashboard-title">
            Percentage
          </h6>

          <small className="dashboard-subtitle">
            Overall Performance
          </small>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 mb-3">
        <div className="dashboard-card">
          <div className="dashboard-icon">
            <FaCheckCircle />
          </div>

          <h2 className="dashboard-value">
            {passedSubjects}/{totalSubjects}
          </h2>

          <h6 className="dashboard-title">
            Subjects Passed
          </h6>

          <small className="dashboard-subtitle">
            Current Semester
          </small>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 mb-3">
        <div className="dashboard-card">
          <div className="dashboard-icon">
            <FaBookOpen />
          </div>

          <h2 className="dashboard-value">
            {totalObtained}/{totalMarks}
          </h2>

          <h6 className="dashboard-title">
            Total Marks
          </h6>

          <small className="dashboard-subtitle">
            Marks Obtained
          </small>
        </div>
      </div>

      <div className="col-lg-3 col-md-6 mb-3">
        <div className="dashboard-card">
          <div className="dashboard-icon">
            <FaAward />
          </div>

          <h2 className="dashboard-value">
            {highestGrade}
          </h2>

          <h6 className="dashboard-title">
            Highest Grade
          </h6>

          <small className="dashboard-subtitle">
            Best Performance
          </small>
        </div>
      </div>

    </div>
  );
}