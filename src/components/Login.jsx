import React, { useState } from "react";
import styles from "./Styles/Login.module.css";
import { useNavigate } from "react-router-dom";

const Login = ({ onClose, onSwitchToEmployer }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const validate = () => {
        const errors = {};
        if (!formData.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid";
        }
        if (!formData.password) {
            errors.password = "Password is required";
        }
        return errors;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        fetch('http://localhost:8020/employers/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Invalid email or password');
                }
                return response.json();
            })
            .then(() => {
                alert('Login successful');
                onClose();
                navigate('/employer');
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Login Failed: ' + error.message);
            });
    };

    return (
        <>
            {/* Background Overlay */}
            <div className={styles.modalOverlay} onClick={onClose}></div>

            {/* Modal Content */}
            <div className={styles.modalContent}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                <h2>Login</h2>
                <form className={styles.form} onSubmit={handleSubmit}>
                    <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                    />
                    {errors.email && <p className={styles.error}>{errors.email}</p>}
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                    {errors.password && <p className={styles.error}>{errors.password}</p>}
                    <button type="submit" className={styles.submitButton}>
                        Login
                    </button>
                </form>
                <p>
                    Don't have an account?{' '}
                    <span className={styles.switchLink} onClick={onSwitchToEmployer}>
                        Register here
                    </span>
                </p>
            </div>
        </>
    );
};

export default Login;
