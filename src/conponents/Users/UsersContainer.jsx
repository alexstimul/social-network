import React from "react";
import { connect } from "react-redux";
import { followUser, setCurrentPage, setLoading, setTotalUsersCount, setUsers, unFollowUser, toggleFollowingProgress } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Preloader/Preloader";
import { usersAPI } from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        this.props.setLoading(true)
        
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            console.log(data)
            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount > 50 ? 50 : data.totalCount)
            this.props.setLoading(false)
        })
    }

    onPageChanged = (page) => {
        this.props.setCurrentPage(page)
        this.props.setLoading(true)
        
        usersAPI.getUsers(page, this.props.pageSize).then(data => {
            console.log(data)
            this.props.setUsers(data.items)
            this.props.setLoading(false)
        })
    }

    render() {
        return <>
            {this.props.isLoading ?
                <Preloader />
                :
                <Users
                    users={this.props.users}
                    followUser={this.props.followUser}
                    unFollowUser={this.props.unFollowUser}
                    onPageChanged={this.onPageChanged}
                    currentPage={this.props.currentPage}
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    toggleFollowingProgress={this.props.toggleFollowingProgress}
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
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setLoading,
    toggleFollowingProgress
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer)