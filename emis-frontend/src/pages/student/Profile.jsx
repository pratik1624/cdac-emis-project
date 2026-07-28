import { useEffect, useState } from "react";
import {  getStudentProfile, updateStudentProfile,} from "../../api/studentApi";

import ProfileHeader from "../../components/profile/ProfileHeader";
import PersonalInfoCard from "../../components/profile/PersonalInfoCard";
import AcademicInfoCard from "../../components/profile/AcademicInfoCard";
import ContactInfoCard from "../../components/profile/ContactInfoCard";
import EditProfileModal from "../../components/profile/EditProfileModal";
import "../../styles/profile.css";
export default function Profile() {

    const [student, setStudent] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [showEditModal, setShowEditModal] = useState(false);

    useEffect(() => {

        const fetchProfile = async () => {

            try {

                const data = await getStudentProfile();

                setStudent(data);

            } catch (err) {

                console.error(err);

                setError("Unable to load profile.");

            } finally {

                setLoading(false);

            }

        };

        fetchProfile();

    }, []);

    // ===================================
    // Save Edited Profile (Backend Later)
    // ===================================

const handleSave = async (updatedStudent) => {

    try {

        await updateStudentProfile(updatedStudent);

        const latest = await getStudentProfile();

        setStudent(latest);

        setShowEditModal(false);

        alert("Profile Updated Successfully");

    } catch (err) {

        console.log("Full Error:", err);
        console.log("Response:", err.response);
        console.log("Status:", err.response?.status);
        console.log("Data:", err.response?.data);

        alert("Failed to update profile.");

    }

};

    if (loading) {
        return <h4>Loading Profile...</h4>;
    }

    if (error) {
        return <h4>{error}</h4>;
    }

    return (

        <div className="container-fluid profile-page">

            <ProfileHeader
                student={student}
                onEdit={() => setShowEditModal(true)}
            />

            <div className="row">

                <div className="col-lg-6 mb-4">

                    <PersonalInfoCard student={student} />

                </div>

                <div className="col-lg-6 mb-4">

                    <AcademicInfoCard student={student} />

                </div>

            </div>

            <ContactInfoCard student={student} />

            <EditProfileModal
                show={showEditModal}
                student={student}
                onClose={() => setShowEditModal(false)}
                onSave={handleSave}
            />

        </div>

    );

}
