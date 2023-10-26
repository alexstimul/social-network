import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./MenuItem.module.css";

const MenuItem = (props) => {
    return (
        <div className={styles.menu_item}>
            <img src="https://cdn-icons-png.flaticon.com/512/3106/3106773.png" />
            <NavLink 
                to={props.link ? props.link : "#"}
                // className={styles.menu_link}
                // activeClassName={styles.active}
                className={
                    (navData) => navData.isActive ? `${styles.menu_link} ${styles.active}` : styles.menu_link
                }
            >
                {props.text}
            </NavLink>
        </div>
    );
}

export default MenuItem;