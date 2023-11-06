import React from "react";
import { connect } from "react-redux";
import {
    followUser,
    setCurrentPage,
    unFollowUser,
    getUsers, acceptUser, unAcceptUser
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import {compose} from "redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize)
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page)

        this.props.getUsers(page, this.props.pageSize)
    }

    render() {
        return <>
            {this.props.isLoading ?
                <Preloader />
                :
                <Users
                    users={this.props.users}
                    followUser={this.props.acceptUser}
                    unFollowUser={this.props.unAcceptUser}
                    onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    followingInProgress={this.props.followingInProgress}
                />}

        </>
    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        followingInProgress: state.usersPage.followingInProgress
    }
}

const mapDispatchToProps = {
    followUser,
    unFollowUser,
    setCurrentPage,
    getUsers,
    acceptUser,
    unAcceptUser
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    // withAuthRedirect
)(UsersContainer);