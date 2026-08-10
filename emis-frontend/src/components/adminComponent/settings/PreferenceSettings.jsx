import { useState } from "react";

export default function PreferenceSettings() {
  const [preferences, setPreferences] = useState({
    darkMode: false,

    emailNotifications: true,

    browserNotifications: true,

    autoLogout: false,
  });

  const handleToggle = (e) => {
    setPreferences({
      ...preferences,

      [e.target.name]: e.target.checked,
    });
  };

  const handleSave = (e) => {
    e.preventDefault();

    console.log(preferences);

    alert("Preferences saved successfully.");
  };

  return (
    <div className="settings-card">
      <h4>⚙ Preferences</h4>

      <form onSubmit={handleSave}>
        <div className="preference-item">
          <span>Dark Mode</span>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              name="darkMode"
              checked={preferences.darkMode}
              onChange={handleToggle}
            />
          </div>
        </div>

        <div className="preference-item">
          <span>Email Notifications</span>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              name="emailNotifications"
              checked={preferences.emailNotifications}
              onChange={handleToggle}
            />
          </div>
        </div>

        <div className="preference-item">
          <span>Browser Notifications</span>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              name="browserNotifications"
              checked={preferences.browserNotifications}
              onChange={handleToggle}
            />
          </div>
        </div>

        <div className="preference-item">
          <span>Auto Logout</span>

          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              name="autoLogout"
              checked={preferences.autoLogout}
              onChange={handleToggle}
            />
          </div>
        </div>

        <button type="submit" className="btn btn-success mt-3">
          Save Preferences
        </button>
      </form>
    </div>
  );
}
