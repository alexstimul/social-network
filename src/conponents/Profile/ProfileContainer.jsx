import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getUserStatus, updateUserStatus } from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

const ProfileContainer = (props) => {
    const {
        getUserProfile,
        getUserStatus,
        status,
        updateUserStatus,
        profile
    } = props

    const params = useParams();
    // const { projectId } = useParams<{ projectId: string }>()

    const currentUserId = parseInt(params.userId)

    if (!profile || parseInt(profile?.userId) !== currentUserId) {
        getUserProfile(currentUserId)
        getUserStatus(currentUserId)
    }
    
    return (
        <Profile {...props} profile={profile} status={status} updateUserStatus={updateUserStatus} />
    )
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status
})
const mapDispatchToProps = {
    getUserProfile,
    getUserStatus,
    updateUserStatus
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    // withAuthRedirect
)(ProfileContainer);