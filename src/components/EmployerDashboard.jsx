import React from 'react';
import styles from './Styles/EmployerDashboard.module.css';

const EmployerDashboard = ({ onPostJobClick, onEditProfileClick }) => {
    return (
        <div className={styles.dashboard}>
            <header className={styles.header}>
                <h1>Employer Dashboard</h1>
                <button className={styles.logoutButton}>Logout</button>
            </header>

            <nav className={styles.nav}>
                <ul>
                    <li>
                        <button className={styles.navButton} onClick={onEditProfileClick}>
                            Edit Profile
                        </button>
                    </li>
                    <li>
                        <button className={styles.navButton} onClick={onPostJobClick}>
                            Post a Job
                        </button>
                    </li>
                    <li><button className={styles.navButton}>View Applications</button></li>
                    <li><button className={styles.navButton}>Manage Job Posts</button></li>
                </ul>
            </nav>

            <main className={styles.mainContent}>
                <section>
                    <h2>Welcome, Employer!</h2>
                    <p>Select an option from the menu to get started.</p>
                </section>
            </main>
        </div>
    );
};

export default EmployerDashboard;
