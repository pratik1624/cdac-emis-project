import AccountSettingsCard from "../../settings/AccountSettingsCard";
import SecurityCard from "../../settings/SecurityCard";
import PreferencesCard from "../../settings/PreferencesCard";

export default function Settings() {

    return (

        <div className="container-fluid">

            <h2 className="mb-4">
                Settings
            </h2>

            <AccountSettingsCard />

            <SecurityCard />

            <PreferencesCard />

        </div>

    );

}