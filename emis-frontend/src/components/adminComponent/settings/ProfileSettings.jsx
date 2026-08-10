import { useState } from "react";

export default function ProfileSettings() {
  const [profile, setProfile] = useState({
    firstName: "Admin",

    lastName: "User",

    email: "admin@emis.com",

    mobile: "9876543210",

    role: "ADMIN",
  });

  const handleChange = (e) => {
    setProfile({
      ...profile,

      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(profile);

    alert("Profile updated successfully.");
  };

  return (
    <div className="settings-card">
      <h4>👤 Account Profile</h4>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">First Name</label>

          <input
            type="text"
            name="firstName"
            className="form-control"
            value={profile.firstName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Last Name</label>

          <input
            type="text"
            name="lastName"
            className="form-control"
            value={profile.lastName}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>

          <input
            type="email"
            name="email"
            className="form-control"
            value={profile.email}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Mobile Number</label>

          <input
            type="text"
            name="mobile"
            className="form-control"
            value={profile.mobile}
            onChange={handleChange}
          />
        </div>

        <div className="mb-4">
          <label className="form-label">Role</label>

          <input
            type="text"
            className="form-control"
            value={profile.role}
            disabled
          />
        </div>

        <button type="submit" className="btn btn-success">
          Save Changes
        </button>
      </form>
    </div>
  );
}
