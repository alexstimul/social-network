import React from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../Preloader/Preloader"

const ProfileInfo = (props) => {
    const {
        profile
    } = props

    if (!profile) {
        return (
            <Preloader />
        )
    }

    return (
        <div>
            <div className={styles.profile_bg_img}>
                <img src={profile.photos.large ? profile.photos.large : "https://uitheme.net/sociala/images/u-bg.jpg"} />
            </div>
            <div className={styles.profile}>
                <img 
                    src={profile.photos.small ? profile.photos.small : 'https://cdns-images.dzcdn.net/images/cover/0e96be52a13eb76ed9aa28dd63886f75/1000x1000.jpg'}
                    className={styles.profile_avatar} 
                />
                <div className={styles.profile_description}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt deserunt asperiores accusantium magni repellat ut blanditiis repellendus, odio velit libero. A nemo expedita assumenda illo veniam autem! Quaerat, illo debitis.
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;