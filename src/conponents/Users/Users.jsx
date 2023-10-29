import React from "react";
import styles from "./Users.module.css";
import axios from "axios";
import { NavLink } from "react-router-dom";
import { apiBaseUrl } from "../../staticData";

const Users = (props) => {
    const {
        users,
        followUser,
        unFollowUser,
        onPageChanged,
        currentPage,
        totalUsersCount,
        pageSize
    } = props

    const pagesCount = Math.ceil(totalUsersCount / pageSize)

    const pages = []

    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {
                    pages.map(page => (
                        <span onClick={(e) => { onPageChanged(page) }} className={currentPage === page && styles.selectedPage}>{page}</span>
                    ))
                }
            </div>
            {
                users.map(user => (
                    <div key={user.id}>
                        <div>
                            <div>
                                <NavLink
                                    to={`/profile/${user.id}`}
                                >
                                    <img src={user.photos.small ? user.photos.small : "https://cdn-icons-png.flaticon.com/512/1077/1077114.png"} style={{ width: "100px" }} />
                                </NavLink>
                            </div>
                            <div>
                                <button disabled={props.followingInProgress.some(id => id === user.id)}
                                    onClick={() => {
                                        if (user.followed) {
                                            props.toggleFollowingProgress(true, user.id)
                                            axios.delete(`${apiBaseUrl}/follow/${user.id}`, {
                                                withCredentials: true
                                            }).then(response => {
                                                if (response.data.resultCode === 0) {
                                                    unFollowUser(user.id)
                                                }
                                                props.toggleFollowingProgress(false, user.id)
                                            })
                                        } else {
                                            props.toggleFollowingProgress(true, user.id)
                                            axios.post(`${apiBaseUrl}/follow/${user.id}`, {}, {
                                                withCredentials: true
                                            }).then(response => {
                                                if (response.data.resultCode === 0) {
                                                    followUser(user.id)
                                                }
                                                props.toggleFollowingProgress(false, user.id)
                                            })
                                        }
                                    }}
                                >
                                    {user.followed ? "Отписаться" : "Подписаться"}
                                </button>
                            </div>
                        </div>

                        <div>
                            <span>{user.name}</span>
                            <span>{user.status}</span>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default Users;