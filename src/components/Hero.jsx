import React, { useState } from 'react';
import styles from './Styles/Hero.module.css'
import briefCase from '../assets/Icon+bg.png'
import users from '../assets/Icon+bg (1).png'
import buildings from '../assets/Icon+bg (2).png'
// import styles from './Styles/Navbar.module.css'


const Hero = () => {
    const [jobTitle, setJobTitle] = useState('');
    const [location, setLocation] = useState('');
    const [category, setCategory] = useState('');

    const handleSearch = () => {
        // Implement your search logic here
        console.log(`Searching for ${jobTitle} jobs in ${location} under ${category} category`);
    };



    return (
        <div className={styles['job-search']}>
            <h1>Find Your Dream Job!</h1>
            <p>Connecting Talent with Opportunity: Your gateway to Career success</p>

            <div className={styles['search-bar']}>
                <input type="text"
                       placeholder="Job Title or Company"
                       value={jobTitle}
                       onChange={(e) => setJobTitle(e.target.value)}/>
                <input type="text"
                       placeholder="Select Location"
                       value={location}
                       onChange={(e) => setLocation(e.target.value)}/>
                <input type="text"
                       placeholder="Select Category"
                       value={category}
                       onChange={(e) => setCategory(e.target.value)}/>
                <button onClick={handleSearch}>Search Job</button>

            </div>

            <div className={styles['stats-container']}>
                <div className={styles['stat-item']}>
                    <div className={styles['icon-container']}>
                        <i className="fas fa-briefcase"></i>
                    </div>
                    <div className={styles['stat-text']}>
                        <h2>25,850</h2>
                        <p>Jobs</p></div>
                </div>
                <div className={styles['stat-item']}>
                    <div className="icon-container">
                        <i className="fas fa-users"></i>
                    </div>
                    <div className={styles['stat-text']}>
                        <h2>10,250</h2>
                        <p>Candidates</p>
                    </div>
                </div>
                <div className={styles['stat-item']}>
                    <div className={styles['icon-container']}>
                        <i className="fas fa-building"></i>
                    </div>
                    <div className={styles['stat-text']}>
                        <h2>18,400</h2>
                        <p>Companies</p>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Hero;