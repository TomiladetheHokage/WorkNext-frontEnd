import React from 'react';
import styles from './Styles/BrowseCategory.module.css';
import { FaTractor, FaIndustry, FaShoppingCart, FaBuilding, FaHotel, FaGraduationCap, FaMoneyBillWave, FaTruck } from 'react-icons/fa';

const BrowseByCategory = () => {
    return (
        <div className={styles['category-container']}>
            <h1>Browse by Category</h1>
            <p>At eu lobortis pretium tincidunt amet lacus ut aenean aliquet. Blandit a massa elementum id scel...</p>

            <div className={styles['categories']}>

                <div className={styles['category-card']}>
                    <div className={styles['icon']}><FaTractor /></div>
                    <h2>Agriculture</h2>
                </div>

                <div className={styles['category-card']}>
                    <div className={styles['icon']}><FaIndustry /></div>
                    <h2>Metal Production</h2>
                </div>

                <div className={styles['category-card']}>
                    <div className={styles['icon']}><FaShoppingCart /></div>
                    <h2>Commerce</h2>
                </div>

                <div className={styles['category-card']}>
                    <div className={styles['icon']}><FaBuilding /></div>
                    <h2>Construction</h2>
                </div>

                <div className={styles['category-card']}>
                    <div className={styles['icon']}><FaHotel /></div>
                    <h2>Hotels & Tourism</h2>
                </div>

                <div className={styles['category-card']}>
                    <div className={styles['icon']}><FaGraduationCap /></div>
                    <h2>Education</h2>
                    <p>1496 jobs</p>
                </div>
                <div className={styles['category-card']}>
                    <div className={styles['icon']}><FaMoneyBillWave /></div>
                    <h2>Financial Services</h2>
                </div>

                <div className={styles['category-card']}>
                    <div className={styles['icon']}><FaTruck /></div>
                    <h2>Transport</h2>
                </div>

            </div>
        </div>
    );
};

export default BrowseByCategory;
