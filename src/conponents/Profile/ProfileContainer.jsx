import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import {useParams} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import Dialogs from "../Dialogs/Dialogs";

const ProfileContainer = (props) => {
    const params = useParams();
    // const { projectId } = useParams<{ projectId: string }>()

    const currentUserId = parseInt(params.userId)

    if (!props.profile || parseInt(props.profile?.userId) !== currentUserId) {
        props.getUserProfile(currentUserId)
    }
    
    return (
        <Profile {...props} profile={props.profile} />
    )
}

const mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})
const mapDispatchToProps = {
    getUserProfile
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(ProfileContainer);