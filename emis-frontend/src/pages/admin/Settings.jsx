import ProfileSettings from "../../components/adminComponent/settings/ProfileSettings";
import SecuritySettings from "../../components/adminComponent/settings/SecuritySettings";
import PreferenceSettings from "../../components/adminComponent/settings/PreferenceSettings";
import SystemInformation from "../../components/adminComponent/settings/SystemInformation";

import "../../styles/adminStyles/settings.css";

export default function Settings() {
  return (
    <div className="settings-page">
      <div className="settings-header">
        <h2>Settings</h2>

        <p>Manage your administrator account and preferences.</p>
      </div>

      <div className="settings-grid">
        <ProfileSettings />

        <SecuritySettings />

        <PreferenceSettings />

        <SystemInformation />
      </div>
    </div>
  );
}
