import React from 'react';
import styles from './Styles/Navbar.module.css';

const Navbar = ({ onRegisterClick, onLoginClick }) => {
    return (
        <div className={styles["navbar"]}>
            <h1 className={styles['logo']}>JOBS</h1>

            <ul className={styles['nav-links']}>
                <li><a href="#home">Home</a></li>
                <li><a href="#jobs">Jobs</a></li>
                <li><a href="#about">About us</a></li>
                <li><a href="#contact">Contact us</a></li>
            </ul>

            <div className={styles['auth-buttons']}>

                <button className={styles['register-btn']} onClick={onRegisterClick}>
                    Register
                </button>

                <button className={styles['login-btn']} onClick={onLoginClick}>
                    Login
                </button>
            </div>
        </div>
    );
};

export default Navbar;
