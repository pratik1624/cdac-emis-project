import { useEffect, useState } from "react";

import { getFacultyProfile, updateFacultyProfile } from "../../api/facultyApi";

import FacultyProfileHeader from "../../components/facultyComponent/profile/ProfileHeader";
import PersonalInfoCard from "../../components/facultyComponent/profile/PersonalInfoCard";
import ContactInfoCard from "../../components/facultyComponent/profile/ContactInfoCard";
import ProfessionalInfoCard from "../../components/facultyComponent/profile/ProfessionalInfoCard";
import EditProfileModal from "../../components/facultyComponent/profile/EditProfileModal";

import "../../styles/facultyStyles/profile.css";

export default function Profile() {
  const [faculty, setFaculty] = useState(null);

  const [loading, setLoading] = useState(true);

  const [showEditModal, setShowEditModal] = useState(false);

  useEffect(() => {
    loadProfile();
  }, []);

  const loadProfile = async () => {
    try {
      const data = await getFacultyProfile();

      setFaculty(data);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleSave = async (updatedFaculty) => {
    await updateFacultyProfile(faculty.id, updatedFaculty);

    loadProfile();

    setShowEditModal(false);
  };

  if (loading) {
    return <h4>Loading...</h4>;
  }

  return (
    <div className="container-fluid">
      <FacultyProfileHeader
        student={faculty}
        onEdit={() => setShowEditModal(true)}
      />

      <div className="row">
        <div className="col-lg-6 mb-4">
          <PersonalInfoCard student={faculty} />
        </div>

        <div className="col-lg-6 mb-4">
          <ProfessionalInfoCard faculty={faculty} />
        </div>
      </div>

      <ContactInfoCard student={faculty} />

      <EditProfileModal
        show={showEditModal}
        student={faculty}
        onClose={() => setShowEditModal(false)}
        onSave={handleSave}
      />
    </div>
  );
}
