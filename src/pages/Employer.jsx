import React, { useState } from 'react';
import EmployerDashboard from "../components/EmployerDashboard.jsx";
import PostJob from "../components/PostJob.jsx";
import EditProfile from "../components/EditProfile.jsx";

const Employer = () => {
    const [showPostJobModal, setShowPostJobModal] = useState(false);
    const [showEditProfileModal, setShowEditProfileModal] = useState(false);

    const handlePostJobClick = () => {
        setShowPostJobModal(true);
    };

    const handleEditProfileClick = () => {
        setShowEditProfileModal(true);
    };

    const handleClosePostJob = () => {
        setShowPostJobModal(false);
    };

    const handleCloseEditProfile = () => {
        setShowEditProfileModal(false);
    };

    const handleSaveProfile = (profileData) => {
        // Save profile data logic (e.g., send to server)
        console.log("Profile updated:", profileData);
    };

    return (
        <>
            <EmployerDashboard
                onPostJobClick={handlePostJobClick}
                onEditProfileClick={handleEditProfileClick}
            />

            {showPostJobModal && <PostJob onClose={handleClosePostJob} />}
            {showEditProfileModal && <EditProfile onClose={handleCloseEditProfile} onSave={handleSaveProfile} />}
        </>
    );
};

export default Employer;
