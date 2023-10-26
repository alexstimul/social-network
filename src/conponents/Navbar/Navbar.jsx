import React from "react";
import styles from "./Navbar.module.css"
import MenuItem from "./MenuItem/MenuItem";

const Navbar = () => {
    return (
        <nav className={styles.nav}>
            <MenuItem text="Мой профиль" link="/profile" iconLink="https://cdn-icons-png.flaticon.com/512/3106/3106773.png" />
            <MenuItem text="Сообщения" link="/dialogs" iconLink="https://cdn-icons-png.flaticon.com/512/685/685887.png" />
            <MenuItem text="Новости" link="/news" iconLink="https://cdn-icons-png.flaticon.com/512/4097/4097354.png" />
            <MenuItem text="Музыка" link="/music" iconLink="https://cdn-icons-png.flaticon.com/512/4430/4430494.png" />
            <MenuItem text="Поиск пользователей" link="/users" iconLink="https://cdn-icons-png.flaticon.com/512/149/149852.png" />
            <MenuItem text="Настройки" link="/settings" iconLink="https://cdn-icons-png.flaticon.com/512/126/126472.png" />
        </nav>
    );
}

export default Navbar;