import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <img src='https://freelogopng.com/images/all_img/1682993057Telekom-logo-png.png' />
            </div>
            <div className={styles.header_main_content}>
                <div className={styles.login_block}>
                    {props.isAuth
                        ? props.login
                        :
                        <NavLink
                            to={"/login"}
                        >
                            Войти
                        </NavLink>}
                </div>
            </div>
        </header>
    );
}

export default Header;