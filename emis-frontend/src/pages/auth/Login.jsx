// =========================
// React Imports
// =========================
import { useState } from "react";
import { useNavigate } from "react-router-dom";

// =========================
// API & Context
// =========================
import { login } from "../../api/authService";
import { useAuth } from "../../context/AuthContext";

// =========================
// Icons
// =========================
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaUserGraduate,
  FaCheckCircle,
} from "react-icons/fa";

export default function Login() {
  // =========================
  // Navigation
  // =========================
  const navigate = useNavigate();

  // =========================
  // Auth Context
  // =========================
  const { loginUser } = useAuth();

  // =========================
  // Component State
  // =========================
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);

  const [error, setError] = useState("");

  // =========================
  // Login Handler
  // =========================
  const handleLogin = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      // Call Backend API
      const data = await login({
        email,
        password,
      });

      // Save JWT + User
      loginUser(data);

      // Redirect according to role
      switch (data.role) {
        case "ADMIN":
          navigate("/admin/dashboard");
          break;

        case "FACULTY":
          navigate("/faculty/dashboard");
          break;

        case "STUDENT":
          navigate("/student/dashboard");
          break;

        case "ACCOUNTANT":
          navigate("/accountant/dashboard");
          break;

        default:
          navigate("/");
      }
    } catch (err) {
      console.log(err.response);

      if (err.response) {
        console.log("Status:", err.response.status);
        console.log("Data:", err.response.data);
      }

      setError("Invalid Email or Password");
    } finally {
      setLoading(false);
    }
  };

  // =========================
  // UI
  // =========================
  return (
    <div className="container-fluid vh-100" style={{ background: "#eef8f1" }}>
      <div className="row h-100">
        {/* ================= LEFT SIDE ================= */}

        <div
          className="col-lg-7 d-none d-lg-flex flex-column justify-content-center text-white p-5"
          style={{
            background: "linear-gradient(135deg,#0f5132,#198754,#20c997)",
          }}
        >
          <div style={{ maxWidth: "520px" }}>
            <h1 className="display-3 fw-bold mb-3">
              <FaUserGraduate className="me-3" />
              EMIS
            </h1>

            <h3 className="fw-light mb-4">
              Education Management Information System
            </h3>

            <p className="lead mb-5">
              A centralized platform to manage students, faculty, attendance,
              examinations and administration efficiently.
            </p>

            <div className="fs-5">
              <p>
                <FaCheckCircle className="me-2" />
                Student Management
              </p>

              <p>
                <FaCheckCircle className="me-2" />
                Faculty Management
              </p>

              <p>
                <FaCheckCircle className="me-2" />
                Attendance Tracking
              </p>

              <p>
                <FaCheckCircle className="me-2" />
                Result Management
              </p>

              <p>
                <FaCheckCircle className="me-2" />
                Timetable & Notices
              </p>
            </div>
          </div>
        </div>

        {/* ================= RIGHT SIDE ================= */}

        <div className="col-lg-5 d-flex justify-content-center align-items-center">
          <div
            className="card border-0 shadow-lg"
            style={{
              width: "430px",
              borderRadius: "20px",
            }}
          >
            {/* Login Form */}
            <form className="card-body p-5" onSubmit={handleLogin}>
              <h2 className="fw-bold text-center">Welcome Back</h2>

              <p className="text-center text-muted mb-4">Sign in to continue</p>

              {/* Error Message */}
              {error && <div className="alert alert-danger">{error}</div>}

              {/* Email */}

              <div className="mb-3">
                <label className="form-label fw-semibold">Email</label>

                <div className="input-group">
                  <span className="input-group-text bg-white">
                    <FaEnvelope />
                  </span>

                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
              </div>

              {/* Password */}

              <div className="mb-3">
                <label className="form-label fw-semibold">Password</label>

                <div className="input-group">
                  <span className="input-group-text bg-white">
                    <FaLock />
                  </span>

                  <input
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />

                  <button
                    className="btn btn-outline-secondary"
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
              </div>

              {/* Remember Me */}

              <div className="d-flex justify-content-between mb-4">
                <div className="form-check">
                  <input className="form-check-input" type="checkbox" />

                  <label className="form-check-label">Remember Me</label>
                </div>

                <a href="#" className="text-success text-decoration-none">
                  Forgot Password?
                </a>
              </div>

              {/* Login Button */}

              <button
                type="submit"
                className="btn btn-success w-100 py-2 fw-bold"
                disabled={loading}
              >
                {loading ? "Signing In..." : "Login"}
              </button>

              <hr />

              <p
                className="text-center text-muted mb-0"
                style={{ fontSize: "14px" }}
              >
                © 2026 EMIS | CDAC Project
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
