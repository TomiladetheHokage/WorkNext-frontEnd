import logo from './../assets/Job Portal.png'
import logoIcon from './../assets/check(1) 1.png'
import styles from './Styles/Navbar.module.css'



const Navbar = () => {
    return(
        <>
            <div className={styles["navbar"]}>

                <h1 className={styles['logo']}>JOBS</h1>

                <ul className={styles['nav-links']}>
                    <li><a href="#"/>Home</li>
                    <li><a href="#"/>Jobs</li>
                    <li><a href="#"/>About us</li>
                    <li><a href="#"/>Contact us</li>
                </ul>

                <div className={styles['auth-buttons']}>
                    <button className={styles['register-btn']}>Register</button>
                    <button className={styles['login-btn']}>Logout</button>
                </div>

            </div>
        </>
    )
}
export default Navbar;