import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import { useParams } from "react-router-dom";

const ProfileContainer = (props) => {
    const params = useParams();
    
    const currentUserId = params.userId

    console.log(props.profile, props.profile?.id, currentUserId, props.profile?.id !== currentUserId);

    if (!props.profile) {
        props.getUserProfile(currentUserId)
    }

    
    return (
        <Profile {...props} profile={props.profile} />
    )
}

const mapStateToProps = (state) => ({ profile: state.profilePage.profile })
const mapDispatchToProps = {
    getUserProfile
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);