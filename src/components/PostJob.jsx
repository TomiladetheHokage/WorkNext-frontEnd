import React, { useState } from 'react';
import styles from './Styles/PostJob.module.css'; // Adjust the path to your CSS

const PostJob = ({ onClose }) => {
    const [formData, setFormData] = useState({
        email: '',
        jobTitle: '',
        jobDescription: '',
        jobType: '',
        salaryRange: '',
        timePosted: new Date().toISOString(), // Automatically set current time
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:8020/employers/uploadPost', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error('Failed to post job');
                }
            })
            .then((data) => {
                alert('Job posted successfully!');
                onClose(); // Close the modal after successful submission
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Failed to post job!');
            });
    };

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                <h2>Post a Job</h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="jobTitle"
                        placeholder="Job Title"
                        value={formData.jobTitle}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="jobDescription"
                        placeholder="Job Description"
                        value={formData.jobDescription}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="jobType"
                        placeholder="Job Type (e.g., Full-Time, Part-Time)"
                        value={formData.jobType}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="salaryRange"
                        placeholder="Salary Range"
                        value={formData.salaryRange}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" className={styles.submitButton}>
                        Post Job
                    </button>
                </form>
            </div>
        </div>
    );
};

export default PostJob;