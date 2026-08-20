import { useEffect, useState } from "react";
import { FaUser, FaEnvelope, FaBriefcase, FaPhone } from "react-icons/fa";

import api from "../../api/axios";

import "../../styles/accountantStyles/accountantProfile.css";

export default function AccountantProfile() {
  const [accountant, setAccountant] = useState(null);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  // ==========================================
  // Load Accountant Profile
  // ==========================================

  useEffect(() => {
    const loadProfile = async () => {
      try {
        setLoading(true);

        setError("");

        const response = await api.get("/accountant");

        console.log("ACCOUNTANT PROFILE:", response.data);

        setAccountant(response.data);
      } catch (err) {
        console.error("Error loading accountant profile:", err);

        setError("Unable to load accountant profile.");
      } finally {
        setLoading(false);
      }
    };

    loadProfile();
  }, []);

  // ==========================================
  // Loading
  // ==========================================

  if (loading) {
    return (
      <div className="accountant-profile">
        <div className="text-center py-5">Loading profile...</div>
      </div>
    );
  }

  // ==========================================
  // Error
  // ==========================================

  if (error) {
    return (
      <div className="accountant-profile">
        <div className="alert alert-danger">{error}</div>
      </div>
    );
  }

  // ==========================================
  // Accountant Name
  // ==========================================

  const accountantName = `${accountant?.firstName || ""} ${
    accountant?.lastName || ""
  }`.trim();

  // ==========================================
  // UI
  // ==========================================

  return (
    <div className="accountant-profile">
      {/* ======================================
          HEADER
      ====================================== */}

      <div className="accountant-profile-header">
        <div>
          <h1 className="page-title">Accountant Profile</h1>

          <p className="page-subtitle">
            View your accountant account information.
          </p>
        </div>
      </div>

      {/* ======================================
          PROFILE CARD
      ====================================== */}

      <div className="accountant-profile-card">
        {/* Avatar */}

        <div className="accountant-profile-avatar">
          <FaUser />
        </div>

        {/* Name */}

        <h2 className="accountant-profile-name">
          {accountantName || "Accountant"}
        </h2>

        {/* Role */}

        <span className="accountant-profile-role">ACCOUNTANT</span>

        {/* ==================================
            INFORMATION
        ================================== */}

        <div className="accountant-profile-info">
          {/* Name */}

          <div className="accountant-profile-info-item">
            <div className="accountant-profile-info-icon">
              <FaUser />
            </div>

            <div>
              <span className="accountant-profile-label">Name</span>

              <p>{accountantName || "N/A"}</p>
            </div>
          </div>

          {/* Email */}

          <div className="accountant-profile-info-item">
            <div className="accountant-profile-info-icon">
              <FaEnvelope />
            </div>

            <div>
              <span className="accountant-profile-label">Email</span>

              <p>{accountant?.userDetails?.email || "N/A"}</p>
            </div>
          </div>

          {/* Mobile */}

          <div className="accountant-profile-info-item">
            <div className="accountant-profile-info-icon">
              <FaPhone />
            </div>

            <div>
              <span className="accountant-profile-label">Mobile Number</span>

              <p>{accountant?.userDetails?.mobileNo || "N/A"}</p>
            </div>
          </div>

          {/* Role */}

          <div className="accountant-profile-info-item">
            <div className="accountant-profile-info-icon">
              <FaBriefcase />
            </div>

            <div>
              <span className="accountant-profile-label">Role</span>

              <p>{accountant?.userDetails?.role || "ACCOUNTANT"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
