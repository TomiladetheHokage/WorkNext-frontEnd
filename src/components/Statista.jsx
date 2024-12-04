import React from 'react';
import stockImg from "../assets/Img.png";
import styles from "./Styles/Stats.css";

const Statista = () => {
    return (
        <div className={styles.statista}>
            <h1>Hello</h1>
            <img src={stockImg} alt="Stock" />
        </div>
    );
};

export default Statista;
