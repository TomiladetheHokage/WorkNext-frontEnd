import React, { useState } from 'react';
import styles from './Styles/Register.module.css';

const Register = ({ onClose, onSwitchToEmployer }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        userRole: 'job_seeker',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('https://your-backend-api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then(() => {
                alert('Job Seeker Registration Successful!');
                onClose();
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Registration Failed!');
            });
    };

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                <h2>Register as Job Seeker</h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    <button type="submit" className={styles.submitButton}>
                        Register
                    </button>
                </form>
                <button className={styles.backButton} onClick={onClose}>
                    Back
                </button>
                <p>
                    Want to post jobs?{' '}
                    <span className={styles.switchLink} onClick={onSwitchToEmployer}>
                        Register as Employer
                    </span>
                </p>
            </div>
        </div>
    );
};

export default Register;
