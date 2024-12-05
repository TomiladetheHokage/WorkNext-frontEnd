import React, { useState } from "react";
import styles from "./Styles/Login.module.css";
import {useNavigate} from "react-router-dom";

const Login = ({ onClose, onSwitchToEmployer }) => {
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch('http://localhost:8020/employers/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(formData),
        })
            .then(response => response.json())
            .then(() => {
                alert('Login successful');
                navigate('/employer');
                onClose();
            })
            .catch((error) => {
                console.error('Error:', error);
                alert('Login Failed!');
            })
    }

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
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
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
}

export default Login;
