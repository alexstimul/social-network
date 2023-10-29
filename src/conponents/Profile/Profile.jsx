import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import styles from "./Profile.module.css";
import MyPostContainer from "./MyPost/MyPostContainer";


const Profile = (props) => {
    const {
        profile
    } = props

    return (
        <div>
            <ProfileInfo profile={profile} />
            <MyPostContainer />
        </div>
    );
}

export default Profile;