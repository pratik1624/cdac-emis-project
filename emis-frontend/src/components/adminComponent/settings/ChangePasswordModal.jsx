import { useState } from "react";

export default function ChangePasswordModal({
  onClose,

  onSave,
}) {
  const [password, setPassword] = useState({
    currentPassword: "",

    newPassword: "",

    confirmPassword: "",
  });

  const handleChange = (e) => {
    setPassword({
      ...password,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (password.newPassword !== password.confirmPassword) {
      alert("Passwords do not match.");

      return;
    }

    onSave(password);
  };

  return (
    <div
      className="modal fade show"
      style={{
        display: "block",

        background: "rgba(0,0,0,.5)",
      }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Change Password</h5>

            <button className="btn-close" onClick={onClose} />
          </div>

          <form onSubmit={handleSubmit}>
            <div className="modal-body">
              <div className="mb-3">
                <label className="form-label">Current Password</label>

                <input
                  type="password"
                  className="form-control"
                  name="currentPassword"
                  value={password.currentPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">New Password</label>

                <input
                  type="password"
                  className="form-control"
                  name="newPassword"
                  value={password.newPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              <div>
                <label className="form-label">Confirm Password</label>

                <input
                  type="password"
                  className="form-control"
                  name="confirmPassword"
                  value={password.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Cancel
              </button>

              <button type="submit" className="btn btn-success">
                Change Password
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
