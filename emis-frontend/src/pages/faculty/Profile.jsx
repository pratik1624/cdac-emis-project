import { useEffect, useState } from "react";

import {
    getFacultyProfile,
    updateFacultyProfile
} from "../../api/facultyApi";

import ProfileHeader from "../../components/facultyComponent/profile/ProfileHeader";
import PersonalInfoCard from "../../components/facultyComponent/profile/PersonalInfoCard";
import ProfessionalInfoCard from "../../components/facultyComponent/profile/ProfessionalInfoCard";
import ContactInfoCard from "../../components/facultyComponent/profile/ContactInfoCard";
import EditProfileModal from "../../components/facultyComponent/profile/EditProfileModal";

import "../../styles/facultyStyles/profile.css";

export default function Profile() {

    const [faculty, setFaculty] = useState(null);

    const [loading, setLoading] = useState(true);

    const [error, setError] = useState("");

    const [showEditModal, setShowEditModal] = useState(false);

    useEffect(() => {

        loadProfile();

    }, []);

    const loadProfile = async () => {

        try {

            const data = await getFacultyProfile();

            setFaculty(data);

        }

        catch (err) {

            console.log(err);

            setError("Unable to load profile.");

        }

        finally {

            setLoading(false);

        }

    };

    const handleSave = async (updatedFaculty) => {

        try {

            await updateFacultyProfile(
                faculty.id,
                updatedFaculty
            );

            loadProfile();

            setShowEditModal(false);

            alert("Profile Updated Successfully");

        }

        catch (err) {

            console.log(err);

            alert("Unable to update profile.");

        }

    };

    if (loading) {

        return <h4>Loading Profile...</h4>;

    }

    if (error) {

        return <h4>{error}</h4>;

    }

    return (

        <div className="container-fluid faculty-profile-page">

            <ProfileHeader
                faculty={faculty}
                onEdit={() => setShowEditModal(true)}
            />

            <div className="row">

                <div className="col-lg-6 mb-4">

                    <PersonalInfoCard
                        faculty={faculty}
                    />

                </div>

                <div className="col-lg-6 mb-4">

                    <ProfessionalInfoCard
                        faculty={faculty}
                    />

                </div>

            </div>

            <ContactInfoCard
                faculty={faculty}
            />

            <EditProfileModal

                show={showEditModal}

                faculty={faculty}

                onClose={() => setShowEditModal(false)}

                onSave={handleSave}

            />

        </div>

    );

}