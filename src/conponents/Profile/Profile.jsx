import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import styles from "./Profile.module.css";
import MyPostContainer from "./MyPost/MyPostContainer";


const Profile = (props) => {
    const {
        profile,
        status,
        updateUserStatus
    } = props

    return (
        <div>
            <ProfileInfo profile={profile} status={status} updateUserStatus={updateUserStatus} />
            <MyPostContainer />
        </div>
    );
}

export default Profile;