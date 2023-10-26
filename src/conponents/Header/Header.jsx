import React from "react";
import styles from "./Header.module.css";

const Header = () => {
    return(
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src='https://freelogopng.com/images/all_img/1682993057Telekom-logo-png.png' />
            </div>
            <div className={styles.header_main_content}>
                Cool header
            </div>
        </header>
    );
}

export default Header;