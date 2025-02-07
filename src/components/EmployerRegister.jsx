import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Styles/EmployerRegister.module.css';

const EmployerRegister = ({ onClose }) => {
    const [formData, setFormData] = useState({
        companyName: '',
        companyLocation: '',
        companyDescription: '',
        email: '',
        password: '',
        role: 'EMPLOYERS',
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:8020/employers/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
            .then(response => {
                console.log('Response status:', response.status);
                if (!response.ok) {
                    return response.json().then(data => {
                        throw new Error(data.message || 'Invalid email or password');
                    });
                }
                return response.json();
            })
            .then(data => {
                console.log('Response data:', data);
                alert('Registration successful');
                onClose();
                navigate('/employer');
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Registration Failed: ' + error.message);
            });
    };

    return (
        <div className={styles.modal}>
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                <h2>Register as Employer</h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="companyName"
                        placeholder="Company Name"
                        value={formData.companyName}
                        onChange={handleChange}
                        required
                    />
                    <input
                        type="text"
                        name="companyLocation"
                        placeholder="Company Location"
                        value={formData.companyLocation}
                        onChange={handleChange}
                        required
                    />
                    <textarea
                        name="companyDescription"
                        placeholder="Company Description"
                        value={formData.companyDescription}
                        onChange={handleChange}
                        className={styles.descriptionTextarea}
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
            </div>
        </div>
    );
};

export default EmployerRegister;
