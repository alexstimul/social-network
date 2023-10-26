import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./MenuItem.module.css";

const MenuItem = (props) => {
    return (
        <div className={styles.menu_item}>
            <img src={props.iconLink} />
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