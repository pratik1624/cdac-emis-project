import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  FaArrowLeft,
  FaUser,
  FaIdCard,
  FaBuilding,
  FaGraduationCap,
  FaMoneyBillWave,
  FaCalendarAlt,
  FaStickyNote,
  FaEdit,
  FaTrash,
} from "react-icons/fa";

import { getFeeByStudent, deleteFee } from "../../api/accountantFeeService";

import "../../styles/accountantStyles/studentFeeDetails.css";

export default function StudentFeeDetails() {
  const { studentId } = useParams();
  const navigate = useNavigate();

  const [fee, setFee] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // =========================
  // Fetch Fee Details
  // =========================

  useEffect(() => {
    const fetchFeeDetails = async () => {
      try {
        setLoading(true);
        setError("");

        const data = await getFeeByStudent(studentId);

        setFee(data);
      } catch (err) {
        console.error("Failed to fetch fee details:", err);

        setError(
          err.response?.data?.message || "Unable to load student fee details.",
        );
      } finally {
        setLoading(false);
      }
    };

    fetchFeeDetails();
  }, [studentId]);

  // =========================
  // Delete Fee
  // =========================

  const handleDelete = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this fee record?",
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteFee(fee.feeId);

      alert("Fee record deleted successfully.");

      navigate("/accountant/fees");
    } catch (err) {
      console.error("Failed to delete fee:", err);

      alert(err.response?.data?.message || "Failed to delete fee record.");
    }
  };

  // =========================
  // Loading
  // =========================

  if (loading) {
    return (
      <div className="student-fee-details-page">
        <div className="student-fee-loading">Loading fee details...</div>
      </div>
    );
  }

  // =========================
  // Error
  // =========================

  if (error) {
    return (
      <div className="student-fee-details-page">
        <button
          className="student-fee-back-btn"
          onClick={() => navigate("/accountant/fees")}
        >
          <FaArrowLeft />
          Back to Fees
        </button>

        <div className="student-fee-error">{error}</div>
      </div>
    );
  }

  if (!fee) {
    return null;
  }

  // =========================
  // Status Class
  // =========================

  const statusClass = fee.paymentStatus?.toLowerCase().replace("_", "-");

  return (
    <div className="student-fee-details-page">
      {/* =========================
          Header
      ========================= */}

      <div className="student-fee-header">
        <div>
          <button
            className="student-fee-back-btn"
            onClick={() => navigate("/accountant/fees")}
          >
            <FaArrowLeft />
            Back to Fees
          </button>

          <h2 className="student-fee-title">Student Fee Details</h2>

          <p className="student-fee-subtitle">
            View and manage fee information
          </p>
        </div>

        <div className="student-fee-actions">
          <button
            className="student-fee-edit-btn"
            onClick={() => navigate(`/accountant/fees?edit=${fee.feeId}`)}
          >
            <FaEdit />
            Update Fee
          </button>

          <button className="student-fee-delete-btn" onClick={handleDelete}>
            <FaTrash />
            Delete
          </button>
        </div>
      </div>

      {/* =========================
          Student Information
      ========================= */}

      <div className="student-fee-card">
        <h3 className="student-fee-section-title">
          <FaUser />
          Student Information
        </h3>

        <div className="student-info-grid">
          <div className="student-info-item">
            <span className="student-info-label">Name</span>

            <span className="student-info-value student-name">
              {fee.studentName}
            </span>
          </div>

          <div className="student-info-item">
            <span className="student-info-label">Roll Number</span>

            <span className="student-info-value">
              <FaIdCard />
              {fee.rollNumber || "N/A"}
            </span>
          </div>

          <div className="student-info-item">
            <span className="student-info-label">Department</span>

            <span className="student-info-value">
              <FaBuilding />
              {fee.department}
            </span>
          </div>

          <div className="student-info-item">
            <span className="student-info-label">Semester</span>

            <span className="student-info-value">
              <FaGraduationCap />
              Semester {fee.semester}
            </span>
          </div>
        </div>
      </div>

      {/* =========================
          Fee Summary
      ========================= */}

      <div className="student-fee-card">
        <h3 className="student-fee-section-title">
          <FaMoneyBillWave />
          Fee Summary
        </h3>

        <div className="fee-summary-grid">
          <div className="fee-summary-item">
            <span className="fee-summary-label">Total Fee</span>

            <span className="fee-summary-value">
              ₹{Number(fee.totalFee).toLocaleString("en-IN")}
            </span>
          </div>

          <div className="fee-summary-item">
            <span className="fee-summary-label">Paid Amount</span>

            <span className="fee-summary-value paid">
              ₹{Number(fee.paidAmount).toLocaleString("en-IN")}
            </span>
          </div>

          <div className="fee-summary-item">
            <span className="fee-summary-label">Pending Amount</span>

            <span className="fee-summary-value pending">
              ₹{Number(fee.pendingAmount).toLocaleString("en-IN")}
            </span>
          </div>

          <div className="fee-summary-item">
            <span className="fee-summary-label">Payment Status</span>

            <span className={`fee-status ${statusClass}`}>
              {fee.paymentStatus}
            </span>
          </div>
        </div>
      </div>

      {/* =========================
          Payment Information
      ========================= */}

      <div className="student-fee-card">
        <h3 className="student-fee-section-title">
          <FaCalendarAlt />
          Payment Information
        </h3>

        <div className="payment-info-grid">
          <div className="student-info-item">
            <span className="student-info-label">Payment Date</span>

            <span className="student-info-value">
              {fee.paymentDate || "N/A"}
            </span>
          </div>

          <div className="student-info-item payment-remarks">
            <span className="student-info-label">
              <FaStickyNote />
              Remarks
            </span>

            <span className="student-info-value">
              {fee.remarks || "No remarks"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
