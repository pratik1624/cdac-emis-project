import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  FaSearch,
  FaPlus,
  FaEdit,
  FaTrash,
  FaEye,
  FaMoneyBillWave,
} from "react-icons/fa";

import {
  getAllFees,
  addFee,
  updateFee,
  deleteFee,
} from "../../api/accountantFeeService";

import "../../styles/accountantStyles/accountantFees.css";

export default function AccountantFees() {
  // ==========================================
  // Navigation
  // ==========================================

  const navigate = useNavigate();

  // ==========================================
  // State
  // ==========================================

  const [fees, setFees] = useState([]);

  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  // Add modal
  const [showAddModal, setShowAddModal] = useState(false);

  // Edit modal
  const [showEditModal, setShowEditModal] = useState(false);

  const [selectedFee, setSelectedFee] = useState(null);

  // Form
  const [formData, setFormData] = useState({
    studentId: "",
    totalFee: "",
    paidAmount: "",
    paymentDate: "",
    remarks: "",
  });

  // ==========================================
  // Load Fees
  // ==========================================

  const loadFees = async () => {
    try {
      setLoading(true);

      setError("");

      const data = await getAllFees();

      setFees(data);
    } catch (err) {
      console.error("Error loading fees:", err);

      setError("Unable to load fee records.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadFees();
  }, []);

  // ==========================================
  // Search
  // ==========================================

  const filteredFees = fees.filter((fee) => {
    const searchText = search.toLowerCase();

    return (
      fee.studentName?.toLowerCase().includes(searchText) ||
      fee.rollNumber?.toLowerCase().includes(searchText) ||
      fee.department?.toLowerCase().includes(searchText)
    );
  });

  // ==========================================
  // Form Change
  // ==========================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  // ==========================================
  // Open Add Modal
  // ==========================================

  const openAddModal = () => {
    setFormData({
      studentId: "",
      totalFee: "",
      paidAmount: "",
      paymentDate: "",
      remarks: "",
    });

    setShowAddModal(true);
  };

  // ==========================================
  // Add Fee
  // ==========================================

  const handleAddFee = async (e) => {
    e.preventDefault();

    try {
      await addFee({
        studentId: Number(formData.studentId),

        totalFee: Number(formData.totalFee),

        paidAmount: Number(formData.paidAmount),

        paymentDate: formData.paymentDate || null,

        remarks: formData.remarks,
      });

      setShowAddModal(false);

      await loadFees();
    } catch (err) {
      console.error("Error adding fee:", err);

      alert(err.response?.data?.message || "Unable to add fee record.");
    }
  };

  // ==========================================
  // Open Edit Modal
  // ==========================================

  const openEditModal = (fee) => {
    setSelectedFee(fee);

    setFormData({
      studentId: fee.studentId,

      totalFee: fee.totalFee,

      paidAmount: fee.paidAmount,

      paymentDate: fee.paymentDate || "",

      remarks: fee.remarks || "",
    });

    setShowEditModal(true);
  };

  // ==========================================
  // Update Fee
  // ==========================================

  const handleUpdateFee = async (e) => {
    e.preventDefault();

    try {
      await updateFee(selectedFee.feeId, {
        totalFee: Number(formData.totalFee),

        paidAmount: Number(formData.paidAmount),

        paymentDate: formData.paymentDate || null,

        remarks: formData.remarks,
      });

      setShowEditModal(false);

      setSelectedFee(null);

      await loadFees();
    } catch (err) {
      console.error("Error updating fee:", err);

      alert(err.response?.data?.message || "Unable to update fee record.");
    }
  };

  // ==========================================
  // Delete Fee
  // ==========================================

  const handleDeleteFee = async (feeId) => {
    const confirmed = window.confirm(
      "Are you sure you want to delete this fee record?",
    );

    if (!confirmed) {
      return;
    }

    try {
      await deleteFee(feeId);

      await loadFees();
    } catch (err) {
      console.error("Error deleting fee:", err);

      alert(err.response?.data?.message || "Unable to delete fee record.");
    }
  };

  // ==========================================
  // View Fee Details
  // ==========================================

  const handleViewFee = (studentId) => {
    navigate(`/accountant/fees/student/${studentId}`);
  };

  // ==========================================
  // Status Badge
  // ==========================================

  const getStatusClass = (status) => {
    switch (status) {
      case "PAID":
        return "paid";

      case "PARTIALLY_PAID":
        return "partial";

      case "PENDING":
        return "pending";

      default:
        return "";
    }
  };

  // ==========================================
  // UI
  // ==========================================

  return (
    <div className="accountant-fees">
      {/* ======================================
          HEADER
      ====================================== */}

      <div className="accountant-fees-header">
        <div>
          <h1 className="page-title">Fees</h1>

          <p className="page-subtitle">
            Manage student fee records and payments.
          </p>
        </div>

        <button
          className="btn btn-success accountant-add-btn"
          onClick={openAddModal}
        >
          <FaPlus className="me-2" />
          Add Fee
        </button>
      </div>

      {/* ======================================
          SEARCH
      ====================================== */}

      <div className="accountant-fees-search">
        <FaSearch />

        <input
          type="text"
          placeholder="Search student, roll number or department..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* ======================================
          ERROR
      ====================================== */}

      {error && <div className="alert alert-danger">{error}</div>}

      {/* ======================================
          TABLE
      ====================================== */}

      <div className="accountant-fees-card">
        <div className="table-responsive">
          <table className="table accountant-fees-table">
            <thead>
              <tr>
                <th>Student</th>

                <th>Roll No.</th>

                <th>Department</th>

                <th>Semester</th>

                <th>Total Fee</th>

                <th>Paid</th>

                <th>Pending</th>

                <th>Status</th>

                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="9" className="text-center py-5">
                    Loading fee records...
                  </td>
                </tr>
              ) : filteredFees.length === 0 ? (
                <tr>
                  <td colSpan="9" className="text-center py-5">
                    <FaMoneyBillWave className="empty-icon" />

                    <p className="mb-0 mt-2">No fee records found.</p>
                  </td>
                </tr>
              ) : (
                filteredFees.map((fee) => (
                  <tr key={fee.feeId}>
                    {/* Student */}

                    <td>
                      <span className="fee-student-name">
                        {fee.studentName}
                      </span>
                    </td>

                    {/* Roll Number */}

                    <td>{fee.rollNumber}</td>

                    {/* Department */}

                    <td>{fee.department}</td>

                    {/* Semester */}

                    <td>{fee.semester}</td>

                    {/* Total */}

                    <td>₹{fee.totalFee}</td>

                    {/* Paid */}

                    <td>₹{fee.paidAmount}</td>

                    {/* Pending */}

                    <td>₹{fee.pendingAmount}</td>

                    {/* Status */}

                    <td>
                      <span
                        className={`fee-status ${getStatusClass(
                          fee.paymentStatus,
                        )}`}
                      >
                        {fee.paymentStatus === "PARTIALLY_PAID"
                          ? "PARTIAL"
                          : fee.paymentStatus}
                      </span>
                    </td>

                    {/* Actions */}

                    <td>
                      <div className="fee-actions">
                        {/* View */}

                        <button
                          className="fee-action-btn view"
                          title="View"
                          onClick={() => handleViewFee(fee.studentId)}
                        >
                          <FaEye />
                        </button>

                        {/* Edit */}

                        <button
                          className="fee-action-btn edit"
                          title="Edit"
                          onClick={() => openEditModal(fee)}
                        >
                          <FaEdit />
                        </button>

                        {/* Delete */}

                        <button
                          className="fee-action-btn delete"
                          title="Delete"
                          onClick={() => handleDeleteFee(fee.feeId)}
                        >
                          <FaTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* ======================================
          ADD FEE MODAL
      ====================================== */}

      {showAddModal && (
        <div className="accountant-modal-overlay">
          <div className="accountant-modal">
            <div className="accountant-modal-header">
              <h3>Add Fee</h3>

              <button onClick={() => setShowAddModal(false)}>×</button>
            </div>

            <form onSubmit={handleAddFee} className="accountant-modal-form">
              <div className="mb-3">
                <label>Student ID</label>

                <input
                  type="number"
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label>Total Fee</label>

                <input
                  type="number"
                  name="totalFee"
                  value={formData.totalFee}
                  onChange={handleChange}
                  min="0"
                  required
                />
              </div>

              <div className="mb-3">
                <label>Paid Amount</label>

                <input
                  type="number"
                  name="paidAmount"
                  value={formData.paidAmount}
                  onChange={handleChange}
                  min="0"
                  required
                />
              </div>

              <div className="mb-3">
                <label>Payment Date</label>

                <input
                  type="date"
                  name="paymentDate"
                  value={formData.paymentDate}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label>Remarks</label>

                <textarea
                  name="remarks"
                  value={formData.remarks}
                  onChange={handleChange}
                  rows="3"
                />
              </div>

              <div className="accountant-modal-actions">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowAddModal(false)}
                >
                  Cancel
                </button>

                <button type="submit" className="btn btn-success">
                  Add Fee
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ======================================
          EDIT FEE MODAL
      ====================================== */}

      {showEditModal && selectedFee && (
        <div className="accountant-modal-overlay">
          <div className="accountant-modal">
            <div className="accountant-modal-header">
              <h3>Edit Fee</h3>

              <button onClick={() => setShowEditModal(false)}>×</button>
            </div>

            <form onSubmit={handleUpdateFee} className="accountant-modal-form">
              <div className="accountant-edit-student">
                <strong>{selectedFee.studentName}</strong>

                <span>{selectedFee.rollNumber}</span>
              </div>

              <div className="mb-3">
                <label>Total Fee</label>

                <input
                  type="number"
                  name="totalFee"
                  value={formData.totalFee}
                  onChange={handleChange}
                  min="0"
                  required
                />
              </div>

              <div className="mb-3">
                <label>Paid Amount</label>

                <input
                  type="number"
                  name="paidAmount"
                  value={formData.paidAmount}
                  onChange={handleChange}
                  min="0"
                  required
                />
              </div>

              <div className="mb-3">
                <label>Payment Date</label>

                <input
                  type="date"
                  name="paymentDate"
                  value={formData.paymentDate}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-3">
                <label>Remarks</label>

                <textarea
                  name="remarks"
                  value={formData.remarks}
                  onChange={handleChange}
                  rows="3"
                />
              </div>

              <div className="accountant-modal-actions">
                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={() => setShowEditModal(false)}
                >
                  Cancel
                </button>

                <button type="submit" className="btn btn-success">
                  Update Fee
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
