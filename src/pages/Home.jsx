import React, { useState } from 'react';
import Navbar from "../components/Navbar.jsx";
import Hero from "../components/Hero.jsx";
import RecentJobs from "../components/RecentJobs.jsx";
import BrowseCategory from "../components/BrowseCategory.jsx";
import Info from "../components/Info.jsx";
import Register from "../components/Register.jsx";
import EmployerRegister from "../components/EmployerRegister.jsx";
import Login from "../components/Login.jsx";

const Home = () => {
    const [showRegister, setShowRegister] = useState(false); // Job Seeker Register Modal
    const [showEmployerRegister, setShowEmployerRegister] = useState(false); // Employer Register Modal
    const [showLogin, setShowLogin] = useState(false); // Login Modal


    const handleRegisterClick = () => {
        setShowRegister(true);
        setShowEmployerRegister(false);
        setShowLogin(false);
    };


    const handleEmployerClick = () => {
        setShowRegister(false);
        setShowEmployerRegister(true);
        setShowLogin(false);
    };

    // Show Login Modal
    const handleLoginClick = () => {
        setShowLogin(true);
        setShowRegister(false); // Close register modals if open
        setShowEmployerRegister(false);
    };

    // Close the modals
    const handleClose = () => {
        setShowRegister(false);
        setShowEmployerRegister(false);
        setShowLogin(false);
    };

    return (
        <>
            <Navbar
                onRegisterClick={handleRegisterClick}
                onLoginClick={handleLoginClick} // Add login handler to navbar
            />
            <Hero />
            <RecentJobs />
            <BrowseCategory />
            <Info />

            {/* Conditionally render the modals based on the state */}
            {showRegister && (
                <Register
                    onClose={handleClose}
                    onSwitchToEmployer={handleEmployerClick}
                />
            )}

            {showEmployerRegister && <EmployerRegister onClose={handleClose} />}


            {showLogin && <Login onClose={handleClose} onSwitchToEmployer={handleEmployerClick} />}
        </>
    );
};

export default Home;
