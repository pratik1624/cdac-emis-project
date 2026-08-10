import { useState } from "react";
import ChangePasswordModal from "./ChangePasswordModal";
import { changePassword } from "../../../api/adminApi";


export default function SecuritySettings() {
  const [showModal, setShowModal] = useState(false);

  const handleSave = async (passwordData) => {
 try {
   const response = await changePassword(passwordData);

   console.log(response);

   alert("Password changed successfully.");

   setShowModal(false);
 } catch (error) {
   console.log(error);

   alert(error.response?.data?.message || "Password change failed");
 }
  };

  return (
    <>
      <div>
        <h4>🔒 Security</h4>

        <p className="text-secondary mb-4">
          Change your account password to keep your account secure.
        </p>

        <button className="btn btn-success" onClick={() => setShowModal(true)}>
          Change Password
        </button>
      </div>

      {showModal && (
        <ChangePasswordModal
          onClose={() => setShowModal(false)}
          onSave={handleSave}
        />
      )}
    </>
  );
}