import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import styles from "./Profile.module.css";
import MyPostContainer from "./MyPost/MyPostContainer";


const Profile = (props) => {
    return (
        <div>
            <ProfileInfo />
            <MyPostContainer />
        </div>
    );
}

export default Profile;