import { useEffect, useState } from "react";

import {
  FaUsers,
  FaMoneyBillWave,
  FaClock,
  FaExclamationCircle,
} from "react-icons/fa";

import api from "../../api/axios";

import "../../styles/accountantStyles/accountantDashboard.css";

export default function AccountantDashboard() {
  const [dashboardData, setDashboardData] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  // ==========================================
  // LOAD DASHBOARD DATA
  // ==========================================

  useEffect(() => {
    const loadDashboard = async () => {
      try {
        setLoading(true);

        setError("");

        const response = await api.get("/accountant/dashboard");

        console.log("ACCOUNTANT DASHBOARD:", response.data);

        setDashboardData(response.data);
      } catch (err) {
        console.error("Error loading accountant dashboard:", err);

        setError("Unable to load dashboard data.");
      } finally {
        setLoading(false);
      }
    };

    loadDashboard();
  }, []);

  // ==========================================
  // LOADING
  // ==========================================

  if (loading) {
    return (
      <div className="accountant-dashboard">
        <div className="text-center py-5">Loading dashboard...</div>
      </div>
    );
  }

  // ==========================================
  // ERROR
  // ==========================================

  if (error) {
    return (
      <div className="accountant-dashboard">
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  // ==========================================
  // FORMAT CURRENCY
  // ==========================================

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0,
    }).format(amount || 0);
  };

  // ==========================================
  // DASHBOARD STATS
  // ==========================================

  const dashboardStats = [
    {
      title: "Total Students",

      value: dashboardData?.totalStudents ?? 0,

      icon: <FaUsers />,
    },

    {
      title: "Total Collected",

      value: formatCurrency(dashboardData?.totalCollected),

      icon: <FaMoneyBillWave />,
    },

    {
      title: "Total Pending",

      value: formatCurrency(dashboardData?.totalPending),

      icon: <FaClock />,
    },

    {
      title: "Students with Dues",

      value: dashboardData?.studentsWithDues ?? 0,

      icon: <FaExclamationCircle />,
    },
  ];

  // ==========================================
  // RECENT PAYMENTS
  // ==========================================

  const recentPayments = dashboardData?.recentPayments || [];

  // ==========================================
  // FORMAT DATE
  // ==========================================

  const formatDate = (date) => {
    if (!date) {
      return "-";
    }

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // ==========================================
  // UI
  // ==========================================

  return (
    <div className="accountant-dashboard">
      {/* =========================
          PAGE HEADER
      ========================== */}

      <div className="dashboard-header">
        <div>
          <h1 className="page-title">Accountant Dashboard</h1>

          <p className="page-subtitle">
            Overview of student fee collection and pending payments.
          </p>
        </div>
      </div>

      {/* =========================
          SUMMARY CARDS
      ========================== */}

      <div className="row g-4 mb-4">
        {dashboardStats.map((stat) => (
          <div className="col-xl-3 col-md-6" key={stat.title}>
            <div className="accountant-stat-card">
              <div className="stat-icon">{stat.icon}</div>

              <div className="stat-content">
                <p>{stat.title}</p>

                <h3>{stat.value}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* =========================
          RECENT PAYMENTS
      ========================== */}

      <div className="accountant-section-card">
        <div className="section-header">
          <div>
            <h2>Recent Fee Payments</h2>

            <p>Latest payments received from students.</p>
          </div>
        </div>

        <div className="table-responsive">
          <table className="table accountant-payment-table mb-0">
            <thead>
              <tr>
                <th>Student</th>

                <th>Amount</th>

                <th>Date</th>

                <th>Status</th>
              </tr>
            </thead>

            <tbody>
              {recentPayments.length === 0 ? (
                <tr>
                  <td colSpan="4" className="text-center py-4">
                    No recent payments found.
                  </td>
                </tr>
              ) : (
                recentPayments.map((payment) => (
                  <tr key={payment.studentId}>
                    <td className="student-name">{payment.studentName}</td>

                    <td>{formatCurrency(payment.amount)}</td>

                    <td>{formatDate(payment.date)}</td>

                    <td>
                      <span
                        className={
                          payment.status === "PAID"
                            ? "payment-status paid"
                            : "payment-status partial"
                        }
                      >
                        {payment.status}
                      </span>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
