import React, { useEffect, useState } from 'react';
import styles from "./Styles/RecentJobs.module.css";
import { FaBookmark, FaBriefcase, FaClock, FaDollarSign, FaMapMarkerAlt } from "react-icons/fa";

const JobPosts = ({ refresh }) => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:8020/jobpost')
            .then(response => response.json())
            .then(data => {
                console.log('Fetched jobs:', data); // Log the fetched data
                if (Array.isArray(data.data)) {
                    setJobs(data.data);
                } else {
                    console.error('Expected an array but got:', data.data);
                }
            })
            .catch(error => console.error('Error fetching jobs:', error));
    }, [refresh]); // Re-fetch jobs when refresh state changes

    return (
        <>
            {jobs.slice(0, 5).map((job, index) => (
                <div key={index} className={styles['job-card']}>
                    <div className={styles['job-header']}>
                        <span className={styles['time-posted']}>{job.postedAt}</span>
                    </div>

                    <div className={styles['job-details']}>
                        <div className={styles['job-title']}>
                            <img src={job.employer.logo} className={styles['company-logo']} alt="Company Logo" />
                            <h2>{job.jobTitle}</h2>
                        </div>

                        <p className={styles['company-name']}>{job.employer.companyName}</p>

                        <div className={styles['job-info']}>
                            <span className={styles['job-category']}><FaBriefcase /> {job.jobType}</span>
                            <span className={styles['job-type']}><FaClock /> {job.jobType}</span>
                            <span className={styles['job-salary']}><FaDollarSign /> {job.salaryRange}</span>
                            <span className={styles['job-location']}><FaMapMarkerAlt /> {job.employer.companyLocation}</span>
                        </div>
                    </div>
                    <div className={styles['job-actions']}>
                        <button className={styles['job-details-button']}>Job Details</button>
                        <button className={styles['bookmark-button']}><FaBookmark /> Bookmark</button>
                    </div>
                </div>
            ))}
        </>
    );
};

export default JobPosts;
