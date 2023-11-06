import React from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../Preloader/Preloader"
import ProfileStatus from "./ProfileStatus/ProfileStatus"

const ProfileInfo = (props) => {
    const {
        profile,
        status,
        updateUserStatus
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
                    <ProfileStatus status={status} updateUserStatus={updateUserStatus} />
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;