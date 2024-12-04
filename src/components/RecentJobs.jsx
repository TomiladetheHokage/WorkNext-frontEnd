import React from 'react';
import styles from './Styles/RecentJobs.module.css';
import jobs from '/src/jobs.json';
import { FaBriefcase, FaClock, FaDollarSign, FaMapMarkerAlt, FaBookmark } from 'react-icons/fa';

const RecentJobs = () => {
    return (
        <div className={styles['job-listing-container']}>
            <h1>Recent Jobs Available</h1>

            <div className={styles['header-container']}>
                <p>Some string of text I will just leave here for now</p>
                <a href="/view-all" className={styles['view-all-link']}>View all</a>
            </div>

            {jobs.slice(0, 5).map((job, index) => (
                <div key={index} className={styles['job-card']}>
                    <div className={styles['job-header']}>
                        <span className={styles['time-posted']}>{job.timePosted}</span>
                    </div>

                    <div className={styles['job-details']}>
                        <div className={styles['job-title']}>
                            <img src={job.logo}  className={styles['company-logo']} />
                            <h2>{job.title}</h2>
                        </div>

                        <p className={styles['company-name']}>{job.company}</p>

                        <div className={styles['job-info']}>
                            <span className={styles['job-category']}><FaBriefcase /> {job.category}</span>
                            <span className={styles['job-type']}><FaClock /> {job.type}</span>
                            <span className={styles['job-salary']}><FaDollarSign /> {job.salary}</span>
                            <span className={styles['job-location']}><FaMapMarkerAlt /> {job.location}</span>
                        </div>
                    </div>
                    <div className={styles['job-actions']}>
                        <button className={styles['job-details-button']}>Job Details</button>
                        <button className={styles['bookmark-button']}><FaBookmark /> Bookmark</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default RecentJobs;
