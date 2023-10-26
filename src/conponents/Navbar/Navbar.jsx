import React from "react";
import styles from "./Navbar.module.css"
import MenuItem from "./MenuItem/MenuItem";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <MenuItem text="Мой профиль" link="/profile" />
            <MenuItem text="Сообщения" link="/dialogs" />
            <MenuItem text="Новости" link="/news" />
            <MenuItem text="Музыка" link="/music" />
            <MenuItem text="Настройки" link="/settings" />
        </nav>
    );
}

export default Navbar;