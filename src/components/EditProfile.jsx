import React, { useState } from 'react';
import styles from './Styles/EditProfile.module.css';

const EditProfile = ({ onClose, onSave }) => {
    const [formData, setFormData] = useState({
        companyName: '',
        companyDescription: '',
        companyLocation: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8020/employers/editProfile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            if (!response.ok) throw new Error('Failed to save profile');
            console.log('Profile saved successfully');
            onSave(formData); // Notify parent component
        } catch (error) {
            console.error('Error saving profile:', error);
            alert("Error saving profile")
        }
        onClose(); // Close the modal after submission
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                <h2>Edit Company Profile</h2>
                <form onSubmit={handleSubmit} className={styles.form}>
                    <input
                        type="text"
                        name="companyName"
                        placeholder="Company Name"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="companyDescription"
                        placeholder="Company Description"
                        value={formData.companyDescription}
                        onChange={handleChange}
                        required
                    ></textarea>
                    <input
                        type="text"
                        name="companyLocation"
                        placeholder="Company Location"
                        value={formData.companyLocation}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" className={styles.submitButton}>
                        Save Changes
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;
